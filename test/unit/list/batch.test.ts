/**
 * @author WMXPY
 * @namespace List
 * @description Batch
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { BatchIterator } from "../../../src";

describe('Given {BatchIterator} class', (): void => {

    const chance: Chance.Chance = new Chance('iterator-list-batch');

    it('should be able to calculate length', (): void => {

        const elements: number[] = [
            chance.natural(),
            chance.natural(),
            chance.natural(),
            chance.natural(),
        ];
        const iterator: BatchIterator<number> = BatchIterator.create(elements, 2);

        expect(iterator).to.be.lengthOf(2);
        expect(iterator.hasNext()).to.be.true;
        expect(iterator.count).to.be.equal(0);
        expect(iterator.nextLeft).to.be.equal(2);
    });
});
