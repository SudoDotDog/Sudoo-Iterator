# Sudoo-Iterator

[![Build Status](https://travis-ci.com/SudoDotDog/Sudoo-Iterator.svg?branch=master)](https://travis-ci.com/SudoDotDog/Sudoo-Iterator)
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

Use case: with loop

```ts
const iterable = [...] // Iterable instance
for(const each of iterable) {
    // Do Something
}
```

## Modules

> This section is currently work in progress.

-   Numeric
    -   [Fibonacci](./number/fibonacci.md)
