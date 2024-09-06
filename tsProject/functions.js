"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menu = menu;
exports.adicionar_item = adicionar_item;
exports.remover_item = remover_item;
exports.editar_item = editar_item;
exports.marcar_comprado = marcar_comprado;
exports.listar_itens = listar_itens;
exports.resumo_lista = resumo_lista;
var prompt_sync_1 = require("prompt-sync");
var prompt = (0, prompt_sync_1.default)();
var lista_de_compras = [];
function menu() {
    console.log('\nLista de Compras:');
    console.log('1. Adicionar item');
    console.log('2. Remover item');
    console.log('3. Editar item');
    console.log('4. Marcar item como comprado/não comprado');
    console.log('5. Listar itens');
    console.log('6. Resumo da lista');
    console.log('7. Sair');
}
function adicionar_item() {
    var nome = prompt('Digite o nome do item: ');
    var quantidadeString = prompt('Digite a quantidade: ');
    var quantidade = parseInt(quantidadeString, 10);
    var categoria = prompt('Digite a categoria: ');
    if (isNaN(quantidade)) {
        console.log('Quantidade deve ser um número válido!');
        return;
    }
    lista_de_compras.push({ nome: nome, quantidade: quantidade, categoria: categoria, comprado: false });
    console.log('Item adicionado com sucesso!');
}
function remover_item() {
    var nome = prompt('Digite o nome do item a ser removido: ');
    var index = lista_de_compras.findIndex(function (item) { return item.nome === nome; });
    if (index !== -1) {
        lista_de_compras.splice(index, 1);
        console.log('Item removido com sucesso!');
    }
    else {
        console.log('Item não encontrado!');
    }
}
function editar_item() {
    var nome = prompt('Digite o nome do item que deseja editar: ');
    var item = lista_de_compras.find(function (item) { return item.nome === nome; });
    if (item) {
        var novoNome = prompt('Digite o novo nome do item: ') || item.nome;
        var novaQuantidadeString = prompt('Digite a nova quantidade: ') || item.quantidade.toString();
        var novaCategoria = prompt('Digite a nova categoria: ') || item.categoria;
        var novaQuantidade = parseInt(novaQuantidadeString, 10);
        if (!isNaN(novaQuantidade)) {
            item.nome = novoNome;
            item.quantidade = novaQuantidade;
            item.categoria = novaCategoria;
            console.log('Item editado com sucesso!');
        }
        else {
            console.log('Quantidade deve ser um número válido!');
        }
    }
    else {
        console.log('Item não encontrado!');
    }
}
function marcar_comprado() {
    var nome = prompt('Digite o nome do item: ');
    var item = lista_de_compras.find(function (item) { return item.nome === nome; });
    if (item) {
        item.comprado = !item.comprado;
        console.log("Item marcado como ".concat(item.comprado ? 'comprado' : 'não comprado', "."));
    }
    else {
        console.log('Item não encontrado!');
    }
}
function listar_itens() {
    var opcao = prompt('Escolha uma opção de visualização: \n1. Ordem alfabética \n2. Por categoria \n3. Por quantidade \n4. Filtrar por categoria \n5. Filtrar por status (comprado/não comprado): ');
    switch (opcao) {
        case '1':
            lista_de_compras.sort(function (a, b) { return a.nome.localeCompare(b.nome); });
            break;
        case '2':
            lista_de_compras.sort(function (a, b) { return a.categoria.localeCompare(b.categoria); });
            break;
        case '3':
            lista_de_compras.sort(function (a, b) { return a.quantidade - b.quantidade; });
            break;
        case '4':
            var categoria_1 = prompt('Digite a categoria para filtrar: ');
            lista_de_compras = lista_de_compras.filter(function (item) { return item.categoria === categoria_1; });
            break;
        case '5':
            var status_1 = prompt('Digite o status para filtrar (comprado/não comprado): ');
            var comprado_1 = status_1 === 'comprado';
            lista_de_compras = lista_de_compras.filter(function (item) { return item.comprado === comprado_1; });
            break;
        default:
            console.log('Opção inválida!');
            return;
    }
    if (lista_de_compras.length === 0) {
        console.log('A lista está vazia ou nenhum item corresponde ao filtro.');
    }
    else {
        lista_de_compras.forEach(function (item) {
            console.log("- ".concat(item.nome, ", Quantidade: ").concat(item.quantidade, ", Categoria: ").concat(item.categoria, ", ").concat(item.comprado ? 'Comprado' : 'Não Comprado'));
        });
    }
}
function resumo_lista() {
    var totalItens = lista_de_compras.length;
    var categorias = {};
    var comprados = 0;
    var naoComprados = 0;
    lista_de_compras.forEach(function (item) {
        categorias[item.categoria] = (categorias[item.categoria] || 0) + 1;
        item.comprado ? comprados++ : naoComprados++;
    });
    console.log("Resumo da Lista de Compras:\n- Total de itens: ".concat(totalItens, "\n- Itens comprados: ").concat(comprados, "\n- Itens n\u00E3o comprados: ").concat(naoComprados));
    console.log('Itens por categoria:');
    for (var _i = 0, _a = Object.entries(categorias); _i < _a.length; _i++) {
        var _b = _a[_i], categoria = _b[0], quantidade = _b[1];
        console.log("- ".concat(categoria, ": ").concat(quantidade));
    }
}
