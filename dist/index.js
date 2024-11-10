"use strict";
//Index Obligationum
var Status;
(function (Status) {
    Status["Agendado"] = "Agendado";
    Status["Concluido"] = "Conclu\u00EDdo";
    Status["Cancelado"] = "Cancelado";
})(Status || (Status = {}));
;
//
const listaCompromissos = [
    {
        Titulo: "SHAZAM!",
        Data_Hora: new Date(),
        Descricao: "S-H-A-Z-A-M-!",
        Status: Status.Concluido
    },
    {
        Titulo: "A!",
        Data_Hora: new Date("2024-11-21t00:00:00"),
        Descricao: "SHAAAARK!",
        Status: Status.Agendado,
    },
    {
        Titulo: "Natal!",
        Data_Hora: new Date("2024-11-25t00:00:00"),
        Descricao: "Comemoração de Natal!",
        Status: Status.Agendado
    },
    {
        Titulo: "Ano Novo!",
        Data_Hora: new Date("2025-01-01t00:00:00"),
        Descricao: "Inicio de um Novo Ano!",
        Status: Status.Agendado,
    }
];
/*
Funções
*/
function adicionarCompromisso(compromissos) {
    const compromissosOrdenados = compromissos.sort((a, b) => a.Data_Hora.getTime() - b.Data_Hora.getTime());
    compromissos.forEach(compromisso => listaCompromissos.push(compromisso));
    console.log("Novo Compromisso adicionado:", compromissosOrdenados.map(compromisso => (Object.assign(Object.assign({}, compromisso), { Data_Hora: compromisso.Data_Hora.toLocaleString() }))));
}
;
//
function listarTodosCompromissos() {
    const compromissosOrdenados = listaCompromissos.sort((a, b) => a.Data_Hora.getTime() - b.Data_Hora.getTime());
    console.log(compromissosOrdenados.map(compromisso => (Object.assign(Object.assign({}, compromisso), { Data_Hora: compromisso.Data_Hora.toLocaleString() }))));
}
;
//
function listarStatusCompromissos(status) {
    const compromissosFiltrados = listaCompromissos.filter(compromisso => compromisso.Status === status);
    const compromissosOrdenados = compromissosFiltrados.sort((a, b) => a.Data_Hora.getTime() - b.Data_Hora.getTime());
    if (compromissosOrdenados.length > 0) {
        console.log(`Estes são os compromissos com status "${status}" encontrados:`);
        compromissosOrdenados.forEach(compromisso => {
            console.log(`Título: ${compromisso.Titulo}`);
            console.log(`Data: ${compromisso.Data_Hora.toLocaleString()}`);
            console.log(`Descrição: ${compromisso.Descricao}`);
            console.log(`Status: ${compromisso.Status}`);
            console.log("-------------------------------");
        });
    }
    else {
        console.log(`Nenhum compromisso encontrado com status "${status}"!`);
    }
}
;
//
function editarCompromisso(Titulo, dadosNovos) {
    const localizar = listaCompromissos.findIndex(compromisso => compromisso.Titulo === Titulo);
    if (localizar !== -1) {
        listaCompromissos[localizar] = Object.assign(Object.assign({}, listaCompromissos[localizar]), dadosNovos);
        const compromissoAtualizado = Object.assign(Object.assign({}, listaCompromissos[localizar]), { Data_Hora: listaCompromissos[localizar].Data_Hora.toLocaleString() });
        console.log(`Compromisso ${Titulo} atualizado com sucesso!`);
        console.log(compromissoAtualizado);
    }
    else {
        console.log(`Nenhum compromisso ${Titulo} encontrado!`);
    }
}
;
//
function deletarComprisso(Titulo) {
    const tamanhoListaOriginal = listaCompromissos.length;
    const listaAtualizada = listaCompromissos.filter(compromisso => compromisso.Titulo !== Titulo);
    if (listaAtualizada.length !== tamanhoListaOriginal) {
        listaCompromissos.length = 0;
        listaCompromissos.push(...listaAtualizada);
        console.log(`Compromisso "${Titulo}" excluído com sucesso!`);
    }
    else {
        console.log(`Nenhum compromisso com titulo "${Titulo}" encontrado!`);
    }
}
/*
Chamar Funções
*/
adicionarCompromisso([
    {
        Titulo: "Prova",
        Data_Hora: new Date("2024-11-11t19:00:00"),
        Descricao: `
        Conteúdos:
        - O que é type script?(Vantagens e desvantagens);
        - Tipagem de dados: string, number, boolean;
        - Operadores Ternários;
        - Objetos;
        - Enum;
        - Interface;
        - Date;
        - Oq é? Node, NPM, pacote; (Instalação), nodemon
        - Diferença entre Dev, build e deploy`,
        Status: Status.Agendado,
    },
    {
        Titulo: "Jantar",
        Data_Hora: new Date("2024-11-20t20:30:00"),
        Descricao: "Jantar com John Doe no local X",
        Status: Status.Agendado,
    },
    {
        Titulo: "1° Milestone - Fábrica de Software",
        Data_Hora: new Date("2024-11-18t19:00:00"),
        Descricao: `
        - PM Canvas:       5 pontos
        - Metodologia:    20 pontos => Kanban
        - Figma:          30 pontos
        - Sitemap:         5 pontos
        - Requisitos:     20 pontos => definir artefatos
        - Auto-avaliação:  5 pontos => discutida em grupo
        - Apresentação:   15 pontos`,
        Status: Status.Agendado,
    }
]);
//
listarTodosCompromissos();
//
listarStatusCompromissos(Status.Agendado);
//
editarCompromisso("A!", {
    Data_Hora: new Date("2024-11-21t14:00:00"),
    Descricao: "GOOOMBA!"
});
//
deletarComprisso("SHAZAM!");
