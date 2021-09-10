// Esperar que todo el HTML cargue antes.
$(function(){
	//El modo estricto hace que el navegador sea más exigente con tu código e intentará evitar errores potencialmente malos
	'use strict';

	//Cuando le demos click ejecutará una función.
	$('div.logo img').on('click', function(){
		console.log('Le has hecho click en el logo');
	})
	/*
	var copia = $('main article:last').clone();
	$('main').append(copia); 
	$('main').prepend(copia); 
	
	var copia = $('main article:last').clone();
	//= $(copia).appendTo('main');
	$(copia).prependTo('main');
	*/

})