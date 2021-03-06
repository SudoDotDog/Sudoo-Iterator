/**
 * @author WMXPY
 * @namespace Number
 * @description Step
 */

import { BaseIterator } from "../base";
import { IIterator } from "../declare";

export class StepIterator extends BaseIterator<number> implements IIterator<number> {

    public static create(step: number = 1, startFrom: number = 0): StepIterator {

        return new StepIterator(step, startFrom);
    }

    private readonly _startFrom: number;
    private readonly _step: number;

    private _next: number;

    private constructor(step: number, startFrom: number) {

        super();

        this._step = step;
        this._next = startFrom;

        this._startFrom = startFrom;
    }

    public get length(): number {
        return Infinity;
    }
    public get nextLeft(): number {
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

        super.next();

        const temp: number = this._next;
        this._next = this._next + this._step;
        return temp;
    }

    public batch(count: number): number[] {

        return super.batch(count).map(() => this.next());
    }

    public reset(): this {

        super.reset();

        this._next = this._startFrom;
        return this;
    }

    public *[Symbol.iterator](): Iterator<number> {

        while (this.hasNext()) {
            yield this.peek();
            this.next();
        }
    }
}
