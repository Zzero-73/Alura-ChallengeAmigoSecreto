// // El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Para almacenar los datos de los nombres
let Datos={ListaAmigosIngresados:[]};
// Hacemos que el puntero este dentro del cuadro de texto
document.getElementById('amigo').focus();
//crear una función para asignar los nombres que ingresaremos
function agregarAmigo(){
    //Ingresamos un nombre a la caha de texto
    let NombreAmigo=document.getElementById('amigo').value.trim();
    if (NombreAmigo===''){
        alert('⚠️ Por favor ingresar un nombre válido 🧐​👉​');
        // Hacemos que el puntero este dentro del cuadro de texto
        document.getElementById('amigo').focus();
        return;
    }
    else{
        //Limpiar los nombres mostrados en la web
        document.getElementById('resultado').innerHTML = '';
        //Para que vaya contando +1 en la lista que se vean los nombres
        let Contador = Datos.ListaAmigosIngresados.length + 1;
        //Aqui creamos un nuevo párrafo
        NuevoElemento=document.createElement('p');
        //Aquí lo mostramos tanto con el contador indicando cuantos va ingresando y con que nombre
        NuevoElemento.textContent=`${Contador}. ${NombreAmigo}`;
        //Aquí asignamos al bloque de lista de amigos
        document.getElementById('listaAmigos').appendChild(NuevoElemento);
        //Aquí agregaremos a nuestra lista guardando
        Datos.ListaAmigosIngresados.push(NombreAmigo);
        // Limpiamos el input
        document.getElementById('amigo').value = '';
        // Hacemos que el puntero este dentro del cuadro de texto
        document.getElementById('amigo').focus();
        //Habilitamos el boton
        document.getElementById('Sortear').removeAttribute('disabled');
        return;
    }
}

function sortearAmigo(){
    //Limpiar los nombres mostrados en la web
    document.getElementById('listaAmigos').innerHTML = '';
    //Aquí para sortear al azar el nombre
    let Indice = Math.floor(Math.random()*Datos.ListaAmigosIngresados.length);
    //Mostrar el nombre sorteado
    document.getElementById('resultado').textContent = '👏​🥳¡​Felicidades! ::: '+Datos.ListaAmigosIngresados[Indice] + ' ::: has sido tú';
    //Inhabilitar nuevamente el botón
    document.getElementById('Sortear').setAttribute('disabled','true');
    //Limpar la variable lista
    Datos.ListaAmigosIngresados=[]
    // Hacemos que el puntero este dentro del cuadro de texto
    document.getElementById('amigo').focus();
}
