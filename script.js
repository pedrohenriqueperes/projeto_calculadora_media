

const form = document.getElementById('form-atividade');

const imgAprovado = '<img src="./images/aprovado.png" alt= "emoji celebrando"/>'

const imgReprovado = '<img src="./images/reprovado.png" alt= "emoji chorando"/>'

const atividades = [];
const notas = [];

const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'

let linhas = '';
form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();

    atualizaTabela();

    atualizaMediaFinal();

    
});

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>;'
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`;
    linha += `</tr>`;

    linhas += linha;

    

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas; 
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMedia()
    document.getElementById('media-final-valor').innerHTML = mediaFinal

    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= 7 ? spanAprovado : spanReprovado;
}

function calculaMedia() {
    let somaNotas = 0;
    for (let i = 0; i < notas.length; i++)
    somaNotas += notas[i];

    return  somaNotas / notas.length;
    
}