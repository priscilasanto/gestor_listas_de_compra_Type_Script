import { adicionar_item_function } from './functions/adicionar_item.ts';
import { listar_itens } from './functions/listar_item.ts';
import { menu } from './functions/menu.ts';
import { remover_item } from './functions/remover_item.ts';
import { editar_item } from './functions/editar_item.ts';
import { marcar_comprado } from './functions/marcar_comprado.ts';
import { resumo_lista } from './functions/resumo_lista.ts';

const lista_de_compras = []

  while (true) {
    menu();
    const opcao = Number(prompt('Digite a opção: '));
  
    switch (opcao) {
      case 1:
        adicionar_item_function(lista_de_compras);
        break;

      case 2:
            remover_item(lista_de_compras);
            break;

      case 3:
            editar_item(lista_de_compras);
            break;
            
      case 4:
            marcar_comprado(lista_de_compras);
            break;
      case 5:
            listar_itens(lista_de_compras);
            break;
     case 6:
            resumo_lista(lista_de_compras);
            break;
      case 7:
        console.log('Saindo...');
        break;
      default:
        console.log('Opção inválida!!!');
    }
  
    if (opcao === 7) {
      console.log('Você saiu do programa! \nObrigado por nos escolher!!!');
      break;
    }
  }