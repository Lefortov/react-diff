# react-diff-component

Highlights differences between two strings, uses the [diff](https://www.npmjs.com/package/diff) module based on (https://github.com/Lefortov/react-diff)

## Installation

```
npm install react-diff-component --save
```

## Demo

http://cezary.github.io/react-diff/

## Example

```javascript
import Diff from 'react-diff-component';

const Component = () => (
    <Diff inputA="test" inputB="test2" type={Diff.types.chars} />
);
```

## License

MIT
