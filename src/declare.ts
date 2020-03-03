/**
 * @author WMXPY
 * @namespace Iterator
 * @description Declare
 */

export interface IIterator<T> {

    count: number;
    length: number;

    peek(): T;
    hasNext(): boolean;
    next(): T;
    reset(): IIterator<T>;
}
