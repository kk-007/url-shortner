# getID

[![npm](https://img.shields.io/npm/v/getid.svg?style=flat-square)](https://www.npmjs.com/package/getid)
[![npm](https://img.shields.io/npm/dt/getid.svg?style=flat-square)](https://www.npmjs.com/package/getid)

Generate a random ID.

By default, **getID** generates a random string with 22 characters:

```javascript
//Import
var getID = require('getid');

//Generate a random string ID
var id = getID(); //Returns 'c14x5E22610MJqk8J15748', for example
```

You can use it with some options:

| Option | Description |
|--------|-------------|
| length | Set the length of the generated string. Default is 22. |
| prefix | Set a prefix for the generated string. |
| suffix | Set a suffix for the generated string. |

Example:

```javascript
var getID = require('getid');

//Generate a random string with options
var id = getID({length: 10, prefix: 'ID'}); //Returns 'ID4F52M26448'
```
