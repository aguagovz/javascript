// tarea 02 //

let largoPelo = prompt("¿Pelo largo o corto?")
let barba = prompt("¿Barba si o barba no?")

if(largoPelo === "largo" && barba === "si") {
	alert("Corte y afeitada");
} else if(largoPelo === "largo" && barba === "no") {
	alert("Corte");
} else {
	alert("Ud no necesita nada");
}

let mesDelAnio = prompt("Indicá el numero de mes en que naciste")

if(mesDelAnio === "1") {
	alert("Enero!");
} else if(mesDelAnio === "2") {
	alert("Febrero!");
} else if(mesDelAnio === "3") {
	alert("Marzo");
} else if(mesDelAnio === "4") {
	alert("Abril!");
} else if(mesDelAnio === "5") {
	alert("Mayo!");
} else if(mesDelAnio === "6") {
	alert("Junio!");
} else if(mesDelAnio === "7") {
	alert("Julio!");
} else if(mesDelAnio === "8") {
	alert("Agosto!");
} else if(mesDelAnio === "9") {
	alert("Septiembre");
} else if(mesDelAnio === "10") {
	alert("Octubre!");
} else if(mesDelAnio === "11") {
	alert("Noviembre!");
} else if(mesDelAnio === "12") {
	alert("Diciembre!");
} else {
	alert("Escribiste bien?");
}

switch (mesDelAnio) {
	case "1":
		alert("Enero");
		break;
	case "2":
		alert("Febrero");
		break;
	case "3":
		alert("Marzo");
		break;
	case "4":
		alert("Abril");
		break;
	case "5":
		alert("Mayo");
		break;
	case "6":
		alert("Junio");
		break;
	case "7":
		alert("Julio");
		break;
	case "8":
		alert("Agosto");
		break;
	case "9":
		alert("Septiembre");
		break;
	case "10":
		alert("Octubre");
		break;
	case "11":
		alert("Noviembre sin ti");
		break;
	case "12":
		alert("Feliz navidad");
		break;
	default: 
		alert("Escribí bien lym");
		break;
}

//throw ERROR //

try {
	throw "bebiteamo";
} catch (err){
	console.log(`An error ocurred with number: ${err}`);
}

let dayOfTheWeek = prompt("Qué día de la semana es hoy?");

try {
	switch (dayOfTheWeek) {
		case "Lunes":
			alert("1");
			break;
		case "Martes":
			alert("2");
			break;
		case "Miércoles":
			alert("3");
			break;
		case "Jueves":
			alert("4");
			break;
		case "Viernes":
			alert("5");
			break;
		case "Sábado":
			alert("6");
			break;
		case "Domingo":
			alert("7");
			break;
		default: 
			throw new Error("Día inexistente");
	}		//esto se ve después como "Error: Día inexistente"
} catch (err){
	console.log(`Hay un error: ${err}`);
}


try {
	if(dayOfTheWeek === "Lunes") {
		alert("1");
	} else if(mesDelAnio === "Martes") {
		alert("2");
	} else if(mesDelAnio === "Miércoles") {
		alert("3");
	} else if(mesDelAnio === "Jueves") {
		alert("4");
	} else if(mesDelAnio === "Viernes") {
		alert("5");
	} else if(mesDelAnio === "Sábado") {
		alert("6");
	} else if(mesDelAnio === "Domingo") {
		alert("7");
	} else { 
		throw new Error("Día inexistente");
	}		
} catch (err) {
	console.log(`Hay un error: ${err}`);
}