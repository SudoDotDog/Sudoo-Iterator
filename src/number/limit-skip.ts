/**
 * @author WMXPY
 * @namespace Number
 * @description Limit Skip
 */

import { BaseIterator } from "../base";
import { IIterator } from "../declare";

export type LimitSkipBatch = {

    readonly index: number;
    readonly limit: number;
    readonly skip: number;
};

export class LimitSkipIterator extends BaseIterator<LimitSkipBatch> implements IIterator<LimitSkipBatch> {

    public static create(total: number, limit: number): LimitSkipIterator {

        return new LimitSkipIterator(total, limit);
    }

    private readonly _total: number;
    private readonly _limit: number;

    private _batch: number;

    private constructor(total: number, limit: number) {

        super();

        this._total = total;
        this._limit = limit;

        this._batch = 0;
    }

    public get length(): number {
        return Math.ceil(this._total / this._limit);
    }
    public get nextLeft(): number {
        return this.length - this._batch;
    }

    public peek(): LimitSkipBatch {

        const result: LimitSkipBatch = {

            index: this._batch,

            limit: this._limit,
            skip: Math.min(this._batch * this._limit, this._total),
        };
        return result;
    }

    public hasNext(): boolean {

        return this.nextLeft > 0;
    }

    public next(): LimitSkipBatch {

        super.next();

        const result: LimitSkipBatch = {

            index: this._batch,

            limit: this._limit,
            skip: Math.min(this._batch * this._limit, this._total),
        };
        this._batch = this._batch + 1;
        return result;
    }

    public batch(count: number): LimitSkipBatch[] {

        return super.batch(count).map(() => this.next());
    }

    public reset(): this {

        super.reset();

        this._batch = 0;
        return this;
    }

    public *[Symbol.iterator](): Iterator<LimitSkipBatch> {

        while (this.hasNext()) {
            yield this.peek();
            this.next();
        }
    }
}
