
function comprobacionNombre(string) {
    
    for(let i = 0; i < string.length; i++){
        if(string[i]=="1"||string[i]=="2"||string[i]=="3"||string[i]=="4"||string[i]=="5"||string[i]=="6"||string[i]=="7"||string[i]=="8"||string[i]=="9"||string[i]=="0"){
            do {
                alert("no se premite el uso de numeros");
                string=prompt("vuelve aponer tu nombre pero sin el uso de numeros");
                
            } while (string[i]=="1"||string[i]=="2"||string[i]=="3"||string[i]=="4"||string[i]=="5"||string[i]=="6"||string[i]=="7"||string[i]=="8"||string[i]=="9"||string[i]=="0");
        }
    }
}
function comprobacionTurno(string){
        if(string.length>=2||string=="5"||string=="6"||string=="7"||string=="8"||string=="9"||string=="0"){
            do {
                alert("has colocado un numero invalido")
                string=prompt("Recuerda que las especialidades eran:\n1-Cardiologia 2-Pediatria 3-Odontologia 4-Oftalmologia")
            } while (string.length>=2||string=="5"||string=="6"||string=="7"||string=="8"||string=="9"||string=="0");
        }
}
function comprobacionMedicoCardiologia(string){
    if(string.length>=2||string=="4"||string=="5"||string=="6"||string=="7"||string=="8"||string=="9"){
        do{
            alert("has colocado un numero invalido");
            string=prompt("Recuerda que los medicos eran:"+medicosCardiologia[0]+medicosCardiologia[1]+medicosCardiologia[2]+medicosCardiologia[3]);
        }while(medico.length>=2||string=="4"||string=="5"||string=="6"||string=="7"||string=="8"||string=="9")
    }else if(string=="1"){
    string=Number(string);
    alert("elejiste al medico"+medicosCardiologia[string])
    let turno=confirm("Seguro que quieres agendar un turno con este medico para el dia lunes a las 22hrs");
        if(turno=true){
            alert("tu turno fue agendado correctamente con el doctor"+medicosCardiologia[string]);
        }else if (turno=false){
            alert("ok,en caso de cambiar de opinion recarga la pagina")
        }
    }
    else if(string=="2"){
        string=Number(string);
        alert("elejiste al medico"+medicosCardiologia[string])
        let turno=confirm("Seguro que quieres agendar un turno con este medico para el dia lunes a las 22hrs");
        if(turno=true){
            alert("tu turno fue agendado correctamente con el doctor"+medicosCardiologia[string]);
        }else if (turno=false){
            alert("ok,en caso de cambiar de opinion recarga la pagina")
        }
        }
    else if(string=="3"){
        string=Number(string);
        alert("elejiste al medico"+medicosCardiologia[string])
        let turno=confirm("Seguro que quieres agendar un turno con este medico para el dia lunes a las 22hrs");
        if(turno=true){
            alert("tu turno fue agendado correctamente con el doctor"+medicosCardiologia[string]);
        }else if (turno=false){
            alert("ok,en caso de cambiar de opinion recarga la pagina")
        }
        }
    else if(string=="0"){
        string=Number(string);
        alert("elejiste un turno de urgencia")
        let turno=confirm("El turno diponible mas cercano es el lunes a las 22hrs");
        if(turno=true){
            alert("tu turno fue agendado correctamente");
        }else if (turno=false){
            alert("ok,en caso de cambiar de opinion recarga la pagina")
        }
        }
}
function comprobacionMedicoPediatria(string){
    if(string.length>=2||string=="4"||string=="5"||string=="6"||string=="7"||string=="8"||string=="9"){
        do{
            alert("has colocado un numero invalido");
            string=prompt("Recuerda que los medicos eran:"+medicosPediatria[0]+medicosPediatria[1]+medicosPediatria[2]+medicosPediatria[3]);
        }while(medico.length>=2||string=="4"||string=="5"||string=="6"||string=="7"||string=="8"||string=="9")
    }else if(string=="1"){
    string=Number(string);
    alert("elejiste al medico "+medicosPediatria[string])
    let turno=confirm("Seguro que quieres agendar un turno con este medico para el dia lunes a las 22hrs");
        if(turno=true){
            alert("tu turno fue agendado correctamente con el doctor "+medicosPediatria[string]);
        }else if (turno=false){
            alert("ok,en caso de cambiar de opinion recarga la pagina")
        }
    }
    else if(string=="2"){
        string=Number(string);
        alert("elejiste al medico "+medicosPediatria[string])
        let turno=confirm("Seguro que quieres agendar un turno con este medico para el dia martes a las 14hrs");
        if(turno=true){
            alert("tu turno fue agendado correctamente con el doctor "+medicosPediatria[string]);
        }else if (turno=false){
            alert("ok,en caso de cambiar de opinion recarga la pagina")
        }
        }
    else if(string=="3"){
        string=Number(string);
        alert("elejiste al medico "+medicosPediatria[string])
        let turno=confirm("Seguro que quieres agendar un turno con este medico para el dia miercoles a las 12hrs");
        if(turno=true){
            alert("tu turno fue agendado correctamente con el doctor "+medicosPediatria[string]);
        }else if (turno=false){
            alert("ok,en caso de cambiar de opinion recarga la pagina")
        }
        }
    else if(string=="0"){
        string=Number(string);
        alert("elejiste un turno de urgencia")
        let turno=confirm("El turno diponible mas cercano es el lunes a las 22hrs");
        if(turno=true){
            alert("tu turno fue agendado correctamente");
        }else if (turno=false){
            alert("ok,en caso de cambiar de opinion recarga la pagina")
        }
        }
}
function comprobacionMedicoOdontologia(string){
    if(string.length>=2||string=="4"||string=="5"||string=="6"||string=="7"||string=="8"||string=="9"){
        do{
            alert("has colocado un numero invalido");
            string=prompt("Recuerda que los medicos eran:"+medicosOdontologia[0]+medicosOdontologia[1]+medicosOdontologia[2]+medicosOdontologia[3]);
        }while(medico.length>=2||string=="4"||string=="5"||string=="6"||string=="7"||string=="8"||string=="9")
    }else if(string=="1"){
    string=Number(string);
    alert("elejiste al medico "+medicosOdontologia[string])
    let turno=confirm("Seguro que quieres agendar un turno con este medico para el dia lunes a las 22hrs");
        if(turno=true){
            alert("tu turno fue agendado correctamente con el doctor "+medicosOdontologia[string]);
        }else if (turno=false){
            alert("ok,en caso de cambiar de opinion recarga la pagina")
        }
    }
    else if(string=="2"){
        string=Number(string);
        alert("elejiste al medico "+medicosOdontologia[string])
        let turno=confirm("Seguro que quieres agendar un turno con este medico para el dia martes a las 15hrs");
        if(turno=true){
            alert("tu turno fue agendado correctamente con el doctor "+medicosOdontologia[string]);
        }else if (turno=false){
            alert("ok,en caso de cambiar de opinion recarga la pagina")
        }
        }
    else if(string=="3"){
        string=Number(string);
        alert("elejiste al medico "+medicosOdontologia[string])
        let turno=confirm("Seguro que quieres agendar un turno con este medico para el dia jueves a las 10hrs");
        if(turno=true){
            alert("tu turno fue agendado correctamente con el doctor "+medicosOdontologia[string]);
        }else if (turno=false){
            alert("ok,en caso de cambiar de opinion recarga la pagina")
        }
        }
    else if(string=="0"){
        string=Number(string);
        alert("elejiste un turno de urgencia")
        let turno=confirm("El turno diponible mas cercano es el lunes a las 22hrs");
        if(turno=true){
            alert("tu turno fue agendado correctamente");
        }else if (turno=false){
            alert("ok,en caso de cambiar de opinion recarga la pagina")
        }
        }
}
function comprobacionMedicosOftalmologia(string){
    if(string.length>=2||string=="4"||string=="5"||string=="6"||string=="7"||string=="8"||string=="9"){
        do{
            alert("has colocado un numero invalido");
            string=prompt("Recuerda que los medicos eran:"+medicosOftalmologia[0]+medicosOftalmologia[1]+medicosoftalmologia[2]+medicosOftalmologia[3]);
        }while(medico.length>=2||string=="4"||string=="5"||string=="6"||string=="7"||string=="8"||string=="9")
    }else if(string=="1"){
    string=Number(string);
    alert("elejiste al medico "+medicosOftalmologia[string])
    let turno=confirm("Seguro que quieres agendar un turno con este medico para el dia lunes a las 22hrs");
        if(turno=true){
            alert("tu turno fue agendado correctamente con el doctor "+medicosOftalmologia[string]);
        }else if (turno=false){
            alert("ok,en caso de cambiar de opinion recarga la pagina")
        }
    }
    else if(string=="2"){
        string=Number(string);
        alert("elejiste al medico "+medicosOftalmologia[string])
        let turno=confirm("Seguro que quieres agendar un turno con este medico para el dia martes a las 15hrs");
        if(turno=true){
            alert("tu turno fue agendado correctamente con el doctor "+medicosOftalmologia[string]);
        }else if (turno=false){
            alert("ok,en caso de cambiar de opinion recarga la pagina")
        }
        }
    else if(string=="3"){
        string=Number(string);
        alert("elejiste al medico "+medicosOftalmologia[string])
        let turno=confirm("Seguro que quieres agendar un turno con este medico para el dia jueves a las 10hrs");
        if(turno=true){
            alert("tu turno fue agendado correctamente con el doctor "+medicosOftalmologia[string]);
        }else if (turno=false){
            alert("ok,en caso de cambiar de opinion recarga la pagina")
        }
        }
    else if(string=="0"){
        string=Number(string);
        alert("elejiste un turno de urgencia")
        let turno=confirm("El turno diponible mas cercano es el lunes a las 22hrs");
        if(turno=true){
            alert("tu turno fue agendado correctamente");
        }else if (turno=false){
            alert("ok,en caso de cambiar de opinion recarga la pagina")
        }
        }
}

const medicosCardiologia=["(0)Urgencias","(1)Martínez","(2)Fernández","(3)López"];

const medicosPediatria=["(0)Urgencias","(1)Pérez","(2)García","(3)Sánchez"];

const medicosOdontologia=["(0)Urgencias","(1)Rodríguez","(2)Torres","(3)Gómez"];

const medicosOftalmologia=["(0)Urgencias","(1)Díaz","(2)Ruiz","(3)Morales"];

let nombre=prompt("Hola¿cual es tu nombre?");
comprobacionNombre(nombre);
let sacarTurno=confirm("hola "+nombre+" ¿Quieres sacar un turno con uno de nuestros especialistas?");
if (sacarTurno=true) {
    alert("Actualmente contamos con solo 4 especialidades\n1-Cardiologia 2-Pediatria 3-Odontologia 4-Oftalmologia");
    let especialidad=prompt("Coloca el numero de cuya especialidad te gustaria sacar turno\nRecuerda que las especialidades disponibles son:\n1-Cardiologia 2-Pediatria 3-Odontologia 4-Oftalmologia");
    comprobacionTurno(especialidad)
    if(especialidad=="1"){
        alert("has seleccionado Cardiologia");
        alert("actualmente contamos con solo 3 medicos en el area de Cardiologia.\n1-Martínez 2-Fernández 3-López.\nPara sacar turno con alguno de estos medicos en especifico escribe el numero correspondiente .\nEn caso de nececitar un turno de forma urgente escribe 0 y se te asignara el proximo turno disponible con cualquier medico.");
        let medico=prompt("con quien quieres un turno\n1-Martínez 2-Fernández 3-López.\n0-urgencia");
        comprobacionMedicoCardiologia(medico);
    }else if(especialidad=="2"){
        alert("has seleccionado Pediatria")
        alert("actualmente contamos con solo 3 medicos en el area de Pediatria.\n1-Pérez 2-García 3-Sánchez.\nPara sacar turno con alguno de estos medicos en especifico escribe el numero correspondiente .\nEn caso de nececitar un turno de forma urgente escribe 0 y se te asignara el proximo turno disponible con cualquier medico.");
        let medico=prompt("con quien quieres un turno\n1-Pérez 2-García 3-Sánchez.\n0-urgencia");
        comprobacionMedicoPediatria(medico);
    }else if(especialidad=="3"){
        alert("has seleccionado Odontologia")
        alert("actualmente contamos con solo 3 medicos en el area de Odontologia.\n1-Rodríguez 2-Torres 3-Gómez.\nPara sacar turno con alguno de estos medicos en especifico escribe el numero correspondiente .\nEn caso de nececitar un turno de forma urgente escribe 0 y se te asignara el proximo turno disponible con cualquier medico.");
        let medico=prompt("con quien quieres un turno\n1-Rodríguez 2-Torres 3-Gómez.\n0-urgencia");
        comprobacionMedicoOdontologia(medico);
    }else if(especialidad=="4"){
        alert("has seleccionado Oftalmologia")
        alert("actualmente contamos con solo 3 medicos en el area de Oftalmologia.\n1-Díaz 2-Ruiz 3-Morales.\nPara sacar turno con alguno de estos medicos en especifico escribe el numero correspondiente .\nEn caso de nececitar un turno de forma urgente escribe 0 y se te asignara el proximo turno disponible con cualquier medico.");
        let medico=prompt("con quien quieres un turno\n1-Díaz 2-Ruiz 3-Morales.\n0-urgencia");
        comprobacionMedicosOftalmologia(medico)
    }
}
