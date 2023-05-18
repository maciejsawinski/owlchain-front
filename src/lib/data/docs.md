### about data

Data points are updated daily at 06:00 UTC.

### sources

- [Ethereum JSON-RPC endpoint](https://ethereum.org/en/developers/docs/apis/json-rpc/)
- [DefiLlama](https://defillama.com/docs/api)
- [CryptoWatch](https://docs.cryptowat.ch/rest-api/)

### methodology

| metric                 | method of calculation                                                                                     |
| ---------------------- | --------------------------------------------------------------------------------------------------------- |
| daily active addresses | Number of unique addresses on the network that sent or recieved a transaction                             |
| daily transactions     | Sum of transactions from each block                                                                       |
| dexes protocols volume | Fetched from [DefiLlama API](https://defillama.com/docs/api)                                              |
| average eth price      | Fetched from [CryptoWatch API](https://docs.cryptowat.ch/rest-api/), calculated based on avg of 1H closes |
| fee swap erc-20        | `(medianGasPrice * averageEthPrice * currentUniswapGasCost) / 10^9`                                       |
| fee transfer erc-20    | `(medianGasPrice * averageEthPrice * 65000) / 10^9`                                                       |
| fee transfer eth       | `(medianGasPrice * averageEthPrice * 21000) / 10^9`                                                       |
| median gas price       | Median of gas price from every transaction                                                                |
| stablecoin marketcap   | Fetched from [DefiLlama API](https://defillama.com/docs/api)                                              |
| total gas used         | Sum of gas used in every transaction                                                                      |
| tps                    | `dailyTransactions / 86400`                                                                               |
| tvl                    | Fetched from [DefiLlama API](https://defillama.com/docs/api)                                              |

### contact

[https://github.com/maciejsawinski](https://github.com/maciejsawinski)
