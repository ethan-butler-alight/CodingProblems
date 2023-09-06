// Link: https://www.codewars.com/kata/5914c6ee51f1d39b5600001c/train/typescript?collection=learning-typescript
/* Instructions:
Overview

In this kata you'll get familiar with TypeScript's basic types.
If you have problems solving this kata please refer to this article: https://www.typescriptlang.org/docs/handbook/basic-types.html
Task
Boolean

    Export var1Boolean variable of boolean type with value true.

Number

    Export var2Decimal variable of numeric type with decimal value 13.
    Export var3Hex variable of numeric type with hex value f00d.
    Export var4Binary variable of numeric type with binary value 111111.
    Export var5Octal variable of numeric type with octal value 744.

String

    Export var6String variable of string type with value Hello, world!.

Array

    Export var7Array variable of array type with value [1, 'test', {a: 3}, 4, 5].
    Export var8NumericArray variable of numeric generic array type with value [1, 2, 3, 4, 5].

Tuple

Tuple types allow you to express an array where the type of a fixed number of elements is known, but need not be the same.

    Export var9Tuple variable of tuple type with value ['key', 12345] - i.e. it should represent a value as a pair of a string and a number.

Enums

    Export var10Enum variable with value Color.Blue from enum export enum Color {Red = 1, Green = 2, Blue = 4}.

Any

We may need to describe the type of variables that we do not know when we are writing an application. These values may come from dynamic content, e.g. from the user or a 3rd party library. In these cases, we want to opt-out of type-checking and let the values pass through compile-time checks. To do so, we label these with the any type.

    Export var11ArrayOfAny variable of Array<any> type with value [1, 'test', {a: 3}, 4, 5].

Void

    Export var12VoidFunction function that returns void.

Null and Undefined

    Export var13Null variable with type and value null.
    Export var14Undefined variable with type and value undefined.

Never

    Export var15NeverFunction function that returns never value.

P.S. Solved this kata? Take a look at other katas in "Learning TypeScript" collection.

 */
// Concepts to Note: arrays, tuple, enums, void, null, undefined, never (see: https://basarat.gitbook.io/typescript/type-system/never)

// My Solution
// Boolean
export var var1Boolean: boolean = true;

// Numbers
export var var2Decimal: number = 13;
export var var3Hex: number = 0xf00d;
export var var4Binary: number = 0b111111;
export var var5Octal: number = 0o744;

// String
export var var6String: string = "Hello, world!";

// Array
export var var7Array: Array<any> = [1, "test", { a: 3 }, 4, 5];
export var var8NumericArray: number[] = [1, 2, 3, 4, 5];

// Tuple
export var var9Tuple: any = ["key", 12345];

// Enums
export enum Color {
  Red = 1,
  Green = 2,
  Blue = 4,
}
export var var10Enum: number = Color.Blue;

// Any
export var var11ArrayOfAny: Array<any> = [1, "test", { a: 3 }, 4, 5];

// Void
export function var12VoidFunction(): void {}

// Null
export var var13Null: null = null;

// Undefined
export var var14Undefined: undefined = undefined;

// Never
export function var15NeverFunction(): never {
  let foo: never = (() => {
    throw new Error("Never!");
  })();
}

/*
Top Solution
export enum Color {Red = 1, Green = 2, Blue = 4};
export var var1Boolean: boolean = true,
          var2Decimal: number = 13, 
          var3Hex: number = 0xf00d, 
          var4Binary : number = 0b111111,
          var5Octal: number = 0o744,
          var6String: string = 'Hello, world!',
          var7Array: any[] =[1, 'test', {a: 3}, 4, 5],
          var8NumericArray: Array<number> = [1, 2, 3, 4, 5],
          var9Tuple:[string ,number] =['key', 12345],
          var10Enum:Color = Color.Blue,
          var11ArrayOfAny: Array<any> = [1, 'test', {a: 3}, 4, 5],
          var12VoidFunction = function():void {},
          var13Null : null =null,
          var14Undefined  : undefined = undefined,
          var15NeverFunction = function():never  { throw new Error(); };

*/
