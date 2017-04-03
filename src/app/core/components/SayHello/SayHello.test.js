import test from 'ava'
import SayHello from './SayHello.vue'

test('should have the correct name', t => {
  t.is(SayHello.name, 'say-hello')
})

test('should say hello', t => {
  t.is(SayHello.methods.sayHello(), 'Hello')
})