FROM ubuntu:24.04

ENV TERM=xterm \
    DEBIAN_FRONTEND=noninteractive

WORKDIR /var/www

COPY --chown=www-data:www-data ./ ./

RUN set -ex && \
    apt-get update && \
    apt-get install --yes \
      curl \
      apt-transport-https \
      ca-certificates \
      vim && \
      \
    rm -rf /var/lib/apt/lists/*

RUN set -ex && \      
      curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
      apt-get install -y nodejs

RUN set -ex && \
    npm install pm2 -g && \
    npm install --global yarn && \
    yarn install --frozen-lockfile && \
    npm run build && \
    npm run tsc && \
    rm -rf ./node_modules

ENTRYPOINT ["pm2-runtime", "/var/www/pm2.config.js"]

