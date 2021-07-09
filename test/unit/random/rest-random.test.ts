/**
 * @author WMXPY
 * @namespace Random
 * @description Rest Random
 * @override Unit Test
 */

import { expect } from "chai";
import { RestRandomIterator } from "../../../src";

describe('Given {RestRandomIterator} class', (): void => {

    it('should be able to construct', (): void => {

        const iterator: RestRandomIterator = RestRandomIterator.create(3, 10);

        expect(iterator).to.be.instanceOf(RestRandomIterator);
    });

    it('should be able to sum total to the total amount', (): void => {

        const iterator: RestRandomIterator = RestRandomIterator.create(3, 10);

        const query: number[] = [
            iterator.next(),
            iterator.next(),
            iterator.next(),
        ];

        const sum: number = query[0] + query[1] + query[2];
        expect(sum.toFixed(8)).to.be.equal((10).toFixed(8));

        expect(query).to.be.lengthOf(3);
    });

    it('should be able to get length', (): void => {

        const iterator: RestRandomIterator = RestRandomIterator.create(3, 10);

        expect(iterator).to.be.lengthOf(3);
        expect(iterator.nextLeft).to.be.equal(3);
    });

    it('should be able to get count', (): void => {

        const iterator: RestRandomIterator = RestRandomIterator.create(3, 10);

        const query: number[] = [
            iterator.next(),
            iterator.next(),
            iterator.next(),
        ];

        expect(iterator).to.be.lengthOf(3);
        expect(iterator.nextLeft).to.be.equal(0);
        expect(iterator.count).to.be.equal(3);
        expect(query).to.be.lengthOf(3);
    });

    it('should be able to reset count', (): void => {

        const iterator: RestRandomIterator = RestRandomIterator.create(3, 10);

        iterator.next();
        iterator.next();
        iterator.next();

        expect(iterator.count).to.be.equal(3);

        iterator.reset();

        iterator.next();
        iterator.next();
        iterator.next();

        expect(iterator).to.be.lengthOf(3);
        expect(iterator.nextLeft).to.be.equal(0);
        expect(iterator.count).to.be.equal(3);
    });

    it('should be able to get by batches', (): void => {

        const iterator: RestRandomIterator = RestRandomIterator.create(3, 10);

        const query: number[] = iterator.batch(3);

        expect(iterator).to.be.lengthOf(3);
        expect(iterator.nextLeft).to.be.equal(0);
        expect(iterator.count).to.be.equal(3);
        expect(query).to.be.lengthOf(3);
    });

    it('should be able to overflow to 0', (): void => {

        const iterator: RestRandomIterator = RestRandomIterator.create(3, 10);

        const query: number[] = [
            iterator.next(),
            iterator.next(),
            iterator.next(),
            iterator.next(),
        ];

        expect(iterator).to.be.lengthOf(3);
        expect(iterator.nextLeft).to.be.equal(0);
        expect(iterator.count).to.be.equal(4);

        const sum: number = query[0] + query[1] + query[2] + query[3];
        expect(sum.toFixed(8)).to.be.equal((10).toFixed(8));

        expect(query).to.be.lengthOf(4);
        expect(query[3]).to.be.equal(0);
    });

    it('should be able to loop with iterators', (): void => {

        const iterator: RestRandomIterator = RestRandomIterator.create(5, 10);

        const query: number[] = [];
        let count = 0;
        for (const next of iterator) {

            if (count >= 3) {
                break;
            }

            count++;
            query.push(next);
        }

        expect(count).to.be.equal(3);
        expect(query).to.be.lengthOf(3);
        expect(iterator.count).to.be.equal(3);
        expect(iterator.nextLeft).to.be.equal(2);

        const rest1: number = iterator.next();
        const rest2: number = iterator.next();

        const sum: number = query[0] + query[1] + query[2] + rest1 + rest2;

        expect(sum.toFixed(8)).to.be.equal((10).toFixed(8));
        expect(iterator.count).to.be.equal(5);
        expect(iterator.nextLeft).to.be.equal(0);
        expect(iterator.hasNext()).to.be.false;

        const restEmpty: number = iterator.next();

        expect(iterator.count).to.be.equal(6);
        expect(restEmpty).to.be.equal(0);
    });

    it('should be able to loop with iterators - infinity', (): void => {

        const iterator: RestRandomIterator = RestRandomIterator.create(3, 10);

        const query: number[] = [];
        for (const next of iterator) {

            query.push(next);
        }

        const sum: number = query[0] + query[1] + query[2];
        expect(sum.toFixed(8)).to.be.equal((10).toFixed(8));

        expect(query).to.be.lengthOf(3);
        expect(iterator.count).to.be.equal(3);
        expect(iterator.nextLeft).to.be.equal(0);
        expect(iterator.hasNext()).to.be.false;
    });
});
