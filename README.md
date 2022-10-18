<h1 align="center">
  <img src="assets/reprograma-fundos-claros.png" alt="logo reprograma" width="500">
</h1>

# Tema da Aula

Turma Online 21 - Imersão JavaScript | Semana 6 | 2022 | Professora: [Luara Kerlen](https://github.com/luarakerlen)

### Instruções

Antes de começar, vamos organizar nosso setup.

- Fork esse repositório
- Clone o fork na sua máquina (Para isso basta abrir o seu terminal e digitar `git clone url-do-seu-repositorio-forkado`)
- Entre na pasta do seu repositório (Para isso basta abrir o seu terminal e digitar `cd nome-do-seu-repositorio-forkado`)
- [Add outras intrucoes caso necessario]

### Objetivo

- Aprender herança dentro da cadeia de protótipos;
- Entender como funcionam as classes, não apenas como syntax sugar, mas também as novas possibilidades que oferece.

### Resumo

O que veremos na aula de hoje?

- [Tema da Aula](#tema-da-aula)

  - [Instruções](#instruções)
  - [Objetivo](#objetivo)
  - [Resumo](#resumo)

- [Conteúdo](#conteúdo)

  - [Recaptulando](#recaptulando)
  - [ES6 Instantiation](#es6-instantiation)

  - [Exercícios](#exercícios)
  - [Material da aula](#material-da-aula)
  - [Links Úteis](#links-úteis)
  - [Contatos](#contatos)

# Conteúdo

## Recaptulando...

Vimos anteriormente algumas maneiras de criar funções construtoras e instanciar objetos através delas.

Apenas pra gente relembrar, vimos as seguintes maneiras de criar funções construtoras e instanciar objetos:

#### Functional Instantiation

```javascript
function Animal(type, name, age) {
	let animal = {};

	animal.type = type;
	animal.name = name;
	animal.age = age;

	animal.eat = function eat() {
		console.log(`O ${this.type} chamado ${this.name} está comendo`);
	};

	animal.sleep = function sleep(amount) {
		console.log(`O ${this.type} chamado ${this.name} está dormindo`);
		this.energy += amount;
		console.log(`Energia atual: ${this.energy}`);
	};

	return animal;
}

const animal1 = Animal('cachorro', 'Aslam', 3);
```

#### Functional Instantiation with Shared Methods

```javascript
const animalMethods = {
	eat: function eat() {
		console.log(`O ${this.type} chamado ${this.name} está comendo`);
	},

	sleep: function sleep(hours) {
		console.log(`O ${this.type} chamado ${this.name} está dormindo`);
		this.energy += hours;
		console.log(`Energia atual: ${this.energy}`);
	},
};

function Animal(type, name, age) {
	let animal = {};

	animal.type = type;
	animal.name = name;
	animal.age = age;
	animal.energy = 0;

	animal.eat = animalMethods.eat;
	animal.sleep = animalMethods.sleep;

	return animal;
}

const animal1 = Animal('cachorro', 'Aslam', 3);
```

#### Functional Instantiation with Shared Methods and Object.create()

```javascript
const animalMethods = {
	eat: function eat() {
		console.log(`O ${this.type} chamado ${this.name} está comendo`);
	},

	sleep: function sleep(hours) {
		console.log(`O ${this.type} chamado ${this.name} está dormindo`);
		this.energy += hours;
		console.log(`Energia atual: ${this.energy}`);
	},
};

function Animal(type, name, age) {
	let animal = Object.create(animalMethods);

	animal.type = type;
	animal.name = name;
	animal.age = age;
	animal.energy = 0;

	return animal;
}

const animal1 = Animal('cachorro', 'Aslam', 3);
```

#### Prototypal Instantiation

```javascript
function Animal(type, name, age) {
	let animal = Object.create(Animal.prototype);

	animal.type = type;
	animal.name = name;
	animal.age = age;
	animal.energy = 0;

	return animal;
}

Animal.prototype.eat = function eat() {
	console.log(`O ${this.type} chamado ${this.name} está comendo`);
};

Animal.prototype.sleep = function sleep(hours) {
	console.log(`O ${this.type} chamado ${this.name} está dormindo`);
	this.energy += hours;
	console.log(`Energia atual: ${this.energy}`);
};

const animal1 = Animal('cachorro', 'Aslam', 3);
```

#### Pseudoclassical Instantiation

```javascript
function Animal(type, name, age) {
	this.type = type;
	this.name = name;
	this.age = age;
	this.energy = 0;
}

Animal.prototype.eat = function eat() {
	console.log(`O ${this.type} chamado ${this.name} está comendo`);
};

Animal.prototype.sleep = function sleep(hours) {
	console.log(`O ${this.type} chamado ${this.name} está dormindo`);
	this.energy += hours;
	console.log(`Energia atual: ${this.energy}`);
};

const animal1 = new Animal('cachorro', 'Aslam', 3);
```

Como podemos perceber, a `Pseudoclassical Instantiation` é muito parecida com a maneira como criamos e instanciamos Classes. Na verdade, essa é a maneira com as Classes no JavaScript funcionam por trás dos panos.

Em 2015, o EcmaScript 6 (ES6) foi lançado com suporte para Classes e a palavra-chave `class`.

## ES6 Instantiation

A `ES6 Instantiation` utiliza a palavra-chave `class`ao invés de criar uma função regular. A classe então se torna uma função construtora quando criamos o `constructor`dentro dela. Os métodos para o objeto também são implementados dentro do escopo da classe:

```javascript
class Animal {
	constructor(type, name, age) {
		this.type = type;
		this.name = name;
		this.age = age;
		this.energy = 0;
	}

	eat() {
		console.log(`O ${this.type} chamado ${this.name} está comendo`);
	}

	sleep(hours) {
		console.log(`O ${this.type} chamado ${this.name} está dormindo`);
		this.energy += hours;
		console.log(`Energia atual: ${this.energy}`);
	}
}

const animal1 = new Animal('cachorro', 'Aslam', 3);
console.log(animal1);
```

Podemos perceber que essa maneira é muito parecida com a `Pseudoclassical Instantiation`. Aqui, é como se estivéssemos englobando tudo o que fizemos lá, dentro de uma classe que leva o nome da nossa `função construtora`.
Dessa maneira, utilizamos a palavra `class` ao invés de `function`, temos uma função construtora **dentro** da classe, bem como os métodos dela. Além disso, não utilizamos mais a palavra `prototype`.

#### → Vamos aplicar? [Exercício 1](/exercicios/para-sala/exercicio-1)

---

### Exercícios

- [Exercício para sala](/exercicios/para-sala/)
- [Exercício para casa](/exercicios/para-casa/)

### Material da aula

- [Material](/material)

### Links Úteis

-

### Contatos

- [LinkedIn](https://www.linkedin.com/in/luarakerlen/)
- [Github](https://github.com/luarakerlen)
- [Instagram](https://www.instagram.com/luaratech/)

<p align="center">
Desenvolvido com :purple_heart:  
</p>
