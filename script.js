// ==================== CATEGORIAS ATUALIZADAS ====================
const categoriasOrdenadas = [
    "Trabalho", "Alimentação", "Transporte", "Moradia",
    "Cuidados Pessoais", "Saúde", "Educação", "Compras",
    "Lazer", "Apostas", "Pets", "Família",
    "Financeiro", "Reserva", "Assinaturas", "Viagens", "Outros"
];

const categoriasMap = {
    "Trabalho": { 
        icone: "💼",
        sub: ["Salário", "13º Salário", "Bônus", "Comissão", "Horas Extras", "Freelance", "Presente", "Rendimentos", "Vale Alimentação", "Vale Transporte"] 
    },
    "Alimentação": { 
        icone: "🍔",
        sub: ["Mercado", "Feira", "Padaria", "Restaurante", "Lanches", "Cafeteria", "Delivery"] 
    },
    "Transporte": { 
        icone: "🚗",
        sub: ["Uber", "99 Pop", "Táxi", "Ônibus", "Metrô", "Combustível", "Estacionamento", "Pedágio", "Manutenção Veículo", "Lavagem", "Seguro Veicular"] 
    },
    "Moradia": { 
        icone: "🏠",
        sub: ["Aluguel", "Condomínio", "Luz", "Água", "Internet", "Gás", "IPTU", "Reformas", "Móveis", "Produtos de Limpeza"] 
    },
    "Cuidados Pessoais": { 
        icone: "💅",
        sub: ["Corte de Cabelo", "Unhas", "Sobrancelha", "Maquiagem", "Cosméticos", "Perfumes", "Skincare", "Estética", "Massagem", "Academia", "Suplementos"] 
    },
    "Saúde": { 
        icone: "❤️",
        sub: ["Farmácia", "Consulta Médica", "Dentista", "Exames", "Plano de Saúde", "Terapia", "Medicamentos", "Óculos"] 
    },
    "Educação": { 
        icone: "📚",
        sub: ["Faculdade", "Cursos", "Pós-Graduação", "Livros", "Material Escolar", "Certificações", "Aulas de Línguas"] 
    },
    "Compras": { 
        icone: "🛍️",
        sub: ["Roupas", "Calçados", "Acessórios", "Eletrônicos", "Decoração", "Presentes"] 
    },
    "Lazer": { 
        icone: "🎮",
        sub: ["Cinema", "Teatro", "Shows", "Bar", "Games", "Passeios", "Viagens", "Parques", "Streaming"] 
    },
    "Apostas": { 
        icone: "🎰",
        sub: ["Apostas Esportivas", "Cassino Online", "Poker", "Bingo", "Loteria"] 
    },
    "Pets": { 
        icone: "🐶",
        sub: ["Ração", "Veterinário", "Banho e Tosa", "Brinquedos", "Vacinas", "Medicamentos", "Adoção", "Hotel para Pets"] 
    },
    "Família": { 
        icone: "👨‍👩‍👧",
        sub: ["Mesada", "Ajuda Familiar", "Presentes", "Escola das Crianças", "Creche"] 
    },
    "Financeiro": { 
        icone: "💳",
        sub: ["Cartão de Crédito", "Empréstimo", "Juros", "Taxas", "Investimentos", "Reembolso", "PIX Recebido", "PIX Enviado"] 
    },
    "Reserva": { 
        icone: "💰",
        sub: ["Reserva de Emergência", "Viagem", "Carro", "Moto", "Casa Própria", "Aposentadoria"] 
    },
    "Assinaturas": { 
        icone: "📺",
        sub: ["Netflix", "Spotify Premium", "Amazon Prime", "Disney+", "HBO Max", "YouTube Premium", "ChatGPT", "PlayStation Plus", "Xbox Game Pass", "Plano Celular", "iCloud"] 
    },
    "Viagens": { 
        icone: "✈️",
        sub: ["Passagens", "Hospedagem", "Alimentação", "Passeios", "Seguro Viagem", "Aluguel de Carro"] 
    },
    "Outros": { 
        icone: "📦",
        sub: ["Imprevistos", "Outros Ganhos", "Outras Despesas"] 
    }
};

// ==================== SISTEMA DE SINÔNIMOS (COMPLETO + EXPANDIDO) ====================
const sinonimos = {
    // ===== TRABALHO =====
    "Salário": ["salário", "salario", "ordenado", "pagamento", "holerite", "contracheque", "remuneração", "remuneracao", "prolabore"],
    "13º Salário": ["13º", "decimo terceiro", "décimo terceiro", "13 salario", "decimo", "13o"],
    "Bônus": ["bonus", "bônus", "premiação", "premio", "prêmio", "gratificação", "extra", "plr"],
    "Comissão": ["comissão", "comissao", "porcentagem", "percentual", "vendas"],
    "Horas Extras": ["horas extras", "hora extra", "extra", "adicional noturno", "he"],
    "Freelance": ["freela", "freelance", "freelancer", "bico", "trabalho avulso", "autônomo", "autonomo"],
    "Presente": ["presente", "lembrança", "mimo", "brinde"],
    "Rendimentos": ["rendimentos", "rendimento", "renda", "ganhos"],
    "Vale Alimentação": ["vale alimentação", "vale alimentacao", "va", "refeição", "refeicao", "vale refeição"],
    "Vale Transporte": ["vale transporte", "vt", "passagem", "transporte"],

    // ===== ALIMENTAÇÃO =====
    "Mercado": ["mercado", "supermercado", "compras", "mecado", "hipermercado", "atacado", "feira", "hortifruti"],
    "Feira": ["feira", "hortifruti", "frutas", "legumes", "verduras", "quitanda"],
    "Padaria": ["padaria", "pao", "pão", "frances", "baguete", "croissant", "sonho"],
    "Restaurante": ["restaurante", "almoco", "almoço", "jantar", "comida", "quentinha", "self service", "buffet", "self-service"],
    "Lanches": ["lanche", "lanches", "hamburguer", "pizza", "salgado", "coxinha", "pastel", "hot dog", "sanduiche", "sanduíche"],
    "Cafeteria": ["cafeteria", "cafe", "café", "capuccino", "espresso", "cappuccino", "cafe com leite"],
    "Delivery": ["delivery", "entrega", "ifood", "i food", "rapp i", "uber eats", "pedido", "delivery", "motoboy", "ifood"],

    // ===== TRANSPORTE =====
    "Uber": ["uber", "app", "viagem", "corrida", "carro app", "99", "99 pop"],
    "99 Pop": ["99 pop", "99", "pop", "nove nove"],
    "Táxi": ["taxi", "táxi", "taxista"],
    "Ônibus": ["onibus", "ônibus", "bus", "coletivo", "citybus", "transporte publico"],
    "Metrô": ["metro", "metrô", "subway", "trem", "trilho", "ferroviario"],
    "Combustível": ["combustível", "combustivel", "combustíveis", "combustiveis", "gasolina", "álcool", "alcool", "etanol", "diesel", "gas", "gás", "gasosa", "abastecer", "abastecimento", "posto", "tanque", "gasolina de alcool", "alcool gasolina"],
    "Estacionamento": ["estacionamento", "parking", "estacionar", "garagem", "manobrista"],
    "Pedágio": ["pedagio", "pedágio", "praça", "toll"],
    "Manutenção Veículo": ["manutenção", "manutencao", "revisão", "revisao", "oleo", "óleo", "troca de óleo", "pneu", "oficina", "mecanico"],
    "Lavagem": ["lavagem", "lavar", "limpeza", "lavacar", "lavajato"],
    "Seguro Veicular": ["seguro", "seguro carro", "ipva", "licenciamento", "dpvat"],

    // ===== MORADIA =====
    "Aluguel": ["aluguel", "alugar", "renda", "locação", "imovel"],
    "Condomínio": ["condominio", "condomínio", "taxa condominial", "sindico"],
    "Luz": ["luz", "energia", "eletricidade", "conta de luz", "energia eletrica"],
    "Água": ["agua", "água", "conta de água", "saneamento", "hidrometro"],
    "Internet": ["internet", "wi-fi", "wifi", "banda larga", "fibra", "fibra otica"],
    "Gás": ["gás", "gas", "gas de cozinha", "botijão", "botijao", "glp", "cozinha"],
    "IPTU": ["iptu", "imposto", "taxa predial", "prefeitura"],
    "Reformas": ["reforma", "reformas", "obra", "construção", "pedreiro"],
    "Móveis": ["moveis", "móveis", "mobilia", "mobília", "movel"],
    "Produtos de Limpeza": ["limpeza", "produtos de limpeza", "material de limpeza", "detergente", "desinfetante"],

    // ===== CUIDADOS PESSOAIS =====
    "Corte de Cabelo": ["corte", "cabelo", "cabelereiro", "barbeiro", "barba", "bigode"],
    "Unhas": ["unhas", "manicure", "pedicure", "esmalte", "unha"],
    "Sobrancelha": ["sobrancelha", "design", "designer", "henna"],
    "Maquiagem": ["maquiagem", "make", "base", "rimel", "batom", "pó", "delineador"],
    "Cosméticos": ["cosméticos", "cosmeticos", "creme", "hidratante", "loção", "protetor solar"],
    "Perfumes": ["perfumes", "perfume", "colonia", "colônia", "fragrância"],
    "Skincare": ["skincare", "cuidados com a pele", "rotina de pele"],
    "Estética": ["estética", "estetica", "procedimento", "harmonização"],
    "Massagem": ["massagem", "massoterapia", "relaxamento"],
    "Academia": ["academia", "gym", "musculação", "ginastica", "personal", "crossfit"],
    "Suplementos": ["suplementos", "whey", "creatina", "vitaminas", "nutrição"],

    // ===== SAÚDE =====
    "Farmácia": ["farmacia", "farmácia", "drogaria", "remedio", "remédio", "medicamento", "comprimido", "capsula"],
    "Consulta Médica": ["consulta", "médico", "medico", "clinico", "clínico", "cardiologista", "dermatologista", "ortopedista", "neurologista"],
    "Dentista": ["dentista", "dentista", "ortodontista", "periodontista", "odontologo", "implante"],
    "Exames": ["exames", "exame", "laboratório", "laboratorio", "sangue", "urina", "raiox", "tomografia", "ultrassom"],
    "Plano de Saúde": ["plano de saúde", "plano de saude", "convênio", "convenio", "medicina de grupo"],
    "Terapia": ["terapia", "psicologo", "psicólogo", "psiquiatra", "analise", "sessão"],
    "Medicamentos": ["medicamentos", "medicamento", "remedio", "remédio", "antibiotico"],
    "Óculos": ["oculos", "óculos", "lente", "grau", "lente de contato"],

    // ===== EDUCAÇÃO =====
    "Faculdade": ["faculdade", "universidade", "graduação", "graduacao", "mensalidade", "matricula", "uniesquina"],
    "Cursos": ["cursos", "curso", "formação", "formacao", "treinamento", "capacitação", "workshop"],
    "Pós-Graduação": ["pos graduação", "pos-graduação", "posgraduacao", "especialização", "mestrado", "doutorado", "mba"],
    "Livros": ["livros", "livro", "leitura", "ebook", "kindle", "literatura"],
    "Material Escolar": ["material escolar", "escola", "caderno", "caneta", "lapis", "lápis", "mochila", "estojo", "borracha"],
    "Certificações": ["certificacoes", "certificações", "certificação", "certificacao"],
    "Aulas de Línguas": ["ingles", "inglês", "espanhol", "frances", "francês", "alemao", "italiano", "idiomas", "aula de ingles", "aula de espanhol"],

    // ===== COMPRAS =====
    "Roupas": ["roupas", "roupa", "camisa", "calça", "calca", "vestido", "tenis", "tênis", "bermuda", "short", "blusa", "casaco"],
    "Calçados": ["calcados", "calçados", "sapato", "chinelo", "botas", "sandalia", "salto", "tamancos"],
    "Acessórios": ["acessorios", "acessórios", "bijuteria", "relogio", "relógio", "pulseira", "colar", "brinco", "anel"],
    "Eletrônicos": ["eletronicos", "eletrônicos", "celular", "notebook", "computador", "tv", "televisão", "fone", "tablet", "camera"],
    "Decoração": ["decoracao", "decoração", "casa", "moveis", "móveis", "enfeite", "vaso", "quadro"],
    "Presentes": ["presentes", "presente", "lembrança", "mimo"],

    // ===== LAZER =====
    "Cinema": ["cinema", "filme", "sessão", "pipoca", "ingresso cinema", "cine"],
    "Teatro": ["teatro", "peca", "peça", "espetáculo", "musical"],
    "Shows": ["shows", "show", "concerto", "musica", "música", "festival", "evento"],
    "Bar": ["bar", "cerveja", "drink", "chopp", "balada", "happy hour", "pub"],
    "Games": ["games", "game", "video game", "videogame", "playstation", "xbox", "nintendo", "steam", "jogos"],
    "Passeios": ["passeio", "passeios", "passear", "lazer", "diversão"],
    "Viagens": ["viagem", "viajem", "ferias", "férias", "viagens", "excursão", "turismo"],
    "Parques": ["parque", "parques", "eco parque", "parque nacional"],
    "Streaming": ["streaming", "series", "seriados", "filmes online"],

    // ===== APOSTAS =====
    "Apostas Esportivas": ["apostas", "aposta", "bet", "futebol", "esporte", "jogo", "esportiva"],
    "Cassino Online": ["cassino", "caça niquel", "roleta", "blackjack", "slots"],
    "Poker": ["poker", "pôquer", "cartas", "bluff"],
    "Bingo": ["bingo", "bingo online"],
    "Loteria": ["loteria", "mega sena", "lotofácil", "quina", "bilhete", "loteca", "dupla sena"],

    // ===== PETS =====
    "Ração": ["racao", "ração", "pet", "comida de cachorro", "comida de gato", "snack", "petiscos"],
    "Veterinário": ["veterinario", "veterinário", "vet", "consulta pet", "veterinaria"],
    "Banho e Tosa": ["banho", "tosa", "pet shop", "higiene pet"],
    "Brinquedos": ["brinquedos", "brinquedo", "petiscos", "bolinha", "ossinho"],
    "Vacinas": ["vacinas", "vacina", "v8", "v10", "anti rabica"],
    "Medicamentos": ["medicamentos pet", "remedio pet", "vermifugo", "pulgas", "carrapatos"],
    "Adoção": ["adoção", "adocao", "adotar", "resgate"],
    "Hotel para Pets": ["hotel para pets", "creche pet", "pet hotel", "hospedagem pet"],

    // ===== FAMÍLIA =====
    "Mesada": ["mesada", "mesada filhos", "semana", "dinheiro para filhos"],
    "Ajuda Familiar": ["ajuda familiar", "contribuição", "pensão", "ajuda financeira"],
    "Presentes": ["presentes", "presente", "lembrança", "mimo"],
    "Escola das Crianças": ["escola", "escola das crianças", "mensalidade escola", "reforço", "colégio", "uniforme"],
    "Creche": ["creche", "escola infantil", "berçario", "berçário", "educação infantil"],

    // ===== FINANCEIRO =====
    "Cartão de Crédito": ["cartão de crédito", "cartao de credito", "cartão", "cartao", "credito", "crédito", "fatura", "parcela", "parcelas", "rotativo", "cartãozinho", "cartao de credito", "cartão de crédito"],
    "Empréstimo": ["emprestimo", "empréstimo", "financiamento", "parcelamento", "credito pessoal"],
    "Juros": ["juros", "taxa de juros", "selic", "spread"],
    "Taxas": ["taxas", "taxa", "custo", "tarifa", "iof", "iof"],
    "Investimentos": ["investimentos", "investimento", "renda fixa", "ações", "bolsa", "cdb", "lci", "lca", "fundo"],
    "Reembolso": ["reembolso", "estorno", "devolução", "restituição"],
    "PIX Recebido": ["pix recebido", "transferência recebida", "recebido pix", "transferencia recebida"],
    "PIX Enviado": ["pix enviado", "transferência enviada", "enviado pix", "pix", "transferência", "pagamento pix"],

    // ===== RESERVA =====
    "Reserva de Emergência": ["reserva", "emergência", "emergencia", "poupança", "poupanca", "fundo"],
    "Viagem": ["viagem", "viajem", "ferias", "férias", "viagens"],
    "Carro": ["carro", "veiculo", "veículo", "compra carro", "automovel"],
    "Moto": ["moto", "motocicleta", "compra moto", "ciclomotor"],
    "Casa Própria": ["casa propria", "casa própria", "compra casa", "financiamento casa", "imovel"],
    "Aposentadoria": ["aposentadoria", "previdencia", "previdência", "inss", "pensão"],

    // ===== ASSINATURAS =====
    "Netflix": ["netflix", "streaming", "series", "seriados", "filmes online"],
    "Spotify Premium": ["spotify", "musica", "música", "premium", "app de musica", "playlist"],
    "Amazon Prime": ["amazon prime", "prime", "amazon", "prime video"],
    "Disney+": ["disney", "disney plus", "disney+", "marvel", "star wars", "disney"],
    "HBO Max": ["hbo", "hbo max", "warner", "dc", "cine"],
    "YouTube Premium": ["youtube", "youtube premium", "google", "videos"],
    "ChatGPT": ["chatgpt", "openai", "ia", "assinatura openai", "chat gpt"],
    "PlayStation Plus": ["playstation plus", "ps plus", "playstation", "psn"],
    "Xbox Game Pass": ["xbox game pass", "xbox", "game pass", "microsoft"],
    "Plano Celular": ["plano celular", "celular", "tim", "vivo", "claro", "oi", "recarga", "creditos", "ligações", "internet movel"],
    "iCloud": ["icloud", "apple", "armazenamento", "nuvem"],

    // ===== VIAGENS =====
    "Passagens": ["passagens", "passagem", "aerea", "aérea", "aviao", "avião", "voo", "bilhete", "aereo"],
    "Hospedagem": ["hospedagem", "hotel", "airbnb", "pousada", "resort", "hostel"],
    "Alimentação": ["alimentação viagem", "comida viagem", "restaurante viagem"],
    "Passeios": ["passeios", "passeio", "excursão", "tour"],
    "Seguro Viagem": ["seguro viagem", "assistência viagem", "seguro viagem"],
    "Aluguel de Carro": ["aluguel de carro", "locação veículo", "rent a car"],

    // ===== OUTROS =====
    "Imprevistos": ["imprevisto", "inesperado", "emergencia", "emergência", "repentino", "acidente"],
    "Outros Ganhos": ["outros ganhos", "extra", "bico", "adicional", "outra renda"],
    "Outras Despesas": ["outras despesas", "diversos", "diversos", "outras compras"]
};

// ==================== FUNÇÃO PARA REMOVER ACENTOS ====================
function removerAcentos(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

// ==================== FUNÇÃO PARA CORREÇÃO DE ERROS DE DIGITAÇÃO ====================
function corrigirErrosDigitacao(texto) {
    // Remove espaços extras
    texto = texto.replace(/\s+/g, ' ').trim();
    
    // Correções comuns de digitação
    const correcoes = {
        'cartao': 'cartão',
        'cartão': 'cartão',
        'credito': 'crédito',
        'cartao de credito': 'cartão de crédito',
        'cartão de credito': 'cartão de crédito',
        'cartao de crédito': 'cartão de crédito',
        'cartão de crédtio': 'cartão de crédito',
        'cartão de credtio': 'cartão de crédito',
        'cartao de credtio': 'cartão de crédito',
        'gasolina': 'gasolina',
        'alcool': 'álcool',
        'alcol': 'álcool',
        'alcoo': 'álcool',
        'gasolina de alcool': 'combustível',
        'gasolina de álcool': 'combustível',
        'alcool gasolina': 'combustível',
        'álcool gasolina': 'combustível',
        'uber': 'Uber',
        'ifood': 'iFood',
        'netflix': 'Netflix',
        'spotify': 'Spotify',
        'youtube': 'YouTube',
        'disney': 'Disney',
        'hbo': 'HBO'
    };
    
    let textoCorrigido = texto;
    for (let [erro, correcao] of Object.entries(correcoes)) {
        if (texto.toLowerCase().includes(erro.toLowerCase())) {
            textoCorrigido = textoCorrigido.replace(new RegExp(erro, 'gi'), correcao);
        }
    }
    
    return textoCorrigido;
}

// ==================== VARIÁVEIS ====================
let transacoes = [];
let fluxoAtivo = false;
let fluxo = { etapa: 1, tipo: null, categoriaNome: null, subcategoriaNome: null };
let aguardandoResposta = false;
let elementoFluxoAtual = null;

// ==================== MEMÓRIA DA IA (CONTEXTO) ====================
let ultimoFiltroIA = {
    categoria: null,
    subcategoria: null,
    mes: null,
    ano: null,
    tipo: null,
    ultimaPergunta: null,
    ultimoContexto: null
};

// ==================== MEMÓRIA DE ASSUNTO ATUAL ====================
let assuntoAtual = {
    categoria: null,
    subcategoria: null,
    mes: null,
    ano: null,
    tipo: null,
    timestamp: null
};

const saldoElement = document.getElementById('saldoDinheiro');
const totalEntradasElement = document.getElementById('totalEntradas');
const totalSaidasElement = document.getElementById('totalSaidas');
const chatContainer = document.getElementById('chatContainer');
const listaTransacoes = document.getElementById('listaTransacoes');
const btnNovaTransacao = document.getElementById('btnNovaTransacao');
const btnZerarTudo = document.getElementById('btnZerarTudo');
const btnSair = document.getElementById('btnSair');

// ==================== FUNÇÕES AUXILIARES ====================
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
        if (transacoes.length > 0) {
            const ultima = transacoes[transacoes.length - 1];
            mostrarUltimaTransacao(ultima);
        }
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
        if (transacoes.length > 0) {
            const ultima = transacoes[transacoes.length - 1];
            mostrarUltimaTransacao(ultima);
        } else {
            chatContainer.innerHTML = '';
            const div = document.createElement('div');
            div.className = 'mensagem-sistema';
            div.innerHTML = `<div class="card-sistema">✨ <strong>SaldoAI - Modo Guiado</strong><br>Clique no botão abaixo para registrar uma nova movimentação.</div>`;
            chatContainer.appendChild(div);
        }
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
        const icone = t.icone || '';
        div.innerHTML = `
            <div class="linha-principal">
                <span class="tipo-transacao ${t.tipo === 'entrada' ? 'tipo-entrada' : 'tipo-saida'}">${t.tipo === 'entrada' ? 'ENTRADA' : 'SAÍDA'}</span>
                <span class="valor-transacao ${t.tipo === 'entrada' ? 'valor-entrada' : 'valor-saida'}">${formatarMoeda(t.valor)}</span>
            </div>
            <div class="categoria-transacao">${icone} ${t.categoria} • 🏷️ ${t.subcategoria}</div>
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

function mostrarUltimaTransacao(transacao) {
    const mensagens = chatContainer.querySelectorAll('.mensagem-sistema');
    for (let msg of mensagens) {
        const texto = msg.innerText || '';
        if (texto.includes('Valor guardado') || texto.includes('Gasto registrado')) {
            msg.remove();
        }
    }
    
    if (!transacao) return;
    
    const valorFormat = formatarMoeda(transacao.valor);
    const icone = transacao.tipo === 'entrada' ? '💰' : '🚌';
    const titulo = transacao.tipo === 'entrada' ? 'Valor guardado' : 'Gasto registrado';
    const corClass = transacao.tipo === 'entrada' ? 'texto-ganho' : 'texto-gasto';
    const iconeCat = transacao.icone || '';
    
    let msg = `<div class="${corClass}" style="font-weight:bold; margin-bottom:6px;">${icone} ${titulo}</div>
        <div><strong>Tipo:</strong> ${transacao.tipo === 'entrada' ? 'Entrada' : 'Saída'}</div>
        <div><strong>Categoria:</strong> ${iconeCat} ${transacao.categoria}</div>
        <div><strong>Subcategoria:</strong> ${transacao.subcategoria}</div>
        <div><strong>Valor:</strong> ${valorFormat}</div>
        <div><strong>Data:</strong> ${transacao.data}</div>
        <div><strong>Saldo atual:</strong> ${formatarMoeda(transacoes.reduce((s, t) => s + (t.tipo === 'entrada' ? t.valor : -t.valor), 0))}</div>`;
    if (transacao.observacao) msg += `<div style="margin-top:6px;"><strong>📝 Observação:</strong> ${transacao.observacao}</div>`;
    
    const div = document.createElement('div');
    div.className = 'mensagem-sistema';
    if (transacao.id) div.setAttribute('data-transacao-id', transacao.id);
    div.innerHTML = `<div class="card-sistema">${msg}</div>`;
    chatContainer.appendChild(div);
    div.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function adicionarMensagem(html, transacaoId = null) {
    if (transacaoId) {
        const transacao = transacoes.find(t => t.id === transacaoId);
        if (transacao) {
            mostrarUltimaTransacao(transacao);
        }
        return;
    }
    const div = document.createElement('div');
    div.className = 'mensagem-sistema';
    div.innerHTML = `<div class="card-sistema">${html}</div>`;
    chatContainer.appendChild(div);
    div.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function registrarTransacao(tipo, categoria, subcategoria, valor, observacao) {
    const icone = categoriasMap[categoria]?.icone || '';
    const nova = {
        id: Date.now(),
        tipo, valor, categoria, subcategoria, observacao, icone,
        descricao: `${categoria} - ${subcategoria}`,
        data: new Date().toLocaleString()
    };
    transacoes.push(nova);
    salvarLocalStorage();
    atualizarLista();
    atualizarTotais();
    mostrarUltimaTransacao(nova);
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

// ==================== BOTÃO SAIR ====================
if (btnSair) {
    btnSair.onclick = () => {
        localStorage.removeItem('saldoai_usuario_logado');
        window.location.href = 'login.html';
    };
}

// ==================== FLUXO GUIADO ====================
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
        categoriasOrdenadas.forEach(cat => {
            const icone = categoriasMap[cat]?.icone || '';
            html += `<button class="opcao-botao" data-cat="${cat}">${icone} ${cat}</button>`;
        });
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

function iniciarFluxo() {
    if (fluxoAtivo) { adicionarMensagem('⚠️ Já existe uma movimentação em andamento.'); return; }
    fluxoAtivo = true;
    fluxo = { etapa: 1, tipo: null, categoriaNome: null, subcategoriaNome: null };
    aguardandoResposta = false;
    mostrarEtapa();
}

btnNovaTransacao.onclick = iniciarFluxo;
btnZerarTudo.onclick = zerarTudo;

// ==================== IA CORRIGIDA COM PRIORIDADE DE PALAVRAS-CHAVE ====================
function encontrarSubcategoriaPorSinonimo(texto) {
    const textoLower = texto.toLowerCase();
    const textoLowerSemAcento = removerAcentos(textoLower);
    const textoCorrigido = corrigirErrosDigitacao(textoLower);
    
    // ===== PRIORIDADE 1: PALAVRAS-CHAVE ESPECÍFICAS =====
    const palavrasChave = {
        'seguro': 'Seguro Veicular',
        'ipva': 'Seguro Veicular',
        'licenciamento': 'Seguro Veicular',
        'dpvat': 'Seguro Veicular',
        'gasolina': 'Combustível',
        'alcool': 'Combustível',
        'álcool': 'Combustível',
        'etanol': 'Combustível',
        'diesel': 'Combustível',
        'abastecer': 'Combustível',
        'abastecimento': 'Combustível',
        'posto': 'Combustível',
        'uber': 'Uber',
        'taxi': 'Táxi',
        'táxi': 'Táxi',
        'onibus': 'Ônibus',
        'ônibus': 'Ônibus',
        'metro': 'Metrô',
        'metrô': 'Metrô'
    };
    
    // Verifica palavras-chave específicas primeiro
    for (let [palavra, subcategoria] of Object.entries(palavrasChave)) {
        if (textoLower.includes(palavra) || textoLowerSemAcento.includes(removerAcentos(palavra))) {
            return subcategoria;
        }
    }
    
    // ===== PRIORIDADE 2: SINÔNIMOS =====
    for (let [subcategoria, sinonimia] of Object.entries(sinonimos)) {
        for (let sin of sinonimia) {
            const sinSemAcento = removerAcentos(sin.toLowerCase());
            const sinCorrigido = corrigirErrosDigitacao(sin.toLowerCase());
            
            if (textoLower.includes(sin) || 
                textoLower.includes(sinSemAcento) || 
                textoLowerSemAcento.includes(sinSemAcento) ||
                textoCorrigido.includes(sinCorrigido) ||
                textoCorrigido.includes(sin)) {
                return subcategoria;
            }
        }
    }
    return null;
}

function encontrarCategoriaPorSubcategoria(subcategoria) {
    for (let [categoria, dados] of Object.entries(categoriasMap)) {
        if (dados.sub.includes(subcategoria)) {
            return categoria;
        }
    }
    return null;
}

function interpretarPergunta(texto) {
    const textoCorrigido = corrigirErrosDigitacao(texto);
    const textoLower = textoCorrigido.toLowerCase();
    const textoLowerSemAcento = removerAcentos(textoLower);
    
    const resultado = {
        categoria: null,
        subcategoria: null,
        mes: null,
        ano: null,
        tipo: null,
        listar: false,
        usarContexto: false,
        mudouAssunto: false,
        perguntaOriginal: texto
    };
    
    // ========== DETECTA SE MUDOU DE ASSUNTO ==========
    const palavrasMudanca = ['agora', 'mudando', 'outro', 'diferente', 'sobre', 'agora sobre', 'e sobre'];
    let mudouAssunto = false;
    for (let p of palavrasMudanca) {
        if (textoLower.includes(p) && textoLower.length < 50) {
            mudouAssunto = true;
            break;
        }
    }
    
    if (mudouAssunto) {
        assuntoAtual.categoria = null;
        assuntoAtual.subcategoria = null;
        assuntoAtual.mes = null;
        assuntoAtual.ano = null;
        assuntoAtual.tipo = null;
        resultado.mudouAssunto = true;
    }
    
    // ========== VERIFICA SE É PERGUNTA DE CONTINUAÇÃO ==========
    const perguntasContexto = ['quais foram', 'listar', 'mostrar', 'quais', 'me mostre', 'me fale', 'detalhes', 'quais foram essas', 'essas', 'esses', 'essas movimentações', 'em detalhes'];
    let ehContexto = false;
    for (let p of perguntasContexto) {
        if (textoLower.includes(p)) {
            ehContexto = true;
            break;
        }
    }
    
    if (ehContexto && !mudouAssunto) {
        resultado.usarContexto = true;
        resultado.listar = true;
        
        if (assuntoAtual.subcategoria) {
            resultado.subcategoria = assuntoAtual.subcategoria;
            resultado.categoria = assuntoAtual.categoria;
        }
        if (assuntoAtual.mes) resultado.mes = assuntoAtual.mes;
        if (assuntoAtual.ano) resultado.ano = assuntoAtual.ano;
        if (assuntoAtual.tipo) resultado.tipo = assuntoAtual.tipo;
        
        if (!resultado.subcategoria) {
            if (ultimoFiltroIA.subcategoria) resultado.subcategoria = ultimoFiltroIA.subcategoria;
            if (ultimoFiltroIA.categoria) resultado.categoria = ultimoFiltroIA.categoria;
            if (ultimoFiltroIA.mes) resultado.mes = ultimoFiltroIA.mes;
            if (ultimoFiltroIA.ano) resultado.ano = ultimoFiltroIA.ano;
            if (ultimoFiltroIA.tipo) resultado.tipo = ultimoFiltroIA.tipo;
        }
        
        if (!resultado.mes) {
            const dataAtual = new Date();
            resultado.mes = dataAtual.getMonth() + 1;
            resultado.ano = dataAtual.getFullYear();
        }
        return resultado;
    }
    
    if (textoLower.includes('quais foram') || textoLower.includes('listar') || textoLower.includes('mostrar') || textoLower.includes('quais')) {
        resultado.listar = true;
    }
    
    // ========== DETECÇÃO ESPECIAL: CARTÃO DE CRÉDITO ==========
    const palavrasCartao = ['cartão', 'cartao', 'credito', 'crédito', 'fatura', 'parcela', 'parcelas', 'rotativo'];
    for (let p of palavrasCartao) {
        if (textoLower.includes(p)) {
            resultado.tipo = 'saida';
            resultado.subcategoria = 'Cartão de Crédito';
            resultado.categoria = 'Financeiro';
            break;
        }
    }
    
    // ========== DETECÇÃO ESPECIAL: SEGURO (PRIORIDADE MÁXIMA) ==========
    if (textoLower.includes('seguro') || textoLower.includes('ipva') || textoLower.includes('licenciamento') || textoLower.includes('dpvat')) {
        resultado.subcategoria = 'Seguro Veicular';
        resultado.categoria = 'Transporte';
        resultado.tipo = 'saida';
    }
    
    // ========== DETECÇÃO ESPECIAL: COMBUSTÍVEL (SÓ SE NÃO FOR SEGURO) ==========
    const palavrasCombustivel = ['gasolina', 'alcool', 'álcool', 'etanol', 'diesel', 'combustivel', 'combustível', 'abastecer', 'abastecimento', 'posto'];
    let ehCombustivel = false;
    for (let p of palavrasCombustivel) {
        if (textoLower.includes(p)) {
            ehCombustivel = true;
            break;
        }
    }
    
    if (ehCombustivel && !textoLower.includes('seguro') && !textoLower.includes('ipva') && !textoLower.includes('licenciamento') && !textoLower.includes('dpvat')) {
        resultado.subcategoria = 'Combustível';
        resultado.categoria = 'Transporte';
        resultado.tipo = 'saida';
    }
    
    // ========== DETECÇÃO ESPECIAL: DELIVERY ==========
    if (textoLower.includes('delivery') || textoLower.includes('ifood') || textoLower.includes('i food') || textoLower.includes('rapp i')) {
        resultado.subcategoria = 'Delivery';
        resultado.categoria = 'Alimentação';
        resultado.tipo = 'saida';
    }
    
    // 1. DETECTAR TIPO (se não foi detectado)
    if (!resultado.tipo) {
        const palavrasEntrada = ['entrada', 'ganhei', 'recebi', 'depositei', 'entrou', 'ganho', 'recebimento', 'depósito'];
        const palavrasSaida = ['saída', 'saida', 'gastei', 'paguei', 'comprei', 'gasto', 'débito', 'gaster', 'despesa', 'despesas'];
        
        for (let p of palavrasEntrada) {
            if (textoLower.includes(p)) { resultado.tipo = 'entrada'; break; }
        }
        if (!resultado.tipo) {
            for (let p of palavrasSaida) {
                if (textoLower.includes(p)) { resultado.tipo = 'saida'; break; }
            }
        }
    }
    
    // 2. DETECTAR MÊS
    const meses = [
        { nome: 'janeiro', num: 1 }, { nome: 'fevereiro', num: 2 },
        { nome: 'março', num: 3 }, { nome: 'marco', num: 3 },
        { nome: 'abril', num: 4 }, { nome: 'maio', num: 5 },
        { nome: 'junho', num: 6 }, { nome: 'julho', num: 7 },
        { nome: 'agosto', num: 8 }, { nome: 'setembro', num: 9 },
        { nome: 'outubro', num: 10 }, { nome: 'novembro', num: 11 },
        { nome: 'dezembro', num: 12 }
    ];
    
    for (let m of meses) {
        if (textoLower.includes(m.nome)) {
            resultado.mes = m.num;
            break;
        }
    }
    
    if (textoLower.includes('esse mês') || textoLower.includes('este mês') || textoLower.includes('mês atual')) {
        const dataAtual = new Date();
        resultado.mes = dataAtual.getMonth() + 1;
        resultado.ano = dataAtual.getFullYear();
    }
    
    if (textoLower.includes('mês passado') || textoLower.includes('último mês') || textoLower.includes('ultimo mes')) {
        const dataAtual = new Date();
        const mesPassado = dataAtual.getMonth();
        resultado.mes = mesPassado === 0 ? 12 : mesPassado;
        resultado.ano = mesPassado === 0 ? dataAtual.getFullYear() - 1 : dataAtual.getFullYear();
    }
    
    if (!resultado.mes) {
        const dataAtual = new Date();
        resultado.mes = dataAtual.getMonth() + 1;
        resultado.ano = dataAtual.getFullYear();
    }
    
    // 3. DETECTAR ANO
    const anoMatch = texto.match(/\b(20\d{2})\b/);
    if (anoMatch) {
        resultado.ano = parseInt(anoMatch[1]);
    } else if (!resultado.ano) {
        resultado.ano = new Date().getFullYear();
    }
    
    // 4. DETECTAR CATEGORIA E SUBCATEGORIA (se não foi detectado pelas regras especiais)
    if (!resultado.subcategoria) {
        const subEncontrada = encontrarSubcategoriaPorSinonimo(texto);
        if (subEncontrada) {
            resultado.subcategoria = subEncontrada;
            const cat = encontrarCategoriaPorSubcategoria(subEncontrada);
            if (cat) resultado.categoria = cat;
        }
    }
    
    // Se ainda não encontrou, tenta busca direta
    if (!resultado.subcategoria) {
        const todasSubcategorias = [];
        for (let cat of Object.keys(categoriasMap)) {
            for (let sub of categoriasMap[cat].sub) {
                todasSubcategorias.push({ 
                    categoria: cat, 
                    subcategoria: sub,
                    subSemAcento: removerAcentos(sub.toLowerCase()),
                    subOriginal: sub.toLowerCase()
                });
            }
        }
        
        let melhorMatch = null;
        let maiorScore = 0;
        let menorDistancia = Infinity;
        
        for (let item of todasSubcategorias) {
            const subLower = item.subOriginal;
            const subSemAcento = item.subSemAcento;
            
            if (textoLower.includes(subLower) || 
                textoLower.includes(subSemAcento) || 
                textoLowerSemAcento.includes(subSemAcento) ||
                textoLower.includes(item.subcategoria.toLowerCase())) {
                const score = item.subcategoria.length;
                if (score > maiorScore) {
                    maiorScore = score;
                    melhorMatch = item;
                }
            }
            
            const palavras = textoLower.split(' ');
            for (let palavra of palavras) {
                if (palavra.length > 3) {
                    const distancia = calcularDistancia(palavra, subLower);
                    if (distancia < menorDistancia && distancia < 3) {
                        menorDistancia = distancia;
                        if (!melhorMatch || distancia < 3) {
                            melhorMatch = item;
                        }
                    }
                }
            }
        }
        
        if (melhorMatch) {
            resultado.subcategoria = melhorMatch.subcategoria;
            resultado.categoria = melhorMatch.categoria;
        }
    }
    
    // Se ainda não encontrou, tenta categoria
    if (!resultado.categoria) {
        for (let cat of Object.keys(categoriasMap)) {
            const catSemAcento = removerAcentos(cat.toLowerCase());
            if (textoLower.includes(cat.toLowerCase()) || 
                textoLower.includes(catSemAcento) || 
                textoLowerSemAcento.includes(catSemAcento)) {
                resultado.categoria = cat;
                break;
            }
        }
    }
    
    // ========== ATUALIZA O ASSUNTO ATUAL ==========
    if (resultado.categoria || resultado.subcategoria || resultado.tipo || resultado.mes) {
        assuntoAtual.categoria = resultado.categoria || assuntoAtual.categoria;
        assuntoAtual.subcategoria = resultado.subcategoria || assuntoAtual.subcategoria;
        assuntoAtual.mes = resultado.mes || assuntoAtual.mes;
        assuntoAtual.ano = resultado.ano || assuntoAtual.ano;
        assuntoAtual.tipo = resultado.tipo || assuntoAtual.tipo;
        assuntoAtual.timestamp = Date.now();
    }
    
    if (resultado.categoria || resultado.subcategoria || resultado.tipo) {
        ultimoFiltroIA.categoria = resultado.categoria;
        ultimoFiltroIA.subcategoria = resultado.subcategoria;
        ultimoFiltroIA.mes = resultado.mes;
        ultimoFiltroIA.ano = resultado.ano;
        ultimoFiltroIA.tipo = resultado.tipo;
        ultimoFiltroIA.ultimaPergunta = texto;
        ultimoFiltroIA.ultimoContexto = {
            categoria: resultado.categoria,
            subcategoria: resultado.subcategoria,
            mes: resultado.mes,
            ano: resultado.ano,
            tipo: resultado.tipo
        };
    }
    
    return resultado;
}

// ==================== FUNÇÃO DE DISTÂNCIA DE LEVENSHTEIN ====================
function calcularDistancia(a, b) {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;
    
    const matrix = [];
    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }
    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }
    
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b[i-1] === a[j-1]) {
                matrix[i][j] = matrix[i-1][j-1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i-1][j-1] + 1,
                    matrix[i][j-1] + 1,
                    matrix[i-1][j] + 1
                );
            }
        }
    }
    return matrix[b.length][a.length];
}

function processarPerguntaIA(texto) {
    const resultado = interpretarPergunta(texto);
    
    // Filtrar transações
    let filtradas = [...transacoes];
    
    if (resultado.categoria) {
        filtradas = filtradas.filter(t => t.categoria === resultado.categoria);
    }
    
    if (resultado.subcategoria) {
        filtradas = filtradas.filter(t => t.subcategoria === resultado.subcategoria);
    }
    
    if (resultado.tipo) {
        filtradas = filtradas.filter(t => t.tipo === resultado.tipo);
    }
    
    if (resultado.mes && resultado.ano) {
        filtradas = filtradas.filter(t => {
            const match = t.data.match(/(\d{2})\/(\d{2})\/(\d{4})/);
            if (match) {
                const mes = parseInt(match[2]);
                const ano = parseInt(match[3]);
                return mes === resultado.mes && ano === resultado.ano;
            }
            const data = new Date(t.data);
            if (!isNaN(data.getTime())) {
                return data.getMonth() === (resultado.mes - 1) && data.getFullYear() === resultado.ano;
            }
            return false;
        });
    }
    
    const total = filtradas.reduce((acc, t) => acc + t.valor, 0);
    const quantidade = filtradas.length;
    
    let resposta = '';
    if (quantidade === 0) {
        resposta = '❌ Não encontrei nenhuma movimentação';
        if (resultado.categoria) resposta += ` na categoria ${resultado.categoria}`;
        if (resultado.subcategoria) resposta += ` (${resultado.subcategoria})`;
        if (resultado.mes && resultado.ano) {
            const meses = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
            resposta += ` em ${meses[resultado.mes-1]} de ${resultado.ano}`;
        }
        resposta += '.';
        
        if (resultado.subcategoria) {
            resposta += `<br><span style="color:#94A3B8; font-size:0.8rem;">💡 Dica: Verifique se a subcategoria "${resultado.subcategoria}" está correta.</span>`;
        }
    } else {
        const icone = resultado.tipo === 'entrada' ? '💰' : resultado.tipo === 'saida' ? '💸' : '📊';
        resposta = `${icone} Encontrei ${quantidade} movimentação${quantidade > 1 ? 'es' : ''}`;
        if (resultado.categoria) resposta += ` na categoria ${resultado.categoria}`;
        if (resultado.subcategoria) resposta += ` (${resultado.subcategoria})`;
        if (resultado.mes && resultado.ano) {
            const meses = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
            resposta += ` em ${meses[resultado.mes-1]} de ${resultado.ano}`;
        }
        resposta += `: <strong>${formatarMoeda(total)}</strong>`;
        
        if (quantidade > 1) {
            const media = total / quantidade;
            const maior = Math.max(...filtradas.map(t => t.valor));
            const menor = Math.min(...filtradas.map(t => t.valor));
            resposta += `<br><span style="font-size:0.8rem; color:#94A3B8;">📊 Média: ${formatarMoeda(media)} • Maior: ${formatarMoeda(maior)} • Menor: ${formatarMoeda(menor)}</span>`;
        }
        
        if (resultado.listar && filtradas.length > 0) {
            resposta += '<br><br><div style="font-size:0.8rem; border-top:1px solid #334155; padding-top:8px; margin-top:8px;"><strong>📋 Detalhes:</strong><br>';
            filtradas.slice(0, 15).forEach((t, i) => {
                const iconeItem = t.icone || '';
                const obs = t.observacao ? ` (${t.observacao})` : '';
                resposta += `${i+1}. ${iconeItem} ${t.categoria} • ${t.subcategoria} - ${formatarMoeda(t.valor)}${obs}<br>`;
            });
            if (filtradas.length > 15) {
                resposta += `<span style="color:#94A3B8;">... e mais ${filtradas.length - 15} itens</span>`;
            }
            resposta += '</div>';
        }
    }
    
    let detalhes = [];
    if (resultado.categoria) detalhes.push(`📁 ${resultado.categoria}`);
    if (resultado.subcategoria) detalhes.push(`🏷️ ${resultado.subcategoria}`);
    if (resultado.mes && resultado.ano) {
        const meses = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
        detalhes.push(`📅 ${meses[resultado.mes-1]} de ${resultado.ano}`);
    }
    if (resultado.tipo) detalhes.push(`📊 ${resultado.tipo === 'entrada' ? 'Entrada' : 'Saída'}`);
    if (resultado.usarContexto) detalhes.push(`🔄 Usando contexto anterior`);
    
    const detalhesText = detalhes.length > 0 ? `<div style="font-size:0.7rem; color:#94A3B8; margin-top:6px;">🔍 ${detalhes.join(' • ')}</div>` : '';
    
    return { resposta, detalhes: detalhesText, total, quantidade, filtros: resultado };
}

// ==================== CHAT DA IA ====================
const inputIA = document.getElementById('inputIA');
const btnEnviarIA = document.getElementById('btnEnviarIA');
const btnLimparChatIA = document.getElementById('btnLimparChatIA');
const respostasIA = document.getElementById('respostasIA');

function adicionarMensagemIA(remetente, conteudo, extra = '') {
    const div = document.createElement('div');
    if (remetente === 'usuario') {
        div.className = 'mensagem-usuario';
        div.innerHTML = `<div class="card-usuario" style="font-size:0.85rem; padding:6px 12px;">${conteudo}</div>`;
    } else {
        div.className = 'mensagem-sistema';
        div.innerHTML = `<div class="card-sistema" style="font-size:0.85rem; padding:6px 12px;">${conteudo}${extra}</div>`;
    }
    respostasIA.appendChild(div);
    respostasIA.scrollTop = respostasIA.scrollHeight;
}

function enviarPerguntaIA() {
    const pergunta = inputIA.value.trim();
    if (!pergunta) return;
    
    adicionarMensagemIA('usuario', pergunta);
    inputIA.value = '';
    
    const resultado = processarPerguntaIA(pergunta);
    adicionarMensagemIA('sistema', resultado.resposta, resultado.detalhes);
}

if (btnLimparChatIA) {
    btnLimparChatIA.onclick = () => {
        respostasIA.innerHTML = '';
        ultimoFiltroIA = { categoria: null, subcategoria: null, mes: null, ano: null, tipo: null, ultimaPergunta: null, ultimoContexto: null };
        assuntoAtual = { categoria: null, subcategoria: null, mes: null, ano: null, tipo: null, timestamp: null };
        const div = document.createElement('div');
        div.className = 'mensagem-sistema';
        div.innerHTML = `<div class="card-sistema" style="font-size:0.75rem; padding:4px 10px; color:#94A3B8;">🧹 Histórico e contexto limpos</div>`;
        respostasIA.appendChild(div);
    };
}

btnEnviarIA.onclick = enviarPerguntaIA;
inputIA.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') enviarPerguntaIA();
});

// ==================== INICIALIZAÇÃO ====================
carregarLocalStorage();