.PHONY: build up down debug start stop restart logs ps login

build:
	docker-compose build

up:
	docker-compose up -d

watch:
	WATCH_FILES=1 docker-compose up -d

down:
	docker-compose down

debug: down
	WATCH_FILES=1 docker-compose -f docker-compose.yml -f ./docker/debug.yml up -d

start:
	docker-compose start

stop:
	docker-compose stop

restart: down up

logs:
	docker-compose logs --tail=10 -f

ps:
	docker-compose ps

login:
	docker-compose run -w /application ignite-conceitos-node /bin/bash

setup:
	docker-compose run -w /application ignite-conceitos-node bash -c "yarn && yarn dev"
