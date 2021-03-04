const Person = require('../../src/shouty.js')
const { Given, When, Then } = require('@cucumber/cucumber')
const { assertThat, is } = require('hamjest')

Given('Lucy is located {int} metres from Sean', function (distance) {
  // Write code here that turns the phrase above into concrete actions
  // Add Person objects
  this.lucy = new Person
  this.sean = new Person
  this.lucy.moveTo(distance)
//   return pending
//   console.log(distance)
})

When('Sean shouts {string}', function (message) {
    this.sean.shout(message)
    this.message = message
  // Write code here that turns the phrase above into concrete actions
//   return 'pending'
})

Then('Lucy hears Sean\'s message', function () {
    assertThat(this.lucy.messagesHeard(), is([this.message]))
  // Write code here that turns the phrase above into concrete actions
//   return 'pending'
})
