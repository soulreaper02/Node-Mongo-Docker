# Docker Node MongoDB Example

> Simple example of a dockerized Node/Mongo app also features Pusher API for real-time polling without refreshing the page.

## Quick Start

Node setup
```bash
#Install NPM modules by 
npm install
```
Docker

```bash
# Run in Docker
docker-compose up
# use -d flag to run in background and -it if you want to run in interactive mode (foreground)

# Tear down
docker-compose down

# To be able to edit files, add volume to compose file [Take care of the indentation]
volumes: ['./:/usr/src/app']

# To re-build
docker-compose build
```

Deployment [Google cloud platform][debian]
```bash
#Install docker on your compute instance. 
sudo apt-get update

sudo apt-get install apt-transport-https ca-certificates curl gnupg2 software-properties-common

#Add Docker’s official GPG key

curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -

sudo apt-key fingerprint 0EBFCD88

sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable"

#run apt-update 

sudo apt-get install docker-ce

#Note: you also have to install docker-compose seperatly

sudo curl -L "https://github.com/docker/compose/releases/download/1.23.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

#Apply executable permission 

sudo chmod +x /usr/local/bin/docker-compose

#Check if succesfully installed

docker-compose --version
```

Git comes pre-installed with the VM. so you can clone the repository, go the the project folder and run
```docker-compose up```



