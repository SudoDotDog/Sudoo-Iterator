/**
 * @author WMXPY
 * @namespace Iterator
 * @description Base
 * @override Mock
 */

import { BaseIterator } from "../../src";

export const createDebugBaseIterator = (): BaseIterator<number> => {

    return (BaseIterator as any).__createForDebug();
};
