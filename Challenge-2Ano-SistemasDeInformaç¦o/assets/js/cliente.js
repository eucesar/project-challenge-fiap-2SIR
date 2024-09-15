document.addEventListener('DOMContentLoaded', function () {
    const clienteForm = document.getElementById('clienteForm');
    const tabelaClientes = document.querySelector('#tabelaClientes tbody');
    let clientes = [];

    // Função para exibir os clientes na tabela
    function atualizarTabela() {
        tabelaClientes.innerHTML = ''; // Limpa a tabela antes de atualizar

        clientes.forEach((cliente, index) => {
            const novaLinha = document.createElement('tr');
            novaLinha.innerHTML = `
                <td>${cliente.nome}</td>
                <td>${cliente.cpf}</td>
                <td>${cliente.telefone}</td>
                <td>${cliente.cep}</td>
                <td>${cliente.endereco}</td>
                <td>${cliente.numero}</td>
                <td>${cliente.complemento}</td>
                <td>${cliente.bairro}</td>
                <td>${cliente.email}</td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="editarCliente(${index})">Editar</button>
                    <button class="btn btn-danger btn-sm" onclick="excluirCliente(${index})">Excluir</button>
                </td>
            `;
            tabelaClientes.appendChild(novaLinha);
        });
    }

    // Função para adicionar ou atualizar cliente
    clienteForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const nome = document.getElementById('nomeCliente').value;
        const cpf = document.getElementById('cpfCliente').value;
        const telefone = document.getElementById('telefoneCliente').value;
        const cep = document.getElementById('cepCliente').value;
        const endereco = document.getElementById('enderecoCliente').value;
        const numero = document.getElementById('numeroCliente').value;
        const complemento = document.getElementById('complementoCliente').value;
        const bairro = document.getElementById('bairroCliente').value;
        const email = document.getElementById('emailCliente').value;

        const clienteAtual = { nome, cpf, telefone, cep, endereco, numero, complemento, bairro, email };

        const clienteIndex = clienteForm.dataset.editandoIndex;
        if (clienteIndex !== undefined) {
            // Atualiza cliente existente
            clientes[clienteIndex] = clienteAtual;
            delete clienteForm.dataset.editandoIndex;
        } else {
            // Adiciona novo cliente
            clientes.push(clienteAtual);
        }

        atualizarTabela();
        clienteForm.reset();
    });

    // Função para editar cliente
    window.editarCliente = function (index) {
        const cliente = clientes[index];
        document.getElementById('nomeCliente').value = cliente.nome;
        document.getElementById('cpfCliente').value = cliente.cpf;
        document.getElementById('telefoneCliente').value = cliente.telefone;
        document.getElementById('cepCliente').value = cliente.cep;
        document.getElementById('enderecoCliente').value = cliente.endereco;
        document.getElementById('numeroCliente').value = cliente.numero;
        document.getElementById('complementoCliente').value = cliente.complemento;
        document.getElementById('bairroCliente').value = cliente.bairro;
        document.getElementById('emailCliente').value = cliente.email;

        clienteForm.dataset.editandoIndex = index;
    }

    // Função para excluir cliente
    window.excluirCliente = function (index) {
        clientes.splice(index, 1);
        atualizarTabela();
    }
});
