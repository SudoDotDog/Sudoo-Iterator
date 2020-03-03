/**
 * @author WMXPY
 * @namespace Iterator
 * @description Step
 */

import { IIterator } from "../declare";

export class StepIterator implements IIterator<number> {

    public static create(step: number, startFrom: number = 0): StepIterator {

        return new StepIterator(step, startFrom);
    }

    private readonly _startFrom: number;
    private readonly _step: number;

    private _next: number;

    private constructor(step: number, startFrom: number) {

        this._step = step;
        this._next = startFrom;

        this._startFrom = startFrom;
    }

    public peek(): number {

        return this._next;
    }

    public hasNext(): boolean {

        return true;
    }

    public next(): number {

        const temp: number = this._next;
        this._next = this._next + this._step;
        return temp;
    }

    public reset(): this {

        this._next = this._startFrom;
        return this;
    }
}
