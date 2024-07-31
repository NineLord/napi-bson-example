# `napi-rs` & `bson` Example

To play with the project, first install it
```shell
npm install
```
Then build it
```shell
# Can also do `npm run debug` to build un-optimized binary.
npm run build
```
And lastly, try to use it using the test file:
```shell
node simple-test.js
node simple-test-2.js # Using wrapper to the generated API from napi, to hide the [de]serialization on the NodeJS side.
```

## Notes
Tested on:
* node: v18.15.0
* npm: v9.5.0
* cargo: v1.74.1
* rustc: v1.74.1