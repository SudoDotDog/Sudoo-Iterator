/**
 * @author WMXPY
 * @namespace Number
 * @description Fibonacci
 * @override Unit Test
 */

import { expect } from "chai";
import { FibonacciIterator } from "../../../src";

describe('Given {FibonacciIterator} class', (): void => {

    it('should be able to generate query', (): void => {

        const iterator: FibonacciIterator = FibonacciIterator.create();

        const query: number[] = [
            iterator.next(),
            iterator.next(),
            iterator.next(),
            iterator.next(),
            iterator.next(),
            iterator.next(),
            iterator.next(),
        ];

        expect(query).to.be.deep.equal([0, 1, 1, 2, 3, 5, 8]);
    });

    it('should be able to generate no zero query', (): void => {

        const iterator: FibonacciIterator = FibonacciIterator.create();
        iterator.skipZero();

        const query: number[] = [
            iterator.next(),
            iterator.next(),
            iterator.next(),
            iterator.next(),
            iterator.next(),
            iterator.next(),
        ];

        expect(query).to.be.deep.equal([1, 1, 2, 3, 5, 8]);
    });

    it('should be able to generate one start query', (): void => {

        const iterator: FibonacciIterator = FibonacciIterator.create();
        iterator.skipStatic();

        const query: number[] = [
            iterator.next(),
            iterator.next(),
            iterator.next(),
            iterator.next(),
            iterator.next(),
        ];

        expect(query).to.be.deep.equal([1, 2, 3, 5, 8]);
    });

    it('should be able to get length', (): void => {

        const iterator: FibonacciIterator = FibonacciIterator.create();

        expect(iterator).to.be.lengthOf(Infinity);
    });

    it('should be able to increase count', (): void => {

        const iterator: FibonacciIterator = FibonacciIterator.create();

        const query: number[] = [
            iterator.next(),
            iterator.next(),
        ];

        expect(query).to.be.deep.equal([0, 1]);
        expect(iterator.count).to.be.equal(2);
    });

    it('should be able to reset', (): void => {

        const iterator: FibonacciIterator = FibonacciIterator.create();

        iterator.next();
        iterator.next();

        expect(iterator.peek()).to.be.equal(1);
        expect(iterator.count).to.be.equal(2);

        iterator.reset();

        iterator.next();
        iterator.next();
        iterator.next();

        expect(iterator.peek()).to.be.equal(2);
        expect(iterator.count).to.be.equal(3);
    });

    it('should be able to batch fetch elements', (): void => {

        const iterator: FibonacciIterator = FibonacciIterator.create();

        const query: number[] = iterator.batch(5);

        expect(query).to.be.deep.equal([0, 1, 1, 2, 3]);
        expect(iterator.count).to.be.equal(5);
    });

    it('should be able to loop with iterators', (): void => {

        const iterator: FibonacciIterator = FibonacciIterator.create();
        iterator.skipStatic();

        const query: number[] = [];
        let count = 0;
        for (const next of iterator) {

            if (count >= 5) {
                break;
            }

            count++;
            query.push(next);
        }

        expect(query).to.be.deep.equal([1, 2, 3, 5, 8]);
        expect(count).to.be.equal(5);
        expect(iterator.count).to.be.equal(5);
    });
});
