// =============================================
// CONFIGURAÇÃO DA API
// =============================================
const API_URL = '/api/questions';

// =============================================
// BANCO DE PERGUNTAS LOCAL
// =============================================
const bancosDeDados = {
    onePiece: {
        titulo: "ONE PIECE", fundo: "assets/fundo.png",
        perguntas: [
            { q: "Qual o motivo de Luffy invadir Impel Down?", opts: ["Resgatar Nico Robin", "Salvar Portgas D. Ace", "Roubar tesouro"], correct: "Salvar Portgas D. Ace", img: "assets/ace.png" },
            { q: "O que torna a Akuma no Mi de Luffy especial?", opts: ["Fogo", "Hito Hito no Mi, modelo Nika", "Gelo"], correct: "Hito Hito no Mi, modelo Nika", img: "assets/nika.png" },
            { q: "Primeiro membro a entrar na tripulação?", opts: ["Nami", "Zoro", "Usopp"], correct: "Zoro", img: "assets/zoro.png" },
            { q: "Ilha onde Luffy treinou por 2 anos?", opts: ["Punk Hazard", "Dressrosa", "Rusukaina"], correct: "Rusukaina", img: "assets/rusukaina.png" },
            { q: "Quem derrotou Crocodile em Alabasta?", opts: ["Zoro", "Luffy", "Smoker"], correct: "Luffy", img: "assets/crocodile.png" },
            { q: "Qual é o sonho de Sanji?", opts: ["Espadachim", "Encontrar o All Blue", "Rei dos piratas"], correct: "Encontrar o All Blue", img: "assets/allblue.png" },
            { q: "Quem é o verdadeiro pai de Luffy?", opts: ["Shanks", "Monkey D. Dragon", "Garp"], correct: "Monkey D. Dragon", img: "assets/dragon.png" },
            { q: "Primeiro Shichibukai derrotado por Luffy?", opts: ["Doflamingo", "Crocodile", "Mihawk"], correct: "Crocodile", img: "assets/shichibukai.png" },
            { q: "Quem treinou Luffy no timeskip?", opts: ["Shanks", "Rayleigh", "Garp"], correct: "Rayleigh", img: "assets/rayleigh.png" },
            { q: "Nome do navio atual dos Chapéus de Palha?", opts: ["Going Merry", "Thousand Sunny", "Red Force"], correct: "Thousand Sunny", img: "assets/sunny.png" },
            { q: "Quem cortou o braço de Shanks?", opts: ["Barba Branca", "Um rei dos mares", "Mihawk"], correct: "Um rei dos mares", img: "assets/shanks-arm.png" },
            { q: "Técnica famosa de Zoro com 3 espadas?", opts: ["Getsuga", "Santoryu", "Rasengan"], correct: "Santoryu", img: "assets/santoryu.png" },
            { q: "Quem é o irmão de Luffy além de Ace?", opts: ["Law", "Sabo", "Kid"], correct: "Sabo", img: "assets/sabo.png" },
            { q: "Arco onde Luffy enfrentou Katakuri?", opts: ["Wano", "Whole Cake Island", "Dressrosa"], correct: "Whole Cake Island", img: "assets/katakuri.png" },
            { q: "O que significa o D. no nome de Luffy?", opts: ["Nobreza", "Misterio nao revelado", "Cla comum"], correct: "Misterio nao revelado", img: "assets/will-of-d.png" },
            { q: "Primeiro grande inimigo no East Blue?", opts: ["Buggy", "Arlong", "Don Krieg"], correct: "Buggy", img: "assets/buggy.png" },
            { q: "Quem e o Deus em Skypiea?", opts: ["Eneru", "Gan Fall", "Wyper"], correct: "Eneru", img: "assets/eneru.png" },
            { q: "Qual e o poder da fruta do Law?", opts: ["Sombras", "Criar uma Room", "Fogo"], correct: "Criar uma Room", img: "assets/law-room.png" },
            { q: "Quem declarou guerra em Enies Lobby?", opts: ["Zoro", "Toda a tripulacao", "Robin"], correct: "Toda a tripulacao", img: "assets/enies-lobby.png" },
            { q: "Primeiro Yonkou enfrentado diretamente?", opts: ["Shanks", "Big Mom", "Kaido"], correct: "Kaido", img: "assets/kaido.png" }
        ]
    },
    dragonBall: {
        titulo: "DRAGON BALL Z", fundo: "assets/fundo_dbz.png",
        perguntas: [
            { q: "Quem derrotou Freeza pela primeira vez?", opts: ["Vegeta", "Goku", "Gohan"], correct: "Goku", img: "assets/dbz1.png" },
            { q: "Qual o nivel de poder de Goku em Namekusei?", opts: ["90.000", "120.000", "180.000"], correct: "90.000", img: "assets/dbz2.png" },
            { q: "Quem matou Kuririn em Namekusei?", opts: ["Vegeta", "Freeza", "Dodoria"], correct: "Freeza", img: "assets/dbz3.png" },
            { q: "Qual transformacao Goku usa contra Majin Boo?", opts: ["SSJ2", "SSJ3", "SSJ Blue"], correct: "SSJ3", img: "assets/dbz4.png" },
            { q: "Quem treinou Gohan na saga Saiyajin?", opts: ["Goku", "Piccolo", "Vegeta"], correct: "Piccolo", img: "assets/dbz5.png" },
            { q: "Quem criou os Androides?", opts: ["Dr. Gero", "Bulma", "Freeza"], correct: "Dr. Gero", img: "assets/dbz6.png" },
            { q: "Qual androide se torna esposa de Kuririn?", opts: ["16", "17", "18"], correct: "18", img: "assets/dbz7.png" },
            { q: "Quem absorve os androides para forma perfeita?", opts: ["Majin Boo", "Cell", "Dabura"], correct: "Cell", img: "assets/dbz8.png" },
            { q: "Quem derrota Cell?", opts: ["Goku", "Vegeta", "Gohan"], correct: "Gohan", img: "assets/dbz9.png" },
            { q: "Qual tecnica Goku aprende com Sr. Kaio?", opts: ["Kamehameha", "Kaioken", "Masenko"], correct: "Kaioken", img: "assets/dbz10.png" },
            { q: "Quem mata Raditz?", opts: ["Goku sozinho", "Piccolo", "Goku e Piccolo"], correct: "Goku e Piccolo", img: "assets/dbz11.png" },
            { q: "Qual e o nome do pai de Goku?", opts: ["Bardock", "Vegeta", "Nappa"], correct: "Bardock", img: "assets/dbz12.png" },
            { q: "Quem foi o primeiro Super Saiyajin?", opts: ["Goku", "Vegeta", "Yamoshi (lenda)"], correct: "Goku", img: "assets/dbz13.png" },
            { q: "Quem destroi o Planeta Vegeta?", opts: ["Cell", "Freeza", "Bills"], correct: "Freeza", img: "assets/dbz14.png" },
            { q: "Quem ensina fusao para Goten e Trunks?", opts: ["Goku", "Piccolo", "Vegeta"], correct: "Goku", img: "assets/dbz15.png" },
            { q: "Qual o nome da fusao de Goten e Trunks?", opts: ["Gogeta", "Vegito", "Gotenks"], correct: "Gotenks", img: "assets/dbz16.png" },
            { q: "Quem vira Majin?", opts: ["Goku", "Vegeta", "Gohan"], correct: "Vegeta", img: "assets/dbz17.png" },
            { q: "Quem derrota Majin Boo definitivamente?", opts: ["Vegeta", "Gohan", "Goku"], correct: "Goku", img: "assets/dbz18.png" },
            { q: "Qual e a tecnica final contra Boo?", opts: ["Kamehameha", "Genki Dama", "Final Flash"], correct: "Genki Dama", img: "assets/dbz19.png" },
            { q: "Quem revive varias vezes na saga?", opts: ["Goku", "Kuririn", "Ambos"], correct: "Ambos", img: "assets/dbz20.png" }
        ]
    },
    naruto: {
        titulo: "NARUTO", fundo: "assets/fundo_naruto.png",
        perguntas: [
            { q: "Quem selou a Kurama em Naruto?", opts: ["Jiraiya", "Minato Namikaze", "Hiruzen"], correct: "Minato Namikaze", img: "assets/naruto1.png" },
            { q: "Qual e o time 7?", opts: ["Naruto, Sasuke, Sakura", "Naruto, Shikamaru", "Sasuke, Neji"], correct: "Naruto, Sasuke, Sakura", img: "assets/naruto2.png" },
            { q: "Quem matou o cla Uchiha?", opts: ["Sasuke", "Itachi Uchiha", "Madara"], correct: "Itachi Uchiha", img: "assets/naruto3.png" },
            { q: "Quem treinou Naruto no modo sabio?", opts: ["Kakashi", "Jiraiya", "Sapos do Monte Myoboku"], correct: "Sapos do Monte Myoboku", img: "assets/naruto4.png" },
            { q: "Qual bijuu Naruto possui?", opts: ["8 caudas", "9 caudas", "10 caudas"], correct: "9 caudas", img: "assets/naruto5.png" },
            { q: "Quem e o sexto Hokage?", opts: ["Kakashi", "Naruto", "Tsunade"], correct: "Kakashi", img: "assets/naruto6.png" },
            { q: "Quem liderava o Time 7?", opts: ["Jiraiya", "Kakashi", "Asuma"], correct: "Kakashi", img: "assets/naruto7.png" },
            { q: "Quem e o rival principal de Naruto?", opts: ["Neji", "Sasuke", "Lee"], correct: "Sasuke", img: "assets/naruto8.png" },
            { q: "Quem reviveu os Hokages na guerra?", opts: ["Orochimaru", "Kabuto", "Madara"], correct: "Orochimaru", img: "assets/naruto9.png" },
            { q: "Quem controla o Rinnegan na guerra?", opts: ["Naruto", "Sasuke", "Ambos"], correct: "Ambos", img: "assets/naruto10.png" },
            { q: "Quem manipulava a Akatsuki?", opts: ["Nagato", "Obito", "Zetsu Negro"], correct: "Zetsu Negro", img: "assets/naruto11.png" },
            { q: "Quem foi o primeiro Hokage?", opts: ["Tobirama", "Hashirama", "Hiruzen"], correct: "Hashirama", img: "assets/naruto12.png" },
            { q: "Quem e o irmao de Itachi?", opts: ["Madara", "Sasuke", "Shisui"], correct: "Sasuke", img: "assets/naruto13.png" },
            { q: "Quem usa o Susanoo completo?", opts: ["Sasuke", "Itachi", "Ambos"], correct: "Ambos", img: "assets/naruto14.png" },
            { q: "Quem derrota Pain?", opts: ["Kakashi", "Naruto", "Jiraiya"], correct: "Naruto", img: "assets/naruto15.png" },
            { q: "Quem treinou Sasuke?", opts: ["Kakashi", "Orochimaru", "Itachi"], correct: "Orochimaru", img: "assets/naruto16.png" },
            { q: "Qual cla usa Byakugan?", opts: ["Uchiha", "Hyuga", "Senju"], correct: "Hyuga", img: "assets/naruto17.png" },
            { q: "Quem e o Jinchuuriki do 1 cauda?", opts: ["Gaara", "Naruto", "Killer Bee"], correct: "Gaara", img: "assets/naruto18.png" },
            { q: "Quem luta contra Madara primeiro na guerra?", opts: ["Naruto", "Alianca Shinobi", "Kages"], correct: "Alianca Shinobi", img: "assets/naruto19.png" },
            { q: "Quem vira Hokage no final?", opts: ["Kakashi", "Naruto", "Sasuke"], correct: "Naruto", img: "assets/naruto20.png" }
        ]
    },
    toriko: {
        titulo: "TORIKO", fundo: "assets/fundo_toriko.png",
        perguntas: [
            { q: "Qual o objetivo de Toriko?", opts: ["Ser mais forte", "Criar menu completo", "Dominar mundo"], correct: "Criar menu completo", img: "assets/toriko1.png" },
            { q: "Quem e parceiro de Toriko?", opts: ["Komatsu", "Zebra", "Sunny"], correct: "Komatsu", img: "assets/toriko2.png" },
            { q: "O que e Bishokuya?", opts: ["Cacador gourmet", "Chef", "Cientista"], correct: "Cacador gourmet", img: "assets/toriko3.png" },
            { q: "O que e Menu Completo?", opts: ["Lista de golpes", "Ingredientes perfeitos", "Ranking"], correct: "Ingredientes perfeitos", img: "assets/toriko4.png" },
            { q: "Quem sao os 4 Reis Celestiais?", opts: ["Toriko, Coco, Sunny, Zebra", "Toriko, Komatsu", "Zebra, Midora"], correct: "Toriko, Coco, Sunny, Zebra", img: "assets/toriko5.png" },
            { q: "Quem usa veneno?", opts: ["Zebra", "Coco", "Sunny"], correct: "Coco", img: "assets/toriko6.png" },
            { q: "Quem usa cabelo como arma?", opts: ["Sunny", "Zebra", "Toriko"], correct: "Sunny", img: "assets/toriko7.png" },
            { q: "Organizacao vila principal?", opts: ["IGO", "Gourmet Corp", "Bishokukai"], correct: "Gourmet Corp", img: "assets/toriko8.png" },
            { q: "O que e Mundo Gourmet?", opts: ["Segunda dimensao", "Area perigosa", "Planeta diferente"], correct: "Area perigosa", img: "assets/toriko9.png" },
            { q: "Quem lidera Gourmet Corp?", opts: ["Midora", "Ichiryu", "Jiro"], correct: "Midora", img: "assets/toriko10.png" },
            { q: "Quem e presidente da IGO?", opts: ["Ichiryu", "Midora", "Toriko"], correct: "Ichiryu", img: "assets/toriko11.png" },
            { q: "Qual habilidade de Zebra?", opts: ["Som destrutivo", "Veneno", "Velocidade"], correct: "Som destrutivo", img: "assets/toriko12.png" },
            { q: "Quem e o chef lendario?", opts: ["Acacia", "Toriko", "Komatsu"], correct: "Acacia", img: "assets/toriko13.png" },
            { q: "Qual ingrediente final lendario?", opts: ["GOD", "MEAT", "AIR"], correct: "GOD", img: "assets/toriko14.png" },
            { q: "Quem e pai espiritual de Toriko?", opts: ["Ichiryu", "Acacia", "Jiro"], correct: "Acacia", img: "assets/toriko15.png" },
            { q: "Quem usa golpes de fome?", opts: ["Toriko", "Zebra", "Sunny"], correct: "Toriko", img: "assets/toriko16.png" },
            { q: "O mundo e dividido em:", opts: ["2 partes", "3 partes", "4 partes"], correct: "2 partes", img: "assets/toriko17.png" },
            { q: "Komatsu e:", opts: ["Lutador", "Chef", "Cientista"], correct: "Chef", img: "assets/toriko18.png" },
            { q: "Quem representa forca bruta?", opts: ["Zebra", "Coco", "Sunny"], correct: "Zebra", img: "assets/toriko19.png" },
            { q: "Objetivo final dos personagens?", opts: ["Poder", "Dinheiro", "Experiencia suprema"], correct: "Experiencia suprema", img: "assets/toriko20.png" }
        ]
    }
};

// =============================================
// ESTADO DO QUIZ
// =============================================
let indiceAtual = 0;
let universoAtual = 'onePiece';
let poderes = { luffy: 5, goku: 5, naruto: 5, toriko: 5 };

const infoAjudantes = {
    luffy:  { img: 'assets/luffy.png',  fx: 'gomu-gomu',  txt: 'GOMU GOMU NO!' },
    goku:   { img: 'assets/goku.png',   fx: 'kamehameha', txt: '' },
    naruto: { img: 'assets/naruto.png', fx: 'rasengan',   txt: '' },
    toriko: { img: 'assets/toriko.png', fx: 'kaki-slash', txt: '' }
};

// =============================================
// NAVEGAÇÃO ENTRE TELAS
// =============================================
const screens = {
    home:   document.getElementById('screen-home'),
    quiz:   document.getElementById('screen-quiz'),
    result: document.getElementById('screen-result'),
    admin:  document.getElementById('screen-admin')
};

function showScreen(name) {
    Object.values(screens).forEach(s => s.classList.add('hidden'));
    screens[name].classList.remove('hidden');
    const dock = document.getElementById('powersDock');
    if (name !== 'quiz' && dock) dock.remove();
}

// =============================================
// BOTÕES DE NAVEGAÇÃO
// =============================================
document.getElementById('startBtn').addEventListener('click', () => {
    universoAtual = 'onePiece';
    indiceAtual = 0;
    poderes = { luffy: 5, goku: 5, naruto: 5, toriko: 5 };
    showScreen('quiz');
    criarMenuPoderes();
    render();
});

document.getElementById('adminBtn').addEventListener('click', () => {
    showScreen('admin');
    loadAdminList();
});

document.getElementById('backHomeBtn').addEventListener('click', () => showScreen('home'));
document.getElementById('resultHomeBtn').addEventListener('click', () => showScreen('home'));
document.getElementById('playAgainBtn').addEventListener('click', () => {
    universoAtual = 'onePiece';
    indiceAtual = 0;
    poderes = { luffy: 5, goku: 5, naruto: 5, toriko: 5 };
    showScreen('quiz');
    criarMenuPoderes();
    render();
});

// =============================================
// MENU DE PODERES
// =============================================
function criarMenuPoderes() {
    const old = document.getElementById('powersDock');
    if (old) old.remove();

    const dock = document.createElement('div');
    dock.className = 'powers-dock';
    dock.id = 'powersDock';
    dock.innerHTML = `
        <div class="main-power-btn" onclick="document.getElementById('powersDock').classList.toggle('active')">⚡</div>
        <div class="powers-list">
            <div class="power-item" onclick="usarAjudante('luffy')"><img src="assets/luffy.png"><span id="c-luffy">x5</span></div>
            <div class="power-item" onclick="usarAjudante('goku')"><img src="assets/goku.png"><span id="c-goku">x5</span></div>
            <div class="power-item" onclick="usarAjudante('naruto')"><img src="assets/naruto.png"><span id="c-naruto">x5</span></div>
            <div class="power-item" onclick="usarAjudante('toriko')"><img src="assets/toriko.png"><span id="c-toriko">x5</span></div>
        </div>`;
    document.body.appendChild(dock);
}

window.usarAjudante = function(heroi) {
    if (poderes[heroi] <= 0) return;
    poderes[heroi]--;
    document.getElementById('c-' + heroi).innerText = 'x' + poderes[heroi];
    document.getElementById('powersDock').classList.remove('active');

    const p = bancosDeDados[universoAtual].perguntas[indiceAtual];
    document.querySelectorAll('.opt-btn').forEach(btn => {
        if (btn.innerText.trim() === p.correct.trim()) {
            const info = infoAjudantes[heroi];
            btn.innerHTML += '<img src="' + info.img + '" class="mini-helper">';
            const fx = document.createElement('div');
            fx.className = 'attack-fx ' + info.fx;
            if (info.txt) fx.innerText = info.txt;
            btn.appendChild(fx);
            btn.classList.add('shake-target');
            document.querySelectorAll('.opt-btn').forEach(b => b.disabled = true);
            setTimeout(() => { indiceAtual++; render(); }, 1800);
        }
    });
};

window.mudarUniverso = function(novo) {
    universoAtual = novo;
    indiceAtual = 0;
    document.body.style.backgroundImage = "url('" + bancosDeDados[novo].fundo + "')";
    render();
};

// =============================================
// RENDER DO QUIZ (com imagem de feedback)
// =============================================
function render() {
    const banco = bancosDeDados[universoAtual];
    const quizDiv = document.getElementById('quiz-body');

    document.body.style.backgroundImage = "url('" + banco.fundo + "')";

    if (indiceAtual >= banco.perguntas.length) {
        const ordem = ['onePiece', 'dragonBall', 'naruto', 'toriko'];
        const prox = ordem[ordem.indexOf(universoAtual) + 1];

        if (!prox) {
            document.getElementById('result-title').textContent = 'PARABENS!';
            document.getElementById('result-text').textContent = 'Voce completou todos os 4 universos! Verdadeiro otaku!';
            showScreen('result');
            return;
        }

        quizDiv.innerHTML =
            '<h2 style="font-family:Bangers,cursive;color:var(--primary);font-size:1.8rem;margin-bottom:15px">UNIVERSO CONCLUIDO!</h2>' +
            '<p style="color:#94a3b8;margin-bottom:20px">Proximo: <strong style="color:white">' + bancosDeDados[prox].titulo + '</strong></p>' +
            '<button class="btn-start" onclick="mudarUniverso(\'' + prox + '\')">IR PARA PROXIMO ANIME</button>';
        return;
    }

    const p = banco.perguntas[indiceAtual];

    quizDiv.innerHTML =
        '<div class="quiz-header"><span>' + banco.titulo + '</span><span>' + (indiceAtual + 1) + '/' + banco.perguntas.length + '</span></div>' +
        '<div class="question-card">' +
            '<div id="img-feedback-container" class="hidden">' +
                '<img src="' + p.img + '" class="img-feedback" alt="feedback" onerror="this.style.display=\'none\'">' +
            '</div>' +
            '<h2 class="question-text">' + p.q + '</h2>' +
            '<div class="answers" id="answers-list">' +
                p.opts.map(function(o) { return '<button class="opt-btn">' + o + '</button>'; }).join('') +
            '</div>' +
        '</div>';

    document.querySelectorAll('.opt-btn').forEach(function(btn) {
        btn.onclick = function() {
            var acertou = btn.innerText.trim() === p.correct.trim();

            // Mostra imagem de feedback ao responder
            document.getElementById('img-feedback-container').classList.remove('hidden');

            // Desabilita todos
            document.querySelectorAll('.opt-btn').forEach(function(b) { b.disabled = true; });

            if (acertou) {
                btn.classList.add('correct');
                setTimeout(function() { indiceAtual++; render(); }, 1200);
            } else {
                btn.classList.add('wrong');
                document.querySelectorAll('.opt-btn').forEach(function(b) {
                    if (b.innerText.trim() === p.correct.trim()) b.classList.add('correct');
                });
                setTimeout(function() {
                    alert('ERROU! Voce volta ao inicio deste universo.');
                    indiceAtual = 0;
                    render();
                }, 800);
            }
        };
    });
}

// =============================================
// PAINEL ADMIN (CRUD)
// =============================================
document.getElementById('adminBackBtn').addEventListener('click', function() { showScreen('home'); });
document.getElementById('refreshListBtn').addEventListener('click', loadAdminList);
document.getElementById('saveQuestionBtn').addEventListener('click', saveQuestion);
document.getElementById('cancelEditBtn').addEventListener('click', resetAdminForm);

function adminMsg(text, isError) {
    var el = document.getElementById('admin-msg');
    el.textContent = text;
    el.style.color = isError ? '#ef4444' : '#22c55e';
    setTimeout(function() { el.textContent = ''; }, 3000);
}

function resetAdminForm() {
    document.getElementById('edit-id').value = '';
    document.getElementById('f-question').value = '';
    document.getElementById('f-opt0').value = '';
    document.getElementById('f-opt1').value = '';
    document.getElementById('f-opt2').value = '';
    document.getElementById('f-opt3').value = '';
    document.getElementById('f-answer').value = '0';
    document.getElementById('f-anime').value = '';
    document.getElementById('f-difficulty').value = 'medio';
    document.getElementById('f-imageUrl').value = '';
    document.getElementById('form-title-admin').textContent = 'Nova Pergunta';
    document.getElementById('cancelEditBtn').style.display = 'none';
}

async function loadAdminList() {
    var list = document.getElementById('admin-list');
    list.innerHTML = '<p class="loading-text">Carregando...</p>';
    try {
        var res = await fetch(API_URL);
        var data = await res.json();
        if (!data.length) {
            list.innerHTML = '<p class="loading-text">Nenhuma pergunta cadastrada no banco ainda.</p>';
            return;
        }
        list.innerHTML = data.map(function(q) {
            return '<div class="admin-item">' +
                '<div class="admin-item-info">' +
                    '<strong>' + q.question + '</strong>' +
                    '<span class="diff-badge diff-' + q.difficulty + '">' + q.difficulty + '</span>' +
                    '<small>📺 ' + q.anime + '</small>' +
                '</div>' +
                '<div class="admin-item-btns">' +
                    '<button class="btn-edit" onclick="editQuestion(\'' + q._id + '\')">✏ Editar</button>' +
                    '<button class="btn-delete" onclick="deleteQuestion(\'' + q._id + '\')">🗑 Excluir</button>' +
                '</div>' +
            '</div>';
        }).join('');
    } catch(err) {
        list.innerHTML = '<p class="loading-text" style="color:#ef4444">Erro ao carregar. Verifique o backend.</p>';
    }
}

async function saveQuestion() {
    var id = document.getElementById('edit-id').value;
    var body = {
        question: document.getElementById('f-question').value.trim(),
        options: [
            document.getElementById('f-opt0').value.trim(),
            document.getElementById('f-opt1').value.trim(),
            document.getElementById('f-opt2').value.trim(),
            document.getElementById('f-opt3').value.trim()
        ],
        answer: parseInt(document.getElementById('f-answer').value),
        anime: document.getElementById('f-anime').value.trim(),
        difficulty: document.getElementById('f-difficulty').value,
        imageUrl: document.getElementById('f-imageUrl').value.trim()
    };

    if (!body.question || body.options.some(function(o) { return !o; }) || !body.anime) {
        adminMsg('Preencha todos os campos obrigatorios!', true);
        return;
    }

    try {
        var url = id ? API_URL + '/' + id : API_URL;
        var method = id ? 'PUT' : 'POST';
        var res = await fetch(url, {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });
        if (!res.ok) throw new Error();
        adminMsg(id ? 'Pergunta atualizada!' : 'Pergunta criada!');
        resetAdminForm();
        loadAdminList();
    } catch(e) {
        adminMsg('Erro ao salvar pergunta.', true);
    }
}

window.editQuestion = async function(id) {
    try {
        var res = await fetch(API_URL + '/' + id);
        var q = await res.json();
        document.getElementById('edit-id').value = q._id;
        document.getElementById('f-question').value = q.question;
        document.getElementById('f-opt0').value = q.options[0] || '';
        document.getElementById('f-opt1').value = q.options[1] || '';
        document.getElementById('f-opt2').value = q.options[2] || '';
        document.getElementById('f-opt3').value = q.options[3] || '';
        document.getElementById('f-answer').value = q.answer;
        document.getElementById('f-anime').value = q.anime;
        document.getElementById('f-difficulty').value = q.difficulty;
        document.getElementById('f-imageUrl').value = q.imageUrl || '';
        document.getElementById('form-title-admin').textContent = 'Editar Pergunta';
        document.getElementById('cancelEditBtn').style.display = 'inline-block';
        screens.admin.scrollTop = 0;
    } catch(e) {
        adminMsg('Erro ao carregar pergunta.', true);
    }
};

window.deleteQuestion = async function(id) {
    if (!confirm('Deseja excluir esta pergunta?')) return;
    try {
        await fetch(API_URL + '/' + id, { method: 'DELETE' });
        adminMsg('Pergunta excluida.');
        loadAdminList();
    } catch(e) {
        adminMsg('Erro ao excluir.', true);
    }
};

// =============================================
// SERVICE WORKER (PWA)
// =============================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('./sw.js')
            .then(function() { console.log('Service Worker registrado.'); })
            .catch(function(err) { console.log('Erro SW:', err); });
    });
}
