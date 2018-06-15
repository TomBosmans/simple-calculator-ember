import Component from '@ember/component';
import { inject as service } from '@ember/service';
import $ from 'jquery'

export default Component.extend({
  calculator:  service('calculator'),

  actions: {
    addNumber() {
      var $input = $('.js-input');
      var $list = $('.js-list');
      var $result = $('.js-result');
      var number = parseInt($input.val());
      var calculator = this.get('calculator');

      if(Number.isInteger(number)) {
	calculator.add(number);
	$input.val('');
	$result.html(calculator.get('result'));
	$list.append($("<li></li>").text(number));
      } else {
	alert('not a number');
      }
    }
  }
});
