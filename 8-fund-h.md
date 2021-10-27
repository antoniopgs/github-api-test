# 8 - Fund H
Deploy Fund H at address 0x8

## Issue Link
Issue: https://github.com/antoniopgs/github-api-test/issues/45

## Implementation Discussion
Implementation Bla Bla

## Implementation
Targets: []
Data: []

## Generation Code
```javascript
const implementArgs = {
    "foo": "Hello",
    "bar": "world"
}

function implement(implementArgs) { // must return object with targets array and data array
    console.log(`${foo}, ${bar}!`);

    return {
        targets: [1, 2, 3],
        data: ["a", "b", "c"]
    }
}
```

Generated using the following function call(s) and the DAOCheck tool:
```json
{
    "name": "Fund H",
    "calls": [
        {
            "target": "USDC",
            "name": "transfer",
            "parameters": [
                {
                    "type": "address",
                    "name": "recipient",
                    "value": "0xC2bc2F890067C511215f9463a064221577a53E10"
                },
                {
                    "type": "uint256",
                    "name": "amount",
                    "value": "30000000000"
                }
            ]
        },
        {
            "target": "TCR",
            "name": "transfer",
            "parameters": [
                {
                    "type": "address",
                    "name": "recipient",
                    "value": "0xC2bc2F890067C511215f9463a064221577a53E10"
                },
                {
                    "type": "uint256",
                    "name": "amount",
                    "value": "32258000000000000000000"
                }
            ]
        }
    ]
}
```