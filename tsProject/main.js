"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt_sync_1 = require("prompt-sync");
var functions_1 = require("./functions");
var prompt = (0, prompt_sync_1.default)();
while (true) {
    (0, functions_1.menu)();
    var opcaoString = prompt('Digite a opção: ');
    var opcao = parseInt(opcaoString, 10);
    if (isNaN(opcao)) {
        console.log('Opção inválida. Por favor, digite um número.');
        continue;
    }
    switch (opcao) {
        case 1:
            (0, functions_1.adicionar_item)();
            break;
        case 2:
            (0, functions_1.remover_item)();
            break;
        case 3:
            (0, functions_1.editar_item)();
            break;
        case 4:
            (0, functions_1.marcar_comprado)();
            break;
        case 5:
            (0, functions_1.listar_itens)();
            break;
        case 6:
            (0, functions_1.resumo_lista)();
            break;
        case 7:
            console.log('Saindo...');
        process.exit(0);
        default:
            console.log('Opção inválida!');
    }
}
