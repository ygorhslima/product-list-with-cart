import { useState } from 'react'
import ContainerDessert from './ContainerDessert'
import GridItemDessert from './GridItemDessert'
import CartSideBar from './CartSideBar'

import data from '../public/data.json'

/**
 * Componente principal da aplicação.
 * Gerencia o estado do carrinho de compras e renderiza a lista de sobremesas e a barra lateral do carrinho.
 * @returns {JSX.Element} O componente App renderizado.
 */
function App() {
  /**
   * Estado que armazena os itens no carrinho de compras.
   * A estrutura é um objeto onde cada chave é o nome do item (string)
   * e o valor correspondente é a quantidade desse item (number).
   * @type {[Object<string, number>, React.Dispatch<React.SetStateAction<Object<string, number>>>]}
   */
  const [cart, setCart] = useState({});

  /**
   * Adiciona um item ao carrinho. Se o item já existir, incrementa sua quantidade.
   * @param {string} itemName - O nome do item a ser adicionado.
   */
  const handleAddToCart = (itemName) => {
    setCart(prevCart => ({
      ...prevCart,
      [itemName]: (prevCart[itemName] || 0) + 1
    }));
  };

  /**
   * Remove uma unidade de um item do carrinho.
   * Se a quantidade do item for maior que 1, decrementa a quantidade.
   * Caso contrário, o item é removido completamente do carrinho.
   * @param {string} itemName - O nome do item a ser removido.
   */
  const handleRemoveFromCart = (itemName) => {
    setCart(prevCart => {
      const newCart = { ...prevCart };
      if (newCart[itemName] > 1) {
        newCart[itemName] -= 1;
      } else {
        delete newCart[itemName];
      }
      return newCart;
    });
  };

  /**
   * Remove um item completamente do carrinho, independentemente da sua quantidade.
   * @param {string} itemName - O nome do item a ser removido do carrinho.
   */
  const handleClearItemFromCart = (itemName) => {
    setCart(prevCart => {
      const newCart = { ...prevCart };
      delete newCart[itemName];
      return newCart;
    });
  };

  return (
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
  )
}
export default App