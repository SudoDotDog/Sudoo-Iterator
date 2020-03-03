/**
 * @author WMXPY
 * @namespace Iterator
 * @description Fibonacci
 */

import { BaseIterator } from "../base";
import { IIterator } from "../declare";

export class FibonacciIterator extends BaseIterator<number> implements IIterator<number> {

    public static create(): FibonacciIterator {

        return new FibonacciIterator();
    }

    private _previous: number;
    private _current: number;

    private constructor() {

        super();

        this._previous = 0;
        this._current = 1;
    }

    public get length(): number {
        return Infinity;
    }

    public peek(): number {

        return this._previous;
    }

    public skipZero(): this {

        if (this._current === 1 && this._previous === 0) {
            this._current = 0;
            this._previous = 1;
        }
        return this;
    }

    public skipStatic(): this {

        if (this._current === 1 && this._previous === 0) {
            this._current = 1;
            this._previous = 1;
        }
        return this;
    }

    public hasNext(): boolean {

        return true;
    }

    public next(): number {

        super.next();

        const temp: number = this._previous;
        this._previous = this._current + this._previous;
        this._current = temp;
        return temp;
    }

    public reset(): this {

        super.reset();

        this._previous = 0;
        this._current = 1;
        return this;
    }
}
