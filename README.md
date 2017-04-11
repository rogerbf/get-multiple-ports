# get-multiple-ports

Get a number of (optionally named) ports.

## usage

```javascript
const ports = require(`get-multiple-ports`)

ports()
.then(console.log)
.catch(console.error)
// [ 58021 ]

ports(3)
.then(console.log)
.catch(console.error)
// [ 57883, 57884, 57885 ]

ports(`protostar`)
.then(console.log)
.catch(console.error)
// { protostar: 58016 }

ports([ `ControlPort`, `SocksPort` ])
.then(console.log)
.catch(console.error)
// { ControlPort: 57889, SocksPort: 57890 }
```
