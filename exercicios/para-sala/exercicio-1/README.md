# Exercício de Sala 🏫  

- Conteúdo teórico: 
[ES6 Instantiation](https://github.com/reprograma/on21-imersao-js-S6-Prototype-2#es6-instantiation)

## Exercício 1

Vamos criar um aplicativo de corridas estilo Uber apenas para mulheres.

Pra começar, defina uma função construtora ES6 Instantiation (Classe) para um objeto `Driver`.

Essa classe deve possuir os seguintes atributos:
- [ ] Nome - recebido como parâmetro no constructor
- [ ] Idade - recebido como parâmetro no constructor. Só é possível ser motorista caso a idade seja maior ou igual 18. Caso contrário, o objeto motorista não pode ser criado.
- [ ] Quantidade de corridas realizadas - inicializado com 0.
- [ ] Valor recebidos em corridas - inicializado com 0.

Crie outra classe chamada `Passenger`
Essa classe deve possuir os seguintes atributos:
- [ ] Nome - recebido como parâmetro no constructor
- [ ] Idade - recebido como parâmetro no constructor
- [ ] Senha - recebido como parâmetro no constructor
- [ ] Valor gasto em corridas - inicializado com 0.

Além disso, a classe `Passenger` deve possuir os seguintes métodos:
- [ ] `requestDrive(driver, amount, password)`, que serve para o passageiro solicitar uma corrida com um motorista específico.
Esse método deve obedecer as seguintes regras:
- O parâmetro `amount` é o valor da corrida.
- A corrida só pode ser solicitada se a senha (`password`) estiver correta.
- O parâmetro `driver` precisa, obrigatoriamente, ser do tipo `Driver`, caso contrário, a requisição não pode ser realizada.
- O motorista aumenta em 1 a sua quantidade de corridas realizadas
- O motorista aumenta o valor total recebido por corridas, de acordo com o parâmetro `amount`.
- O passageiro aumenta o valor total gasto em corridas, de acordo com o parâmetro `amount`.

Teste tudo o que foi criado.

---

Terminou o exercício? Dá uma olhada nessa checklist e confere se tá tudo certinho, combinado?!

- [ ] Fiz o fork do repositório.
- [ ] Clonei o fork na minha máquina (`git clone url-do-meu-fork`).
- [ ] Resolvi o exercício dentro da pasta resolução.
- [ ] Adicionei as mudanças. (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [ ] Commitei a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [ ] Pushei os commits na minha branch (`git push origin nome-da-branch`)
