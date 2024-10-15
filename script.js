document.addEventListener('DOMContentLoaded', () => {
    // Seleciona os elementos do DOM
    const btnEntrar = document.getElementById('btnEntrar');
    const btnVoltarParaInicial = document.getElementById('btnVoltarParaInicial');
    const btnVoltarLista = document.getElementById('btnVoltarLista');
    const listaProfessores = document.getElementById('listaProfessores');
    const perfilProfessor = document.getElementById('perfilProfessor');
    const nomeProfessor = document.getElementById('nomeProfessor');
    const saldoCreditos = document.getElementById('saldoCreditos');
    const btnAdicionar = document.getElementById('btnAdicionar');
    const btnRemover = document.getElementById('btnRemover');
    const searchProfessores = document.getElementById('searchProfessores');

    // Array de professores
    let professores = [
        { nome: 'Alisson Guilherme', creditos: 8.5 },
        { nome: 'Allan', creditos: 5.5 },
        { nome: 'Allan da Silva', creditos: 5.25 },
        { nome: 'Beatriz', creditos: 3.5 },
        { nome: 'Brenda', creditos: 5.25 },
        { nome: 'Bryan', creditos: 5.25 },
    ];

    // Função para exibir a lista de professores
    function renderizarListaProfessores() {
        const professoresList = document.getElementById('professores');
        professoresList.innerHTML = ''; // Limpa a lista antes de renderizar

        // Renderiza cada professor
        professores.forEach((professor) => {
            const li = document.createElement('li');
            li.className = 'professor-card';
            li.setAttribute('data-nome', professor.nome);
            li.setAttribute('data-creditos', professor.creditos);
            li.innerHTML = `
                <div class="professor-avatar">${professor.nome.charAt(0)}</div>
                <div class="professor-info">
                    <span>${professor.nome}</span>
                    <span>${professor.creditos.toFixed(2)}</span> <!-- Formata o valor para duas casas decimais -->
                </div>
            `;
            // Adiciona evento de clique para abrir o perfil do professor
            li.addEventListener('click', () => abrirPerfilProfessor(professor));
            professoresList.appendChild(li); // Adiciona o item à lista
        });
    }

    // Função para abrir o perfil do professor
    function abrirPerfilProfessor(professor) {
        nomeProfessor.textContent = professor.nome; // Exibe o nome do professor
        saldoCreditos.textContent = professor.creditos.toFixed(2); // Exibe o saldo formatado
        perfilProfessor.style.display = 'block'; // Exibe o perfil do professor
        listaProfessores.style.display = 'none'; // Oculta a lista de professores

        // Função para adicionar crédito
        btnAdicionar.onclick = () => {
            professor.creditos += 1; // Adiciona 1 crédito
            saldoCreditos.textContent = professor.creditos.toFixed(2); // Atualiza o saldo
            renderizarListaProfessores(); // Atualiza a lista de professores
        };

        // Função para remover crédito
        btnRemover.onclick = () => {
            professor.creditos = Math.max(0, professor.creditos - 1); // Remove 1 crédito, não permitindo negativo
            saldoCreditos.textContent = professor.creditos.toFixed(2); // Atualiza o saldo
            renderizarListaProfessores(); // Atualiza a lista de professores
        };
    }

    // Evento para o botão "Entrar"
    btnEntrar.addEventListener('click', () => {
        document.getElementById('telaInicial').style.display = 'none'; // Oculta a tela inicial
        listaProfessores.style.display = 'block'; // Exibe a lista de professores
        renderizarListaProfessores(); // Renderiza a lista de professores
    });

    // Evento para o botão "Voltar para Tela Inicial"
    btnVoltarParaInicial.addEventListener('click', () => {
        document.getElementById('telaInicial').style.display = 'block'; // Exibe a tela inicial
        listaProfessores.style.display = 'none'; // Oculta a lista de professores
        perfilProfessor.style.display = 'none'; // Oculta o perfil do professor
    });

    // Evento para o botão "Voltar para Lista de Professores"
    btnVoltarLista.addEventListener('click', () => {
        perfilProfessor.style.display = 'none'; // Oculta o perfil do professor
        listaProfessores.style.display = 'block'; // Exibe a lista de professores
    });
});