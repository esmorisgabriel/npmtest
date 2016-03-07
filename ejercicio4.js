var head=require('./modulos/head');					//modulo footer
var foot=require('./modulos/foot'); 				//modulo footer
var msg=require('./modulos/msg'); 						//modulo formateo console log
var os=require('os');					    		// modulo OS

head.drawHead('EJERCICIO 4'); 						// HEAD

msg.cl('Memoria libre:'+os.freemem());   //Shortcut consolelog

var vec=[];
for(var f=0;f<9000000;f++) {
    vec.push(f);
}	

msg.cl('Memoria después:'+os.freemem()); //Shortcut consolelog

foot.drawFoot(); 									//FOOT