/**
 * @author WMXPY
 * @namespace Iterator
 * @description Base
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { BaseIterator } from "../../src";

describe('Given {BaseIterator} class', (): void => {

    const chance: Chance.Chance = new Chance('iterator-base');

    it('should be able to construct', (): void => {

        const iterator: BaseIterator<number> = (BaseIterator as any).__createForDebug();

        expect(iterator).to.be.lengthOf(0);
    });
});
