/**
 * @author WMXPY
 * @namespace Iterator
 * @description Base
 */

import { IIterator } from "./declare";

export class BaseIterator<T> implements IIterator<T> {

    protected _count: number;

    public get count(): number {
        return this._count;
    }
    public get length(): number {
        return 0;
    }

    public peek(): T {

        return null as any as T;
    }

    public hasNext(): boolean {

        return false;
    }

    public next(): T {

        return null as any as T;
    }

    public reset(): this {

        this._count = 0;
        return this;
    }
}
