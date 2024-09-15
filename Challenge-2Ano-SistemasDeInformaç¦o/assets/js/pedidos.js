document.addEventListener('DOMContentLoaded', function () {
    const pedidoForm = document.getElementById('pedidoForm');
    const tabelaPedidos = document.querySelector('#tabelaPedidos tbody');
    let pedidos = [];
    let pedidoId = 1;

    // Função para exibir os pedidos na tabela
    function atualizarTabela() {
        tabelaPedidos.innerHTML = ''; // Limpa a tabela antes de atualizar

        pedidos.forEach((pedido, index) => {
            const novaLinha = document.createElement('tr');
            novaLinha.innerHTML = `
                <td>${pedido.id}</td>
                <td>${pedido.nome}</td>
                <td>${pedido.data}</td>
                <td>${pedido.telefone}</td>
                <td>${pedido.cep}</td>
                <td>${pedido.endereco}</td>
                <td>${pedido.numero}</td>
                <td>${pedido.complemento}</td>
                <td>${pedido.bairro}</td>
                <td>${pedido.quantidade}</td>
                <td>${pedido.descricao}</td>
                <td>R$ ${pedido.valorUnitario.toFixed(2)}</td>
                <td>R$ ${pedido.total.toFixed(2)}</td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="editarPedido(${index})">Editar</button>
                    <button class="btn btn-danger btn-sm" onclick="excluirPedido(${index})">Excluir</button>
                </td>
            `;
            tabelaPedidos.appendChild(novaLinha);
        });
    }

    // Função para adicionar ou atualizar pedido
    pedidoForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const nome = document.getElementById('nomeCliente').value;
        const data = document.getElementById('dataPedido').value;
        const telefone = document.getElementById('telefoneCliente').value;
        const cep = document.getElementById('cepCliente').value;
        const endereco = document.getElementById('enderecoCliente').value;
        const numero = document.getElementById('numeroCliente').value;
        const complemento = document.getElementById('complementoCliente').value;
        const bairro = document.getElementById('bairroCliente').value;
        const quantidade = parseInt(document.getElementById('quantidadeProduto').value);
        const descricao = document.getElementById('descricaoProduto').value;
        const valorUnitario = parseFloat(document.getElementById('valorUnitario').value);
        const total = parseFloat(document.getElementById('totalPedido').value);

        const pedido = {
            id: pedidoId++,
            nome,
            data,
            telefone,
            cep,
            endereco,
            numero,
            complemento,
            bairro,
            quantidade,
            descricao,
            valorUnitario,
            total
        };

        pedidos.push(pedido);
        atualizarTabela();
        pedidoForm.reset(); // Limpa o formulário após o envio
    });

    // Função para editar um pedido
    window.editarPedido = function (index) {
        const pedido = pedidos[index];
        document.getElementById('nomeCliente').value = pedido.nome;
        document.getElementById('dataPedido').value = pedido.data;
        document.getElementById('telefoneCliente').value = pedido.telefone;
        document.getElementById('cepCliente').value = pedido.cep;
        document.getElementById('enderecoCliente').value = pedido.endereco;
        document.getElementById('numeroCliente').value = pedido.numero;
        document.getElementById('complementoCliente').value = pedido.complemento;
        document.getElementById('bairroCliente').value = pedido.bairro;
        document.getElementById('quantidadeProduto').value = pedido.quantidade;
        document.getElementById('descricaoProduto').value = pedido.descricao;
        document.getElementById('valorUnitario').value = pedido.valorUnitario;
        document.getElementById('totalPedido').value = pedido.total;

        pedidos.splice(index, 1); // Remove o pedido antigo da lista
        atualizarTabela();
    }

    // Função para excluir um pedido
    window.excluirPedido = function (index) {
        pedidos.splice(index, 1); // Remove o pedido da lista
        atualizarTabela();
    }
});
