FROM r.bscdn.no/nginx:1.17

COPY ./nginx.conf.template /etc/nginx/conf.d/default.conf.template

COPY entrypoint.sh /
ENTRYPOINT ["/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
