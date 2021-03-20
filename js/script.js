function clickMinW() {
  var value = $('#targetW').text();
  value--;
  while (value<0) {
    alert('Non fare il furbo');
    value=0;
  }
  $('#targetW').text(value);
  var width = parseInt($('#circle').css('width'));
  $('#circle').css('width', (width-10) + 'px');
}
function clickPlusW() {
  var value = $('#targetW').text();
  value++;
  if (value > 20) {
      value = 20;
      alert('Non fare il furbo!');
  }
  $('#targetW').text(value);
  $('#circle').css('width', value*10 + 'px');
}
function clickMinH() {
  var value = $('#targetH').text();
  value--;
  while (value<0) {
    alert('Non fare il furbo');
    value=0;
  }
  $('#targetH').text(value);
  var height = parseInt($('#circle').css('height'));
  $('#circle').css('height', (height-10) + 'px');
}
function clickPlusH() {
  var value = $('#targetH').text();
  value++;
  if (value > 20) {
      value = 20;
      alert('Non fare il furbo!');
  }
  $('#targetH').text(value);
  $('#circle').css('height', value*10 + 'px');
}
function randomNum(min,max) {
  var minRnd = min;
  var maxRnd = max - min +1;
  return Math.floor(Math.random()*maxRnd)+minRnd
}
function randomColor() {
  var rndNum = randomNum(0,255);
  var rndNum2 = randomNum(0,255);
  var rndNum3 = randomNum(0,255);
  var randomColor = 'rgb'+'('+rndNum+','+rndNum2+','+rndNum3+')';
  return $('#circle').css('background-color', randomColor);
}
function init() {
    $('#targetW').text(10);
    $('#minusW').click(clickMinW);
    $('#plusW').click(clickPlusW);
    $('#targetH').text(10);
    $('#minusH').click(clickMinH);
    $('#plusH').click(clickPlusH);
    $('#circle').css('width', '100px');
    $('#circle').css('height', '100px');
    $('#minusW, #plusW, #minusH, #plusH').click(randomColor);
}
init();
