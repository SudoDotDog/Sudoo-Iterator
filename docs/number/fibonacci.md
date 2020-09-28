# Fibonacci Iterator

Fibonacci iterator provide an iteratable instance that generate a fibonacci sequence.

## What is Fibonacci sequence

See [Wikipedia - Fibonacci number](https://wikipedia.org/wiki/Fibonacci_number).

## Usage with loop

Note: this iterator is an infinity iterator, add a break point, or it will go infinity loop.

```ts
import { FibonacciIterator } from "@sudoo/iterator";

const iterator: FibonacciIterator = FibonacciIterator.create();

const query: number[] = [];
for (const next of iterator) {
    if (count >= 5) {
        break;
    }
    query.push(next);
}
query // [1, 2, 3, 5, 8]
```
