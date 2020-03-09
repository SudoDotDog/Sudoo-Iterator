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

    const chance: Chance.Chance = new Chance('iterator-base');

    it('should be able to construct', (): void => {

        const iterator: BaseIterator<number> = createDebugBaseIterator();

        expect(iterator).to.be.instanceOf(BaseIterator);
    });

    it('should be able to get default values', (): void => {

        const iterator: BaseIterator<number> = createDebugBaseIterator();

        expect(iterator).to.be.lengthOf(0);
        expect(iterator.count).to.be.equal(0);
        expect(iterator.nextLeft).to.be.equal(0);
        expect(iterator.peek()).to.be.equal(undefined);
        // tslint:disable-next-line: no-unused-expression
        expect(iterator.hasNext()).to.be.false;
    });
});
