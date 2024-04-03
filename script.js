fetch("https://pokeapi.co/api/v2/pokemon/")
  .then(res => res.json())
  .then(json => {
    const results = json.results; 
    const data = results.map(pokemon => ({
      id: pokemon.url.split('/').filter(Boolean).pop(),
      name: pokemon.name,
      imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/').filter(Boolean).pop()}.png`,
      backgroundColor: getRandomColor() // Generar color aleatorio
    }));
    console.log(data);
    const lista = document.getElementById("listado_pokemon");
    lista.innerHTML = ''; // Limpiar contenido anterior
    data.map(pokemon => {
      lista.innerHTML += `
        <div class="pokemon-item" style="background-color: ${pokemon.backgroundColor};">
          <p> 
            <img src="${pokemon.imageUrl}" alt="${pokemon.name}"> 
            <p> #${pokemon.id}</p>
            <p> ${pokemon.name}</p>
          </p>
        </div>
      `;
    });
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
  });

// Función para generar color aleatorio en formato hexadecimal
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
