/// <reference lib="webworker" />

import { runBigCalc } from "../utils/utils";

/**
 *
 * It's a method that can be remotely invoked through our worker
 * instance using RPC (Remote Procedure Call), meaning it can be called from
 * the main thread to the web worker.
 */
export const myRPCFunc = (value: number) => runBigCalc(value);
