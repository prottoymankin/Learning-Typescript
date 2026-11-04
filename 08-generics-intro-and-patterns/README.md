### Write `identity(value: T): T`. Test with a string, number, boolean, and object.

```ts
const identity = <T>(value: T) => value;

console.log(identity('Alice'));
console.log(identity(2));
console.log(identity(true));
console.log(identity({id: 1, name: 'Bob'}));
```

### Write `getFirst(items: T[]): T | undefined`. Test strings, numbers, objects, and an empty array.

```ts
const getFirstItem = <T>(items: T[]): T | undefined => items[0];

console.log(getFirstItem(['Alice', 'Bob', 'Charlie']));

console.log(getFirstItem([10, 20, 30]));

console.log(getFirstItem([
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
]));

console.log(getFirstItem([]));
```

### Write `getLast(items: T[]): T | undefined` and test the return types.

```ts
const getLast = <T> (items: T[]): T | undefined => items.at(-1);

console.log(getLast(['Alice', 'Bob', 'Charlie']));

console.log(getLast([10, 20, 30]));

console.log(getLast([
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
]));

console.log(getLast([]));
```

### Write makePair(first: T, second: U): [T, U]. Try string + number and object + boolean.

```ts
const makePair = <T, U> (first: T, second: U): [T, U] => [first, second];

console.log(makePair('Alice', 24));
console.log(makePair({ id: 101, name: 'Bob' }, true));
```

### Implement the first-item function with any[] and with a generic. Explain what information the generic preserves.

```ts
// Using any[]
const getFirstItemAny = (items: any[]): any => items[0];

// Using Generic
const getFirstItemGeneric = <T>(items: T[]): T | undefined => items[0];

console.log(getFirstItemAny([10, 20, 30]));
console.log(getFirstItemGeneric([10, 20, 30]));
```

**Explanation:**
- With `any[]`, TypeScript cannot ensure the actual type of array elements. It loses type safety.
- With generics `T[]`, TypeScript infers the element type from the input array and preserves that type in the return value.
- Generics maintain a relationship between input and return types, providing better type safety.