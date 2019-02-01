#!/bin/bash

$(aws ecr get-login --no-include-email --region eu-west-1)

docker build -t smilo/wallet:testnet .
docker tag smilo/wallet:testnet 462619610638.dkr.ecr.eu-west-1.amazonaws.com/smilo/wallet:testnet
docker push 462619610638.dkr.ecr.eu-west-1.amazonaws.com/smilo/wallet:testnet