> Pagination with basic Ts.ED setup

## Getting started

The route `/pageable` is configured with basic pagination with `offset` and `limit` directly accessible as query parameters.

`X-Total-Count` and `X-Result-Count` are set as response headers for paginated route.

```batch
# install dependencies
$ npm install

# serve
$ npm run start

# build for production
$ npm run build
$ npm run start:prod
```

## Docker

```
# build docker image
docker compose build

# start docker image
docker compose up
```

## Barrelsby

This project uses [barrelsby](https://www.npmjs.com/package/barrelsby) to generate index files to import the controllers.

Edit `.barreslby.json` to customize it:

```json
{
  "directory": ["./src/controllers/rest", "./src/controllers/pages"],
  "exclude": ["__mock__", "__mocks__", ".spec.ts"],
  "delete": true
}
```
