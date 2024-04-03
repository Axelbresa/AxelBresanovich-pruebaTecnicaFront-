function traerPokemones(){
  fetch("https://pokeapi.co/api/v2/pokemon/")
  .then(res => res.json())
  .then(json => {
      const results = json.results; 
      const data = results.map(pokemon => ({
          id: pokemon.url.split('/').filter(Boolean).pop(),
          name: pokemon.name,
          imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/').filter(Boolean).pop()}.png` 
      }));
      console.log(data);
      const lista = document.getElementById("listado_pokemon");
      lista.innerHTML = ''; // Limpiar contenido anterior
      data.map(pokemon => {
          lista.innerHTML += `
              <div class="pokemon-item">
                  <p> <img src="${pokemon.imageUrl}" alt="${pokemon.name}"> 
                  #${pokemon.id} ${pokemon.name}</p>
              </div>
          `;
      });
  })
  .catch(error => {
      console.error('Error al obtener los datos:', error);
  });
}
