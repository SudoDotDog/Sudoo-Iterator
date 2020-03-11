/**
 * @author WMXPY
 * @namespace Custom
 * @description Infinity Functional
 */

import { BaseIterator } from "../base";
import { IIterator } from "../declare";

export type InfinityFunctionalFunction<T> = (index: number, previous?: T) => T;

export class InfinityFunctionalIterator<T> extends BaseIterator<T> implements IIterator<T> {

    public static create<T extends any>(func: InfinityFunctionalFunction<T>): InfinityFunctionalIterator<T> {

        return new InfinityFunctionalIterator(func);
    }

    private _previous?: T;
    private _nextIndex: number;

    private readonly _func: InfinityFunctionalFunction<T>;

    private constructor(func: InfinityFunctionalFunction<T>) {

        super();

        this._nextIndex = 0;

        this._func = func;
    }

    public get length(): number {
        return Infinity;
    }
    public get nextLeft(): number {
        return Infinity;
    }

    public peek(): T {

        const value: T = this._func(this._nextIndex, this._previous);
        return value;
    }

    public hasNext(): boolean {

        return true;
    }

    public next(): T {

        super.next();

        const value: T = this._func(this._nextIndex, this._previous);
        this._nextIndex = this._nextIndex + 1;
        return value;
    }

    public batch(count: number): T[] {

        return super.batch(count).map(() => this.next());
    }

    public reset(): this {

        super.reset();

        this._previous = undefined;
        this._nextIndex = 0;
        return this;
    }

    public *[Symbol.iterator](): Iterator<T> {

        while (this.hasNext()) {
            yield this.peek();
            this.next();
        }
    }
}
