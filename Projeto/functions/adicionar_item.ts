

export function adicionar_item_function(lista_de_compras): void {
    const nome = prompt('Digite o nome do item: ') as string;
    const quantidade = Number(prompt('Digite a quantidade: '));
    const categoria = prompt('Digite a categoria (ex.: Alimentos, Limpeza, Higiene): ') as string;
    const comprado = false;
    if (nome && quantidade && categoria) {
        lista_de_compras.push({ nome, quantidade, categoria, comprado });
        console.log('Item adicionado com sucesso!');
      } else {
        console.log('Todos os campos são obrigatórios!');
      }
    }