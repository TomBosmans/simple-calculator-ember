import Component from '@ember/component';
import { sum } from '@ember/object/computed';

export default Component.extend({
  numbers: null,
  result: sum('numbers'),

  init() {
    this._super(...arguments);
    this.set('numbers', []);
  },

  actions: {
    addNumber() {
      var newNumber = parseInt(this.get('number'));
      if (Number.isInteger(newNumber)) {
	this.get('numbers').pushObject(newNumber);
	this.set('number', null);
      } else {
        alert('not a number');
      }
    },
  },
});
