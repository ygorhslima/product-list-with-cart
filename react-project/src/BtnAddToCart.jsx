import './style/btn-add-to-cart.css'

// Este componente agora é "controlado" pelo pai.
// Ele recebe a quantidade e as funções de clique via props.
export default function BtnAddToCart({ quantity, onAddToCart, onRemoveFromCart }) {
  return (
    <div className="btn-add-cart">
      {quantity > 0 ? (
        <div className='div_mostrarContador'>
          <button onClick={onRemoveFromCart} className="botao-ajuste">-</button>
          <span className="quantidade">{quantity}</span>
          <button onClick={onAddToCart} className="botao-ajuste">+</button>
        </div>
      ) : (
        <button 
          onClick={onAddToCart}
          className="botao-adicionar"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}