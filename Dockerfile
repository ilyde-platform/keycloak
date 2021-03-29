FROM quay.io/keycloak/keycloak:11.0.2

# ADD providers/keycloak-amqp-event-listener-jar-with-dependencies.jar /opt/jboss/keycloak/standalone/deployments/
# ADD providers/access-policies.jar /opt/jboss/keycloak/standalone/deployments/
# ADD configuration/profile.properties /opt/jboss/keycloak/standalone/configuration/profile.properties
# COPY scripts/keycloak-amqp.cli /opt/jboss/startup-scripts/
COPY theme/ /opt/jboss/keycloak/themes/

USER root

# RUN set -x ;\
#    chown jboss:root /opt/jboss/keycloak/standalone/configuration/profile.properties

RUN set -x ;\
    chown jboss:root -R /opt/jboss/keycloak/themes

USER jboss

ADD IlydeRealm.json /tmp/IlydeRealm.json

