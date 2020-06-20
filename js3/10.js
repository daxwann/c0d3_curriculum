const fs = require('fs');
const fetch = require('node-fetch');

fetch('https://pokeapi.co/api/v2/pokemon/')
  .then(res => res.json())
  .then(data => getResult(data))
  .then(result => makeHtml(result))
  .catch(err => {
      console.log('Error: ', err);
  });

const getResult = data => {
  const result = {};
  result.prev = data.previous;
  result.next = data.next;
  return getPokemonMap(data.results)
    .then(map => {
      result.pokemonMap = map;
      return result; 
    })
    .catch(err => {
      console.log('Error: ', err);
    });
}

const getPokemonMap = results => {

  const arrayPromises = results.map(pokemon => {
    return fetch(pokemon.url)
      .then(result => result.json())
      .catch(err => err);
  })

  return Promise.all(arrayPromises)
  .then(results => {
    return results.reduce((pmap, r) => {
      pmap[r.name] = r.sprites.front_default;
      return pmap;
    }, {})
  }).catch(err => err);
}

const makeHtml = result => {
  const list = createPokemonList(result.pokemonMap);
  const file = createHtmlFile(list, result.prev, result.next);
  writeToFile(file);
}

const createPokemonList = pokemonMap => {
  const list = Object.entries(pokemonMap).reduce((list, entry) => {
    const [key, value] = entry;
    const card = createPokemonCard(key, value);
    return list = list + `<li>${card}</li>`
  }, "")

  return `<ul>${list}</ul>`;
}

const createPokemonCard = (name, imgSrc) => {
  return `
    <div>
      <p>${name}</p>
      <img src="${imgSrc}" alt="${name}"/>
    </div>
  `
}

const createHtmlFile = (pokemonList, prev, next) => `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Send a request</title>
</head>
<body>
<div>
<button id="prev" value=${prev} type="button">Previous</button>
<button id="next" value=${next} type="button">Next</button>
</div>
<div id="list">
${pokemonList}
</div>
<script>
  const fetchData = url => {
    if (url !== null) {
      fetch(url, {mode: 'cors'})
        .then(res => res.json())
        .then(data => getResult(data))
        .then(result => handleResult(result))
        .catch(err => {
          console.log('Error: ', err);
        });
    }
  }

  const getResult = ${getResult.toString()}
  const createPokemonCard = ${createPokemonCard.toString()}
  const createPokemonList = ${createPokemonList.toString()}
  const getPokemonMap = ${getPokemonMap.toString()}

  const handleResult = result => {
    const list = createPokemonList(result.pokemonMap);
    const prev = result.prev;
    const next = result.next;

    document.getElementById("list").innerHTML = list;
    document.getElementById("prev").value = prev;
    document.getElementById("prev").disabled = prev == null ? true : false;
    document.getElementById("next").value = next;
    document.getElementById("next").disabled = next == null ? true : false;
  }

  const navButtonEventHandler = event => {
    const url = event.currentTarget.value;
    fetchData(url);
  }

  document.getElementById("prev").addEventListener("click", navButtonEventHandler);
  document.getElementById("next").addEventListener("click", navButtonEventHandler);
  
  document.getElementById("prev").disabled = ${prev == null ? true : false}; 
  document.getElementById("next").disabled = ${next == null ? true : false}; 
</script>
</body>
</html>
`;

const writeToFile = htmlFile => {
  fs.writeFile('10.html', htmlFile, (err, data) => {
    if (err) return console.log(err);
    console.log("Success");
  });
}