  export function marcar_comprado(lista_de_compras): void {
    const nome = prompt('Digite o nome do item: ') as string;
    const item = lista_de_compras.find(item => item.nome === nome);
  
    if (item) {
      item.comprado = !item.comprado;
      console.log(`Item marcado como ${item.comprado ? 'comprado' : 'não comprado'}.`);
    } else {
      console.log('Item não encontrado!');
    }
  }