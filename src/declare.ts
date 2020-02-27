/**
 * @author WMXPY
 * @namespace Iterator
 * @description Declare
 */

export interface IIterator<T> {

    peek(): T;
    hasNext(): boolean;
    next(): T;
    reset(): IIterator<T>;
}
