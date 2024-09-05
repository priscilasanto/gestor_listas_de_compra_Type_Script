interface Item {
  nome: string;
  quantidade: number;
  categoria: string;
  comprado: boolean;
}

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
      '7. Sair \n' +
      'Escolha uma opção:'
  );
}

export function adicionar_item(): void {
  let nome = prompt('Digite o nome do item: ');
  let quantidade = prompt('Digite a quantidade: ');
  let categoria = prompt('Digite a categoria (ex.: Alimentos, Limpeza, Higiene): ');
  let comprado = false;

  if (nome && quantidade && categoria) {
      let quantidadeNumero = parseInt(quantidade);
      if (isNaN(quantidadeNumero)) {
          console.log('Quantidade deve ser um número válido!');
          return;
      }
      lista_de_compras.push({ nome, quantidade: quantidadeNumero, categoria, comprado });
      console.log('Item adicionado com sucesso!');
  } else {
      console.log('Todos os campos são obrigatórios!');
  }
}

export function remover_item(): void {
  let nome = prompt('Digite o nome do item a ser removido: ');
  let index = lista_de_compras.findIndex(item => item.nome === nome);

  if (index !== -1) {
      let confirmacao = prompt('Tem certeza que deseja remover este item? (s/n)');
      if (confirmacao?.toLowerCase() === 's') {
          lista_de_compras.splice(index, 1);
          console.log('Item removido com sucesso!');
      } else {
          console.log('Remoção cancelada.');
      }
  } else {
      console.log('Item não encontrado!');
  }
}

export function editar_item(): void {
  let nome = prompt('Digite o nome do item que deseja editar: ');
  let item = lista_de_compras.find(item => item.nome === nome);

  if (item) {
      let novoNome = prompt('Digite o novo nome do item: ') || item.nome;
      let novaQuantidade = prompt('Digite a nova quantidade: ') || item.quantidade.toString();
      let novaCategoria = prompt('Digite a nova categoria: ') || item.categoria;

      let quantidadeNumero = parseInt(novaQuantidade);
      if (!isNaN(quantidadeNumero)) {
          item.nome = novoNome;
          item.quantidade = quantidadeNumero;
          item.categoria = novaCategoria;
          console.log('Item editado com sucesso!');
      } else {
          console.log('Quantidade deve ser um número válido!');
      }
  } else {
      console.log('Item não encontrado!');
  }
}

export function marcar_comprado(): void {
  let nome = prompt('Digite o nome do item: ');
  let item = lista_de_compras.find(item => item.nome === nome);

  if (item) {
      item.comprado = !item.comprado;
      console.log(`Item marcado como ${item.comprado ? 'comprado' : 'não comprado'}.`);
  } else {
      console.log('Item não encontrado!');
  }
}

export function listar_itens(): void {
  let opcao = prompt('Escolha uma opção de visualização: \n1. Ordem alfabética \n2. Por categoria \n3. Por quantidade \n4. Filtrar por categoria \n5. Filtrar por status (comprado/não comprado)');

  switch (opcao) {
      case '1':
          lista_de_compras.sort((a, b) => a.nome.localeCompare(b.nome));
          break;
      case '2':
          lista_de_compras.sort((a, b) => a.categoria.localeCompare(b.categoria));
          break;
      case '3':
          lista_de_compras.sort((a, b) => a.quantidade - b.quantidade);
          break;
      case '4':
          let categoria = prompt('Digite a categoria para filtrar: ');
          if (categoria) {
              lista_de_compras = lista_de_compras.filter(item => item.categoria === categoria);
          }
          break;
      case '5':
          let status = prompt('Digite o status para filtrar (comprado/não comprado): ');
          let comprado = status === 'comprado';
          lista_de_compras = lista_de_compras.filter(item => item.comprado === comprado);
          break;
      default:
          console.log('Opção inválida!');
          return;
  }

  if (lista_de_compras.length === 0) {
      console.log('A lista está vazia ou nenhum item corresponde ao filtro.');
  } else {
      lista_de_compras.forEach(item => {
          console.log(`- ${item.nome}, Quantidade: ${item.quantidade}, Categoria: ${item.categoria}, ${item.comprado ? 'Comprado' : 'Não Comprado'}`);
      });
  }
}

export function resumo_lista(): void {
  let totalItens = lista_de_compras.length;
  let categorias: Record<string, number> = {};
  let comprados = 0;
  let naoComprados = 0;

  lista_de_compras.forEach(item => {
      categorias[item.categoria] = (categorias[item.categoria] || 0) + 1;
      item.comprado ? comprados++ : naoComprados++;
  });

  console.log(`Resumo da Lista de Compras:
  - Total de itens: ${totalItens}
  - Itens comprados: ${comprados}
  - Itens não comprados: ${naoComprados}`);

  console.log('Itens por categoria:');
  for (let [categoria, quantidade] of Object.entries(categorias)) {
      console.log(`- ${categoria}: ${quantidade}`);
  }
}
