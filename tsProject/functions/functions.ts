

interface Item {
    nome: string;
    quantidade: number;
    categoria: string;
    comprado: boolean;
  }
  
  const item = prompt.get()
  
  let lista_de_compras: Item[] = [];
  
  export function menu(): void {
    console.log(
        '\nLista de Compras: \n' +
        '1. Adicionar item \n' +
        '2. Remover item \n' +
        '3. Editar item \n' +
        '4. Marcar item como comprado/não comprado \n' +
        '5. Listar itens \n' +
        '6. Resumo da lista \n' +
        '7. Sair \n'
    );
  
    
    const menu = promptInstance('Digite um nome: ')
    
    console.log(menu)
  }