import { OhbugGlobal } from '@ohbug/core'

const fallbackGlobalObject = {}
export function getGlobal<T>(): T & OhbugGlobal {
  return (typeof window !== 'undefined'
    ? window
    : typeof global !== 'undefined'
    ? global
    : typeof self !== 'undefined'
    ? self
    : fallbackGlobalObject) as T & OhbugGlobal
}