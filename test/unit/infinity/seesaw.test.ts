/**
 * @author WMXPY
 * @namespace Infinity
 * @description Seesaw
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { SeesawInfinityIterator } from "../../../src";

describe('Given {SeesawInfinityIterator} class', (): void => {

    const chance: Chance.Chance = new Chance('iterator-infinity-seesaw');

    it('should be able to construct', (): void => {

        const iterator: SeesawInfinityIterator = SeesawInfinityIterator.create([]);

        expect(iterator).to.be.instanceOf(SeesawInfinityIterator);
    });

    it('should be able to get elements', (): void => {

        const elements: number[] = [
            chance.natural(),
            chance.natural(),
            chance.natural(),
        ];
        const iterator: SeesawInfinityIterator = SeesawInfinityIterator.create(elements);

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

    it('should be able to get looped elements', (): void => {

        const elements: number[] = [
            chance.natural(),
            chance.natural(),
            chance.natural(),
        ];
        const iterator: SeesawInfinityIterator = SeesawInfinityIterator.create(elements);

        expect(iterator.peek()).to.be.equal(elements[0]);
        const query: number[] = [
            iterator.next(),
            iterator.next(),
            iterator.next(),
            iterator.next(),
            iterator.next(),
            iterator.next(),
        ];

        expect(query).to.be.deep.equal([
            elements[0],
            elements[1],
            elements[2],
            elements[1],
            elements[0],
            elements[1],
        ]);
        expect(iterator.peek()).to.be.equal(elements[2]);
    });
});
