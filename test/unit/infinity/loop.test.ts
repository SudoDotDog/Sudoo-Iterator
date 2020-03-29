/**
 * @author WMXPY
 * @namespace Infinity
 * @description Loop
 * @override Unit Test
 */

import { expect } from "chai";
import { LoopInfinityIterator } from "../../../src/infinity/loop";

describe('Given {LoopInfinityIterator} class', (): void => {

    it('should be able to construct', (): void => {

        const iterator: LoopInfinityIterator = LoopInfinityIterator.create([]);

        expect(iterator).to.be.instanceOf(LoopInfinityIterator);
    });
});
