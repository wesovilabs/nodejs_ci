NODE_VERSION=12-buster

run:
	npm run start

format:
	yarn prettier --write index.js

lint:
	yarn lint

test:
	yarn test

testInt:
	docker-compose -f scripts/docker-compose/docker-compose.yml build; \
	docker-compose -f scripts/docker-compose/docker-compose.yml run --name testInt --rm test


docker-run:
	docker-compose -f scripts/docker-compose/docker-compose.yml build; \
	docker-compose -f scripts/docker-compose/docker-compose.yml run -p 8080:8080 --name nodejs_ci --rm nodejs_ci

docker-stop:
	docker-compose -f scripts/docker-compose/docker-compose.yml down -v

docker-%:
	docker run --rm --workdir /opt/app -v $(CURDIR):/app node:$(NODE_VERSION)
