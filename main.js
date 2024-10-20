var total = 0;
var itens = [];
var totalitens = 0;

function adicionarItem(descricao, preco) {
    itens.push({ descricao, preco });
    atualizarResumoPedido();
    totalitens = totalitens+1;
}

function atualizarResumoPedido() {
    const lista = document.getElementById('itensPedido');
    lista.innerHTML = '';
    total = 0;
    
    itens.forEach((item, index) => {
        total += item.preco;
        const li = document.createElement('li');
        li.innerHTML = `${item.descricao} - R$ ${item.preco.toFixed(2)} <button onclick="removerItem(${index})">Remover</button>`;
        lista.appendChild(li);
    });

    document.getElementById('totalPedido').innerText = total.toFixed(2);
}

function removerItem(index) {
    itens.splice(index, 1);
    atualizarResumoPedido();
}

function confirmarPedido() {
    alert("Pedido confirmado! Total: R$ " + total.toFixed(2) +  " Total de itens: " +  totalitens);
    itens = [];
    atualizarResumoPedido();
}

function cancelarPedido() {
    itens = [];
    atualizarResumoPedido();
}

function reservarMesa() {
    var nome = document.getElementById('nome').value;
    var nmesa = document.getElementById('numeromesa').value;
    var capacidade = document.getElementById('capacidade').value;
    var data = document.getElementById('data').value;
    var status = document.getElementById('status').value;
    var hora = document.getElementById('hora').value;

      if (nome && nmesa && capacidade && status && data && hora) {
        
          alert(`Mesa ${status} reservada para ${nome} em ${data} às ${hora} para ${capacidade} pessoas.`);
          document.getElementById('reservaForm').reset();
      } else {
          alert("Por favor, preencha todos os campos.");
      }
}

function cadastrarCliente(){
  var nome = document.getElementById('nome').value;
  var telefone = document.getElementById('telefone').value;
  var email = document.getElementById('email').value;
  var cpf = document.getElementById('cpf').value;
  
  if (nome && telefone && email && cpf) {
    alert(`Cadastro bem sucedido, bem vindo ${nome}!`);
    document.getElementById('cadastroForm').reset();
  }
  else{
    alert("Preencha todos os campos!");
  }
}