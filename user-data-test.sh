#!/bin/bash

sudo apt-get update
sudo apt-get install git


sudo apt-get update
sudo apt-get install build-essential libssl-dev libcurl4-gnutls-dev libexpat1-dev gettext unzip

wget https://github.com/git/git/archive/v1.9.2.zip -O git.zip

unzip git.zip
cd git-*

make prefix=/usr/local all
sudo make prefix=/usr/local install
 
git clone https://github.com/git/git.git

make prefix=/usr/local all
sudo make prefix=/usr/local install

git config --global user.name "Your Name"
git config --global user.email "youremail@domain.com"
 
git config --list
 
nano ~/.gitconfig