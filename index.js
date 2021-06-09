var recomecar = 0
while (recomecar == 0){

let lanche = [0,'Xburguer','Xsalada','Xegg','Xtudo','Xpicanha']
let acompanhamento = [0,'Batata pequena','Batata média','Batata grande','Batata rústica','Cebola frita']
let bebida = [0,'Monster','Coca-Cola','Pepsi','Fanta','Suco natural']

let valorLanche = [0,10,12,14,16,18]
let valorAcompanhamento = [0,5,7,9,11,13]
let valorBebidas = [0,6,6,6,6,7]

function escolhaPedido () {
  console.log("RESPONDA TODAS AS PERGUNTAS A SEGUIR COM O NÚMERO");
  console.log("CORRESPONDENTE A CADA OPÇÃO!");
  console.log(" ");
  console.log("OPÇÕES DE PEDIDO:");
  console.log("1.Pedido completo");
  console.log("2.Apenas o lanche e a bebida");
  console.log("3.Apenas o lanche e o acompanhamento");
  console.log(" ");
  let opcaoEscolhida = prompt(`Qual opção de pedido você vai querer ${nome}? `);
  return opcaoEscolhida;
}

function pedidoCompleto () {
  let pedidoLanche = prompt("Qual será o lanche?");
  let pedidoAcompanhamento = prompt("Qual será o acompanhamento?");
  let pedidoBebida = prompt("Qual será a bebida?");
  console.log(" ");
  console.log(`> Seu pedido foi um ${lanche[pedidoLanche]} acompanhado de ${acompanhamento[pedidoAcompanhamento]} e de bebida ${bebida[pedidoBebida]}`);
  console.log(" ");
  console.log(`O valor total do seu pedido é de R$${valorLanche[pedidoLanche] + valorAcompanhamento[pedidoAcompanhamento] + valorBebidas[pedidoBebida]},00`)
  console.log(" ");
}

function pedidoIncompleto1 () {
  let pedidoLanche = prompt("Qual será o lanche?"); 
  let pedidoBebida = prompt("Qual será a bebida?");
  console.log(" ");
  console.log(`> Seu pedido foi um ${lanche[pedidoLanche]} e a bebida ${bebida[pedidoBebida]}`);
  console.log(" ");
  console.log(`O valor total do seu pedido é de R$${valorLanche[pedidoLanche] + valorBebidas[pedidoBebida]},00`)
}

function pedidoIncompleto2 () {
  let pedidoLanche = prompt("Qual será o lanche?");
  let pedidoAcompanhamento = prompt("Qual será o acompanhamento?");
  console.log(" ");
  console.log(`> Seu pedido foi um ${lanche[pedidoLanche]} acompanhado de ${acompanhamento[pedidoAcompanhamento]}`);
  console.log(" ");
  console.log(`O valor total do seu pedido é de R$${valorLanche[pedidoLanche] + valorAcompanhamento[pedidoAcompanhamento]},00`)
}

function formaPagamento () {
  console.log(" ");
  console.log("OPÇÕES DE PAGAMENTO:");
  console.log("1.Dinheiro");
  console.log("2.Cartão");
  console.log(" ");
  let escolhaPagamento = prompt("Qual será a forma de pagamento?");
  console.log(" ");
  return escolhaPagamento;
}

function entregaOuRetirada () {
  console.log(" ");
  console.log("OPÇÕES DE ENTREGA:");
  console.log("1.Retirar");
  console.log("2.Entregar");
  console.log(" ");
  let entrega = prompt("Você deseja retirar o pedido, ou que seja entregue?");
  console.log(" ");
  return entrega;
}

console.log(" ");
console.log("Seja bem-vindo! Este é o cardápio>");
console.log("----------------------------------");
console.log("Hamburgueres>");
console.log("1.Xburguer R$10,00");
console.log("2.Xsalada R$12,00");
console.log("3.Xegg R$14,00");
console.log("4.Xtudo R$16,00");
console.log("5.Xpicanha R$18,00");
console.log(" ");
console.log("Acompanhamentos>");
console.log("1.Batata pequena R$5,00");
console.log("2.Batata média R$7,00");
console.log("3.Batata grande R$9,00");
console.log("4.Batata rústica R$11,00");
console.log("5.Cebola frita R$13,00");
console.log(" ");
console.log("Bebidas>");
console.log("1.Monster R$6,00");
console.log("2.Coca-Cola R$6,00");
console.log("3.Pepsi R$6,00");
console.log("4.Fanta R$6,00");
console.log("5.Suco natural R$7,00");
console.log("----------------------------------");


let nome = prompt("Qual o seu nome?");
console.log(" ");
let opcaoPedido = escolhaPedido();

do {
switch(opcaoPedido){
  case '1':
  console.log(" ");
  pedidoCompleto();
  break;
  case '2':
  console.log(" ");
  pedidoIncompleto1();
  break;
  case '3':
  console.log(" ");
  pedidoIncompleto2();
  break;
}

var confirm = prompt("Você confirma o seu pedido?(caso queira refazer o pedido aperte '1' se você confirma aperte '2'.)")

}while(confirm == '1');

let opcaoPagamento = formaPagamento();
if(opcaoPagamento == '2'){
  let numeroCartao = prompt("Número do cartão");
  let nomeTitular = prompt("Nome do titular do cartão");
  let cvv = prompt("CVV:");
  console.log(" ");
  console.log("> Pagamento feito com sucesso");
}else{
  console.log("> Entregue o dinheiro ao entregador ou na retirada");
}

let opcaoEntrega = entregaOuRetirada();
if(opcaoEntrega == '1'){
  console.log("> Você poderá vir retirar seu pedido em 30 minutos,");
  console.log("agradecemos pela preferência :)");
}else{
  for(var endereco = prompt("Qual o endereço para entrega?"); endereco <= 3; endereco++)
  {console.log(endereco)} 
  let telefone = prompt("Telefone para contato");
  console.log("> Seu pedido será entregue em 40 minutos,");
  console.log("agradecemos pela preferência :)");
  console.log(" ");
  console.log(" ");
}

}