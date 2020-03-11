/**
 * @author WMXPY
 * @namespace Custom
 * @description Infinity Functional
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { InfinityFunctionalIterator } from "../../../src";

describe('Given {InfinityFunctionalIterator} class', (): void => {

    const chance: Chance.Chance = new Chance('iterator-custom-infinity-functional');

    it('should be able to construct', (): void => {

        const iterator: InfinityFunctionalIterator<number> = InfinityFunctionalIterator.create((index: number) => chance.natural());

        expect(iterator).to.be.instanceOf(InfinityFunctionalIterator);
    });

    it('should be able to construct', (): void => {

        const elements: number[] = [chance.natural(), chance.natural(), chance.natural()];
        const iterator: InfinityFunctionalIterator<number> = InfinityFunctionalIterator.create((index: number) => elements[index]);

        const query: number[] = [
            iterator.next(),
            iterator.next(),
        ];

        expect(iterator).to.be.lengthOf(Infinity);
        // tslint:disable-next-line: no-unused-expression
        expect(iterator.hasNext()).to.be.true;
        expect(iterator.count).to.be.equal(2);
        expect(iterator.nextLeft).to.be.equal(Infinity);

        expect(query).to.be.deep.equal([
            elements[0],
            elements[1],
        ]);
    });
});
