/**
 * @author WMXPY
 * @namespace Infinity
 * @description Loop
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { LoopInfinityIterator } from "../../../src/infinity/loop";

describe('Given {LoopInfinityIterator} class', (): void => {

    const chance: Chance.Chance = new Chance('iterator-infinity-loop');

    it('should be able to construct', (): void => {

        const iterator: LoopInfinityIterator = LoopInfinityIterator.create([]);

        expect(iterator).to.be.instanceOf(LoopInfinityIterator);
    });

    it('should be able to get elements', (): void => {

        const elements: number[] = [
            0,
            1,
            2,
        ];
        const iterator: LoopInfinityIterator = LoopInfinityIterator.create(elements);

        expect(iterator.peek()).to.be.equal(elements[0]);
        const query: number[] = [
            iterator.next(),
            iterator.next(),
        ];

        expect(query).to.be.deep.equal([
            elements[0],
            elements[1],
        ]);
        expect(iterator.peek()).to.be.equal(elements[2]);
    });
});
