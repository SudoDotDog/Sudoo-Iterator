/**
 * @author WMXPY
 * @namespace Iterator
 * @description Custom
 */

import { BaseIterator } from "../base";
import { IIterator } from "../declare";

export class CustomIterator<T> extends BaseIterator<T> implements IIterator<T> {

    public static create<T extends any>(elements: T[]): CustomIterator<T> {

        return new CustomIterator(elements);
    }

    private _nextIndex: number;

    private readonly _elements: T[];

    private constructor(elements: T[]) {

        super();

        this._nextIndex = 0;

        this._elements = elements;
    }

    public get length(): number {
        return this._elements.length;
    }

    public peek(): T {

        return this._elements[this._nextIndex];
    }

    public hasNext(): boolean {

        return true;
    }

    public next(): T {

        super.next();

        const temp: T = this._elements[this._nextIndex];
        this._nextIndex = this._nextIndex + 1;
        return temp;
    }

    public reset(): this {

        super.reset();

        this._nextIndex = 0;
        return this;
    }
}
