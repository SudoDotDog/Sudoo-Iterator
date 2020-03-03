/**
 * @author WMXPY
 * @namespace Iterator
 * @description Step
 */

import { IIterator } from "../declare";

export class StepIterator implements IIterator<number> {

    public static create(step: number = 1, startFrom: number = 0): StepIterator {

        return new StepIterator(step, startFrom);
    }

    private _count: number;

    private readonly _startFrom: number;
    private readonly _step: number;

    private _next: number;

    private constructor(step: number, startFrom: number) {

        this._count = 0;

        this._step = step;
        this._next = startFrom;

        this._startFrom = startFrom;
    }

    public get count(): number {
        return this._count;
    }
    public get length(): number {
        return Infinity;
    }

    public skipZero(): this {

        if (this._next === 0) {
            this._next = this._next + this._step;
        }
        return this;
    }

    public peek(): number {

        return this._next;
    }

    public hasNext(): boolean {

        return true;
    }

    public next(): number {

        this._count++;

        const temp: number = this._next;
        this._next = this._next + this._step;
        return temp;
    }

    public reset(): this {

        this._count = 0;

        this._next = this._startFrom;
        return this;
    }
}
