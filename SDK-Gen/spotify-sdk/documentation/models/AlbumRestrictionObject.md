# AlbumRestrictionObject

**Properties**

| Name   | Type   | Required | Description                                                                                                                                                                                                                                                 |
| :----- | :----- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| reason | Reason | ❌       | The reason for the restriction. Albums may be restricted if the content is not available in a given market, to the user's subscription type, or when the user's account is set to not play explicit content. Additional reasons may be added in the future. |

# Reason

The reason for the restriction. Albums may be restricted if the content is not available in a given market, to the user's subscription type, or when the user's account is set to not play explicit content. Additional reasons may be added in the future.

**Properties**

| Name     | Type   | Required | Description |
| :------- | :----- | :------- | :---------- |
| MARKET   | string | ✅       | "market"    |
| PRODUCT  | string | ✅       | "product"   |
| EXPLICIT | string | ✅       | "explicit"  |
