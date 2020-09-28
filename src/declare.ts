/**
 * @author WMXPY
 * @namespace Iterator
 * @description Declare
 */

export interface IIterator<T> extends Iterable<T> {

    count: number;
    length: number;
    remain: number;

    peek(): T;
    hasNext(): boolean;
    next(): T;
    batch(count: number): T[];
    reset(): IIterator<T>;
}
