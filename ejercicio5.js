var head=require('./modulos/head');					//modulo footer
var crear=require('./modulos/crear'); 				//modulo crear
var msg=require('./modulos/msg'); 					//modulo formateo console log


head.drawHead('EJERCICIO 4'); 						// HEAD


for(var i=0;i < 2000; i++){
	
	crear.createFile('./archivos/archivo'+i+'.txt','text de prueba archivo'+i+'.txt');		//crear archivo
	
}




