# holdable-erc-20

Custom ERC 20 token that can put transfers on hold.

### How do I get set up? ###

* Prerequisites:
    * Free 8080 (webpack), 8545 (ganache-cli), 3000 (Express)  ports on your machine
    
Run ganache-cli:

```sh
ganache-cli -d
```

deploy the contract:

```sh
truffle migrate
```

run express server:

```sh
node server.js
```

To run the fe app:

```sh
npm start
```

To execute unit test:

```sh
npm run test
```


