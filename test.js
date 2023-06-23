/**
 * Archivo de plantilla inicial para leer y visualizar el contenido
 * de un archivo.
 * 
 * Para modificar el contenido, guarde una nueva copia e identifique el 
 * nuevo archivo como sus apellidos-nombres.js
 */
const fs = require('fs')

fs.readFile('in_1.in',{encoding:'utf8'},(err,data)=>{
    if(!err){
        console.log(data)
        //Visualizar el código del pais y cuantos equipos pertenecen a ese pais
        //ordenados ascendentemente por código de Pais
        //ARG 2
        //BRA 1
        //CHI 1
        //COL 3
    }else{
        console.error(err)
    }
})