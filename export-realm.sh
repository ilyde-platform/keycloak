#!/bin/bash

kubectl exec --stdin --tty $(kubectl get pods --selector "app.kubernetes.io/name=ilyde-keycloak" --output=name) -- /opt/jboss/keycloak/bin/standalone.sh \
    -Djboss.socket.binding.port-offset=100 -Dkeycloak.migration.action=export \
    -Dkeycloak.migration.provider=singleFile \
    -Dkeycloak.migration.realmName=IlydeRealm \
    -Dkeycloak.migration.usersExportStrategy=REALM_FILE \
    -Dkeycloak.migration.file=/tmp/IlydeRealm.json

# kill after loading and runnning to make sure that it already export realm
word=$(kubectl get pods --selector "app.kubernetes.io/name=ilyde-keycloak" --output=name)
pod=`echo $word | cut -d "/" -f 2`
kubectl cp $pod:/tmp/IlydeRealm.json $(pwd)/IlydeRealm.json