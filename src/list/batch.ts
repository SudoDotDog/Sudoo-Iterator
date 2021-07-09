/**
 * @author WMXPY
 * @namespace List
 * @description Batch
 */

import { BaseIterator } from "../base";
import { IIterator } from "../declare";

export class ListBatchIterator<T> extends BaseIterator<T[]> implements IIterator<T[]> {

    public static create<T extends any>(elements: T[], batchSize: number): ListBatchIterator<T> {

        return new ListBatchIterator(elements, batchSize);
    }

    private _pointer: number;

    private readonly _elements: T[];
    private readonly _batchSize: number;

    private constructor(elements: T[], batchSize: number) {

        super();

        this._pointer = 0;

        this._elements = elements;
        this._batchSize = batchSize;
    }

    public get length(): number {
        return Math.ceil(this._elements.length / this._batchSize);
    }
    public get nextLeft(): number {
        return Math.ceil((this._elements.length - this._pointer) / this._batchSize);
    }

    public peek(): T[] {

        return this._elements.slice(this._pointer, this._pointer + this._batchSize);
    }

    public hasNext(): boolean {

        return this._pointer < this._elements.length;
    }

    public next(): T[] {

        super.next();

        const batch: T[] = this.peek();
        this._pointer += this._batchSize;
        return batch;
    }

    public batch(count: number, fillRestWithUndefined?: boolean): T[][] {

        const result: T[][] = [];
        for (let i = 0; i < count; i++) {

            if (this.hasNext()) {
                result.push(this.next());
            } else if (fillRestWithUndefined) {
                this._count++;
                result.push(undefined as any);
            }
        }
        return result;
    }

    public reset(): this {

        super.reset();

        this._pointer = 0;
        return this;
    }

    public *[Symbol.iterator](): Iterator<T[]> {

        while (this.hasNext()) {
            yield this.peek();
            this.next();
        }
    }
}
