/**
 * @author WMXPY
 * @namespace Iterator
 * @description Step
 * @override Unit Test
 */

import { expect } from "chai";
import { StepIterator } from "../../../src";

describe('Given {StepIterator} class', (): void => {

    it('should be able to construct', (): void => {

        const iterator: StepIterator = StepIterator.create();

        const query: number[] = [
            iterator.next(),
            iterator.next(),
            iterator.next(),
        ];

        expect(query).to.be.deep.equal([0, 1, 2]);
    });

    it('should be able to get length', (): void => {

        const iterator: StepIterator = StepIterator.create();

        expect(iterator).to.be.lengthOf(Infinity);
    });

    it('should be able to increase count', (): void => {

        const iterator: StepIterator = StepIterator.create();

        const query: number[] = [
            iterator.next(),
            iterator.next(),
            iterator.next(),
        ];

        expect(query).to.be.deep.equal([0, 1, 2]);
        expect(iterator.count).to.be.equal(3);
    });

    it('should be able to increase count with skip zero', (): void => {

        const iterator: StepIterator = StepIterator.create();
        iterator.skipZero();

        const query: number[] = [
            iterator.next(),
            iterator.next(),
            iterator.next(),
        ];

        expect(query).to.be.deep.equal([1, 2, 3]);
        expect(iterator.count).to.be.equal(3);
    });

    it('should be able to reset iterator', (): void => {

        const iterator: StepIterator = StepIterator.create();

        const query: number[] = [
            iterator.next(),
            iterator.next(),
            iterator.next(),
        ];

        expect(query).to.be.deep.equal([0, 1, 2]);
        expect(iterator.count).to.be.equal(3);

        iterator.reset();

        expect(iterator.count).to.be.equal(0);

        query.push(
            iterator.next(),
            iterator.next(),
            iterator.next(),
        );

        expect(query).to.be.deep.equal([0, 1, 2, 0, 1, 2]);
        expect(iterator.count).to.be.equal(3);
    });

    it('should be able to batch fetch elements', (): void => {

        const iterator: StepIterator = StepIterator.create();

        const query: number[] = iterator.batch(5);

        expect(query).to.be.deep.equal([0, 1, 2, 3, 4]);
        expect(iterator.count).to.be.equal(5);
    });

    it('should be able to loop with iterators', (): void => {

        const iterator: StepIterator = StepIterator.create();

        const query: number[] = [];
        let count = 0;
        for (const next of iterator) {

            if (count >= 5) {
                break;
            }

            count++;
            query.push(next);
        }

        console.log(iterator.peek());

        console.log(query);
        expect(query).to.be.deep.equal([0, 1, 2, 3, 4]);
        console.log(count);
        expect(count).to.be.equal(5);
        console.log(iterator.count);
        expect(iterator.count).to.be.equal(5);
    });
});
