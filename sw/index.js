'use strict';

console.log('Boot app!');

if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register('/sw.js', { scope: '/sw_test/sw' })
    .then(function(reg) {
      // registration worked
      console.log('Registration succeeded. Scope is ' + reg.scope);
    }).catch(function(error) {
      // registration failed
      console.log('Registration failed with ' + error);
    });
};