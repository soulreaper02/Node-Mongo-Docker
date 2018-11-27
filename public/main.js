const form = document.getElementById("vote-form");
// form submit event.
form.addEventListener("submit", e => {
  const choice = document.querySelector("input[name=os]:checked").value;
  const data = { os: choice };
  console.log(data);
  e.preventDefault();

  fetch("http://localhost:3000/poll", {
    method: "post",
    body: JSON.stringify(data),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  })
    .then(res => res.json())
    .then(data => console.log(data));
});

fetch("http://localhost:3000/poll")
.then(res => res.json())
.then(data => {
  const votes = data.votes;
  const totalVotes = votes.length;
  const voteCounts = votes.reduce(
    (acc, vote) => ((acc[vote.os] = (acc[vote.os] || 0) + parseInt(vote.points)),acc), {}
  );

  let dataPoints = [
    { label: "Windows", y: voteCounts.Windows },
    { label: "MacOS", y: voteCounts.MacOS },
    { label: "Linux", y: voteCounts.Linux },
    { label: "Others", y: voteCounts.Other }
  ];

  const chartContainer = document.querySelector("#chartContainer");

  if (chartContainer) {
    const chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      theme: "theme1",
      title: {
        text: `Total votes: ${totalVotes}`
      },
      data: [
        {
          type: "column",
          dataPoints: dataPoints
        }
      ]
    });
    chart.render();
    Pusher.logToConsole = true;

    var pusher = new Pusher("4b70edeb6c9f5cda0f72", {
      cluster: "ap2",
      forceTLS: true
    });

    var channel = pusher.subscribe("os-poll");
    channel.bind("os-vote", function(data) {
      dataPoints = dataPoints.map(x => {
        if (x.label == data.os) {
          x.y += data.points;
          return x;
        } else {
          return x;
        }
      });
      chart.render();
    });
  }
});
