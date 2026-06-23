# CursorPagingPlayHistoryObject

**Properties**

| Name    | Type                                        | Required | Description                                                                      |
| :------ | :------------------------------------------ | :------- | :------------------------------------------------------------------------------- |
| href    | string                                      | ❌       | A link to the Web API endpoint returning the full result of the request.         |
| limit   | number                                      | ❌       | The maximum number of items in the response (as set in the query or by default). |
| next    | string                                      | ❌       | URL to the next page of items. ( `null` if none)                                 |
| cursors | [CursorObject](CursorObject.md)             | ❌       |                                                                                  |
| total   | number                                      | ❌       | The total number of items available to return.                                   |
| items   | [PlayHistoryObject](PlayHistoryObject.md)[] | ❌       |                                                                                  |
