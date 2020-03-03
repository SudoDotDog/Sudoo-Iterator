/**
 * @author WMXPY
 * @namespace Iterator
 * @description Step
 * @override Unit Test
 */

import { expect } from "chai";
import { StepIterator } from "../../../src/iterator/step";

describe('Given {StepIterator} class', (): void => {

    it('should be able to construct', (): void => {

        const iterator: StepIterator = StepIterator.create();

        const query: number[] = [
            iterator.next(),
            iterator.next(),
            iterator.next(),
        ];

        expect(query).to.be.deep.equal([0, 1, 2]);
    });
});
