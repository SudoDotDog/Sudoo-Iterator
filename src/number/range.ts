/**
 * @author WMXPY
 * @namespace Number
 * @description Range
 */

import { BaseIterator } from "../base";
import { IIterator } from "../declare";

export class RangeIterator extends BaseIterator<number> implements IIterator<number> {

    public static create(start: number, end: number, step: number = 1): RangeIterator {

        return new RangeIterator(start, end, step);
    }

    private readonly _start: number;
    private readonly _end: number;
    private readonly _step: number;

    private _next: number;

    private constructor(start: number, end: number, step: number) {

        super();

        this._start = start;
        this._end = end;
        this._step = step;

        this._next = this._start;
    }

    public get length(): number {
        return this._end - this._start;
    }
    public get nextLeft(): number {
        return Math.max(this._end - this._next, 0);
    }

    public peek(): number {

        return this._next;
    }

    public hasNext(): boolean {

        return this._next <= this._end;
    }

    public next(): number {

        if (!this.hasNext()) {
            return undefined as any;
        }

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

        this._next = this._start;
        return this;
    }

    public *[Symbol.iterator](): Iterator<number> {

        while (this.hasNext()) {
            yield this.peek();
            this.next();
        }
    }
}
