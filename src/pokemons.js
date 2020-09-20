// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons

const getAllFirePokemons = (arr) => {
    let firePokemons = arr.filter((elem) => {
        return elem.type.includes("Fire");
    })

    return firePokemons;
}

// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon

const shortestPokemon = (arr) => {
    if (!arr.length) { return 0 }

    let height;
    let name;

    arr.forEach((elem) => {
        if (elem.height < height || height == undefined) {
            height = elem.height;
            name = elem.name;
        }
    })

    return name;
}

// Iteration 3: candy_count average - average of `candy_count` for all the pokemons

const candyAverage = (arr) => {
    if (!arr.length) { return 0 }

    let avg = arr.reduce((acc, elem) => {
        if (!elem["candy_count"]) { return acc }
        else { return acc + elem["candy_count"] }
    }, 0)

    return Number((avg / arr.length).toFixed(2));
}

// Iteration 4: images for the first 10 `Ground`  Pokemons

const getGroundPokeImg = (arr) => {
    if (!arr.length) { return 0 }
    let groundPoke = arr.filter((elem) => { return elem.type.includes("Ground") }).map((elem) => { return elem.img });

    if (groundPoke.length < 10) { return groundPoke; }
    else { return groundPoke.slice(0, 10) }
}

// Iteration 5: Find all pokemon names heavier than Pikachu

const getHeavyPokemons = (arr) => {
    if (!arr.length) { return 0 }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name === "Pikachu") {
            var pika = Number(arr[i].weight.slice(0, -3));
            break;
        }
    }
    console.log(pika);

    let heavy = arr.filter((elem) => {
        let weight = Number(elem.weight.slice(0, -3));
        return weight > pika;
    })

    return heavy.map((elem) => {return elem.name})
}

// Iteration 6: Alphabetic Order - Order by name and print the first 20 names

const orderAlphabetically = (arr) => {
    let pokemon = JSON.parse(JSON.stringify(arr));

    pokemon.sort((a, b) => {
        if(a.name > b.name){return 1}
        else if (a.name < b.name){return -1}
        else{return 0}
    })

    return pokemon.slice(0,20).map((elem) => {return elem.name});
}

// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 

const strongPokemons = (arr) => {
    return arr.filter((elem) => {return elem.weaknesses.length === 1}).map((elem) => {return elem.name}).slice(0,15);
}