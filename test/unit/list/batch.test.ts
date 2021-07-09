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

    it('should be able to calculate length - ceil', (): void => {

        const elements: number[] = [
            chance.natural(),
            chance.natural(),
            chance.natural(),
            chance.natural(),
        ];
        const iterator: BatchIterator<number> = BatchIterator.create(elements, 3);

        expect(iterator).to.be.lengthOf(2);
        expect(iterator.hasNext()).to.be.true;
        expect(iterator.count).to.be.equal(0);
        expect(iterator.nextLeft).to.be.equal(2);
    });

    it('should be able to get batch elements', (): void => {

        const elements: number[] = [
            chance.natural(),
            chance.natural(),
            chance.natural(),
            chance.natural(),
        ];
        const iterator: BatchIterator<number> = BatchIterator.create(elements, 3);

        const batches: number[][] = [];
        for (const batch of iterator) {
            batches.push(batch);
        }

        expect(batches).to.be.lengthOf(2);
        expect(batches[0]).to.be.lengthOf(3);
        expect(batches[1]).to.be.lengthOf(1);
    });
});
