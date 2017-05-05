function Pokemon(nombre,color,poderAtaque){
	this.nombre = nombre
	this.color = color

	this.nivelAmistad = 0

    this.vida = 100
    this.poderAtaque = poderAtaque;
	this.mostrarPokemon = function(){
        document.getElementById('lista').innerHTML += ('Hola, soy: ' + this.nombre + ' y soy de color: ' + this.color + "<br>");	
    }

	this.aumentarAmistad = function(valor){
		this.nivelAmistad = this.nivelAmistad + valor;
	}
	this.atacar = function(pokemon){
		pokemon.vida = pokemon.vida - this.poderAtaque;
		var pelea = document.getElementById("pelea")
		pelea.innerHTML = this.nombre + " atacó a " + pokemon.nombre + " y ese ahora tiene " + pokemon.vida + " vida restante.";
	}
}

 const Pikachu = new Pokemon('Pikachu','amarillo', 100)
 const Charizard = new Pokemon('Charizard','rojo',200)
 const Blastoise = new Pokemon('Blastoise','celeste',150)
 const Venasaur = new Pokemon('Venasaur','verde',120)
Pikachu.mostrarPokemon();

function pelear(){
	var pokemonA = document.getElementById("pokemonA").value;
	var pokemonB = document.getElementById("pokemonB").value;
	var random = Math.floor((Math.random() + 100) + 1);
	var luchador1 = new Pokemon(pokemonA, this.color , random);
	var luchador2 = new Pokemon(pokemonB, this.color, random);

	if (luchador1.nombre == luchador2.nombre){
		alert("Gran batalla Pokemon, eres un gran entrenador.")
	}else {
		luchador1.atacar(luchador2);
	}
}