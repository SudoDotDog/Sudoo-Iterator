/**
 * @author WMXPY
 * @namespace Custom
 * @description Custom
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { CustomIterator } from "../../../src";

describe('Given {CustomIterator} class', (): void => {

    const chance: Chance.Chance = new Chance('iterator-custom-custom');

    it('should be able to calculate length', (): void => {

        const elements: number[] = [
            chance.natural(),
            chance.natural(),
            chance.natural(),
            chance.natural(),
        ];
        const iterator: CustomIterator<number> = CustomIterator.create(elements);

        expect(iterator).to.be.lengthOf(4);
        expect(iterator.hasNext()).to.be.true;
        expect(iterator.count).to.be.equal(0);
        expect(iterator.nextLeft).to.be.equal(4);
    });

    it('should be able to get simple', (): void => {

        const elements: number[] = [chance.natural(), chance.natural()];
        const iterator: CustomIterator<number> = CustomIterator.create(elements);

        const query: number[] = [
            iterator.next(),
            iterator.next(),
        ];

        expect(query).to.be.deep.equal(elements);
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
        expect(iterator.count).to.be.equal(3);
    });

    it('should be able to batch fetch elements', (): void => {

        const elements: number[] = [chance.natural(), chance.natural()];
        const iterator: CustomIterator<number> = CustomIterator.create(elements);

        const query: number[] = iterator.batch(3);

        expect(query).to.be.deep.equal([...elements]);
        expect(iterator.count).to.be.equal(2);
    });

    it('should be able to batch fetch elements - fill empty with undefined', (): void => {

        const elements: number[] = [chance.natural(), chance.natural()];
        const iterator: CustomIterator<number> = CustomIterator.create(elements);

        const query: number[] = iterator.batch(3, true);

        expect(query).to.be.deep.equal([...elements, undefined]);
        expect(iterator.count).to.be.equal(3);
    });

    it('should be able to loop with iterators', (): void => {

        const elements: number[] = [chance.natural(), chance.natural(), chance.natural(), chance.natural()];
        const iterator: CustomIterator<number> = CustomIterator.create(elements);

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
        expect(iterator.nextLeft).to.be.equal(1);
    });

    it('should be able to loop with iterators - infinity', (): void => {

        const elements: number[] = [chance.natural(), chance.natural(), chance.natural(), chance.natural()];
        const iterator: CustomIterator<number> = CustomIterator.create(elements);

        const query: number[] = [];
        for (const next of iterator) {

            query.push(next);
        }

        expect(query).to.be.deep.equal(elements);
        expect(iterator.count).to.be.equal(4);
        expect(iterator.nextLeft).to.be.equal(0);
        expect(iterator.hasNext()).to.be.false;
    });
});
