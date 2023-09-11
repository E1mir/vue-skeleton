# Vue 3 + TypeScript + Vite

This repository should help get you started developing with Vue 3 and TypeScript in Vite. It includes all necessary things for Vue 3 project. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).
- WebStorm (has a built-in Volar)

## Commands

Firstly you need to install project dependencies & prepare husky by running command

```shell
# Install all dependencies
yarn install

# Prepare husky
yarn prepare
```

### Run project or build
```shell
# To run project locally
yarn dev

# To build project
yarn build
```

### Project linters
```shell
# Run eslint
yarn lint

# Run stylelint
yarn stylelint

# Fix linter issues
yarn lint-fix
```

### Project tests
```shell
# Run project test in command line
yarn test

# Run project test in Vitest-UI
yarn test-ui

# Run test coverage
yarn coverage
```
