/**
 * worker instance
 *
 * comlink provide an abstraction layer for web worker communication
 * so you can easy have access to the worker response
 * */
export const workerInstance = new ComlinkWorker<typeof import("../sw/worker")>(
  new URL("../sw/worker", import.meta.url)
);

function bigCalc(value = 10) {
  const result = new Array(value)
    .fill(0)
    .map((item, index) => item + index)
    .reduce((acc, cur) => acc + cur, 0);
  console.log("showing:", result);
  return result;
}

export function runBigCalc(value: number) {
  const result = bigCalc(value);
  return result;
}

export async function runBigCalcAsync(value: number) {
  const result = bigCalc(value);
  return result;
}
