function traerPokemones(){
    fetch("https://pokeapi.co/api/v2/pokemon/")
  .then(res => res.json())
  .then(json => {
    const results = json.results; 
    const data = results.map(pokemon => ({
      id: pokemon.url.split('/').filter(Boolean).pop(),
      name: pokemon.name
    }));
    console.log(data);
    const lista=document.getElementById("listado_pokemon");
    // lista.innerHTML = ''; 
    data.map(pokemon => {
      lista.innerHTML += `<p>Name: ${pokemon.name}</p>`;
    });
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
  });
}

