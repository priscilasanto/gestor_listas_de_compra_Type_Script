
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

export function remover_item(): void {
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
  export function editar_item(): void {
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

  export function marcar_comprado(): void {
    const nome = prompt('Digite o nome do item: ') as string;
    const item = lista_de_compras.find(item => item.nome === nome);
  
    if (item) {
      item.comprado = !item.comprado;
      console.log(`Item marcado como ${item.comprado ? 'comprado' : 'não comprado'}.`);
    } else {
      console.log('Item não encontrado!');
    }
  }

  export function listar_itens(): void {
    const opcao = prompt('Escolha uma opção de visualização: \n1. Ordem alfabética \n2. Por categoria \n3. Por quantidade \n4. Filtrar por categoria \n5. Filtrar por status (comprado/não comprado)') as string;
  
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
                lista_de_compras = lista_de_compras.filter(item => item.categoria === categoria);
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
    
    }
  

if (lista_de_compras.length === 0) {
    console.log('A lista está vazia ou nenhum item corresponde ao filtro.');
  } else {
    lista_de_compras.forEach(item => {
      console.log(`- ${item.nome}, Quantidade: ${item.quantidade}, Categoria: ${item.categoria}, Status: ${item.comprado ? 'Comprado' : 'Não Comprado'}`);
    });
  }


  interface Item {
    nome: string;
    quantidade: number;
    categoria: string;
    comprado: boolean;
  }
  
  
  function calcularResumo(lista: Item[]): {
    totalItens: number;
    comprados: number;
    naoComprados: number;
    categorias: Record<string, number>;
  } {
    const totalItens = lista.length;
    let comprados = 0;
    let naoComprados = 0;
    const categorias: Record<string, number> = {};
  
    lista.forEach(item => {
      categorias[item.categoria] = (categorias[item.categoria] || 0) + 1;
      item.comprado ? comprados++ : naoComprados++;
    });
  
    return { totalItens, comprados, naoComprados, categorias };
  }
  
  function formatarResumo(resumo: ReturnType<typeof calcularResumo>): string {
    let resultado = `Resumo da Lista de Compras:\n`;
    resultado += `- Total de itens: ${resumo.totalItens}\n`;
    resultado += `- Itens comprados: ${resumo.comprados}\n`;
    resultado += `- Itens não comprados: ${resumo.naoComprados}\n`;
    resultado += 'Itens por categoria:\n';
    for (const [categoria, quantidade] of Object.entries(resumo.categorias)) {
      resultado += `- ${categoria}: ${quantidade}\n`;
    }
    return resultado;
  }
  
  export function resumo_lista() {
    const resumo = calcularResumo(lista_de_compras);
    console.log(formatarResumo(resumo));
  }