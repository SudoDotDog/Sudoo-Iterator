/**
 * @author WMXPY
 * @namespace Iterator
 * @description Fibonacci
 * @override Unit Test
 */

import { expect } from "chai";
import { FibonacciIterator } from "../../src";

describe('Given {FibonacciIterator} class', (): void => {

    it('should be able to generate query', (): void => {

        const iterator: FibonacciIterator = FibonacciIterator.create();

        const query: number[] = [
            iterator.next(),
            iterator.next(),
            iterator.next(),
            iterator.next(),
            iterator.next(),
        ];

        expect(query).to.be.deep.equal([1, 2, 3, 5, 8]);
    });
});
