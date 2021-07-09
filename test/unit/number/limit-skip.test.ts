/**
 * @author WMXPY
 * @namespace Number
 * @description Limit Skip
 * @override Unit Test
 */

import { expect } from "chai";
import { LimitSkipBatch, LimitSkipIterator } from "../../../src";

describe('Given {LimitSkipIterator} class', (): void => {

    it('should be able to construct', (): void => {

        const iterator: LimitSkipIterator = LimitSkipIterator.create(10, 3);

        expect(iterator).to.be.instanceOf(LimitSkipIterator);
    });

    it('should be able to get next element', (): void => {

        const iterator: LimitSkipIterator = LimitSkipIterator.create(5, 3);

        expect(iterator.next()).to.be.deep.equal({
            index: 0,
            limit: 3,
            skip: 0,
        } as LimitSkipBatch);
        expect(iterator.next()).to.be.deep.equal({
            index: 1,
            limit: 3,
            skip: 3,
        } as LimitSkipBatch);
        expect(iterator.next()).to.be.deep.equal({
            index: 2,
            limit: 3,
            skip: 5,
        } as LimitSkipBatch);
    });

    it('should be able to get length', (): void => {

        const iterator: LimitSkipIterator = LimitSkipIterator.create(5, 3);

        expect(iterator).to.be.lengthOf(2);
    });

    it('should be able to increase count', (): void => {

        const iterator: LimitSkipIterator = LimitSkipIterator.create(5, 3);

        iterator.next();
        iterator.next();
        iterator.next();

        expect(iterator.count).to.be.equal(3);
    });

    it('should be able to reset iterator', (): void => {

        const iterator: LimitSkipIterator = LimitSkipIterator.create(5, 3);

        iterator.next();
        iterator.next();

        expect(iterator.count).to.be.equal(2);
        expect(iterator.hasNext()).to.be.false;

        iterator.reset();

        expect(iterator.count).to.be.equal(0);
        expect(iterator.hasNext()).to.be.true;
    });

    it('should be able to batch fetch elements', (): void => {

        const iterator: LimitSkipIterator = LimitSkipIterator.create(5, 3);

        iterator.batch(5);

        expect(iterator.count).to.be.equal(5);
    });

    it('should be able to loop with iterators', (): void => {

        const iterator: LimitSkipIterator = LimitSkipIterator.create(5, 3);

        const query: LimitSkipBatch[] = [];
        let count = 0;
        for (const next of iterator) {

            if (count >= 5) {
                break;
            }

            count++;
            query.push(next);
        }

        expect(query).to.be.deep.equal([{
            index: 0,
            limit: 3,
            skip: 0,
        }, {
            index: 1,
            limit: 3,
            skip: 3,
        }]);
        expect(count).to.be.equal(2);
        expect(iterator.count).to.be.equal(2);
    });
});
