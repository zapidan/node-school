## Challenge

Write a program that will receive an URL as the first command line argument.

To this URL, for each of the values in the following array, send a GET request
using `http.get` with a query parameter named `number` set at the proper value:

```
['one', 'two', 'three']
```

Each time, convert the response body to `Number` and add it to the previous value.
`console.log` the final reduced value.

## Hints

Use `async.reduce`:
  [reduce] 
  [reduce]: [https://github.com/caolan/async#reduce]