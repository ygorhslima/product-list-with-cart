import { useState } from 'react'
import ContainerDessert from './ContainerDessert'
import GridItemDessert from './GridItemDessert'
import CartSideBar from './CartSideBar'

import data from '../public/data.json'

function App() {
  // O estado do carrinho agora vive aqui!
  // A chave é o nome do item, o valor é a quantidade.
  const [cart, setCart] = useState({});

  const handleAddToCart = (itemName) => {
    setCart(prevCart => ({
      ...prevCart,
      [itemName]: (prevCart[itemName] || 0) + 1
    }));
  };

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
              key={item.name} // Usando uma chave única do item
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