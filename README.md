# Install
Copy [docker-compose.yml](./docker-compose.yml)

Create data folder next to docker-compose.yml and .env, and set the data type in .env   
```
├── data
│   └── surrealdb
├── docker-compose.yml
└── .env
```

`docker compose up --pull always -d`

## Example .env
``` 
# If not using docker, use 0.0.0.0:8000
DB_URL_PORT=surrealdb:8000
DB_USER=root
DB_PASSWORD=root
```

# License
All code in this repository is dual-licensed under either [License-MIT](./LICENSE-MIT) or [LICENSE-APACHE](./LICENSE-Apache) at your option. This means you can select the license you prefer. [Why dual license](https://github.com/bevyengine/bevy/issues/2373)
