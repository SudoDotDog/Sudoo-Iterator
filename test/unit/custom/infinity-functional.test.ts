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

        const iterator: InfinityFunctionalIterator<number> = InfinityFunctionalIterator.create(() => chance.natural());

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
        expect(iterator.hasNext()).to.be.true;
        expect(iterator.count).to.be.equal(2);
        expect(iterator.nextLeft).to.be.equal(Infinity);

        expect(query).to.be.deep.equal([
            elements[0],
            elements[1],
        ]);
    });

    it('should be able to batch fetch elements', (): void => {

        const elements: number[] = [chance.natural(), chance.natural(), chance.natural(), chance.natural()];
        const iterator: InfinityFunctionalIterator<number> = InfinityFunctionalIterator.create((index: number) => elements[index]);

        const query: number[] = iterator.batch(3);

        expect(query).to.be.deep.equal([elements[0], elements[1], elements[2]]);
        expect(iterator.count).to.be.equal(3);
    });

    it('should be able to loop with iterators', (): void => {

        const elements: number[] = [chance.natural(), chance.natural(), chance.natural(), chance.natural()];
        const iterator: InfinityFunctionalIterator<number> = InfinityFunctionalIterator.create((index: number) => elements[index]);

        const query: number[] = [];
        let count = 0;
        for (const next of iterator) {

            if (count >= 3) {
                break;
            }

            count++;
            query.push(next);
        }

        expect(query).to.be.deep.equal([elements[0], elements[1], elements[2]]);
        expect(count).to.be.equal(3);
        expect(iterator.count).to.be.equal(3);
        expect(iterator.nextLeft).to.be.equal(Infinity);
    });
});
