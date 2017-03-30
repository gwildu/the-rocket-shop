# Mocha testing

## Mocha

### usefull API methods

#### it.skip

skips this test

#### it.only

runs only this test

### html results

`mocha --reporter doc > report.html && open report.html`

outputs the testresults as html and opens it

### configuration

configuration goes into mocha.opts in the test directory

#### example
```text
--compilers coffee:coffee-script/register
--reporter spec
```

### IDE support

Mocha is broadly supported by editors and IDEs. With Webstorm you can easily create a [run configuration](https://www.jetbrains.com/help/phpstorm/2016.1/running-mocha-unit-tests.html) the tests automatically 
(if they don't take too long you can even have a live testing by setting the [AutoTest](https://www.jetbrains.com/help/webstorm/2017.1/test-runner-tab.html) delay to 1s)

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

## sinon

[sinon](http://sinonjs.org/) can be useful for

### spies

spies are wrapping an object and detecting the way how methods or properties are called. There are several useful
methods for spying, check the sinon documentation.

### stubs

you can use sinon also to stub objects by defining, e.g., return values of a method or defining that a callback of a 
function should be called with specified parameter values. 

### mocks

sinon also provides mocks where you can define expectations. This is specially useful, if you have you have expectations 
for several tests you run, then you can define the expectation in the before block and don't have to write it for every 
test again and again.

## nock

[nock](https://github.com/node-nock/nock) is mocking http calls. It is often much more simple than having a sinon mock and less error-prone

## async

[async](http://caolan.github.io/async/) offers a way to call asynchronous functions in an organized way like in parallel or in series.

## Date validation

use [moment](http://momentjs.com/docs/) as it has a lot of date utilities
