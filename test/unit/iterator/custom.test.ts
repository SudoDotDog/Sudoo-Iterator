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

    it('should be able to calculate length', (): void => {

        const elements: number[] = [
            chance.natural(),
            chance.natural(),
            chance.natural(),
            chance.natural(),
        ];
        const iterator: CustomIterator<number> = CustomIterator.create(elements);

        const query: number[] = [
            iterator.next(),
            iterator.next(),
        ];

        expect(iterator).to.be.lengthOf(4);
        // tslint:disable-next-line: no-unused-expression
        expect(iterator.hasNext()).to.be.true;
        expect(iterator.count).to.be.equal(2);
        expect(iterator.nextLeft).to.be.equal(2);
    });

    it('should be able to get simple', (): void => {

        const elements: number[] = [chance.natural(), chance.natural()];
        const iterator: CustomIterator<number> = CustomIterator.create(elements);

        const query: number[] = [
            iterator.next(),
            iterator.next(),
        ];

        expect(query).to.be.deep.equal(elements);
        // tslint:disable-next-line: no-unused-expression
        expect(iterator.hasNext()).to.be.false;
        expect(iterator.count).to.be.equal(2);
        expect(iterator.nextLeft).to.be.equal(0);
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
