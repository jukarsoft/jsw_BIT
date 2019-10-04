//crear una función para capturar el onclick del formulario
		function descomponerFecha() {
			//obtener los datos del formulario
			var f = new Date(document.getElementById('fecha').value);
			//alert (f);
			//alert (document.getElementById('fecha').value);
			var anyo = obtenerAnyo(f); // obtiene el año de una fecha
			var mes =  obtenerMes(f); // obtiene el mes de una fecha
			var dia =  obtenerDia(f); // obtiene el dia de una fecha
			var diaSemana = obtenerDiaSemana(f); // obtiene el día de la semana de una fecha
			var form = document.getElementById('formulario');
			form.style.backgroundColor = cambiaColor(diaSemana); // llama a función para obtener color y cambia fondo del formulario
			/*
			alert ('f:  ' + f);
			alert ('y:  ' + anyo);
			alert ('mes:  ' + mes);
			alert ('dia:  ' + dia);
			alert ('dia semana:  ' + diaSemana);
			 */
			document.getElementById('salida').value = ('fecha= ' + f + ', año=' + anyo + ', mes= ' + mes + ', dia= ' + dia + ', dia de la semana= ' + diaSemana);
			var num=parseInt(Math.random() * (256 - 0) + 1);
			
			document.getElementsByTagName('body')[0].style.backgroundColor='rgba(' + num + ',191,255,0.7)';
		}		
		//funcion para obtener el color según dia de la semana
		function cambiaColor(diaSemana) {
			var color;
			
			switch (diaSemana) {
				case 'Domingo':
				color ='rgba(128,128,0,0.9)'; //olive #808000
				break
				case 'Lunes':
				color ='rgba(139,0,0,0.9)'; //dark red #8B0000
				break
				case 'Martes':
				color ='rgba(0,206,209,0.7)';//dark turquoise 	#00CED1
				break
				case 'Miércoles':
				color ='rgba(0,191,255,0.7)';//deep sky blue #00BFFF
				break
				case 'Jueves':
				color ='rgba(139,0,139,0.8)';//	dark magenta #8B008B
				break
				case 'Viernes':
				color ='rgba(238,130,238,0.5)';//violet #EE82EE
				break
				case 'Sábado':
				color ='rgba(34,139,34,0.5)'; //forest green #228B22
				break
				default: 'rgba(25,25,112,0.7)'; //midnight blue #191970
			}				
			return color;
		}

		function obtenerAnyo(fecha) {
			//Obtener el año
			var anyo4 = fecha.getFullYear();
			return anyo4;
		}

		function obtenerMes(fecha) {
			//Obtener el mes
			var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
			var mes = fecha.getMonth();
			return meses [mes];
		}

		function obtenerDia(fecha) {
			//Obtener el día
			var dia = fecha.getDate();
			return dia;
		}

		function obtenerDiaSemana(fecha) {
			//Obtener el día de la semana
			var diaSem = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
			var diaSemana = fecha.getDay();
			return diaSem[diaSemana];
		}
