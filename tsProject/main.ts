import prompt from 'prompt-sync';
import { menu, adicionar_item, remover_item, editar_item, marcar_comprado, listar_itens, resumo_lista } from './functions';

const promptSync = prompt();

while (true) {
  menu();

  const opcaoString = promptSync('Digite a opção: ');
  const opcao = parseInt(opcaoString, 10);

  if (isNaN(opcao)) {
    console.log('Opção inválida. Por favor, digite um número.');
    continue;
  }

  switch (opcao) {
    case 1:
      adicionar_item();
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
      process.exit(0);
    default:
      console.log('Opção inválida!!!');
  }
}