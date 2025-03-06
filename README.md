# next-url-shortener
A URL shortener using [Next.js](https://nextjs.org/) 14 server actions, [Postgres](https://www.postgresql.org/) or [SurrealDB](https://surrealdb.com/), [Shadcn/ui](http://ui.shadcn.com/) and [Tailwind](https://tailwindcss.com/).

# Install
### Copy one
- [docker-compose-postgres.yml](./docker-compose-postgres.yml)
- [docker-compose-surrealdb.yml](./docker-compose-surrealdb.yml)

Create data folder next to docker-compose.yml and .env, and set the data type in .env
```
├── data
│	├── postgres
│   └── surrealdb
├── Makefile
├── docker-compose-postgres.yml
└── .env
```
### Then run:
- `make up-postgres`
- `make up-surrealdb`

### Then exit with:
- `make down-postgres`
- `make down-surrealdb`

## Example .env
```bash
# postgres or surrealdb
DB_TYPE=postgres

# For surrealdb: If using docker surrealdb:8000, if not use 0.0.0.0:8000
# For postgres: If using docker postgres:5432, if not use 0.0.0.0:5432
DB_URL_PORT=postgres:5432

# postgres
POSTGRES_USER=root
POSTGRES_PASSWORD=root
POSTGRES_DB=url

# surrealdb
DB_USER=root
DB_PASSWORD=root

# Enter your website url here
# OVERRIDE_URL=s.nexv.dev
```

# License
All code in this repository is dual-licensed under either [License-MIT](./LICENSE-MIT) or [LICENSE-APACHE](./LICENSE-Apache) at your option. This means you can select the license you prefer. [Why dual license](https://github.com/bevyengine/bevy/issues/2373)
