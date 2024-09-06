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
  
  export function resumo_lista(lista_de_compras) {
    const resumo = calcularResumo(lista_de_compras);
    console.log(formatarResumo(resumo));
  }