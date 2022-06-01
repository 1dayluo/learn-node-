# graphQL(未完)

## handle GraphQL queries

need a schema that defines the `Query` type

need an API root with a function called a “reslover” for each API endpoint

代码见项目 `code/graphQL/helloworld.js`

## GraphQL on express

run a GraphQL API server use [Express](https://expressjs.com/)

### install dependencies

```jsx
npm install express express-graphql graphql --save
```

we can use the `express-graphql` library to mount a GraphQL API server on the “/graphql” HTTP endpoint

代码见项目 `/code/graphQL/expresshelloworld.js`

## Passing Arguments

**该案例的代码见 `/code/graphQL/rolldice`**

### Example: roll dice

**schema**

Each argument must be named and have a type.for example we had an endpoint called `rollThreeDice`:

```graphql
type Query {
  rollThreeDice: [Int]
}
```

Instead of hardcoding “three”, we might want a more general function that rolls `numDice`  dice, each of which have `numSides` sides, We can add arguments to the GraphQL schema language like this(骰子数量和每次骰子的点数):

```graphql
type Query {
  rollDice(numDice: Int!, numSides: Int): [Int]
}
```

(其中 `Int!` 代表numDice不能为空)

We can let `numSides`be null and assume that by default a die has 6 sides.

**resolver function**

When a resolver takes arguments, they are passed as one “args” object,as the first argument to the function.

```graphql
var root = {
    rollDice: (args)=>{
        var output = [];
        for (var i = 0; i < args.numDice; i++) {
            output.push(1 + Math.floor(Math.random() * (args.numSides || 6)));
        }
        return output
    },
};
```

It's convenient to use [ES6 destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)  for these parameters, since you know what format they will be. So we can also write `rollDice`  as

```graphql
var root = {
  rollDice: ({numDice, numSides}) => {
    var output = [];
    for (var i = 0; i < numDice; i++) {
      output.push(1 + Math.floor(Math.random() * (numSides || 6)));
    }
    return output;
  }
};
```

**roll!**

测试api:

```graphql
{
  rollDice(numDice: 3, numSides: 6)
}
```

### Using `$` syntax to define variables in your query

When you're passing arguments in code, it's generally better to avoid constructing the whole query string yourself.Instead, you can use `$` syntax to define variables in your query, and pass the variables as a separate map.

```graphql
var dice = 3;
var sides = 6;
var query = `query RollDice($dice: Int!, $sides: Int) {
  rollDice(numDice: $dice, numSides: $sides)
}`;

fetch('/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({
    query,
    variables: { dice, sides },
  })
})
  .then(r => r.json())
  .then(data => console.log('data returned:', data));
```

## use GraphiQL interface to issue queries

### GraphQL client

GraphiQL and Insomnia
