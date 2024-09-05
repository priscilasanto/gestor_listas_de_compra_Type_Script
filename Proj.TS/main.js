"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functions_1 = require("./functions");
function prompt(message) {
    return window.prompt(message);
}
while (true) {
    (0, functions_1.menu)();
    var opcaoString = prompt('Digite a opção: ');
    var opcao = parseInt(opcaoString || '0');
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
            console.log('Você saiu do programa! \nObrigado por nos escolher!!!');
            break;
        default:
            console.log('Opção inválida!!!');
    }
    if (opcao === 7) {
        break;
    }
}
