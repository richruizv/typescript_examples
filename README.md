# Typescript exercises

## Class one

How to use typescript compiler:

    npx tsc hello.ts

If sintax is ok, this will generate a `hello.js` file.

If we want to compile anyways, we use

    npx tsc --noEmitOnError hello.ts

This will show us the error, but will generate the javascript file anyway

## Class two

- Declare functions with typed parameters, and typed outcomes
- Optional parameters

How to run typescript files with node

    npx ts-node index.ts

## Class three
- Union Types with diferent options
- Aliases, as its name says, are ways to assign types to a variable
- Interfaces also can specify attributes, but the main difference is that types cannot be reassigned
- Union Types
- Literal Types