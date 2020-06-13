const fs = require('fs');
const fetch = require('node-fetch');

fetch('https://pokeapi.co/api/v2/pokemon/')
  .then(res => res.json())
  .then(data => getPokemonMap(data))
  .then(pokemonMap => makeHtml(pokemonMap))
  .catch(err => {
      console.log('Error: ', err);
  });

const getPokemonMap = data => {
  const results = data.results;

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

const makeHtml = pokemonMap => {
  const list = createPokemonList(pokemonMap);
  const file = createHtmlFile(list);
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

const createHtmlFile = pokemonList => `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Send a request</title>
</head>
<body>
${pokemonList}
</body>
</html>
`;

const writeToFile = htmlFile => {
  fs.writeFile('9.html', htmlFile, (err, data) => {
    if (err) return console.log(err);
    console.log("Success");
  });
}
