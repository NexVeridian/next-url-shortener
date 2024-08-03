COMPOSE_FILES := postgres surrealdb postgres.dev surrealdb.dev

.PHONY: $(addprefix up-,$(COMPOSE_FILES)) $(addprefix down-,$(COMPOSE_FILES))

$(addprefix up-,$(COMPOSE_FILES)):
	make down-$(subst up-,,$@)
	docker compose -f docker-compose-$(subst up-,,$@).yml up --build --pull always -d

$(addprefix down-,$(COMPOSE_FILES)):
	docker compose -f docker-compose-$(subst down-,,$@).yml down --volumes --remove-orphans
	docker network prune -f
