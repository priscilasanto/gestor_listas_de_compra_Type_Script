export function remover_item(lista_de_compras): void {
    const nome = prompt('Digite o nome do item a ser removido: ') as string;
    const index = lista_de_compras.findIndex(item => item.nome === nome);
  
    if (index !== -1) {
      const confirmacao = prompt('Tem certeza que deseja remover este item? (s/n)') as string;
      if (confirmacao.toLowerCase() === 's') {
        lista_de_compras.splice(index, 1);
        console.log('Item removido com sucesso!');
      } else {
        console.log('Remoção cancelada.');
      }
    } else {
      console.log('Item não encontrado!');
    }
  }