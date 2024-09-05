import { menu, adicionar_item as additional_item, remover_item, editar_item, marcar_comprado, listar_itens, resumo_lista } from './functions';

function prompt(message: string): string | null {
  return window.prompt(message);
}

while (true) {
    menu();
    let opcaoString = prompt('Digite a opção: ');
    let opcao = parseInt(opcaoString || '0');

    switch (opcao) {
        case 1:
            additional_item();
            break;
        case 2:
            remover_item();
            break;
        case 3:
            editar_item();
            break;
        case 4:
            marcar_comprado();
            break;
        case 5:
            listar_itens();
            break;
        case 6:
            resumo_lista();
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
