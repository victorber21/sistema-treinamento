// ============================================
// FIDÚCIA ACADEMY - SISTEMA DE TREINAMENTO
// ============================================z
// Versão: 2.0
// Data: 21/01/2025
// ============================================

// ============================================
// 1. CONFIGURAÇÕES E CONSTANTES
// ============================================

const ADMIN_PASSWORD = "fiducia2025";
const MAX_ATTEMPTS = 3;
const QUIZ_TIME_MINUTES = 30;

// ============================================
// 2. DADOS DOS MÓDULOS
// ============================================

let trainingModules = {
    'abertura_contas': {
        title: 'Abertura de Contas',
        description: 'Processo completo de abertura de contas',
        content: [
            { title: 'Documentação Necessária', text: 'Para abrir uma conta, é essencial verificar a documentação completa do cliente. Os documentos básicos incluem RG, CPF, comprovante de residência atualizado e comprovante de renda.' },
            { title: 'Processo de Cadastro', text: 'O cadastro deve ser feito com atenção aos detalhes. Verifique todos os dados pessoais, endereço completo, telefones de contato e e-mail.' },
            { title: 'Validações e Compliance', text: 'Realize todas as validações necessárias no sistema, incluindo consulta ao SERASA e verificação de PEP.' }
        ],
        questions: [
            { question: 'Qual documento NÃO é obrigatório para abertura de conta?', options: ['CPF', 'RG', 'Título de Eleitor', 'Comprovante de Residência'], correct: 2 },
            { question: 'O que significa PEP?', options: ['Pessoa Exposta Politicamente', 'Protocolo de Endereço Padrão', 'Processo Eletrônico de Pagamento', 'Perfil Econômico do Pagador'], correct: 0 },
            { question: 'Qual a importância do comprovante de residência?', options: ['Não é importante', 'Validar endereço do cliente', 'Apenas para arquivo', 'Exigência opcional'], correct: 1 },
            { question: 'O que deve ser verificado no CPF?', options: ['Apenas se está correto', 'Regularidade e pendências', 'Data de emissão', 'Local de emissão'], correct: 1 },
            { question: 'Quando fazer análise de crédito?', options: ['Depois de 30 dias', 'Nunca', 'Durante o processo de abertura', 'Só se o cliente pedir'], correct: 2 },
            { question: 'O que fazer se encontrar dados inconsistentes?', options: ['Ignorar', 'Solicitar correção ao cliente', 'Cadastrar assim mesmo', 'Cancelar o processo'], correct: 1 },
            { question: 'Qual o prazo de validade do comprovante de residência?', options: ['Não tem prazo', '90 dias', '180 dias', '1 ano'], correct: 1 },
            { question: 'É obrigatório coletar telefone do cliente?', options: ['Não', 'Sim, pelo menos um contato', 'Apenas celular', 'Apenas fixo'], correct: 1 },
            { question: 'O que é compliance bancário?', options: ['Sistema do banco', 'Conformidade com regras e leis', 'Tipo de conta', 'Setor do banco'], correct: 1 },
            { question: 'Após abrir a conta, o que deve ser entregue ao cliente?', options: ['Nada', 'Contrato e cartão', 'Apenas o número da conta', 'Extrato'], correct: 1 }
        ]
    },
    'plataforma_credito': {
        title: 'Plataforma de Crédito',
        description: 'Análise e concessão de crédito',
        content: [
            { title: 'Tipos de Crédito', text: 'A plataforma oferece diversos produtos: crédito pessoal, consignado, CDC, cheque especial e cartão de crédito.' },
            { title: 'Análise de Risco', text: 'A análise considera score de crédito, histórico de pagamentos, renda comprovada e comprometimento atual.' },
            { title: 'Aprovação e Limites', text: 'Os limites são definidos automaticamente pelo sistema com base no perfil de risco.' }
        ],
        questions: [
            { question: 'O que é score de crédito?', options: ['Saldo em conta', 'Pontuação que indica risco de crédito', 'Tipo de crédito', 'Taxa de juros'], correct: 1 },
            { question: 'Qual tipo de crédito tem desconto em folha?', options: ['Pessoal', 'Consignado', 'CDC', 'Cheque especial'], correct: 1 },
            { question: 'O que significa CDC?', options: ['Centro de Crédito', 'Crédito Direto ao Consumidor', 'Conta de Crédito Digital', 'Controle de Débito'], correct: 1 },
            { question: 'Comprometimento de renda acima de quanto é preocupante?', options: ['10%', '30%', '50%', '70%'], correct: 2 },
            { question: 'O que fazer se o sistema recusar automaticamente?', options: ['Liberar mesmo assim', 'Solicitar análise manual', 'Ignorar', 'Aumentar o limite'], correct: 1 },
            { question: 'Qual documento comprova renda de autônomo?', options: ['Holerite', 'Decore ou imposto de renda', 'Extrato bancário', 'Não precisa comprovar'], correct: 1 },
            { question: 'O que é rating de risco?', options: ['Taxa de juros', 'Classificação do perfil do cliente', 'Tipo de conta', 'Limite de crédito'], correct: 1 },
            { question: 'Crédito pré-aprovado pode ser recusado?', options: ['Não, é garantido', 'Sim, se houver mudança no perfil', 'Apenas em casos criminais', 'Nunca'], correct: 1 },
            { question: 'Qual a importância do histórico de pagamento?', options: ['Nenhuma', 'Indica comportamento futuro do cliente', 'Só para arquivo', 'Apenas estatística'], correct: 1 },
            { question: 'O que fazer se cliente discordar da análise?', options: ['Ignorar', 'Explicar os critérios usados', 'Mudar a decisão', 'Encerrar atendimento'], correct: 1 }
        ]
    },
    'analise_contas': {
        title: 'Análise de Contas',
        description: 'Monitoramento e análise de contas',
        content: [
            { title: 'Movimentação Financeira', text: 'Analise o padrão de movimentação: entradas regulares, débitos recorrentes e saldo médio.' },
            { title: 'Indicadores de Alerta', text: 'Fique atento a saques frequentes, transferências suspeitas e movimentação incompatível.' },
            { title: 'Relatórios e Compliance', text: 'Documente todas as análises realizadas e reporte casos suspeitos.' }
        ],
        questions: [
            { question: 'O que é movimentação atípica?', options: ['Movimentação normal', 'Diferente do padrão habitual', 'Apenas débitos', 'Apenas créditos'], correct: 1 },
            { question: 'Saque acima de R$ 50.000 exige:', options: ['Nada especial', 'Comunicação ao COAF', 'Autorização do gerente', 'Apenas registro'], correct: 1 },
            { question: 'O que é saldo médio?', options: ['Saldo atual', 'Média dos saldos em período', 'Maior saldo', 'Saldo mínimo'], correct: 1 },
            { question: 'Débitos recorrentes são:', options: ['Aleatórios', 'Pagamentos regulares', 'Saques', 'Transferências'], correct: 1 },
            { question: 'O que fazer ao identificar fraude?', options: ['Ignorar', 'Bloquear e reportar', 'Avisar cliente', 'Continuar normal'], correct: 1 },
            { question: 'Uso excessivo de cheque especial indica:', options: ['Bom cliente', 'Dificuldade financeira', 'Nada relevante', 'Cliente VIP'], correct: 1 },
            { question: 'O que é COAF?', options: ['Banco', 'Conselho de Controle de Atividades Financeiras', 'Tipo de conta', 'Sistema'], correct: 1 },
            { question: 'Transferências suspeitas devem ser:', options: ['Ignoradas', 'Analisadas e reportadas', 'Canceladas', 'Autorizadas'], correct: 1 },
            { question: 'Período ideal para análise:', options: ['1 dia', '1 semana', 'Mínimo 3 meses', '1 ano'], correct: 2 },
            { question: 'Movimentação incompatível com renda:', options: ['É normal', 'Requer investigação', 'Encerrar conta', 'Ignorar'], correct: 1 }
        ]
    },
    'emissao_ccb': {
        title: 'Emissão de CCB',
        description: 'Cédula de Crédito Bancário',
        content: [
            { title: 'O que é CCB', text: 'A Cédula de Crédito Bancário é um título que formaliza operações de empréstimo.' },
            { title: 'Dados Obrigatórios', text: 'A CCB deve conter valor, taxa de juros, prazo, forma de pagamento e dados do devedor.' },
            { title: 'Assinatura e Validação', text: 'A CCB só tem validade com assinatura do cliente, física ou digital.' }
        ],
        questions: [
            { question: 'O que é CCB?', options: ['Conta Corrente Bancária', 'Cédula de Crédito Bancário', 'Centro de Crédito', 'Cartão de Crédito'], correct: 1 },
            { question: 'A CCB é um:', options: ['Documento informal', 'Título de crédito', 'Tipo de conta', 'Cartão'], correct: 1 },
            { question: 'Assinatura digital precisa de:', options: ['Nada especial', 'Certificado digital válido', 'Testemunha', 'Cartório'], correct: 1 },
            { question: 'Qual NÃO é obrigatório na CCB:', options: ['Valor', 'Taxa de juros', 'Nome da mãe', 'Prazo'], correct: 2 },
            { question: 'CCB sem assinatura é:', options: ['Válida', 'Inválida', 'Válida por 30 dias', 'Depende do valor'], correct: 1 },
            { question: 'Garantias na CCB são:', options: ['Sempre obrigatórias', 'Opcionais conforme caso', 'Proibidas', 'Só valores altos'], correct: 1 },
            { question: 'Onde armazenar CCB:', options: ['Apenas físico', 'Sistema digital', 'Com cliente', 'Não precisa'], correct: 1 },
            { question: 'Cliente recusa assinar:', options: ['Forçar', 'Não liberar crédito', 'Assinar por ele', 'Liberar'], correct: 1 },
            { question: 'CCB pode ser alterada:', options: ['Sim, sempre', 'Não, apenas com aditivo', 'Sim, gerente', 'Nunca'], correct: 1 },
            { question: 'Função da CCB:', options: ['Decorativa', 'Formalizar empréstimo', 'Controle interno', 'Marketing'], correct: 1 }
        ]
    },
    'emissao_cartoes': {
        title: 'Emissão de Cartões',
        description: 'Gestão de cartões bancários',
        content: [
            { title: 'Tipos de Cartões', text: 'Cartão de débito, crédito, múltiplo e pré-pago. Cada tipo tem requisitos diferentes.' },
            { title: 'Processo de Solicitação', text: 'Verifique conta ativa, documentação e análise de crédito (para cartão de crédito).' },
            { title: 'Ativação e Senhas', text: 'Oriente sobre ativação via app, site ou telefone, e cadastro de senha segura.' }
        ],
        questions: [
            { question: 'Cartão múltiplo combina:', options: ['Dois créditos', 'Débito e crédito', 'Dois débitos', 'Crédito e pré-pago'], correct: 1 },
            { question: 'Para cartão de crédito é obrigatório:', options: ['Apenas conta', 'Análise de crédito aprovada', 'Só CPF', 'Nada especial'], correct: 1 },
            { question: 'Prazo de entrega:', options: ['24 horas', '10 dias úteis', '30 dias', '2 meses'], correct: 1 },
            { question: 'Senha deve ter:', options: ['4 dígitos', '6 dígitos', '8 dígitos', 'Livre'], correct: 0 },
            { question: 'Cartão não chega:', options: ['Aguardar', 'Solicitar 2ª via', 'Ir ao banco', 'Desistir'], correct: 1 },
            { question: 'Cartão pré-pago precisa de:', options: ['Análise crédito', 'Apenas carga', 'Comprovante renda', 'Garantias'], correct: 1 },
            { question: 'Cliente pode ter:', options: ['Apenas 1', 'Conforme política', 'Ilimitado', 'Máximo 3'], correct: 1 },
            { question: 'Ativação pode ser por:', options: ['Apenas agência', 'App, site ou telefone', 'Só telefone', 'Correio'], correct: 1 },
            { question: 'Esqueceu senha:', options: ['Dar senha antiga', 'Recuperação/redefinição', 'Novo cartão', 'Nada'], correct: 1 },
            { question: 'Cartão clonado:', options: ['Ignorar', 'Bloquear imediatamente', 'Usar normal', 'Trocar depois'], correct: 1 }
        ]
    },
    'med': {
        title: 'MED - Máquina de Depósito',
        description: 'Operação de máquinas de depósito',
        content: [
            { title: 'Funcionamento da MED', text: 'Permite depósitos em dinheiro e cheque sem envelope. Aceita até 50 notas por transação.' },
            { title: 'Processo de Depósito', text: 'Cliente insere cartão, senha, escolhe depósito, insere notas. Máquina conta automaticamente.' },
            { title: 'Resolução de Problemas', text: 'Notas rasgadas podem ser rejeitadas. Máquina travada: acionar suporte técnico.' }
        ],
        questions: [
            { question: 'MED aceita quantas notas:', options: ['10', '20', '50', '100'], correct: 2 },
            { question: 'Precisa de envelope:', options: ['Sim', 'Não', 'Às vezes', 'Só cheque'], correct: 1 },
            { question: 'Nota rasgada:', options: ['Sempre aceita', 'Geralmente não', 'Depende valor', 'Só grandes'], correct: 1 },
            { question: 'Quem conta:', options: ['Cliente', 'Funcionário', 'Máquina', 'Gerente'], correct: 2 },
            { question: 'Comprovante deve ser:', options: ['Descartado', 'Guardado', 'Na máquina', 'Enviado'], correct: 1 },
            { question: 'Valor errado:', options: ['Confirmar', 'Cancelar e revisar', 'Chamar polícia', 'Ir embora'], correct: 1 },
            { question: 'MED travou:', options: ['Forçar', 'Acionar suporte', 'Ir embora', 'Esperar'], correct: 1 },
            { question: 'Depósito cheque:', options: ['Impossível', 'Possível', 'Só agências', 'Proibido'], correct: 1 },
            { question: 'Horário:', options: ['Comercial', '24h conforme local', 'Só manhã', 'Só tarde'], correct: 1 },
            { question: 'Não reconhece cartão:', options: ['Forçar', 'Tentar novamente', 'Desistir', 'Ligar polícia'], correct: 1 }
        ]
    },
    'cabine': {
        title: 'Cabine de Autoatendimento',
        description: 'Suporte em cabines',
        content: [
            { title: 'Serviços Disponíveis', text: 'Saques, depósitos, extratos, pagamentos, transferências e segunda via de documentos.' },
            { title: 'Atendimento ao Cliente', text: 'Auxilie sem fazer operações pelo cliente. Ensine passo a passo.' },
            { title: 'Segurança', text: 'Fique atento a fraudes: pessoas tentando ver senhas ou oferecendo ajuda suspeita.' }
        ],
        questions: [
            { question: 'Na cabine é possível:', options: ['Apenas saques', 'Diversos serviços', 'Só depósitos', 'Apenas consultas'], correct: 1 },
            { question: 'Funcionário pode digitar senha:', options: ['Sim', 'Não, nunca', 'Às vezes', 'Com autorização'], correct: 1 },
            { question: 'Cliente com dificuldade:', options: ['Fazer por ele', 'Ensinar passo a passo', 'Ignorar', 'Mandar ao caixa'], correct: 1 },
            { question: 'Pessoa oferecendo ajuda:', options: ['É normal', 'Possível fraude', 'Incentivar', 'Ignorar'], correct: 1 },
            { question: 'Limite de saque:', options: ['Ilimitado', 'Conforme política', 'R$ 100', 'R$ 1.000'], correct: 1 },
            { question: 'Cartão esquecido:', options: ['Deixar', 'Recolher e devolver', 'Ficar', 'Jogar fora'], correct: 1 },
            { question: 'Extrato impresso:', options: ['Deixar', 'Entregar ao cliente', 'Descartar', 'Arquivar'], correct: 1 },
            { question: 'Máquina sem dinheiro:', options: ['Forçar', 'Orientar outro caixa', 'Abrir', 'Ignorar'], correct: 1 },
            { question: 'Horário das cabines:', options: ['24h ou conforme', 'Só comercial', 'Só manhã', 'Meio-dia'], correct: 0 },
            { question: 'Comportamento suspeito:', options: ['Ignorar', 'Reportar', 'Confrontar', 'Filmar'], correct: 1 }
        ]
    },
    'emissao_boleto': {
        title: 'Emissão de Boleto',
        description: 'Geração de boletos bancários',
        content: [
            { title: 'Tipos de Boleto', text: 'Boleto registrado (rastreável) é obrigatório desde 2018. Contém código de barras e linha digitável.' },
            { title: 'Geração de Boleto', text: 'Informe valor, vencimento, dados do pagador e descrição. Sistema gera código único.' },
            { title: 'Gestão e Baixa', text: 'Acompanhe status: pendente, pago, vencido, cancelado. Baixa é automática após pagamento.' }
        ],
        questions: [
            { question: 'Boleto registrado desde:', options: ['2015', '2018', '2020', '2022'], correct: 1 },
            { question: 'Código de barras serve para:', options: ['Decoração', 'Leitura automática', 'Identificar banco', 'Nada'], correct: 1 },
            { question: 'Boleto pode ser enviado por:', options: ['Só correio', 'Email, app ou impresso', 'Apenas WhatsApp', 'Só pessoalmente'], correct: 1 },
            { question: 'Após vencimento:', options: ['Boleto some', 'Pode ter multa e juros', 'Nada muda', 'Não pode pagar'], correct: 1 },
            { question: 'Dados obrigatórios NÃO incluem:', options: ['Valor', 'Vencimento', 'Cor favorita', 'Dados pagador'], correct: 2 },
            { question: 'Baixa após pagamento:', options: ['Manual', 'Automática', 'Opcional', 'Desnecessária'], correct: 1 },
            { question: 'Para cancelar:', options: ['Rasgar', 'Usar procedimento', 'Ligar cliente', 'Nada'], correct: 1 },
            { question: 'Linha digitável é:', options: ['Decoração', 'Código alternativo', 'Telefone banco', 'Nada'], correct: 1 },
            { question: 'Boleto pago mas não atualizou:', options: ['Pagar novamente', 'Verificar compensação', 'Ignorar', 'É fraude'], correct: 1 },
            { question: 'Beneficiário é:', options: ['Quem paga', 'Quem recebe', 'O banco', 'Ninguém'], correct: 1 }
        ]
    }
};

// ============================================
// 3. VARIÁVEIS GLOBAIS
// ============================================

let activeModules = [];
let currentModule = null;
let userProgress = {};
let companyName = '';
let isAdminMode = false;
let generatedLink = '';
let quizInProgress = false;
let timerInterval = null;
let timeRemaining = 1800;
let generatedLinks = [];
let clientsData = [];
let currentEditingModuleId = null;


// ============================================
// 4. UTILITÁRIOS
// ============================================

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function downloadCSV(csv, filename) {
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
}

// ============================================
// 5. SISTEMA DE AUTENTICAÇÃO ADMIN
// ============================================

function showAdminLogin() {
    document.getElementById('admin-login').style.display = 'block';
    document.getElementById('dashboard').style.display = 'none';
}

function checkAdminPassword() {
    const password = document.getElementById('adminPassword').value;
    if (password === ADMIN_PASSWORD) {
        document.getElementById('admin-login').style.display = 'none';
        showAdminPanel();
    } else {
        document.getElementById('loginError').style.display = 'block';
        document.getElementById('adminPassword').value = '';
    }
}

function logout() {
    window.location.href = window.location.pathname;
}

// ============================================
// 6. PAINEL ADMINISTRATIVO
// ============================================

function showAdminPanel() {
    document.getElementById('admin-panel').style.display = 'block';
    document.getElementById('adminBadge').style.display = 'block';
    document.getElementById('adminTabs').style.display = 'flex';
    document.getElementById('dashboard').style.display = 'none';

    // Renderizar checkboxes de módulos
    const container = document.getElementById('adminModulesCheckbox');
    container.innerHTML = '';
    
    Object.keys(trainingModules).forEach(moduleId => {
        const module = trainingModules[moduleId];
        const div = document.createElement('div');
        div.className = 'checkbox-item';
        div.innerHTML = `
            <input type="checkbox" id="admin_${moduleId}" value="${moduleId}">
            <label for="admin_${moduleId}">${module.title}</label>
        `;
        container.appendChild(div);
    });

    refreshAdminData();
}

function switchAdminTab(tabName) {
    document.querySelectorAll('.admin-tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(`admin-tab-${tabName}`).classList.add('active');
    event.target.classList.add('active');

    if (tabName === 'dashboard') refreshAdminData();
    if (tabName === 'history') renderHistoryTable();
    if (tabName === 'modules') renderModulesListTable();
}

function generateAdminLink() {
    const baseUrl = window.location.origin + window.location.pathname;
    const selectedModules = [];
    
    document.querySelectorAll('#adminModulesCheckbox input:checked').forEach(cb => {
        selectedModules.push(cb.value);
    });

    if (selectedModules.length === 0) {
        alert('⚠️ Selecione pelo menos um módulo!');
        return;
    }

    const company = document.getElementById('adminCompanyName').value.trim();
    const email = document.getElementById('adminCompanyEmail').value.trim();

    if (!company) {
        alert('⚠️ Digite o nome da empresa!');
        return;
    }
    
    generatedLink = baseUrl + '?modulos=' + selectedModules.join(',');
    generatedLink += '&empresa=' + encodeURIComponent(company);

    // Salvar no histórico
    generatedLinks.push({
        id: Date.now(),
        company: company,
        email: email,
        modules: selectedModules,
        link: generatedLink,
        createdAt: new Date().toISOString()
    });

    localStorage.setItem('fiducia_links', JSON.stringify(generatedLinks));

    document.getElementById('generatedLinkDisplay').textContent = generatedLink;
    document.getElementById('generatedLinkBox').style.display = 'block';
    document.getElementById('generatedLinkBox').scrollIntoView({ behavior: 'smooth' });
}

function copyGeneratedLink() {
    navigator.clipboard.writeText(generatedLink).then(() => {
        alert('✅ Link copiado para a área de transferência!');
    });
}

function testGeneratedLink() {
    window.open(generatedLink, '_blank');
}

function clearGeneratorForm() {
    document.getElementById('adminCompanyName').value = '';
    document.getElementById('adminCompanyEmail').value = '';
    document.querySelectorAll('#adminModulesCheckbox input').forEach(cb => cb.checked = false);
    document.getElementById('generatedLinkBox').style.display = 'none';
}

// ============================================
// 7. DASHBOARD ADMIN - ESTATÍSTICAS
// ============================================

function refreshAdminData() {
    // Atualizar estatísticas
    document.getElementById('stat-links').textContent = generatedLinks.length;

    let approved = 0;
    let pending = 0;

    clientsData.forEach(client => {
        const progress = client.progress || {};
        const modules = client.modules || [];
        const completed = Object.keys(progress).filter(m => progress[m]?.passed).length;
        
        if (completed === modules.length && modules.length > 0) {
            approved++;
        } else {
            pending++;
        }
    });

    document.getElementById('stat-approved').textContent = approved;
    document.getElementById('stat-pending').textContent = pending;

    renderPendingTable();
    renderApprovedTable();
}

function renderPendingTable() {
    const container = document.getElementById('pending-table');
    const pending = clientsData.filter(client => {
        const progress = client.progress || {};
        const modules = client.modules || [];
        const completed = Object.keys(progress).filter(m => progress[m]?.passed).length;
        return completed < modules.length;
    }).slice(0, 5);

    if (pending.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>✅ Nenhum cliente pendente</p></div>';
        return;
    }

    let html = '<table><thead><tr><th>Cliente</th><th>Módulos</th><th>Progresso</th></tr></thead><tbody>';
    
    pending.forEach(client => {
        const progress = client.progress || {};
        const modules = client.modules || [];
        const completed = Object.keys(progress).filter(m => progress[m]?.passed).length;
        const percentage = modules.length > 0 ? (completed / modules.length * 100) : 0;

        html += `
            <tr>
                <td><strong>${client.name}</strong></td>
                <td>${modules.length} módulos</td>
                <td>
                    ${completed}/${modules.length} (${Math.round(percentage)}%)
                    <div class="progress-bar-inline">
                        <div class="progress-fill-inline" style="width: ${percentage}%"></div>
                    </div>
                </td>
            </tr>
        `;
    });

    html += '</tbody></table>';
    container.innerHTML = html;
}

function renderApprovedTable() {
    const container = document.getElementById('approved-table');
    const approved = clientsData.filter(client => {
        const progress = client.progress || {};
        const modules = client.modules || [];
        const completed = Object.keys(progress).filter(m => progress[m]?.passed).length;
        return completed === modules.length && modules.length > 0;
    }).slice(0, 5);

    if (approved.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>Nenhuma aprovação ainda</p></div>';
        return;
    }

    let html = '<table><thead><tr><th>Cliente</th><th>Módulos</th><th>Data</th></tr></thead><tbody>';
    
    approved.forEach(client => {
        const date = new Date(client.lastAccess).toLocaleDateString('pt-BR');
        html += `
            <tr>
                <td><strong>${client.name}</strong></td>
                <td><span class="badge badge-success">${client.modules.length} concluídos</span></td>
                <td>${date}</td>
            </tr>
        `;
    });

    html += '</tbody></table>';
    container.innerHTML = html;
}

// ============================================
// 8. HISTÓRICO DE LINKS
// ============================================

function renderHistoryTable() {
    const container = document.getElementById('history-table');
    
    if (generatedLinks.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>Nenhum link gerado ainda</p></div>';
        return;
    }

    let html = '<table><thead><tr><th>Data</th><th>Cliente</th><th>Módulos</th><th>Ações</th></tr></thead><tbody>';
    
    [...generatedLinks].reverse().forEach(link => {
        const date = new Date(link.createdAt).toLocaleDateString('pt-BR');
        const modulesJson = JSON.stringify(link.modules).replace(/"/g, '&quot;');
        
        html += `
            <tr>
                <td>${date}</td>
                <td><strong>${link.company}</strong></td>
                <td>
                    <span class="badge badge-info clickable" onclick='showModulesModal(${modulesJson})'>
                        ${link.modules.length} módulos - Clique aqui
                    </span>
                </td>
                <td>
                    <button class="btn btn-small btn-copy" onclick="copySpecificLink('${link.link.replace(/'/g, "\\'")}')">📋 Copiar</button>
                </td>
            </tr>
        `;
    });

    html += '</tbody></table>';
    container.innerHTML = html;
}

function copySpecificLink(link) {
    navigator.clipboard.writeText(link).then(() => {
        alert('✅ Link copiado!');
    });
}

function exportHistory() {
    let csv = 'Data,Cliente,Email,Módulos,Link\n';
    generatedLinks.forEach(link => {
        const date = new Date(link.createdAt).toLocaleString('pt-BR');
        csv += `"${date}","${link.company}","${link.email || ''}",${link.modules.length},"${link.link}"\n`;
    });
    downloadCSV(csv, 'historico-links.csv');
}

// ============================================
// 9. MODAIS
// ============================================

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

function showModulesModal(modules) {
    const content = document.getElementById('modalModulesContent');
    let html = '';
    
    modules.forEach(modId => {
        const mod = trainingModules[modId];
        if (mod) {
            html += `<div class="module-tag">${mod.title}</div>`;
        }
    });
    
    content.innerHTML = html || '<p style="text-align:center; color:#6b7280;">Nenhum módulo</p>';
    document.getElementById('modulesModal').classList.add('active');
}

function showApprovedDetails() {
    const approved = clientsData.filter(client => {
        const progress = client.progress || {};
        const modules = client.modules || [];
        const completed = Object.keys(progress).filter(m => progress[m]?.passed).length;
        return completed === modules.length && modules.length > 0;
    });

    const content = document.getElementById('approvedModalContent');
    
    if (approved.length === 0) {
        content.innerHTML = '<p style="text-align:center; color:#6b7280; padding:20px;">Nenhum cliente aprovado ainda</p>';
    } else {
        let html = '<table style="width:100%"><thead><tr><th>Cliente</th><th>Módulos</th><th>Data</th></tr></thead><tbody>';
        approved.forEach(client => {
            const date = new Date(client.lastAccess).toLocaleDateString('pt-BR');
            html += `
                <tr>
                    <td><strong>${client.name}</strong></td>
                    <td><span class="badge badge-success">${client.modules.length} concluídos</span></td>
                    <td>${date}</td>
                </tr>
            `;
        });
        html += '</tbody></table>';
        content.innerHTML = html;
    }
    
    document.getElementById('approvedModal').classList.add('active');
}

function showPendingDetails() {
    const pending = clientsData.filter(client => {
        const progress = client.progress || {};
        const modules = client.modules || [];
        const completed = Object.keys(progress).filter(m => progress[m]?.passed).length;
        return completed < modules.length;
    });

    const content = document.getElementById('pendingModalContent');
    
    if (pending.length === 0) {
        content.innerHTML = '<p style="text-align:center; color:#6b7280; padding:20px;">Nenhum cliente pendente</p>';
    } else {
        let html = '<table style="width:100%"><thead><tr><th>Cliente</th><th>Progresso</th></tr></thead><tbody>';
        pending.forEach(client => {
            const progress = client.progress || {};
            const modules = client.modules || [];
            const completed = Object.keys(progress).filter(m => progress[m]?.passed).length;
            const percentage = modules.length > 0 ? (completed / modules.length * 100) : 0;
            
            html += `
                <tr>
                    <td><strong>${client.name}</strong></td>
                    <td>
                        ${completed}/${modules.length} (${Math.round(percentage)}%)
                        <div class="progress-bar-inline">
                            <div class="progress-fill-inline" style="width: ${percentage}%"></div>
                        </div>
                    </td>
                </tr>
            `;
        });
        html += '</tbody></table>';
        content.innerHTML = html;
    }
    
    document.getElementById('pendingModal').classList.add('active');
}


// ============================================
// 10. GERENCIAR MÓDULOS
// ============================================

function renderModulesListTable() {
    const container = document.getElementById('modules-list-table');
    const moduleIds = Object.keys(trainingModules);
    
    let html = '<table><thead><tr><th>Módulo</th><th>Lições</th><th>Questões</th><th>Ações</th></tr></thead><tbody>';
    
    moduleIds.forEach(modId => {
        const mod = trainingModules[modId];
        html += `
            <tr>
                <td>
                    <strong>${mod.title}</strong><br>
                    <small style="color:#6b7280;">${mod.description}</small>
                </td>
                <td>${mod.content.length}</td>
                <td>${mod.questions.length}</td>
                <td>
                    <button class="btn btn-small" onclick="openEditModuleModal('${modId}')">✏️ Editar</button>
                    <button class="btn btn-small btn-danger" onclick="deleteModule('${modId}')">🗑️ Deletar</button>
                </td>
            </tr>
        `;
    });
    
    html += '</tbody></table>';
    container.innerHTML = html;
}

function generateIdFromTitle() {
    const title = document.getElementById('module-title').value.trim();
    if (title) {
        const id = title
            .toLowerCase()
            .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
            .replace(/[^a-z0-9\s]/g, '')
            .replace(/\s+/g, '_');
        
        document.getElementById('module-id').value = id;
    }
}

function openCreateModuleModal() {
    currentEditingModuleId = null;
    
    document.getElementById('moduleEditorTitle').textContent = '➕ Criar Novo Módulo';
    document.getElementById('module-id').value = '';
    document.getElementById('module-id').setAttribute('readonly', true);
    document.getElementById('module-id').style.background = '#f3f4f6';
    document.getElementById('module-id').style.cursor = 'not-allowed';
    document.getElementById('module-title').value = '';
    document.getElementById('module-description').value = '';
    document.getElementById('lessonsContainer').innerHTML = '';
    document.getElementById('questionsContainer').innerHTML = '';
    
    // Adicionar 3 lições vazias
    for (let i = 0; i < 3; i++) addLesson();
    
    // Adicionar 10 questões vazias
    for (let i = 0; i < 10; i++) addQuestion();
    
    document.getElementById('moduleEditorModal').classList.add('active');

    const titleField = document.getElementById('module-title');
    titleField.removeEventListener('input', generateIdFromTitle); // Remove se já existe
    titleField.addEventListener('input', generateIdFromTitle);
}

function openEditModuleModal(moduleId) {
    currentEditingModuleId = moduleId;
    const module = trainingModules[moduleId];
    
    document.getElementById('moduleEditorTitle').textContent = '✏️ Editar Módulo';
    document.getElementById('module-id').value = moduleId;
    document.getElementById('module-id').setAttribute('readonly', true);
    document.getElementById('module-id').style.background = '#f3f4f6';
    document.getElementById('module-id').style.cursor = 'not-allowed';
    document.getElementById('module-title').value = module.title;
    document.getElementById('module-description').value = module.description;
    
    // Carregar lições
    document.getElementById('lessonsContainer').innerHTML = '';
    lessonCount = 0;
    module.content.forEach(lesson => {
        addLesson(lesson);
    });
    
    // Carregar questões
    document.getElementById('questionsContainer').innerHTML = '';
    questionCount = 0;
    module.questions.forEach(q => {
        addQuestion(q);
    });
    
    document.getElementById('moduleEditorModal').classList.add('active');
}

function closeModuleEditor() {
    document.getElementById('moduleEditorModal').classList.remove('active');
}

function addLesson(lesson = null) {
    const container = document.getElementById('lessonsContainer');
    const currentCount = container.querySelectorAll('.lesson-item').length + 1;
    const div = document.createElement('div');
    div.className = 'lesson-item';
    div.innerHTML = `
        <button class="btn btn-small btn-danger remove-btn" onclick="this.parentElement.remove(); updateLessonNumbers()">🗑️ Remover</button>
        <h4 class="lesson-number">Lição ${currentCount}</h4>
        <div class="form-group">
            <label>Título da Lição:</label>
            <input type="text" class="lesson-title" value="${lesson ? lesson.title : ''}" placeholder="ex: Introdução ao Produto">
        </div>
        <div class="form-group">
            <label>Conteúdo:</label>
            <textarea class="lesson-text" placeholder="Digite o conteúdo da lição...">${lesson ? lesson.text : ''}</textarea>
        </div>
    `;
    container.appendChild(div);
}

function updateLessonNumbers() {
    const lessons = document.querySelectorAll('#lessonsContainer .lesson-item');
    lessons.forEach((lesson, index) => {
        const numberElement = lesson.querySelector('.lesson-number');
        if (numberElement) {
            numberElement.textContent = `Lição ${index + 1}`;
        }
    });
}

function addQuestion(question = null) {
    const container = document.getElementById('questionsContainer');
    const currentCount = container.querySelectorAll('.question-item').length + 1;
    const div = document.createElement('div');
    div.className = 'question-item';
    div.innerHTML = `
        <button class="btn btn-small btn-danger remove-btn" onclick="this.parentElement.remove(); updateQuestionNumbers()">🗑️ Remover</button>
        <h4 class="question-number">Questão ${currentCount}</h4>
        <div class="form-group">
            <label>Pergunta:</label>
            <input type="text" class="question-text" value="${question ? question.question : ''}" placeholder="Digite a pergunta">
        </div>
        <div class="form-group">
            <label>Opções (4 obrigatórias):</label>
            <input type="text" class="option-0" value="${question ? question.options[0] : ''}" placeholder="Opção 1" style="margin-bottom:5px;">
            <input type="text" class="option-1" value="${question ? question.options[1] : ''}" placeholder="Opção 2" style="margin-bottom:5px;">
            <input type="text" class="option-2" value="${question ? question.options[2] : ''}" placeholder="Opção 3" style="margin-bottom:5px;">
            <input type="text" class="option-3" value="${question ? question.options[3] : ''}" placeholder="Opção 4">
        </div>
        <div class="form-group">
            <label>Resposta Correta:</label>
            <select class="correct-answer">
                <option value="0" ${question && question.correct === 0 ? 'selected' : ''}>Opção 1</option>
                <option value="1" ${question && question.correct === 1 ? 'selected' : ''}>Opção 2</option>
                <option value="2" ${question && question.correct === 2 ? 'selected' : ''}>Opção 3</option>
                <option value="3" ${question && question.correct === 3 ? 'selected' : ''}>Opção 4</option>
            </select>
        </div>
    `;
    container.appendChild(div);
}

function updateQuestionNumbers() {
    const questions = document.querySelectorAll('#questionsContainer .question-item');
    questions.forEach((question, index) => {
        const numberElement = question.querySelector('.question-number');
        if (numberElement) {
            numberElement.textContent = `Questão ${index + 1}`;
        }
    });
}

function saveModule() {
    const moduleId = document.getElementById('module-id').value.trim();
    const title = document.getElementById('module-title').value.trim();
    const description = document.getElementById('module-description').value.trim();
    
    if (!moduleId || !title || !description) {
        alert('⚠️ Preencha ID, título e descrição!');
        return;
    }
    
    // Validar ID
    if (!/^[a-z0-9_]+$/.test(moduleId)) {
        alert('⚠️ ID deve conter apenas letras minúsculas, números e underscore!');
        return;
    }
    
    // Coletar lições
    const lessons = [];
    document.querySelectorAll('#lessonsContainer .lesson-item').forEach(div => {
        const lessonTitle = div.querySelector('.lesson-title').value.trim();
        const lessonText = div.querySelector('.lesson-text').value.trim();
        if (lessonTitle && lessonText) {
            lessons.push({ title: lessonTitle, text: lessonText });
        }
    });
    
    if (lessons.length === 0) {
        if (!confirm('⚠️ Você não adicionou nenhuma lição. Deseja continuar mesmo assim?')) {
            return;
        }
    }
    
    // Coletar questões
    const questions = [];
    document.querySelectorAll('#questionsContainer .question-item').forEach(div => {
        const questionText = div.querySelector('.question-text').value.trim();
        const options = [
            div.querySelector('.option-0').value.trim(),
            div.querySelector('.option-1').value.trim(),
            div.querySelector('.option-2').value.trim(),
            div.querySelector('.option-3').value.trim()
        ];
        const correct = parseInt(div.querySelector('.correct-answer').value);
        
        if (questionText && options.every(opt => opt)) {
            questions.push({
                question: questionText,
                options: options,
                correct: correct
            });
        }
    });
    
    if (questions.length === 0) {
        if (!confirm('⚠️ Você não adicionou nenhuma questão. Deseja continuar mesmo assim?')) {
            return;
        }
    }
    
    // Salvar módulo
    trainingModules[moduleId] = {
        title: title,
        description: description,
        content: lessons,
        questions: questions
    };
    
    // Salvar no localStorage
    localStorage.setItem('fiducia_custom_modules', JSON.stringify(trainingModules));
    
    alert(`✅ Módulo "${title}" salvo com sucesso!\n\n📚 ${lessons.length} lição(ões)\n❓ ${questions.length} questão(ões)`);
    closeModuleEditor();
    renderModulesListTable();
    
    // Atualizar checkboxes do gerador
    showAdminPanel();
}

function deleteModule(moduleId) {
    const module = trainingModules[moduleId];
    if (confirm(`❌ Tem certeza que deseja deletar o módulo "${module.title}"?\n\nEsta ação não pode ser desfeita!`)) {
        delete trainingModules[moduleId];
        localStorage.setItem('fiducia_custom_modules', JSON.stringify(trainingModules));
        alert('✅ Módulo deletado!');
        renderModulesListTable();
        showAdminPanel();
    }
}

// ============================================
// 11. SISTEMA DE TREINAMENTO (CLIENTES)
// ============================================

function loadDashboard() {
    const grid = document.getElementById('modulesGrid');
    grid.innerHTML = '';

    let completed = 0;
    const total = activeModules.length;

    activeModules.forEach(moduleId => {
        const module = trainingModules[moduleId];
        if (!module) return;

        const card = document.createElement('div');
        card.className = 'module-card';
        
        let statusClass = 'status-pending';
        let statusText = 'Pendente';
        let attemptsText = '';
        
        const attempts = userProgress[moduleId]?.attempts || 0;
        const remainingAttempts = MAX_ATTEMPTS - attempts;

        if (userProgress[moduleId]) {
            if (userProgress[moduleId].passed) {
                statusClass = 'status-completed';
                statusText = `Concluído - ${userProgress[moduleId].score}/10`;
                completed++;
            } else if (attempts >= MAX_ATTEMPTS) {
                statusClass = 'status-failed';
                statusText = `Reprovado - Tentativas esgotadas`;
                card.classList.add('locked');
            } else {
                statusClass = 'status-failed';
                statusText = `Não aprovado - ${userProgress[moduleId].score}/10`;
                attemptsText = `<div class="attempts-info">⚠️ ${remainingAttempts} tentativa(s) restante(s)</div>`;
            }
        }

        card.innerHTML = `
            <h3>${module.title}</h3>
            <p>${module.description}</p>
            <span class="module-status ${statusClass}">${statusText}</span>
            ${attemptsText}
        `;
        
        if (!card.classList.contains('locked')) {
            card.onclick = () => loadTraining(moduleId);
        }
        grid.appendChild(card);
    });

    const percentage = total > 0 ? (completed / total) * 100 : 0;
    document.getElementById('progressFill').style.width = percentage + '%';
    document.getElementById('progressText').textContent = `${completed} de ${total} treinamentos concluídos (${Math.round(percentage)}%)`;
}

function loadTraining(moduleId) {
    currentModule = moduleId;
    const module = trainingModules[moduleId];
    
    const content = document.getElementById('trainingContent');
    content.innerHTML = `<h2 style="color: #059669; margin-bottom: 20px;">${module.title}</h2>`;
    
    module.content.forEach(lesson => {
        content.innerHTML += `
            <div class="lesson">
                <h2>${lesson.title}</h2>
                <p>${lesson.text}</p>
            </div>
        `;
    });

    const attempts = userProgress[moduleId]?.attempts || 0;
    const remainingAttempts = MAX_ATTEMPTS - attempts;
    const warningDiv = document.getElementById('attemptsWarning');
    
    if (attempts > 0 && !userProgress[moduleId]?.passed) {
        warningDiv.innerHTML = `
            <div class="alert alert-warning">
                ⚠️ Você já tentou ${attempts} vez(es). Restam ${remainingAttempts} tentativa(s).
            </div>
        `;
    } else {
        warningDiv.innerHTML = '';
    }

    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('training-section').style.display = 'block';
    window.scrollTo(0, 0);
}

function backToDashboard() {
    if (quizInProgress) {
        alert('⚠️ Você precisa finalizar a prova antes de voltar!');
        return;
    }

    stopTimer();
    document.getElementById('training-section').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'none';
    document.getElementById('result-section').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
    loadDashboard();
    window.scrollTo(0, 0);
}

// ============================================
// 12. SISTEMA DE PROVAS
// ============================================

function confirmStartQuiz() {
    const attempts = userProgress[currentModule]?.attempts || 0;
    const remainingAttempts = MAX_ATTEMPTS - attempts;
    const module = trainingModules[currentModule];
    const totalQuestions = module.questions.length;
    const minimumScore = Math.ceil(totalQuestions * 0.6);

    if (attempts >= MAX_ATTEMPTS) {
        alert('❌ Você esgotou todas as tentativas para este módulo.');
        return;
    }

    if (confirm(
        `⚠️ ATENÇÃO!\n\n` +
        `• Você tem ${QUIZ_TIME_MINUTES} minutos para completar a prova\n` +
        `• Total de questões: ${totalQuestions}\n` +
        `• Nota mínima: ${minimumScore} acertos (60%)\n` +
        `• Após iniciar, NÃO poderá voltar até finalizar\n` +
        `• Esta é sua tentativa ${attempts + 1} de ${MAX_ATTEMPTS}\n` +
        `• As perguntas serão apresentadas em ordem aleatória\n\n` +
        `Deseja iniciar a avaliação agora?`
    )) {
        startQuiz();
    }
}

function startQuiz() {
    quizInProgress = true;
    const module = trainingModules[currentModule];
    const quizContent = document.getElementById('quizContent');
    quizContent.innerHTML = '';

    const shuffledQuestions = shuffleArray(module.questions);
    const totalQuestions = shuffledQuestions.length;
    const minimumScore = Math.ceil(totalQuestions * 0.6);

    shuffledQuestions.forEach((q, index) => {
        const optionsWithIndex = q.options.map((opt, i) => ({ text: opt, isCorrect: i === q.correct }));
        const shuffledOptions = shuffleArray(optionsWithIndex);
        
        quizContent.innerHTML += `
            <div class="question">
                <h3>${index + 1}. ${q.question}</h3>
                <div class="options">
                    ${shuffledOptions.map((option, i) => `
                        <label class="option">
                            <input type="radio" name="q${index}" value="${option.isCorrect ? '1' : '0'}">
                            ${option.text}
                        </label>
                    `).join('')}
                </div>
            </div>
        `;
    });

    startTimer();
    document.getElementById('training-section').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'block';
    window.scrollTo(0, 0);

    window.onbeforeunload = function() {
        if (quizInProgress) return "A prova está em andamento. Se sair, perderá esta tentativa.";
    };
}

function startTimer() {
    timeRemaining = QUIZ_TIME_MINUTES * 60;
    document.getElementById('timerContainer').style.display = 'block';
    updateTimerDisplay();

    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();

        if (timeRemaining === 300) {
            document.getElementById('timerContainer').classList.add('warning');
            alert('⏰ Atenção! Restam apenas 5 minutos!');
        }

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            alert('⏰ Tempo esgotado! A prova será enviada automaticamente.');
            submitQuiz();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById('timerDisplay').textContent = display;
    document.getElementById('quizTimer').textContent = display;
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    document.getElementById('timerContainer').style.display = 'none';
    document.getElementById('timerContainer').classList.remove('warning');
    quizInProgress = false;
    window.onbeforeunload = null;
}

function submitQuiz() {
    stopTimer();

    // Contar questões dinamicamente
    const totalQuestions = document.querySelectorAll('.question').length;
    
    let score = 0;
    for (let i = 0; i < totalQuestions; i++) {
        const answer = document.querySelector(`input[name="q${i}"]:checked`);
        if (answer && answer.value === "1") score++;
    }

    // Calcular 60% do total de questões (arredonda pra cima)
    const minimumScore = Math.ceil(totalQuestions * 0.6);
    const passed = score >= minimumScore;
    const percentage = Math.round((score / totalQuestions) * 100);
    const currentAttempts = userProgress[currentModule]?.attempts || 0;

    userProgress[currentModule] = {
        score: score,
        passed: passed,
        attempts: currentAttempts + 1,
        lastAttempt: new Date().toISOString(),
        date: new Date().toLocaleDateString('pt-BR'),
        totalQuestions: totalQuestions,
        minimumScore: minimumScore,
        percentage: percentage
    };

    const urlParams = new URLSearchParams(window.location.search);
    const modulesParam = urlParams.get('modulos');
    const companySlug = companyName ? companyName.toLowerCase().replace(/[^a-z0-9]/g, '_') : 'default';
    const storageKey = `training_progress_${companySlug}_${modulesParam || 'default'}`;
    localStorage.setItem(storageKey, JSON.stringify(userProgress));

    saveClientData();

    document.getElementById('quiz-section').style.display = 'none';
    document.getElementById('result-section').style.display = 'block';
    document.getElementById('score').textContent = `${score}/10`;

    let feedback = '';
    let certificateHTML = '';
    const remainingAttempts = MAX_ATTEMPTS - userProgress[currentModule].attempts;

    if (passed) {
        feedback = `🎉 Parabéns! Você foi aprovado neste módulo com ${percentage}% de aproveitamento!`;
        certificateHTML = generateCertificate(score, totalQuestions, percentage);
        document.getElementById('printBtn').style.display = 'inline-block';
    } else if (remainingAttempts > 0) {
        feedback = `📚 Você não atingiu a nota mínima (${minimumScore} acertos - 60%). Você ainda tem ${remainingAttempts} tentativa(s). Revise o conteúdo e tente novamente.`;
        document.getElementById('printBtn').style.display = 'none';
    } else {
        feedback = `❌ Você não atingiu a nota mínima (${minimumScore} acertos - 60%) e esgotou todas as tentativas para este módulo.`;
        document.getElementById('printBtn').style.display = 'none';
    }

    document.getElementById('feedback').textContent = feedback;
    document.getElementById('certificate-container').innerHTML = certificateHTML;
    window.scrollTo(0, 0);
}

// ============================================
// 13. CERTIFICADOS
// ============================================

function generateCertificate(score, totalQuestions, percentage) {
    const date = new Date().toLocaleDateString('pt-BR');
    const module = trainingModules[currentModule];
    const displayName = companyName || 'o colaborador';

    return `
        <div class="certificate">
            <h2>CERTIFICADO DE CONCLUSÃO</h2>
            <p>Certificamos que</p>
            <p class="company">${displayName}</p>
            <p>concluiu com êxito o treinamento de</p>
            <p><strong>${module.title}</strong></p>
            <p>com aproveitamento de <strong>${score}/${totalQuestions} (${percentage}%)</strong></p>
            <p style="margin-top: 30px;">Data: ${date}</p>
            <p style="margin-top: 20px; font-size: 14px; color: #6b7280;">Fidúcia Academy</p>
        </div>
    `;
}

// ============================================
// 14. GESTÃO DE DADOS
// ============================================

function saveClientData() {
    const clientIndex = clientsData.findIndex(c => c.name === companyName);
    
    if (clientIndex === -1) {
        clientsData.push({
            name: companyName,
            modules: activeModules,
            progress: userProgress,
            createdAt: new Date().toISOString(),
            lastAccess: new Date().toISOString()
        });
    } else {
        clientsData[clientIndex].progress = userProgress;
        clientsData[clientIndex].lastAccess = new Date().toISOString();
    }

    localStorage.setItem('fiducia_clients_data', JSON.stringify(clientsData));
}

// ============================================
// 15. INICIALIZAÇÃO
// ============================================

function init() {
    // Carregar módulos customizados
    const customModules = localStorage.getItem('fiducia_custom_modules');
    if (customModules) {
        const loaded = JSON.parse(customModules);
        Object.assign(trainingModules, loaded);
    }

    // Carregar dados admin
    generatedLinks = JSON.parse(localStorage.getItem('fiducia_links') || '[]');
    clientsData = JSON.parse(localStorage.getItem('fiducia_clients_data') || '[]');

    const urlParams = new URLSearchParams(window.location.search);
    const modulesParam = urlParams.get('modulos');
    companyName = urlParams.get('empresa') || '';
    const adminParam = urlParams.get('admin');

    if (adminParam === 'true') {
        isAdminMode = true;
        showAdminLogin();
        return;
    }

    if (modulesParam) {
        activeModules = modulesParam.split(',');
    } else if (!isAdminMode) {
        activeModules = Object.keys(trainingModules);
    }

    // Criar chave única combinando módulos + empresa
    const companySlug = companyName ? companyName.toLowerCase().replace(/[^a-z0-9]/g, '_') : 'default';
    const storageKey = `training_progress_${companySlug}_${modulesParam || 'default'}`;
    const savedProgress = localStorage.getItem(storageKey);
    if (savedProgress) {
        userProgress = JSON.parse(savedProgress);
    }

    if (companyName && modulesParam) {
        saveClientData();
    }

    loadDashboard();
}

// ============================================
// INICIAR APLICAÇÃO
// ============================================

window.onload = init;

