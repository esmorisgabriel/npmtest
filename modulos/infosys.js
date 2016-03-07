var os=require('os');

function drawInfoSys()
{
	console.log('Sistema operativo: 	'+os.platform());
	console.log('Version del sistema:    '+os.release());
	console.log('Memoria total: 		'+os.totalmem()+' bytes');
	console.log('Memoria libre: 		'+os.freemem()+' bytes');
}

exports.drawInfoSys=drawInfoSys;