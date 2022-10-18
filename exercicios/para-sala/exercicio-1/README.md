# Exercício de Sala 🏫  

- Conteúdo teórico: 
[ES6 Instantiation](https://github.com/reprograma/on21-imersao-js-S6-Prototype-2#es6-instantiation)

## Exercício 1

Defina uma função construtora no modelo ES6 Instantiation para um objeto `Bank`.

O banco deve ser instanciado com:
- [ ] Número
- [ ] Nome
- [ ] Taxa de transferência para outros bancos

Defina também uma função construtora para um objeto `Account`.

A conta deve ser instanciada com:
- [ ] Banco (deve ser um objeto do tipo `Bank`)
- [ ] Número da conta
- [ ] Número da agência
- [ ] Um montante inicial que deve ser diferente de zero

A conta também deve possuir:
- [ ] Quantidade de retiradas de dinheiro em bancos 24 horas realizadas, que deve ser inicializado com 0.
- [ ] Taxa a ser cobrada em cada retirada em bancos 24 horas. Cada tem direito a realizar uma quantidade X de retiradas gratuitas. Após isso, essa taxa começa a ser cobrada em cada retirada.

Os métodos de `Account` são:
- [ ] `credit(amount)`, que adiciona o valor especificado ao montante. Imprime na console o resultado.
- [ ] `debit(amount)`, que subtrai o valor especificado do montante. Imprime na console o resultado.
- [ ] `transferTo(anotherAccount, amount)`, que transfere o valor especificado desta conta para a outra conta (o parâmetro deve ser um objeto conta). Imprime na console o resultado. Caso não haja valor suficiente para a operação, ela deve retornar uma exceção com a mensagem especificada. Caso a transferência seja para um banco diferente, utilize a taxa do banco de origem.
- [ ] `cashWithdrawal(amount)`, para realizar retiradas de dinheiro em bancos 24 horas.
- [ ] `closeAccount()`, para encerrar a conta. Caso a conta possua saldo não é possível encerra-la.

Teste tudo o que foi criado.

---

Terminou o exercício? Dá uma olhada nessa checklist e confere se tá tudo certinho, combinado?!

- [ ] Fiz o fork do repositório.
- [ ] Clonei o fork na minha máquina (`git clone url-do-meu-fork`).
- [ ] Resolvi o exercício dentro da pasta resolução.
- [ ] Adicionei as mudanças. (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [ ] Commitei a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [ ] Pushei os commits na minha branch (`git push origin nome-da-branch`)
