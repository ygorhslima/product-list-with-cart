# template de e-commerce fictício de delivery de comidas em React

Este é um exemplo que obtive no site do frontend mentor https://www.frontendmentor.io/ e esse foi o primeiro projeto que fiz utilizando a biblioteca do React

## visão geral do projeto

é um template de delivery de doces, a ideia central para o funcionamento do projeto é uma lista de sobremesas que o cliente vai escolher e quantas vezes vai querer a compra.

ele tem as seguintes funcionalidade para implementar

1. renderizar os dados que vem em um JSON sobre a imagem da sobremesa, a sua descrição, com a categoria, o nome e o preço da sobremesa

2. criar um botão que quando clicado vai mostrar a quantidade de vezes que o usuário vai querer a sobremesa, com um botão de adicionar mais uma sobremesa ou remover uma sobremesa

3. após clicado no botão, vai ser mostrado um container com a lista de sobremesas escolhidas no carrinho,  com a quantidade total de sobremesas escolhidas, o preço e um botão de remover uma sobremesa para cada item da lista e no final mostrando o total da compra e um botão de confirmar pedido

No React eu criei dentro da pasta /src os componentes 

-  ContainerDessert.jsx
- GridItemDessert.jsx
- BtnAddToCart.jsx

e os seus respectivos estilos dentro da pasta ./src/style/

o primeiro componente é o ContainerDessert.jsx

ele é responsável por renderizar o container de sobremesas, a estilização deste componente foi utilizando os conceitos de gridLayout, que para este exercício achei mais simples de criar 

o segundo componente é o GriItemDessert.jsx

que é o elemento filho do ContainerDessert.jsx. Este componente é responsável por renderizar todos os itens dentro da grid, obtendo os dados do json 
