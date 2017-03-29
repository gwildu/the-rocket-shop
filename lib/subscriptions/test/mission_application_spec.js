'use strict'

let assert = require('assert')
let MembershipApplication = require('../models/membership_application')
let sinon = require('sinon')

describe('Membership application requirements', function () {

  let validApp
  let spy

  before(function() {
    // arrage the data here
    validApp = new MembershipApplication({
      first: 'Test',
      last: 'User',
      email: 'test@test.com',
      age: 30,
      height: 66,
      weight: 180
    })
    spy = sinon.spy(validApp, 'emailIsValid')
  })

  describe('Application valid if...', function () {
    it('application is valid if all validators return true', function(){
      assert(validApp.isValid(), 'Not valid')
    })
    it('email is 4 or more chars and contains an @', function () {
      assert(validApp.emailIsValid(), 'email not valid')
      assert(spy.called)
    })
    it('height is between 60 and 75 inches', function () {
      assert(validApp.heightIsValid(), 'height not valid')
    })
    it('age is between 15 and 100 years', function () {
      assert(validApp.ageIsValid(), 'age not valid')
    })
    it('weight is between 100 and 300 pounds', function () {
      assert(validApp.weightIsValid(), 'weight not valid')
    })
    it('first and last name are provided', function () {
      assert(validApp.nameIsValid(), 'name not valid')
    })
  })

  describe('Application invalid if...', function () {
    it('email is less than', function(){
      let app = new MembershipApplication({email: 'd@d'})
      assert(!app.emailIsValid())
    })
    it('email has no @ character', function () {
      let app = new MembershipApplication({email: 'dddd'})
      assert(!app.emailIsValid())
    })
  })
})