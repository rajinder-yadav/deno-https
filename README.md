# Deno vs Node.js running a HTTPS server

The SSL cert is self-signed with a passphrase of `hello123`.

## Running code using Node.js

Install NPM packages:

```sh
$ pnpm install
```

Run code using Node.js:

```sh
$ pnpm run dev

> node@1.0.0 dev /tmp/node.js
> nodemon main.js

[nodemon] 3.1.9
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node main.js`
HTTPS server running on port 3333
```

Test HTTPS Server:

```sh
$ curl  https://localhost:3333 -k
Hello, this is an HTTPS server with an encrypted private key!
```

## Running code using Deno

Deno produces an error:

```sh
$ deno task dev
Task dev deno run -A --watch main.js
Watcher Process started.
error: Uncaught InvalidData: No keys found in key data
    at loadTlsKeyPair (ext:deno_net/02_tls.js:144:12)
    at listenTls (ext:deno_net/02_tls.js:167:19)
    at serve (ext:deno_http/00_serve.ts:562:16)
    at Server._serve (node:http:1460:22)
    at node:http:1405:23
    at Array.processTicksAndRejections (ext:deno_node/_next_tick.ts:28:11)
    at eventLoopTick (ext:core/01_core.js:174:29)
Watcher Process failed. Restarting on file change...
```
