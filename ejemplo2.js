var mat=require('./modulos/matematica');
var head=require('./modulos/head');		//modulo footer
var foot=require('./modulos/foot'); 	//modulo footer

head.drawHead('EJERCICIO 2'); 	// HEAD

console.log('La suma de 2+2='+mat.sumar(2,2));
console.log('La resta de 4-1='+mat.restar(4,1));
console.log('La división de 6/3='+mat.dividir(6,3));
console.log('El valor de PI='+mat.PI);


foot.drawFoot(); 				//FOOT