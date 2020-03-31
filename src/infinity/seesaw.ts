/**
 * @author WMXPY
 * @namespace Infinity
 * @description Seesaw
 */

import { BaseIterator } from "../base";
import { IIterator } from "../declare";

export class SeesawInfinityIterator<T extends any = any> extends BaseIterator<T> implements IIterator<T> {

    public static create<T extends any>(elements: T[]): SeesawInfinityIterator<T> {

        return new SeesawInfinityIterator(elements);
    }

    private _nextIndex: number;

    private readonly _elements: T[];

    private constructor(elements: T[]) {

        super();

        this._nextIndex = 0;

        this._elements = elements;
    }

    public get length(): number {
        return Infinity;
    }
    public get nextLeft(): number {
        return Infinity;
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

        const peekNext: number = this._nextIndex + 1;
        if (peekNext >= this._elements.length) {
            this._nextIndex = 0;
        } else {
            this._nextIndex = peekNext;
        }
        return temp;
    }

    public batch(count: number): T[] {

        return super.batch(count).map(() => this.next());
    }

    public reset(): this {

        super.reset();

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
