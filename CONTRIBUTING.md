# Contributing code

# Dev Install
## Docker Compose
### Copy one
- [docker-compose-postgres.dev.yml](./docker-compose-postgres.dev.yml)
- [docker-compose-surrealdb.dev.yml](./docker-compose-surrealdb.dev.yml)
#### Then run:
- `make up-postgres.dev`
- `make up-surrealdb.dev`

## Dev Containers
Install docker, vscode and the [Dev Containers Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

`git clone`

`Ctrl+Shift+P` **Dev Containers: Open Folder in Container**

`npm run dev`

`nix-shell`

`npx npm-check-updates -u && npm i --package-lock-only`

# License
All code in this repository is dual-licensed under either [License-MIT](./LICENSE-MIT) or [LICENSE-APACHE](./LICENSE-Apache) at your option. This means you can select the license you prefer. [Why dual license](https://github.com/bevyengine/bevy/issues/2373)

# Your contributions
Any contribution intentionally submitted for inclusion in the work by you, as defined in the Apache-2.0 license, shall be dual licensed as above, without any additional terms or conditions.
