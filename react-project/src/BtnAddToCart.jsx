import { useState } from 'react';
import './style/btn-add-to-cart.css'

export default function BtnAddToCart() {
  const [quantidade, setQuantidade] = useState(0);
  const [mostrarContador, setMostrarContador] = useState(false);

  function adicionar() {
    setQuantidade(prev => prev + 1);
  }

  function remover() {
    setQuantidade(prev => {
      const novaQuantidade = prev - 1;
      if (novaQuantidade <= 0) {
        setMostrarContador(false); // volta pro botão se a quantidade for 0
        return 0;
      }
      return novaQuantidade;
    });
  }

  return (
    <div className="btn-add-cart">
      {mostrarContador ? (
        <div className='div_mostrarContador'>
          <button onClick={remover} className="botao-ajuste">-</button>
          <span className="quantidade">{quantidade}</span>
          <button onClick={adicionar} className="botao-ajuste">+</button>
        </div>
      ) : (
        <button onClick={() => {
            setMostrarContador(true);
            setQuantidade(1);
          }}
          className="botao-adicionar"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}