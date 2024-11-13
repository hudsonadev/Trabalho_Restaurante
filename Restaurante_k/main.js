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
    var nmesa = parseInt(document.getElementById('numeromesa').value);
    var capacidade = parseInt(document.getElementById('capacidade').value);
    var data = document.getElementById('data').value;
    var status = document.getElementById('status').value;
    var hora = document.getElementById('hora').value;

    if (nome && nmesa && capacidade && status && data && hora) {
        if (nmesa < 1 || nmesa > 10) {
            alert("O número da mesa deve estar entre 1 e 10.");
            return;
        }

        if (capacidade < 1 || capacidade > 7) {
            alert("A capacidade da mesa deve estar entre 1 e 7.");
            return;
        }

        if (status !== "Básica" && status !== "Premium") {
            alert("O status deve ser 'Básica' ou 'Premium'.");
            return;
        }

        // Verificar se data e hora da reserva sao anteriores a que nós reservou
        var dataHoraReserva = new Date(`${data}T${hora}`);
        var dataHoraAtual = new Date();
        
        if (dataHoraReserva < dataHoraAtual) {
            alert("A data e hora devem ser posteriores ao momento atual.");
            return;
        }

        alert(`Mesa ${nmesa}, ${status} reservada para ${nome} em ${data} às ${hora} para ${capacidade} pessoas.`);
        document.getElementById('reservaForm').reset();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}


function cadastrarCliente() {
    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;
    var email = document.getElementById('email').value;
    var cpf = document.getElementById('cpf').value;

    if (nome && telefone && email && cpf) {
        // Verificar 11 dígitos cpf e telefone
        if (cpf.length !== 11 || isNaN(cpf)) {
            alert("O CPF deve conter exatamente 11 dígitos numéricos.");
            return;
        }
        
        if (telefone.length !== 11 || isNaN(telefone)) {
            alert("O telefone deve conter exatamente 11 dígitos numéricos.");
            return;
        }

        // Verificar se email termina com @gmail.com
        if (!email.endsWith("@gmail.com")) {
            alert("O email deve ser um endereço @gmail.com.");
            return;
        }

        alert(`Cadastro bem sucedido, bem-vindo(a) ${nome}!`);
        document.getElementById('cadastroForm').reset();
    } else {
        alert("Preencha todos os campos!");
    }
}
