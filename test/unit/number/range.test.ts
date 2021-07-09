/**
 * @author WMXPY
 * @namespace Number
 * @description Range
 * @override Unit Test
 */

import { expect } from "chai";
import { RangeIterator } from "../../../src";

describe('Given {RangeIterator} class', (): void => {

    it('should be able to construct generate range query', (): void => {

        const iterator: RangeIterator = RangeIterator.create(1, 5);

        const query: number[] = [
            iterator.next(),
            iterator.next(),
            iterator.next(),
            iterator.next(),
            iterator.next(),
        ];

        expect(query).to.be.deep.equal([1, 2, 3, 4, 5]);
    });

    it('should be able to generate extra undefined value', (): void => {

        const iterator: RangeIterator = RangeIterator.create(1, 5);

        const query: number[] = [
            iterator.next(),
            iterator.next(),
            iterator.next(),
            iterator.next(),
            iterator.next(),
            iterator.next(),
        ];

        expect(query).to.be.deep.equal([1, 2, 3, 4, 5, undefined]);
    });
});
