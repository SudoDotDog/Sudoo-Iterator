/**
 * @author WMXPY
 * @namespace Iterator
 * @description Fibonacci
 */

export class FibonacciIterator {

    public static create(): FibonacciIterator {

        return new FibonacciIterator();
    }

    private _previous: number;
    private _current: number;

    private constructor() {

        this._previous = 0;
        this._current = 1;
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

    public next(): number {

        const temp: number = this._previous;
        this._previous = this._current + this._previous;
        this._current = temp;
        return temp;
    }

    public reset(): this {

        this._previous = 0;
        this._current = 1;
        return this;
    }
}
