var withButtonClass = document.getElementsByClassName ('btn');
var quantity = withButtonClass.length;
var i;
console.log (withButtonClass);
for (i = 0; i < quantity; i++){
console.log (withButtonClass[i].innerText); 
}