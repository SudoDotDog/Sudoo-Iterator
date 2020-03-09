/**
 * @author WMXPY
 * @namespace Iterator
 * @description Rest Random
 */

import { BaseIterator } from "../base";
import { IIterator } from "../declare";

export class RestRandomIterator extends BaseIterator<number> implements IIterator<number> {

    public static create(size: number, amount: number): RestRandomIterator {

        return new RestRandomIterator(size, amount);
    }

    private readonly _initialSize: number;
    private readonly _initialAmount: number;

    private _restSize: number;
    private _restAmount: number;

    private constructor(size: number, amount: number) {

        super();

        this._initialSize = size;
        this._initialAmount = amount;

        this._restSize = size;
        this._restAmount = amount;
    }

    public get length(): number {
        return this._initialSize;
    }
    public get nextLeft(): number {
        return this._restSize;
    }

    /**
     * @returns estimated value of next
     */
    public peek(): number {

        return this._restAmount / this._restSize;
    }

    public hasNext(): boolean {

        return this._restSize > 0;
    }

    public next(): number {

        super.next();

        if (this._restSize <= 0) {
            return 0;
        }

        if (this._restSize === 1) {
            this._restSize--;
            return this._restAmount;
        }

        const maximum: number = this._restAmount / this._restSize * 2;
        const result: number = Math.random() * maximum;

        this._restSize--;
        this._restAmount = this._restAmount - result;

        return result;
    }

    public batch(count: number): number[] {

        return super.batch(count).map(() => this.next());
    }

    public reset(): this {

        super.reset();

        this._restAmount = this._initialAmount;
        this._restSize = this._initialSize;
        return this;
    }
}
