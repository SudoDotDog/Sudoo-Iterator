/**
 * @author WMXPY
 * @namespace Iterator
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
        expect(query).to.be.lengthOf(3);
        expect(sum).to.be.equal(10);
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
        expect(query).to.be.lengthOf(4);
        expect(query[3]).to.be.equal(0);
        expect(sum).to.be.equal(10);
    });
});