FROM node:22-alpine3.20

RUN apk add --no-cache \
    bash \
    vim \
    git \
    fzf \
&& rm -rf /var/cache/apk/*

WORKDIR /app
VOLUME [ "/app" ]

COPY ./docker/dev/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

USER node
EXPOSE 3000
ENTRYPOINT [ "bash", "-c", "/entrypoint.sh" ]
