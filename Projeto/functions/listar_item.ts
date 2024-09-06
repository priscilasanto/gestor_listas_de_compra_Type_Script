export function listar_itens(lista_de_compras): void {
    const opcao = prompt('Escolha uma opção de visualização: \n1. Ordem alfabética \n2. Por categoria \n3. Por quantidade \n4. Filtrar por categoria \n5. Filtrar por status (comprado/não comprado)') as string;
    
    switch (opcao) {
        case '1':
        lista_de_compras.sort((a, b) => a.nome.localeCompare(b.nome));
        console.log(lista_de_compras)
        break;

        case '2':
        lista_de_compras.sort((a, b) => a.categoria.localeCompare(b.categoria));
        console.log(lista_de_compras)
        break;

        case '3':
        lista_de_compras.sort((a, b) => a.quantidade - b.quantidade);
        console.log(lista_de_compras)
        break;
        case '4':
        let categoria = prompt('Digite a categoria para filtrar: ');
        lista_de_compras = lista_de_compras.filter(item => item.categoria === categoria);
        console.log(lista_de_compras)
        break;
        case '5':
        let status = prompt('Digite o status para filtrar (comprado/não comprado): ');
        let comprado = status === 'comprado';
        lista_de_compras = lista_de_compras.filter(item => item.comprado === comprado);
        console.log(lista_de_compras)
        break;
    default:
        console.log('Opção inválida!');
        return;
}
}