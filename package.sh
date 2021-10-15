#!/usr/bin/env bash
set -e

docker login -u "$DOCKER_HUB_LOGIN" -p "$DOCKER_HUB_TOKEN"
docker build . --file Dockerfile --tag repsy/repsy-landing:"$1"
docker push repsy/repsy-landing:"$1"

if [[ $GITHUB_REF = "refs/heads/main" ]];
then
  docker build . --file Dockerfile --tag repsy/repsy-landing:latest
  docker push repsy/repsy-landing:latest
fi
