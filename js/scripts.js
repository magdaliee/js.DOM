var withButtonClass = document.getElementsByClassName('button');
var buttons = withButtonClass.length;
console.log(withButtonClass);
console.log(buttons);

for (i = 0; i < buttons; i++) {
	alert( withButtonClass[i].innerHTML);
}