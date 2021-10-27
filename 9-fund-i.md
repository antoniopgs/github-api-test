# 9 - Fund I
Deploy Fund I at address 0x9

## Issue Link
Issue: https://github.com/antoniopgs/github-api-test/issues/43

## Implementation Discussion
Implementation Bla Bla

## Implementation
Targets: []
Data: []

## Generation Code
```javascript
const implementArgs = {
    "foo": "This",
    "bar": "works!"
}

function implement(...implementArgs) { // must return two arrays (1st for targets, 2nd for data)
    console.log("Lorem Ipsum");
}
```

Generated using the following function call(s) and the DAOCheck tool:
```json
{
    "name": "Code 423n4 (Arena) Audit - Bug Bounty #2",
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