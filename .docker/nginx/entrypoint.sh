#!/usr/bin/env sh
set -eu

envsubst '${STATELESS_ACME_CHALLENGE}' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf

exec "$@"
