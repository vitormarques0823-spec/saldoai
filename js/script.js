const categoriasOrdenadas = [
    "Trabalho", "Alimentação", "Transporte", "Moradia",
    "Assinaturas", "Saúde", "Educação", "Compras",
    "Lazer", "Pets", "Família", "Financeiro", "Reserva", "Outros"
];

const categoriasMap = {
    "Trabalho": { sub: ["Salário", "Freelance", "Bônus", "Presente", "Rendimento"] },
    "Alimentação": { sub: ["Mercado", "Restaurante", "Ifood", "Lanches", "Padaria", "Feira"] },
    "Transporte": { sub: ["Uber", "99 Pop", "Táxi", "Ônibus", "Metrô", "Combustível", "Estacionamento", "Pedágio", "Manutenção Veículo"] },
    "Moradia": { sub: ["Aluguel", "Condomínio", "Luz", "Água", "Internet", "Gás", "IPTU", "Reformas"] },
    "Assinaturas": { sub: ["Netflix", "Spotify", "Amazon Prime", "HBO Max", "Disney+", "Plano Celular", "iCloud"] },
    "Saúde": { sub: ["Farmácia", "Consulta Médica", "Dentista", "Plano de Saúde", "Exames", "Terapia"] },
    "Educação": { sub: ["Faculdade", "Cursos", "Livros", "Material Escolar", "Aulas de Línguas", "Pós-Graduação"] },
    "Compras": { sub: ["Roupas", "Eletrônicos", "Decoração", "Presentes", "Acessórios"] },
    "Lazer": { sub: ["Cinema", "Teatro", "Show", "Bar", "Games", "Streaming"] },
    "Pets": { sub: ["Ração", "Veterinário", "Banho e Tosa", "Brinquedos", "Medicamentos"] },
    "Família": { sub: ["Mesada", "Presentes", "Ajuda Familiar", "Escola das Crianças"] },
    "Financeiro": { sub: ["Juros", "Taxas", "Empréstimo", "Investimento", "Cartão de Crédito", "Reembolso"] },
    "Reserva": { sub: ["Reserva de emergência", "Viagem", "Carro", "Moto", "Casa Própria", "Aposentadoria"] },
    "Outros": { sub: ["Outros Ganhos", "Outras Despesas", "Imprevistos"] }
};

let transacoes = [];
let fluxoAtivo = false;
let fluxo = { etapa: 1, tipo: null, categoriaNome: null, subcategoriaNome: null };
let aguardandoResposta = false;
let elementoFluxoAtual = null;

const saldoElement = document.getElementById('saldoDinheiro');
const totalEntradasElement = document.getElementById('totalEntradas');
const totalSaidasElement = document.getElementById('totalSaidas');
const chatContainer = document.getElementById('chatContainer');
const listaTransacoes = document.getElementById('listaTransacoes');
const btnNovaTransacao = document.getElementById('btnNovaTransacao');
const btnZerarTudo = document.getElementById('btnZerarTudo');

function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function atualizarTotais() {
    let entradas = 0, saidas = 0;
    for (let t of transacoes) {
        if (t.tipo === 'entrada') entradas += t.valor;
        else saidas += t.valor;
    }
    saldoElement.innerText = formatarMoeda(entradas - saidas);
    totalEntradasElement.innerText = formatarMoeda(entradas);
    totalSaidasElement.innerText = formatarMoeda(saidas);
}

function salvarLocalStorage() {
    localStorage.setItem('saldoai_transacoes', JSON.stringify(transacoes));
}

function carregarLocalStorage() {
    const dados = localStorage.getItem('saldoai_transacoes');
    if (dados) {
        transacoes = JSON.parse(dados);
        atualizarLista();
        atualizarTotais();
    }
}

function removerMensagemChatPorId(id) {
    const mensagens = document.querySelectorAll('.mensagem-sistema');
    for (let msg of mensagens) {
        if (msg.getAttribute('data-transacao-id') == id) {
            msg.remove();
            break;
        }
    }
}

function excluirTransacao(id) {
    const index = transacoes.findIndex(t => t.id == id);
    if (index !== -1) {
        transacoes.splice(index, 1);
        salvarLocalStorage();
        atualizarLista();
        atualizarTotais();
        removerMensagemChatPorId(id);
    }
}

function atualizarLista() {
    if (transacoes.length === 0) {
        listaTransacoes.innerHTML = '<div class="sem-transacoes">Nenhuma transação registrada.</div>';
        return;
    }
    listaTransacoes.innerHTML = '';
    [...transacoes].reverse().forEach(t => {
        const div = document.createElement('div');
        div.className = `item-transacao ${t.tipo === 'entrada' ? 'item-entrada' : 'item-saida'}`;
        div.innerHTML = `
            <div class="linha-principal">
                <span class="tipo-transacao ${t.tipo === 'entrada' ? 'tipo-entrada' : 'tipo-saida'}">${t.tipo === 'entrada' ? 'ENTRADA' : 'SAÍDA'}</span>
                <span class="valor-transacao ${t.tipo === 'entrada' ? 'valor-entrada' : 'valor-saida'}">${formatarMoeda(t.valor)}</span>
            </div>
            <div class="categoria-transacao">📁 ${t.categoria} • 🏷️ ${t.subcategoria}</div>
            ${t.observacao ? `<div style="font-size:0.7rem; color:#94A3B8; margin-top:4px;">📝 ${t.observacao}</div>` : ''}
            <button class="botao-excluir-item" data-id="${t.id}">🗑️ Excluir</button>
        `;
        listaTransacoes.appendChild(div);
    });
    document.querySelectorAll('.botao-excluir-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(btn.getAttribute('data-id'));
            excluirTransacao(id);
        });
    });
}

function adicionarMensagem(html, transacaoId = null) {
    const div = document.createElement('div');
    div.className = 'mensagem-sistema';
    if (transacaoId) div.setAttribute('data-transacao-id', transacaoId);
    div.innerHTML = `<div class="card-sistema">${html}</div>`;
    chatContainer.appendChild(div);
    div.scrollIntoView({ behavior: 'smooth' });
}

function registrarTransacao(tipo, categoria, subcategoria, valor, observacao) {
    const nova = {
        id: Date.now(),
        tipo, valor, categoria, subcategoria, observacao,
        descricao: `${categoria} - ${subcategoria}`,
        data: new Date().toLocaleString()
    };
    transacoes.push(nova);
    salvarLocalStorage();
    atualizarLista();
    atualizarTotais();
    
    const valorFormat = formatarMoeda(valor);
    const icone = tipo === 'entrada' ? '💰' : '🚌';
    const titulo = tipo === 'entrada' ? 'Valor guardado' : 'Gasto registrado';
    const corClass = tipo === 'entrada' ? 'texto-ganho' : 'texto-gasto';
    
    let msg = `<div class="${corClass}" style="font-weight:bold; margin-bottom:6px;">${icone} ${titulo}</div>
        <div><strong>Tipo:</strong> ${tipo === 'entrada' ? 'Entrada' : 'Saída'}</div>
        <div><strong>Categoria:</strong> ${categoria}</div>
        <div><strong>Subcategoria:</strong> ${subcategoria}</div>
        <div><strong>Valor:</strong> ${valorFormat}</div>
        <div><strong>Data:</strong> ${nova.data}</div>
        <div><strong>Saldo atual:</strong> ${formatarMoeda(transacoes.reduce((s, t) => s + (t.tipo === 'entrada' ? t.valor : -t.valor), 0))}</div>`;
    if (observacao) msg += `<div style="margin-top:6px;"><strong>📝 Observação:</strong> ${observacao}</div>`;
    adicionarMensagem(msg, nova.id);
}

function zerarTudo() {
    if (confirm('⚠️ ATENÇÃO! Isso vai apagar TODAS as movimentações. Tem certeza?')) {
        transacoes = [];
        salvarLocalStorage();
        atualizarLista();
        atualizarTotais();
        chatContainer.innerHTML = '';
        const div = document.createElement('div');
        div.className = 'mensagem-sistema';
        div.innerHTML = `<div class="card-sistema">✨ <strong>SaldoAI - Modo Guiado</strong><br>Clique no botão abaixo para registrar uma nova movimentação.</div>`;
        chatContainer.appendChild(div);
    }
}

function limparFluxo() {
    if (elementoFluxoAtual) elementoFluxoAtual.remove();
    elementoFluxoAtual = null;
    aguardandoResposta = false;
}

function cancelarFluxo() {
    fluxoAtivo = false;
    limparFluxo();
}

function mostrarEtapa() {
    if (!fluxoAtivo || aguardandoResposta) return;
    limparFluxo();
    aguardandoResposta = true;

    if (fluxo.etapa === 1) {
        const div = document.createElement('div');
        div.className = 'mensagem-sistema';
        div.innerHTML = `<div class="card-sistema"><strong>📌 PASSO 1: Tipo</strong><div class="opcoes-container"><button class="opcao-botao" data-tipo="entrada">💰 Entrada</button><button class="opcao-botao" data-tipo="saida">💸 Saída</button><button class="opcao-botao botao-voltar" data-cancelar>❌ Cancelar</button></div></div>`;
        chatContainer.appendChild(div);
        elementoFluxoAtual = div;
        div.querySelectorAll('[data-tipo]').forEach(btn => btn.onclick = () => { fluxo.tipo = btn.dataset.tipo; fluxo.etapa = 2; aguardandoResposta = false; mostrarEtapa(); });
        div.querySelector('[data-cancelar]').onclick = () => cancelarFluxo();
    }
    else if (fluxo.etapa === 2) {
        let html = `<div class="card-sistema"><strong>📌 PASSO 2: Categoria</strong><div class="opcoes-container">`;
        categoriasOrdenadas.forEach(cat => html += `<button class="opcao-botao" data-cat="${cat}">${cat}</button>`);
        html += `<button class="opcao-botao botao-voltar" data-voltar>◀ Voltar</button><button class="opcao-botao botao-voltar" data-cancelar>❌ Cancelar</button></div></div>`;
        const div = document.createElement('div');
        div.className = 'mensagem-sistema';
        div.innerHTML = html;
        chatContainer.appendChild(div);
        elementoFluxoAtual = div;
        div.querySelectorAll('[data-cat]').forEach(btn => btn.onclick = () => { fluxo.categoriaNome = btn.dataset.cat; fluxo.etapa = 3; aguardandoResposta = false; mostrarEtapa(); });
        div.querySelector('[data-voltar]').onclick = () => { fluxo.etapa = 1; aguardandoResposta = false; mostrarEtapa(); };
        div.querySelector('[data-cancelar]').onclick = () => cancelarFluxo();
    }
    else if (fluxo.etapa === 3) {
        const subs = categoriasMap[fluxo.categoriaNome]?.sub || ["Outros"];
        let html = `<div class="card-sistema"><strong>📌 PASSO 3: Subcategoria (${fluxo.categoriaNome})</strong><div class="sub-opcoes-container">`;
        subs.forEach(sub => html += `<button class="opcao-botao" data-sub="${sub}">${sub}</button>`);
        html += `<button class="opcao-botao botao-voltar" data-voltar>◀ Voltar</button><button class="opcao-botao botao-voltar" data-cancelar>❌ Cancelar</button></div></div>`;
        const div = document.createElement('div');
        div.className = 'mensagem-sistema';
        div.innerHTML = html;
        chatContainer.appendChild(div);
        elementoFluxoAtual = div;
        div.querySelectorAll('[data-sub]').forEach(btn => btn.onclick = () => { fluxo.subcategoriaNome = btn.dataset.sub; fluxo.etapa = 4; aguardandoResposta = false; mostrarEtapa(); });
        div.querySelector('[data-voltar]').onclick = () => { fluxo.etapa = 2; aguardandoResposta = false; mostrarEtapa(); };
        div.querySelector('[data-cancelar]').onclick = () => cancelarFluxo();
    }
    else if (fluxo.etapa === 4) {
        const div = document.createElement('div');
        div.className = 'mensagem-sistema';
        div.innerHTML = `<div class="card-sistema" style="width:100%;"><input type="text" id="valorInput" class="campo-input" placeholder="💰 Valor (ex: 150,00)"><input type="text" id="obsInput" class="campo-input" placeholder="📝 Observação (opcional)"><div class="opcoes-acoes"><button id="confirmarBtn" class="opcao-botao">✅ Confirmar</button><button id="voltarBtn" class="opcao-botao botao-voltar">◀ Voltar</button><button id="cancelarBtn" class="opcao-botao botao-voltar">❌ Cancelar</button></div></div>`;
        chatContainer.appendChild(div);
        elementoFluxoAtual = div;
        document.getElementById('confirmarBtn').onclick = () => {
            let val = parseFloat(document.getElementById('valorInput').value.replace(',', '.'));
            if (isNaN(val) || val <= 0) { adicionarMensagem('❌ Valor inválido'); return; }
            registrarTransacao(fluxo.tipo, fluxo.categoriaNome, fluxo.subcategoriaNome, val, document.getElementById('obsInput').value);
            fluxoAtivo = false;
            limparFluxo();
        };
        document.getElementById('voltarBtn').onclick = () => { fluxo.etapa = 3; aguardandoResposta = false; limparFluxo(); mostrarEtapa(); };
        document.getElementById('cancelarBtn').onclick = () => cancelarFluxo();
    }
}

// Botão SAIR
const btnSair = document.getElementById('btnSair');
if (btnSair) {
    btnSair.onclick = () => {
        localStorage.removeItem('saldoai_usuario_logado');
        window.location.href = 'login.html';
    };
}

function iniciarFluxo() {
    if (fluxoAtivo) { adicionarMensagem('⚠️ Já existe uma movimentação em andamento.'); return; }
    fluxoAtivo = true;
    fluxo = { etapa: 1, tipo: null, categoriaNome: null, subcategoriaNome: null };
    aguardandoResposta = false;
    mostrarEtapa();
}

btnNovaTransacao.onclick = iniciarFluxo;
btnZerarTudo.onclick = zerarTudo;
carregarLocalStorage();