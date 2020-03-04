/**
 * @author WMXPY
 * @namespace Iterator
 * @description Custom
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { CustomIterator } from "../../../src";

describe('Given {CustomIterator} class', (): void => {

    const chance: Chance.Chance = new Chance('iterator-custom');

    it('should be able to construct and get simple', (): void => {

        const elements: number[] = [chance.natural(), chance.natural()];
        const iterator: CustomIterator<number> = CustomIterator.create(elements);

        const query: number[] = [
            iterator.next(),
            iterator.next(),
        ];

        expect(query).to.be.deep.equal(elements);
    });

    it('should be able to construct and get undefined when exceed limit', (): void => {

        const elements: number[] = [chance.natural(), chance.natural()];
        const iterator: CustomIterator<number> = CustomIterator.create(elements);

        const query: number[] = [
            iterator.next(),
            iterator.next(),
            iterator.next(),
        ];

        expect(query).to.be.deep.equal([...elements, undefined]);
    });
});
