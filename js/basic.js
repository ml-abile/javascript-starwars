console.log('Olá, Javascript!')

var userName = 'Moira Luiza'
document.getElementById('user-name').innerHTML = userName

// Variáveis //
    // var nome = 'Mestre Yoda'
    // var idade = 100
    // var jedi = true

    // console.log(typeof nome)
    // console.log(typeof idade)
    // console.log(typeof jedi)

// Operadores matemáticos //
// + para somar, - para subtrair, * para multiplicar e / para dividir.

    // var n1 = 5
    // var n2 = 5
    // var total = n1 + n2 
    // console.log(total) // total = 10

    // var n1 = 5
    // var n2 = '5'
    // var total = n1 + n2 
    // console.log(total) // total = 55 pois quando o valor da var esta entre '' é considerado string, e nesse caso o operador + concatena a variavel int + string

    // var n1 = 5
    // var n2 = 5
    // var total = n1 + parseInt(n2)
    // console.log(total) // total = 10. O parseInt converte o tipo da var de string para inteiro.

// Operadores de comparação //
    // var v1 = 5
    // var v2 = '5'
    // var resultado = v1 !== v2
    // console.log(resultado)

    // Igual (==) : Retorna verdadeiro se os valores comparados forem iguais.
    // 1=='1' //true

    // Não igual (!=): Retorna verdadeiro se os valores comparados não forem iguais. Esse operador também pode ser chamado de diferente de.
    // 4!=1 //true

    // Igual estrito (===) : Esse operador é mais severo, só retorna verdadeiro se o valor e o tipo comparados forem iguais.
    // 3==='3' //false; 3===3 //true

    // Não igual estrito (!==) : Não se engane, esse operador vai retornar verdadeiro se os valores e ou os tipos forem diferentes
    // 3!=='3' //true; 3!==3 //false; 3!==4 //true

    // Maior que (>) : Compara se o operador da esquerda é maior que o da direita. Caso seja retorna verdadeiro
    // 1>2 //false; 5>3 //true; 4>'1' //true

    // Maior ou igual que (>=) : Compara se o operador da esquerda é maior ou igual ao da direita. Caso seja retorna verdadeiro
    // 1>=2 //false; 5>=3 //true; 4>='1' //true; 2>=2 // true

    // Menor que (<) : Compara se o operador da esquerda é menor que o da direita. Caso seja retorna verdadeiro
    // 1<2 //true; 5<3 //false; 4<'1' //false    

    // Menor ou igual que (<=) : Compara se o operador da esquerda é menor ou igual ao da direita. Caso seja retorna verdadeiro
    // 1<=2 //true; 5<=3 //false; 4<='1' //false; 2<=2 // true

// Funções //
    //exemplo 1:
    //function soma(n1, n2) {
    //     console.log(n1 + n2)
    // }
    // soma(5,5)

    // exemplo 2
    // function boasVindas(nome){
    //     alert(nome + ', seja bem-vindo(a)')
    // }
    // boasVindas('Moira')

    // exemplo 3
    // function soma(n1, n2){
    //     return n1 + n2
    // }
    // var resultado = soma(5,5)
    // console.log(resultado)

    // exemplo 4
    // function soma(a, b = 1) {
    //     return a +b;
    // }
    // var resultado = soma (2) 
    // console.log(resultado)

// Controle de fluxos //
    // Sendo um cliente correntista do banco 
    // Posso sacar dinheiro em caixas eletrônicos
    // Para poder comprar em lugares que não aceitam o cartão de débito ou crédito.
    
    // Desenvolvimento: 
    // var saldo = 1000
    // function saque(valor){
        
    //     if (valor > saldo) {
    //         console.log('Valor do saque superior ao saldo!')
    //     }
    //     else if (valor > 700) {
    //         console.log('Valor do saque superior ao máximo permitido por operação!')
    //     }
    //     else {
    //         saldo = saldo - valor
    //     }
    // }
    // saque(201)
    // console.log('Valor do saldo é: ' + saldo)

    // Cenários: 
    // Cenário 1: Saque com Sucesso
    // Dado que meu saldo é de 1000 reais 
    // Quando faço um saque de 500 reais
    // Então o valor do saque deve ser deduzido do meu saldo.

    // Cenário 2: Saque com valor superior ao saldo 
    // Dado que meu saldo é de 1000 reais 
    // Quando faço um saque de 1001 reais 
    // Então não deve deduzir do meu saldo 
    // E deve mostrar uma mensagem de alerta informando que o valor é superior ao saldo.

    // Cenário 3: Saque com valor máximo
    // Dado que meu saldo é de 1000 reais 
    // E o valor máximo por operação é de 700 reais
    // Quando faço um saque de 701 reais 
    // Então não deve deduzir do meu saldo 
    // E deve mostrar uma mensagem de alerta informando que o valor é superior ao máximo permitido por operação.

// Arrays // 

    // var gaveteiro = ['Meias', 'Gravatas', 'Documentos', 'Salgadinhos']
    // console.log(gaveteiro[0])

    // var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader']
    // console.log(typeof personagens)

    // personagens.push('C3pO') // push = adiciona mais um item na lista.
    // personagens.push('R2D2')
    // console.log(personagens)

    // // personagens.pop() // pop = remove o último item da lista.

    // personagens = personagens.filter(function(p){
    //     return p !== 'Darth Vader'
    // })

    // personagens = personagens.filter(function(p){
    //     return p === 'Mestre Yoda'
    // })

    // console.log(personagens)

// Controles de Repetição (Loop) //

    // var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader']
    // console.log(typeof personagens)

    // personagens.forEach(function(p){
    //     console.log(p)
    // })

    // for (var i in personagens){
    //     console.log(personagens[i])
    // }

    // for (var i = 0; i <= 10; i ++ ){
    //     console.log(i)
    // }

// Objetos //
    // var yoda = {
    //     nome:'Meste Yoda',
    //     idade: 100,
    //     jedi: true,
    //     mostraIdade: function(){
    //         console.log(`A idade do ${this.nome} é ${this.idade} anos.`)
    //     }
    // }
    // console.log(yoda)
    // yoda.mostraIdade()

// Constantes //
// Constantes: valor não pode mudar assim como é possível na variavel.

    // var nome = 'Darth Vader'
    // console.log(nome)

    // nome = 'Mestre Yoda'
    // console.log(nome)

    // const nome = 'Princesa Leia'
    // console.log(nome)

    // nome = 'Mestre Yoda'
    // console.log(nome)