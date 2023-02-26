var buttons = document.getElementsByClassName('button');
var display = document.getElementById('display');

var x = 0;
var operator = null;
var y = null;

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    var value = this.getAttribute('key_value');

    if (value == '/' || value == '*' || value == '-' || value == '+') {
      operator = value;
      x = parseFloat(display.textContent);
      display.innerHTML = null;

    } else if (value == '=') {
      y = parseFloat(display.textContent);
      // use eval to get result
      display.innerHTML = parseFloat(eval(x + " " + operator + " " + y).toFixed(7));

    } else if (value == 'ac') {
      display.innerHTML = null;

    } else if (value == 'x') {
      var temp = display.innerHTML;
      display.innerHTML = temp.substring(0, (temp.length - 1));

    } else if (value == '%') {

      var temp = display.innerHTML;

      display.innerHTML = parseFloat(eval(temp * 0.01).toFixed(7));

    } else {
      display.innerHTML += value;
    }
  });
};