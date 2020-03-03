/**
 * @author WMXPY
 * @namespace Iterator
 * @description Base
 */

import { IIterator } from "./declare";

export class BaseIterator<T> implements IIterator<T> {

    protected _count: number;

    protected constructor() {

        this._count = 0;
    }

    public get count(): number {
        return this._count;
    }
    public get length(): number {
        return 0;
    }

    public peek(): T {

        return undefined as any as T;
    }

    public hasNext(): boolean {

        return false;
    }

    public next(): T {

        this._count++;
        return undefined as any as T;
    }

    public reset(): IIterator<T> {

        this._count = 0;
        return undefined as any;
    }

    public [Symbol.iterator](): Iterator<T> {

        throw new Error("Method not implemented.");
    }
}
