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
    // True if left -> right
    // False if right -> left
    private _direction: boolean;

    private readonly _elements: T[];

    private constructor(elements: T[]) {

        super();

        this._nextIndex = 0;

        this._elements = elements;
        this._direction = true;
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

        this._pushNextIndex();
        const temp: T = this._elements[this._nextIndex];

        return temp;
    }

    public batch(count: number): T[] {

        return super.batch(count).map(() => this.next());
    }

    public reset(): this {

        super.reset();

        this._nextIndex = 0;
        this._direction = true;
        return this;
    }

    public *[Symbol.iterator](): Iterator<T> {

        while (this.hasNext()) {
            yield this.peek();
            this.next();
        }
    }

    private _pushNextIndex(): void {

        if (this._direction) {
            const peekNext: number = this._nextIndex + 1;

            if (peekNext >= this._elements.length) {
                this._nextIndex = this._nextIndex - 1;
                this._direction = false;
            } else {
                this._nextIndex = peekNext;
            }
        } else {

            const peekNext: number = this._nextIndex - 1;

            if (peekNext < 0) {
                this._nextIndex = this._nextIndex + 1;
                this._direction = true;
            } else {
                this._nextIndex = peekNext;
            }
        }
    }
}
