var body = document.getElementsByTagName('body')[0];
var input = document.getElementsByTagName('input');

function myForm() {
  for (i = 0; i < input.length; i++) {
    if (input[i].checked == true) {
      body.classList.add('contrast' + i);
    } else {
      body.classList.remove("contrast" + i);
      console.log(i);
    }
  }
}
