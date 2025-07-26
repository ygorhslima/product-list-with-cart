# template de e-commerce fictício de delivery de comidas em React

Este é um exemplo que obtive no site do frontend mentor https://www.frontendmentor.io/ e esse foi o primeiro projeto que fiz utilizando a biblioteca do React

## visão geral do projeto

é um template de delivery de doces, a ideia central para o funcionamento do projeto é uma lista de sobremesas que o cliente vai escolher e quantas vezes vai querer a compra.

ele tem as seguintes funcionalidade para implementar

1. renderizar os dados que vem em um JSON sobre a imagem da sobremesa, a sua descrição, com a categoria, o nome e o preço da sobremesa

2. criar um botão que quando clicado vai mostrar a quantidade de vezes que o usuário vai querer a sobremesa, com um botão de adicionar mais uma sobremesa ou remover uma sobremesa

3. após clicado no botão, vai ser mostrado um container com a lista de sobremesas escolhidas no carrinho,  com a quantidade total de sobremesas escolhidas, o preço e um botão de remover uma sobremesa para cada item da lista e no final mostrando o total da compra e um botão de confirmar pedido

No React eu criei dentro da pasta /src os componentes 

- App.jsx
- ContainerDessert.jsx
- GridItemDessert.jsx
- BtnAddToCart.jsx
- CartSideBar.jsx

e os seus respectivos estilos dentro da pasta ./src/style/

o primeiro componente é o que vai englobar toda a aplicação, que é o App.jsx

ele é responsável por gerenciar todo o estado do carrinho de compras e renderiza um retorno html com os dados que estão sendo obtidos do arquivo data.json, englobando todos os componentes necessários para o funcionamento da aplicação

~~~~jsx
 <div className="app-container">
      <div className="dessert-list-container">
        <h1 className="title_dessert">Desserts</h1>
        <ContainerDessert>
          {data.map((item) => (
            <GridItemDessert 
              key={item.name} // Chave única para cada item na lista, essencial para a performance e reconciliação do React.
              item={item}
              cartQuantity={cart[item.name] || 0}
              onAddToCart={() => handleAddToCart(item.name)}
              onRemoveFromCart={() => handleRemoveFromCart(item.name)}
            />
          ))}
        </ContainerDessert>
      </div>
      <CartSideBar 
        cart={cart}
        data={data}
        onClearItem={handleClearItemFromCart}
      />
    </div>
~~~~



o segundo componente é o ContainerDessert.jsx

é um componente importante e responsável por organizar os Itens de Sobremesa dentro de uma Grid, achei melhor utilizar Grid Layout pois é mais fácil de organizar sequências de item em um site

o terceiro componente é o GriItemDessert.jsx

que é o elemento filho do ContainerDessert.jsx. Este componente é responsável por tratar os dados obtidos via props (que são propriedades de um componente, quais dados ele vai obter)

as propriedades passados por ele são 
- item: seria os itens que tem dentro do arquivo public/data.json que são eles as imagens e textos das sobremesas (categoria, descrição, preço e nome)
- cartQuantity: propriedade que será passada para o componente BtnAddToCart.jsx, passando a quantidade de  sobremesas que o usuário vai querer
- onAddToCart: função de clique para adicionar uma sobremesa para o carrinho
- onRemoveFromCart: função de clique para remover uma sobremesa para o carrinho

o quarto componente é o BtnAddToCart.jsx

é o componente que gerencia dois botões
- um que é o botão principal, que é onde o cliente vai clicar para adicionar ao carrinho
- após clicar no botão, vai aparecer três elementos importante: 
    - um botão de diminuir quantidade de sobremesas
    - a quantidade que está sendo adicionada ao carrinho mostrando para o cliente quanto ele quer
    - um botão de aumentar quantidade de sobremesas
    
o quinto e último componente é o `CartSideBar.jsx`. Este componente é a barra lateral que funciona como o carrinho de compras da aplicação. Ele é responsável por mostrar ao usuário um resumo do seu pedido.

Ele recebe três propriedades essenciais do componente `App.jsx`:
- **`cart`**: O objeto de estado que contém os itens selecionados e suas respectivas quantidades (`{ "Nome do Item": quantidade }`).
- **`data`**: O array completo de produtos, que ele utiliza para buscar informações detalhadas (como preço e nome) de cada item presente no `cart`.
- **`onClearItem`**: A função que permite ao usuário remover um item por completo do carrinho, clicando em um botão específico para aquele item.

Com base nessas propriedades, o `CartSideBar.jsx` realiza as seguintes tarefas:
- Exibe uma lista de todos os itens que foram adicionados ao carrinho. Se o carrinho estiver vazio, ele mostra uma mensagem indicando isso.
- Para cada item na lista, renderiza seu nome, a quantidade escolhida e o preço total (calculado como `quantidade × preço unitário`).
- Apresenta um botão de remoção (`x`) ao lado de cada item para que o usuário possa retirá-lo da lista.
- Calcula e exibe o valor **total** da compra, somando os preços de todos os itens.
- Apresenta um botão de "Confirmar Pedido" para o usuário finalizar a compra.
