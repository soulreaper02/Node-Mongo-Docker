const Pusher = require('pusher');
const mongoose = require('mongoose');
const Vote = require('../models/Vote');

const pusher = new Pusher({
  appId: '658648',
  key: '4b70edeb6c9f5cda0f72',
  secret: '3994627a4824f9fa0dd6',
  cluster: 'ap2',
  encrypted: true
});

module.exports = app => {

  app.get('/', (req, res) => {
    res.render('views/index.html');
  })

  app.get('/poll', (req,res) => {
    Vote.find().then(votes => res.json({success:true, votes: votes}));
  })

  app.post('/poll', (req, res) => {
    const newVote = {
      os: req.body.os,
      points: 1
    }
    new Vote(newVote).save().then(vote => {
      pusher.trigger('os-poll', 'os-vote', {
        points: parseInt(vote.points),
        os: vote.os
      });
      return res.json({success:true, message:'Thank you for voting'})
    });
  });
};
