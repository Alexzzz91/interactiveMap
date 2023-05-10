## Как запустить?

1. Установка Docker
  - Для пользователей **Mac OS**
    1. Скачать и установить Docker [по ссылке](https://hub.docker.com/editions/community/docker-ce-desktop-mac)
  - Для пользователей **Ubuntu**
    1. Установить Docker офф. инструкция [по ссылке](https://docs.docker.com/install/linux/docker-ce/ubuntu/) **(добавить пользователя [в группу docker](https://docs.docker.com/install/linux/linux-postinstall/))**
    2. Установить docker-compose командой
      ``sudo apt install docker-compose``
2. **Создать сеть** для приложения используя команду 
   `` docker network create ivimap-network ``
3. **Запустить командой**
   `` docker-compose up -d ``
   
#### [Открыть localhost:1337](http://localhost:1337/)

## Установить Parcel
  Установите Parcel с помощью Yarn или npm:

  Yarn:

  `` yarn global add parcel-bundler``
  
  npm:

  `` npm install -g parcel-bundler``

## Для работы с клиентской частью нужно выполнить команду
`` yarn start && yarn client:dev``

#### [Открыть клиентскую часть localhost:8021](http://localhost:8021/)


#### [Открыть mongo-express для работы с db в WEB интерфейсе ](http://localhost:8881/)


## Настройки чтобы локально подключиться к бд


``   mongo-express:
    image: mongo-express
    container_name: mongo-express
    hostname: mongo-express
    ports:
    - 8089:8089
    - 8881:8081
    networks:
    - interactivemap-network
    depends_on:
    - mongo
    environment:
      ME_CONFIG_MONGODB_SERVER: 10.101.161.245
      ME_CONFIG_MONGODB_ADMINUSERNAME: root
      ME_CONFIG_MONGODB_ADMINPASSWORD: example
``
