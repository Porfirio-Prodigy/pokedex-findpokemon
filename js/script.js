const fetchPokemon = (id) => {

    const url = `https://pokeapi.co/api/v2/pokemon/`+id;

    const promise1 = fetch(url)
            .then(response => response.json())
                .then(pokemon => {
                    let namePokemon = pokemon['name'];
                    let art = pokemon['sprites']['other']['official-artwork']['front_default'];
                    let types = pokemon['types'][0]['type']['name'];
                    let idpokemon = pokemon['id'];

                    console.log(idpokemon); 

                    let img = document.getElementById('img-pokemon');
                    let name = document.getElementById('name');
                    let type = document.getElementById('type');
                    let idnumber = document.getElementById('idnumber');

                    img.src = art;
                    name.innerText = namePokemon;
                    type.innerText = types;
                    idnumber.innerText = "N° "+idpokemon;
    })  

    promise1.catch((error) => {
        alert("Digite um número entre 1 e 898, ou digite o nome de algum pokemon");
    })
}

