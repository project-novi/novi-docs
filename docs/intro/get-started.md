# Get Started

Welcome to the Novi documentation! This guide will help you get started with Novi.

::: warning

Novi is in early development and is not yet ready for production use. **Breaking changes are very likely to happen, and the current functionality is really limited**.

If you want to help with the development, please check out [Concepts](/concepts/) and [Contributing](/contributing) page.
:::

## Components

Novi consists of several major components:

- [novi](https://github.com/project-novi/novi): The main Novi server. As a self-contained Rust binary, it connects to a PostgreSQL database and serves the API through a gRPC interface.
- [novi-plugin-host](https://github.com/project-novi/novi-plugin-host): A plugin host (backed by novi-py) that runs plugins (currently only Python plugins). It provides execution environments for plugins and manages their lifecycle.
- [novi-web](https://github.com/project-novi/novi-web): A web interface for Novi. It provides a user-friendly interface to browse and manage objects in the Novi server.
- [novi-py](https://github.com/project-novi/novi-py): A Python client library for Novi. It provides Python APIs to interact with the Novi server.

## Installation

### novi

To build from source:

```bash
git clone https://github.com/project-novi/novi
cd novi
cargo build --release
```

Then create a configuration file named `config.yaml`. Here's a template:

```yaml
database:
  url: 'postgres://localhost:5432/novi'
redis:
  url: 'redis://localhost:6379'
master_key: null  # leave empty to disable master key login

guest_permissions:
- object.get
- object.edit
- object.delete
- object.query
```

Then you can start the server:

```bash
cargo run --release --bin novi-server
```

### novi-plugin-host

novi-plugin-host is managed by [Rye](https://rye.astral.sh/).

```bash
git clone https://github.com/project-novi/novi-plugin-host
cd novi-plugin-host
rye sync
rye run novi-plugin-host
```

### novi-web

::: warning
This is unfinished and only has **Chinese** UI for now.
:::

```bash
git clone https://github.com/project-novi/novi-web
cd novi-web

bun i
bun dev

# or npm
# npm i
# npm run dev
```

### novi-py

novi-py is the Python client library for Novi. As the end user, you're not intended to use it directly.

For developers, novi-py is managed by [Rye](https://rye.astral.sh/). The following steps build novi-py:

```bash
git clone https://github.com/project-novi/novi-py
cd novi-py
rye sync
rye build
```

## Next Steps

- [Concepts](/concepts/): Learn about the concepts behind Novi.
- [Contributing](/contributing): Contribute to Novi development.
