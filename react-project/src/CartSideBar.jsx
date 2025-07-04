import './style/cart-sidebar.css';
import IconRemove from '../public/assets/images/icon-remove-item.svg';
import IconEmptyCart from '../public/assets/images/illustration-empty-cart.svg';

export default function CartSideBar({ cart, data, onClearItem }) {
  // 1. Transforma o objeto 'cart' em um array de itens com todos os detalhes.
  const cartItems = Object.keys(cart).map(itemName => {
    // Para cada item no carrinho, encontramos seus dados completos (preço, imagem, etc.) no JSON 'data'.
    const itemData = data.find(d => d.name === itemName);
    // Retornamos um novo objeto com todos os dados do item mais a sua quantidade.
    return {
      ...itemData,
      quantity: cart[itemName],
    };
  });

  // 2. Calcula o valor total do pedido.
  const orderTotal = cartItems.reduce((total, item) => {
    // 'reduce' acumula o valor, somando o preço de cada item multiplicado pela sua quantidade.
    return total + item.price * item.quantity;
  }, 0); // O '0' é o valor inicial do total.

  // 3. Calcula a quantidade total de itens no carrinho.
  const totalItems = Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);

  return (
    <aside className="container-cart-sidebar">
      {/* O título agora mostra a quantidade total de itens dinamicamente */}
      <h2 className="cart-title">Your Cart ({totalItems})</h2>

      {/* 4. Renderização condicional: mostra uma mensagem se o carrinho estiver vazio... */}
      {cartItems.length === 0 ? (
        <div className="cart-empty">
          <img src={IconEmptyCart} alt="Empty cart" />
          <p>Your added items will appear here</p>
        </div>
      ) : (
        // ...ou mostra a lista de itens, o total e o botão de confirmar.
        <>
          <ul className="cart-list">
            {/* 5. Mapeia cada item do carrinho para um elemento <li> na lista */}
            {cartItems.map(item => (
              <li key={item.name} className="cart-item">
                <div className="item-info">
                  <p className="item-name">{item.name}</p>
                  <div className="item-details">
                    <span className="item-quantity">{item.quantity}x</span>
                    <span className="item-price-single">@ ${item.price.toFixed(2)}</span>
                    <span className="item-price-total">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
                {/* 6. Botão para remover o item completamente do carrinho */}
                <button className="remove-item-btn" onClick={() => onClearItem(item.name)}>
                  <img src={IconRemove} alt="Remove item" />
                </button>
              </li>
            ))}
          </ul>

          <div className="order-total-container">
            <span>Order Total</span>
            <span className="order-total-price">${orderTotal.toFixed(2)}</span>
          </div>

          <button className="confirm-order-btn">
            Confirm Order
          </button>
        </>
      )}
    </aside>
  );
}