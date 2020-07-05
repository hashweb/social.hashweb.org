FROM docker.pkg.github.com/bratteng/docker/nginx:mainline

COPY ./nginx.conf.template /etc/nginx/conf.d/default.conf.template

COPY entrypoint.sh /
ENTRYPOINT ["/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
