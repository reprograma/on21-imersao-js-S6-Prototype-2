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
  	- [Métodos e propriedades estáticas](#métodos-e-propriedades-estáticas)
	- [Herança](#heran%C3%A7a)
	- [Modificadores de acesso](#modificadores-de-acesso)

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

#### Verificando classe

Caso a gente queira, em algum momento do código, verificar a classe de algum objeto, basta usar a palavra `instanceof`:

```javascript
console.log(animal1 instanceof Animal); //true
```

Vamos alterar um pouco a nossa classe pra ver maneiras de aplicar isso:

```javascript
class FullName {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
}

const fullNameAnimal1 = new FullName('Aslam', 'Rangel');

class Animal {
	constructor(type, fullName, age) {
		if (fullName instanceof FullName) {
			this.type = type;
			this.fullName = fullName;
			this.age = age;
			this.energy = 0;
		} else {
			throw 'O parâmetro fullName precisa ser instância da classe FullName';
		}
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

const animal1 = new Animal('cachorro', fullNameAnimal1, 3);
console.log(animal1);
```

#### → Vamos aplicar? [Exercício 1](/exercicios/para-sala/exercicio-1)

### Métodos e propriedades estáticas

Métodos e propriedades **estáticas** são aquelas que pertencem à classe, não aos objetos instanciados a partir dela. Para isso, utilizamos a palavra-chave `static`

Podemos criar um exemplo, uma propriedade que conta a quantidade de animais criados a partir da nossa classe animal:

```javascript
class Animal {
	constructor(type, name, age, hungry) {
		this.type = type;
		this.name = name;
		this.age = age;
		this.energy = 0;
		this.hungry = hungry;
		this.constructor.animals.push({ name: this.name, hungry: this.hungry });
	}

	eat() {
		console.log(`O ${this.type} chamado ${this.name} está comendo`);
	}

	sleep(hours) {
		console.log(`O ${this.type} chamado ${this.name} está dormindo`);
		this.energy += hours;
		console.log(`Energia atual: ${this.energy}`);
	}

	static animals = [];
}

console.log(Animal.animals); //[]

const animal1 = new Animal('cachorro', 'Aslam', 3, 23);
const animal2 = new Animal('cachorro', 'Caju', 3, 40);
const animal3 = new Animal('cachorro', 'Frida', 3, 32);
const animal4 = new Animal('cachorro', 'Cacau', 3, 17);

console.log(Animal.animals); // [{ name: 'Aslam', hungry: 19 }, { name: 'Caju', hungry: 40 }, { name: 'Frida', hungry: 32 }, { name: 'Cacau', hungry: 17 }]
```

No exemplo acima, o array `animals` pertence à classe Animal, não a algum objeto instanciado. Portanto, conseguimos accesar essa propriedade sem precisar chamar nenhum objeto.

Podemos ainda criar métodos estáticos, como por exemplo:

```javascript
class Animal {
	constructor(type, name, age, hungry) {
		this.type = type;
		this.name = name;
		this.age = age;
		this.energy = 0;
		this.hungry = hungry;
		this.constructor.animals.push({ name: this.name, hungry: this.hungry });
	}

	eat() {
		console.log(`O ${this.type} chamado ${this.name} está comendo`);
	}

	sleep(hours) {
		console.log(`O ${this.type} chamado ${this.name} está dormindo`);
		this.energy += hours;
		console.log(`Energia atual: ${this.energy}`);
	}

	static animals = [];

	static nextToEat(animalsToEat) {
		const sortedByHungry = animalsToEat.sort((a, b) => {
			return b.hungry - a.hungry;
		});

		console.log(sortedByHungry[0].name);
	}
}

const animal1 = new Animal('cachorro', 'Aslam', 3, 23);
const animal2 = new Animal('cachorro', 'Caju', 3, 40);
const animal3 = new Animal('cachorro', 'Frida', 3, 32);
const animal4 = new Animal('cachorro', 'Cacau', 3, 17);

console.log(Animal.animals);
Animal.nextToEat(Animal.animals);
```

Agora, criamos um método `nextToEat` que retorna o nome do próximo animal que deve comer, de acordo com o tamanho da fome da lista de animais que criamos.

#### → Vamos aplicar? [Exercício 2](/exercicios/para-sala/exercicio-2)

### Herança

A herança permite definir uma classe que recebe todas as funcionalidades de uma classe pai e permite adicionar mais.
Usando herança de classe, uma classe pode herdar todos os métodos e propriedades de outra classe.
A herança é um recurso útil que permite a reutilização do código. Para usar a herança de classe, você usa a palavra-chave `extends`.

```javascript
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	speak() {
		console.log(`A pessoa de nome ${this.name} está falando`);
	}
}

class User extends Person {}

const user1 = new User('Luara', 27);
console.log(user1);
user1.speak();
```

#### Sobrescrita de construtor

Se quisermos modificar um construtor de uma classe que herda outra, precisamos sobrescrever o construtor da classe de origem utilizando a palavra-chave `super`. Caso contrário, recebemos um erro:

```javascript
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	speak() {
		console.log(`A pessoa de nome ${this.name} está falando`);
	}
}

class User extends Person {
	constructor(name, age, email, password) {
		super(name, age);
		this.email = email;
		this.password = password;
	}
}

const user1 = new User('Luara', 27, 'luarakerlen@hotmail.com', 123456);
console.log(user1);
user1.speak();
```

#### Sobrescrita de método

Também é possível sobrescrever um método que existe na classe de origem. Para isso, basta escrever um método com o mesmo nome. Dessa maneira, ao ser executado, o programa levará em consideração o método criado na classe herdeira:

```javascript
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	speak() {
		console.log(`A pessoa de nome ${this.name} está falando`);
	}
}

class User extends Person {
	constructor(name, age, email, password) {
		super(name, age);
		this.email = email;
		this.password = password;
	}

	speak() {
		console.log(`A usuária de nome ${this.name} está falando`);
	}
}

const user1 = new User('Luara', 27, 'luarakerlen@hotmail.com', 123456);
console.log(user1);
user1.speak();
```

Além disso, também é possível apenas **acrescentar** algo no método herdado. Para isso, precisamos criar um método de mesmo nome na classe herdeira e utilizar a sintaxe `super.nomeDoMetodo()` dentro dela:

```javascript
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	speak() {
		console.log(`A pessoa de nome ${this.name} está falando`);
	}
}

class User extends Person {
	constructor(name, age, email, password) {
		super(name, age);
		this.email = email;
		this.password = password;
	}

	speak() {
		super.speak();
		console.log(`A pessoa que está falando é uma usuária.`);
	}
}

const user1 = new User('Luara', 27, 'luarakerlen@hotmail.com', 123456);
console.log(user1);
user1.speak();
```

#### Verificando classe herdadas

Ao criar uma instância de uma classe herdeira, nosso objeto passa a ser uma instância tanto da classe herdeira, quanto da classe de origem. Conseguimos verificar isso utilizando novamente o `instaceof`.

```javascript
console.log(user1 instanceof Person); //true
console.log(user1 instanceof User); //true
```

#### → Vamos aplicar? [Exercício 3](/exercicios/para-sala/exercicio-3)

### Modificadores de acesso

Os modificadores de acesso em JavaScript são muito recentes na linguagem. Mas eles jã existem há algum tempo em outras linguagens.
Eles já foram estudados em "Encapsulamento", mas podemos lembrar a respeito.

Em JavaScript, temos os seguintes tipos de acesso para as nossas propriedades e nossos métodos:

- `public` (público)
- `private` (privado) -> #

#### Public

Um método ou propriedade **pública** pode ser acessado em qualquer lugar da minha aplicação:

```javascript
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	speak() {
		console.log(`A pessoa de nome ${this.name} está falando`);
	}
}

class User extends Person {
	constructor(name, age, email, password) {
		super(name, age);
		this.email = email;
		this.password = password;
	}

	speak() {
		super.speak();
		console.log(`A pessoa que está falando é uma usuária.`);
	}
}

const user1 = new User('Luara', 27, 'luarakerlen@hotmail.com', 123456);

console.log(user1.name); //Luara
console.log(user1.age); //27
console.log(user1.email); //luarakerlen@hotmail.com
console.log(user1.password); //123456
```

#### Private

Um método ou propriedade **privado** pode ser acessado apenas dentro da própria classe, mas nunca em um objeto ou qualquer outro lugar.

Esse modificador de acesso é muito útil quando temos informações que precisam estar naquele objeto, mas o mesmo não pode acessá-lo ou modificá-lo.

Para indicar uma propriedade ou método privado, utilizamos o símbolo # antes do nome da propriedade ou do método.

```javascript
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	speak() {
		console.log(`A pessoa de nome ${this.name} está falando`);
	}
}

class User extends Person {
	#password;
	constructor(name, age, email, password) {
		super(name, age);
		this.email = email;
		this.#password = password;
	}

	speak() {
		super.speak();
		console.log(`A pessoa que está falando é uma usuária.`);
	}

	#encryptPassword() {
		return (this.#password = `*** ${this.#password} + ***`);
	}
}

const user1 = new User('Luara', 27, 'luarakerlen@hotmail.com', 123456);
console.log(user1.#password); //ERRO: A propriedade '#password' não é acessível fora da classe 'User' porque tem um identificador privado.ts
console.log(user1.#encryptPassword()); //ERRO: A propriedade '#encryptPassword' não é acessível fora da classe 'User' porque tem um identificador privado.
```

#### Get e Set

As classes JavaScript contam com dois métodos especiais:
- um com o prefixo `get`, que tem a função de **retornar um valor** de um parâmetro.
- outro com prefixo `set` que serve para **atribuir um valor** a um parâmetro.

Nós chamamos eles de Getters e Setters, pois eles tem a **função** de fazer um `get` (pegar) ou um `set` (atribuir).
Ambos funcionam como se fossem uma propriedade da classe.

Esses métodos são ideais para serem utilizados, quando temos parâmetros privados.

```javascript
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	speak() {
		console.log(`A pessoa de nome ${this.name} está falando`);
	}
}

class User extends Person {
	#password;
	constructor(name, age, email, password) {
		super(name, age);
		this.email = email;
		this.#password = password;
	}

	speak() {
		super.speak();
		console.log(`A pessoa que está falando é uma usuária.`);
	}

	#encryptPassword() {
		return (this.#password = `*** ${this.#password} + ***`);
	}

	get password() {
		//Aqui dentro, podemos ter verificações antes de retornar a senha para quem está pedindo, para tornar a nossa aplicação mais segura
		return this.#password
	}

	set password(newPassword) {
		//Aqui dentro, podemos ter verificações antes de trocar a senha para quem está solicitando a troca, para tornar a nossa aplicação mais segura
		this.#password = newPassword
	}
}
```

#### → Vamos aplicar? [Exercício 4](/exercicios/para-sala/exercicio-4)

---

### Exercícios

- [Exercício para sala](/exercicios/para-sala/)
- [Exercício para casa](/exercicios/para-casa/)

### Material da aula

- [Material](/material)

### Links Úteis

- [Playlist de milhões](https://open.spotify.com/playlist/14rUpFrriVs08gUdjrxAeg?si=da47a580356d4ce4)
- [Playlist proibidão 🤫](https://open.spotify.com/playlist/1hNtTxH7sh12qYWwKyhdb8?si=d3a82f7d95a74cc9)

### Contatos

- [LinkedIn](https://www.linkedin.com/in/luarakerlen/)
- [Github](https://github.com/luarakerlen)
- [Instagram](https://www.instagram.com/luaratech/)

<p align="center">
Desenvolvido com :purple_heart:  
</p>
