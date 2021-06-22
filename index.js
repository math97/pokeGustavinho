const express = require('express');
const cors = require('cors');
const pagination = require('express-simple-pagination');

const app = express();

app.use(express.json());

app.use(pagination());

app.use(cors());
const paginationOptions = {
  min:5,
  max:100,
}

const poke =[
    {
      "name": "Bulbasaur",
      "number": "#001",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "first_type": "Grass",
      "second_type": "Poison"
    },
    {
      "name": "Ivysaur",
      "number": "#002",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
      "first_type": "Grass",
      "second_type": "Poison"
    },
    {
      "name": "Venusaur ",
      "number": "#003",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
      "first_type": "Grass",
      "second_type": "Poison"
    },
    {
      "name": "Charmander ",
      "number": "#004",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      "first_type": "Fire",
      "second_type": null
    },
    {
      "name": "Charmeleon",
      "number": "#005",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
      "first_type": "Fire",
      "second_type": null
    },
    {
      "name": "Charmander",
      "number": "#006",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
      "first_type": "Fire",
      "second_type": "Flying"
    },
    {
      "name": "Squirtle",
      "number": "#007",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
      "first_type": "Water",
      "second_type": null
    },
    {
      "name": "Wartortle",
      "number": "#008",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
      "first_type": "Water",
      "second_type": null
    },
    {
      "name": "Blastoise",
      "number": "#009",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
      "first_type": "Water",
      "second_type": null
    },
    {
      "name": "Caterpie",
      "number": "#010",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Metapod",
      "number": "#011",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    },
    {
      "name": "Butterfree",
      "number": "#012",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "first_type": "Bug",
      "second_type": null
    }
  ]



app.get('/',(request,response)=>{
  const page = request.query.page;
  const limit = request.query.limit;
  const startIndex = (page - 1)*limit;
  const endIndex = page*limit;
  const result = poke.slice(startIndex,endIndex);
  response.json(result)
});


app.listen(8080);