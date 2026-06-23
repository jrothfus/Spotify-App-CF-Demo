# DeviceObject

**Properties**

| Name             | Type    | Required | Description                                                                                                                                                                                                  |
| :--------------- | :------ | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id               | string  | ❌       | The device ID. This ID is unique and persistent to some extent. However, this is not guaranteed and any cached `device_id` should periodically be cleared out and refetched as necessary.                    |
| isActive         | boolean | ❌       | If this device is the currently active device.                                                                                                                                                               |
| isPrivateSession | boolean | ❌       | If this device is currently in a private session.                                                                                                                                                            |
| isRestricted     | boolean | ❌       | Whether controlling this device is restricted. At present if this is "true" then no Web API commands will be accepted by this device.                                                                        |
| name             | string  | ❌       | A human-readable name for the device. Some devices have a name that the user can configure (e.g. \"Loudest speaker\") and some devices have a generic name associated with the manufacturer or device model. |
| type             | string  | ❌       | Device type, such as "computer", "smartphone" or "speaker".                                                                                                                                                  |
| volumePercent    | number  | ❌       | The current volume in percent.                                                                                                                                                                               |
| supportsVolume   | boolean | ❌       | If this device can be used to set the volume.                                                                                                                                                                |
