/**
 * @author WMXPY
 * @namespace Iterator
 * @description Fibonacci
 */

export class FibonacciIterator {

    public static create(): FibonacciIterator {

        return new FibonacciIterator();
    }

    private _current: number;
    private _previous: number;

    private constructor() {

        this._current = 1;
        this._previous = 0;
    }

    public next(): number {

        this._previous = this._current;
        const next: number = this._current;
        this._current = this._current + this._previous;
        return next;
    }

    public reset(): this {

        this._current = 1;
        this._previous = 0;
        return this;
    }
}
