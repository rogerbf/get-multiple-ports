# get-multiple-ports

Retrieve random available port(s).

## usage

```javascript
import ports from 'get-multiple-ports'

ports([ `SocksPort`, `ControlPort` ])
.then(console.log)
// [ { SocksPort: 64537 }, { ControlPort: 64538 } ]
.catch(console.error)
```

## api

### `ports()`

Resolves to an available port.

#### example

```javascript
ports()
.then(console.log)
.catch(console.error)
// 64643
```

### `ports(count)`

Resolves to an array of `count` number of available ports.

#### example

```javascript
ports(2)
.then(console.log)
.catch(console.error)
// [ 64651, 64652 ]
```

### `ports(names)`

Resolves to an array of objects with port associated with a name.

#### example

```javascript
ports(`kirk`)
.then(console.log)
.catch(console.error)
// { kirk: 64651 }

ports([ `kirk`, `spock` ])
.then(console.log)
.catch(console.error)
// [ { kirk: 64651 }, { spock: 64652 } ]
```
