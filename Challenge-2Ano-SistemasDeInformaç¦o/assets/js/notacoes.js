document.addEventListener('DOMContentLoaded', function () {
    const notacaoForm = document.getElementById('notacaoForm');
    const tabelaNotacoes = document.querySelector('#tabelaNotacoes tbody');
    let notacoes = [];

    // Função para atualizar a tabela de notações
    function atualizarTabela() {
        tabelaNotacoes.innerHTML = ''; // Limpa a tabela antes de atualizar

        notacoes.forEach((notacao, index) => {
            const novaLinha = document.createElement('tr');
            novaLinha.innerHTML = `
                <td>${notacao.tarefa}</td>
                <td>${notacao.dia}</td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="editarNotacao(${index})">Editar</button>
                    <button class="btn btn-danger btn-sm" onclick="excluirNotacao(${index})">Excluir</button>
                </td>
            `;
            tabelaNotacoes.appendChild(novaLinha);
        });
    }

    // Função para adicionar ou atualizar notação
    notacaoForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const tarefa = document.getElementById('tarefaInput').value;
        const dia = document.getElementById('diaSemanaInput').value;

        const notacao = { tarefa, dia };

        notacoes.push(notacao);
        atualizarTabela();
        notacaoForm.reset(); // Limpa o formulário após o envio
    });

    // Função para editar uma notação
    window.editarNotacao = function (index) {
        const notacao = notacoes[index];
        document.getElementById('tarefaInput').value = notacao.tarefa;
        document.getElementById('diaSemanaInput').value = notacao.dia;

        notacoes.splice(index, 1); // Remove a notação antiga da lista
        atualizarTabela();
    }

    // Função para excluir uma notação
    window.excluirNotacao = function (index) {
        notacoes.splice(index, 1); // Remove a notação da lista
        atualizarTabela();
    }
});
