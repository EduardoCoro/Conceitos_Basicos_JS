const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '1B',
    },
    {
        nome: 'Maria',
        nota: 6,
        turma: '1B',
    },
    {
        nome: 'Paulo',
        nota: 3,
        turma: '1B',
    },
];

function alunosAprovados(arr, media){
    let aprovados = [];

    for (let i = 0; i < arr.length; i++) {
        const {nota, nome} = arr[i];

        if (nota >= media) {
            aprovados.push(nome);
        }
        
    }

    return aprovados;
}

console.log(alunosAprovados(alunos, 5));