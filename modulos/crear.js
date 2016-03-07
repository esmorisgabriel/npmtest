var fs=require('fs');								//modulo manejo archivos
var msg=require('./msg'); 							//modulo formateo console log
var foot=require('./foot'); 						//modulo footer

function createFile(ruta,mensaje){
	fs.writeFile(ruta,mensaje,function(error){
		if (error)
			msg.cl(error);
		else
			msg.cl('El archivo ' + ruta + ' fue creado');
		
			foot.drawFoot(); 									//FOOT
	});
}

exports.createFile=createFile;