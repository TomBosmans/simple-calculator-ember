import Service from '@ember/service';

export default Service.extend({
  list: [],
  result: 0,

  init() {
    this._super(...arguments);
  },

  add(number) {
    this.get('list').pushObject(number);
    this.calculate();
  },

  calculate() {
    const sumReducer = (a, b) => a + b;
    var sum = this.get('list').reduce(sumReducer, 0);
    this.set('result', sum);
  },

  reset() {
    this.set('list', []);
    this.set('result', 0);
  }
});
