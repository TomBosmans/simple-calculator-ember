import Component from '@ember/component';

export default Component.extend({
  numbers: [],
  result: 0,

  actions: {
    addNumber() {
      var newNumber = parseInt(this.get('number'));
      if (Number.isInteger(newNumber)) {
	this.get('numbers').pushObject(newNumber);
	this.set('number', null);
	this.calculate();
      } else {
        alert('not a number');
      }
    },
  },

  calculate() {
    const sumReducer = (a, b) => a + b;
    var sum = this.get('numbers').reduce(sumReducer, 0);
    this.set('result', sum);
  }
});
