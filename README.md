# API First going from TypeScript Types to Swagger via Fastify (Sandbox)

**Features**

* Fastify + TypeScript
* **Schema generated** from TypeScript Types, registered with Fastify and exposed via Swagger UI
* Swagger UI

**Summary**

This seems quite cumbersome to use with Fastify. Also I was not able to model UserCollectionSchema. Fastify recommends TypeBox and that is a lot nicer to use. See my [example](https://github.com/Richargh/api-first-typebox-to-swagger-via-fastify-npm-ts-sandbox).

## Usage

1. `npm run gen` to generated schema that is used by routes
2. `npm run start` and then, via [httpie](https://httpie.io/) or cURL:
    * GET all users `http localhost:8080/users?name=Taylor`
    * CREATE new user `http POST localhost:8080/users name=Alex`
    * Check the generate Schema: `http GET http://localhost:8080/docs/json`
    * View the [Swagger UI](http://localhost:8080/docs/) 

## Troubleshooting

* Take care to always add routes inside a `.register` block. Otherwise swagger does not seem to pick up on them.

## Created via

* `npm init -y`
* `npm i fastify`
* `npm i -D typescript @types/node ts-node`
* `npx tsc --init` and configure `outdir: "dist"`, `"target": "es2017"` and other smaller things.
* `mkdir src && touch src/index.ts` and put code from [fastify swagger](https://github.com/fastify/fastify-swagger/blob/master/examples/dynamic-swagger.js).
* Add `"build": "tsc"` and `"start": "ts-node src/server.ts"` to [package.json](package.json).
* `npm i @sinclair/typebox @fastify/type-provider-typebox @fastify/swagger` and add /users with schema to [src/index.ts](src/index.ts) according to the [official docs](https://www.fastify.io/docs/latest/Reference/TypeScript/#typebox)

## References

* https://www.fastify.io/docs/latest/Reference/Validation-and-Serialization/
* [Type examples](https://github.com/YousefED/typescript-json-schema/tree/master/example) and [Supported JSDoc examples](https://github.com/YousefED/typescript-json-schema)