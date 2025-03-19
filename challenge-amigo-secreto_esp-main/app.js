// Lista donde se almacenarán los nombres
let amigos = [];

function agregarAmigo() {
  // Capturar el valor del input
  let input = document.getElementById("amigo");
  let nombre = input.value.trim(); // Elimina espacios innecesarios

  // Validar que el campo no esté vacío
  if (nombre === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }

  // Agregar el nombre a la lista
  amigos.push(nombre);

  // Limpiar el input después de agregar
  input.value = "";

  // Actualizar la lista en pantalla
  mostrarLista();
}

function mostrarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // Limpiar la lista antes de actualizar

  // Recorrer la lista de amigos y mostrar en pantalla
  amigos.forEach((amigo, index) => {
    let item = document.createElement("li");
    item.textContent = amigo;

    // Botón para eliminar nombre de la lista
    let btnEliminar = document.createElement("button");
    btnEliminar.textContent = "X";
    btnEliminar.classList.add("btn-eliminar");
    btnEliminar.onclick = function () {
      eliminarAmigo(index);
    };

    item.appendChild(btnEliminar);
    lista.appendChild(item);
  });
}

function eliminarAmigo(index) {
  amigos.splice(index, 1); // Eliminar el nombre de la lista
  mostrarLista(); // Actualizar la lista en pantalla
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Agrega al menos un nombre antes de sortear.");
    return;
  }

  // Elegir un nombre al azar
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  let ganador = amigos[indiceAleatorio];

  // Mostrar el resultado en la pantalla
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${ganador}</strong> 🎉</li>`;
}
