# Mocha testing

## Mocha

### API

#### it.skip

skips this test

#### it.only

runs only this test

### scripts

`mocha --reporter doc > report.html && open report.html`

outputs the testresults as html and opens it

### configuration

configuration goes into mocha.opts in the test directory

#### example
```text
--compilers coffee:coffee-script/register
--reporter spec
```

### asynchronous tests / setup

When asynchronous code has to be run in, e.g., the before or in a test just pass 'done' as a parameter to the callback
and call it when the asynchronous part is returning.

#### example
```javascript
before(function (done) {
  someAsyncCall(function(result) {
    doSomethingWithThe(result)
    done()
  })
})
```

## Date validation

use moment as it has a lot of date utilities
