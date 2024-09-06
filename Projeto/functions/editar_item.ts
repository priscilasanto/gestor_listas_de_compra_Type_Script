  export function editar_item(lista_de_compras): void {
    const nome = prompt('Digite o nome do item que deseja editar: ') as string;
    const item = lista_de_compras.find(item => item.nome === nome);
  
    if (item) {
      item.nome = prompt('Digite o novo nome do item: ') || item.nome;
      item.quantidade = Number(prompt('Digite a nova quantidade: ')) || item.quantidade;
      item.categoria = prompt('Digite a nova categoria: ') || item.categoria;
      console.log('Item editado com sucesso!');
    } else {
      console.log('Item não encontrado!');
    }
}
  