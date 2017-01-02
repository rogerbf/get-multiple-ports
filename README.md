# get-multiple-ports

Retrieve multiple random open ports.

```javascript
import ports from 'get-multiple-ports'

ports([ `SocksPort`, `ControlPort` ])
.then(console.log)
// [ { SocksPort: 64537 }, { ControlPort: 64538 } ]
.catch(console.error)
```
