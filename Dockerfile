FROM ubuntu:xenial-20191108

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
      curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
      echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
      \
      curl -sL https://deb.nodesource.com/setup_14.x | bash - && \
      apt-get update && \
      apt-get install --yes --no-install-recommends \
      yarn \
      nodejs=14.* && \
    rm -rf /var/lib/apt/lists/*

RUN set -ex && \
    npm install pm2 -g && \
    yarn install --frozen-lockfile && \
    npm run build && \
    npm run tsc && \
    rm -rf ./node_modules

ENTRYPOINT ["pm2-runtime", "/var/www/pm2.config.js"]

