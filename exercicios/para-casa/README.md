# Exercício de Casa 🏠 

Defina uma função construtora no modelo ES6 Instantiation (classe) para um objeto `Person`.
A classe deve possuir as seguintes propriedades:
- [ ] `Nome`
  - Recebido por parâmetro durante a instanciação.

- [ ] `CPF`
  - Recebido por parâmetro durante a instanciação.
  - Deve ser um parâmetro privado.

Defina também uma classe para um objeto `Bank`.
O banco deve possuir as seguintes propriedades:
- [ ] `Número`
  - Recebido por parâmetro durante a instanciação.

- [ ] `Nome`
  - Recebido por parâmetro durante a instanciação.

- [ ] `Taxa de transferência para outros bancos`
  - Recebido por parâmetro durante a instanciação.
  - Deve ser um parâmetro privado.

- [ ] `Quantidade de clientes que esse banco possui`.
  - Deve ser inicializado com 0 e aumentar a medida que um cliente é associado a esse banco.
  - Deve ser um parâmetro privado, mas pode-se ter acesso quando necessário.

Defina ainda uma classe `Client`, herdando da classe `Person`.
Um cliente possui também as seguintes propriedades:
- [ ] `Uma array de bancos ao qual é associada`
  - Deve ser inicializado vazio.

Como métodos da classe `Client`, temos:
- [ ] `addBank(bank)`: associa um banco a esse cliente.
  - O parâmetro deve obrigatoriamente ser do tipo `Bank`.
  - Lembrar de aumentar a quantidade de clientes que esse banco possui.

- [ ] `deleteBank(bank)`: desassocia um banco a esse cliente.
  - O parâmetro deve obrigatoriamente ser do tipo `Bank`.
  - Lembrar de diminuir a quantidade de clientes que esse banco possui.

Por fim, defina uma classe para um objeto `BankAccount`.
A conta deve possuir as seguintes propriedades:
- [ ] `Cliente a qual essa conta pertence`:
  - O parâmetro deve obrigatoriamente ser do tipo `Client`.
  - Recebido por parâmetro durante a instanciação.

- [ ] `Banco`:
  - O parâmetro deve obrigatoriamente ser do tipo `Bank`.
  - A conta só pode ser criada caso a pessoa seja cliente desse banco.
  - Recebido por parâmetro durante a instanciação.

- [ ] `Número da conta`
  - Recebido por parâmetro durante a instanciação.
  
- [ ] `Número da agência bancária`
  - Recebido por parâmetro durante a instanciação.
  
- [ ] `Um montante`
  - Deve ser inicializado com 0.
  - Deve ser um parâmetro privado.

- [ ] `Quantidade de retiradas de dinheiro em bancos 24 horas`
  - Deve ser inicializado com 0.
  - Deve ser um parâmetro privado.

- [ ] `Taxa a ser cobrada em cada retirada em bancos 24 horas`.
  - Recebido por parâmetro durante a instanciação.
  - Cada conta tem direito a realizar X (você define) retiradas gratuitas. Após isso, essa taxa começa a ser cobrada em cada retirada.
  - Deve ser um parâmetro privado.

A classe `BankAccount` possui os seguintes métodos:
- [ ] `credit(amount)`: adiciona o valor especificado ao montante.
  - Imprima na console o resultado.

- [ ] `debit(amount)`: subtrai o valor especificado do montante.
  - Imprima na console o resultado.

- [ ] `transferTo(anotherAccount, amount)`: transfere o valor especificado desta conta para a outra conta.
  - O parâmetro `anotherAccount` deve obrigatoriamente ser do tipo `BankAccount`.
  - Caso não haja valor suficiente para a operação, ela deve retornar uma mensagem para o usuário.
  - Caso a transferência seja para um banco diferente do cliente que está realizando, utilize a taxa do banco de origem.
  - Imprima na console o resultado.

- [ ] `cashWithdrawal(amount)`: realiza retiradas de dinheiro em bancos 24 horas.
  - Caso a quantidade de retiradas tenha ultrapassado o limite, a taxa deve ser cobrada.
  - A cada retirada realizada, informe ao cliente quantas retiradas ele já realizou e se ainda possui retiradas gratuitas.
    - Se sim, informe quantas.
    - Se não, informe a taxa que será cobrada a cada retirada.
  - Imprima na console o resultado.

- [ ] `closeAccount()`: encerra a conta.
  - Caso a conta possua saldo não é possível encerrá-la.
  - Imprima na console o resultado.

Teste tudo o que foi criado.

---

Terminou o exercício? Dá uma olhada nessa checklist e confere se tá tudo certinho, combinado?!

- [ ] Fiz o fork do repositório.
- [ ] Clonei o fork na minha máquina (`git clone url-do-meu-fork`).
- [ ] Criei minha branch (` git checkout -b nome-sobrenome `)
- [ ] Criei a pasta com o meu nome dentro da pasta entregas (` mkdir nome-sobrenome`)
- [ ] Resolvi o exercício dentro da minha pasta. Como no [exemplo](/on21-imersao-js-S1-TDD/exercicios/para-casa/entregas/exemplo-nome-sobrenome/).
- [ ] Adicionei as mudanças. (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [ ] Commitei a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [ ] Pushei os commits na minha branch (`git push origin nome-da-branch`)
- [ ] Criei um Pull Request seguindo as orientações que estao nesse [documento](/on21-imersao-js-S1-TDD/exercicios/para-casa/instrucoes-pull-request.md).