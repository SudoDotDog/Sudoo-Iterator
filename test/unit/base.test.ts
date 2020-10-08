/**
 * @author WMXPY
 * @namespace Iterator
 * @description Base
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { BaseIterator } from "../../src";
import { createDebugBaseIterator } from "../mock/base";

describe('Given {BaseIterator} class', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('iterator-base');

    it('should be able to construct', (): void => {

        const iterator: BaseIterator<number> = createDebugBaseIterator();

        expect(iterator).to.be.instanceOf(BaseIterator);
    });

    it('should be able to get default values', (): void => {

        const iterator: BaseIterator<number> = createDebugBaseIterator();

        expect(iterator).to.be.lengthOf(0);
        expect(iterator.count).to.be.equal(0);
        expect(iterator.remain).to.be.equal(0);
        expect(iterator.peek()).to.be.equal(undefined);
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        expect(iterator.hasNext()).to.be.false;
    });

    it('should be able to throw then call iterator', (): void => {

        const iterator: BaseIterator<number> = createDebugBaseIterator();

        let mapped: boolean = false;
        const exec = (): void => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            for (const _ of iterator) {
                mapped = true;
            }
        };

        expect(exec).to.be.throw("Method not implemented.");
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        expect(mapped).to.be.false;
    });
});
