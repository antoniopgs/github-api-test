# 90 - Fund aza
Deploy Fund cba at address 0x000

## Issue Link
Issue: https://github.com/antoniopgs/github-api-test/issues/53

## Implementation Discussion
Implementation Bla Bla

## Implementation
Targets: [1,2,3]
Data: [a,b,c]

## Generation Code
```javascript
function implement() {
    console.log("Hello, world!");

    return {
        targets: [1, 2, 3],
        data: ["a", "b", "c"]
    }
}
```

Generated using the following function call(s) and the DAOCheck tool:
```json
{
    "name": "Fund aza",
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