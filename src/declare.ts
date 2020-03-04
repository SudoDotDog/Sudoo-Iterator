/**
 * @author WMXPY
 * @namespace Iterator
 * @description Declare
 */

export interface IIterator<T> extends Iterable<T> {

    count: number;
    length: number;
    nextLeft: number;

    peek(): T;
    hasNext(): boolean;
    next(): T;
    reset(): IIterator<T>;
}
