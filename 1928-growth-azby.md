# 1928 - Growth AZBY
Deploy Fund byb at address 0x000

## Issue Link
Issue: https://github.com/antoniopgs/github-api-test/issues/61

## Implementation Discussion
Implementation Discussion:
- topic a
- topic b

## Implementation
Targets: [1,2,3]

Data: [a,b,c]

## Generation Code
```javascript
function implement() {
    const targets = [1, 2, 3];
    const data = ["a", "b", "c"];

    return {
        targets: targets,
        data: data
    }
}
```

Generated using the following function call(s) and the DAOCheck tool:
```json
{
    "name": "Growth AZBY",
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