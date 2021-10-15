#!/usr/bin/env bash
set -e

mkdir -p ~/.kube
echo "$K8S_CONFIG" > ~/.kube/config

echo "
apiVersion: apps/v1
kind: Deployment
metadata:
  name: repsy-landing
  namespace: repsy-landing
spec:
  replicas: 1
  selector:
    matchLabels:
      app: repsy-landing
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxUnavailable: 1
      maxSurge: 1
  template:
    metadata:
      labels:
        app: repsy-landing
    spec:
      containers:
        - name: repsy-landing
          image: repsy/repsy-landing:$1
          imagePullPolicy: Always
          ports:
            - containerPort: 80
" | kubectl apply -f -
