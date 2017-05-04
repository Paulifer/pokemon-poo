function Pokemon(nombre,color,poderAtaque){
	this.nombre = nombre;
	this.color = color;

	this.nivelAmistad = 0;

    this.vida = 100;
    this.poderAtaque = poderAtaque;
	this.mostrarPokemon = function(){
    document.getElementById('lista').innerHTML += ('Hola. soy: ' + this.nombre + ' y soy de color: ' + this.color)
	}

	this.aumentarAmistad = function(valor){
		this.nivelAmistad = this.nivelAmistad + valor
	}
	this.atacar = function(pokemon){
		pokemon.vida = pokemon.vida - this.poderAtaque
	}
}
 const Pikachu = new Pokemon('Pikachu','amarillo', 100)
 const Charmander = new Pokemon('Charmander','rojo',20)
  Pikachu.atacar(Charmander)

  console.log(Charmander.vida)