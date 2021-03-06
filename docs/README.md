# Sudoo-Iterator

[![Continuous Integration](https://github.com/SudoDotDog/Sudoo-Iterator/actions/workflows/ci.yml/badge.svg)](https://github.com/SudoDotDog/Sudoo-Iterator/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/SudoDotDog/Sudoo-Iterator/branch/master/graph/badge.svg)](https://codecov.io/gh/SudoDotDog/Sudoo-Iterator)
[![npm version](https://badge.fury.io/js/%40sudoo%2Fiterator.svg)](https://www.npmjs.com/package/@sudoo/iterator)
[![downloads](https://img.shields.io/npm/dm/@sudoo/iterator.svg)](https://www.npmjs.com/package/@sudoo/iterator)

Iterator is a package that provide iteratable instances for JavaScript / TypeScript.

## Install

```sh
yarn add @sudoo/iterator
# Or
npm install @sudoo/iterator --save
```

## Usage

All class exported from this package implements the `Iterable` interface. So you can use it as a iterable object.

### Use with Loop

```ts
const iterable = SomeIterator.create() // Iterable instance
for(const each of iterable) {
    // Do Something
}
```

### Use with Spread

```ts
const iterable = SomeIterator.create() // Iterable instance
const values = [...iterable];
```

## Modules

> This section is currently work in progress.

-   Numeric
    -   [Fibonacci](./number/fibonacci.md)
