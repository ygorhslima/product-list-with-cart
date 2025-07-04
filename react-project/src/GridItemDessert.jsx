import BtnAddToCart from './BtnAddToCart'
import './style/grid-item.css'

// O componente agora recebe os dados de um item via props
export default function GridItemDessert({ item, cartQuantity, onAddToCart, onRemoveFromCart }){
  return(
    <>
      <div className='grid_item'>
            <div className='container_img'>
              <picture>
                  <source media="(max-width: 480px)" srcSet={item.image.mobile}/>
                  <source media="(max-width: 768px)" srcSet={item.image.tablet}/>
                  <img src={item.image.desktop} alt={item.name} className='grid_item__image' />
              </picture>
              <BtnAddToCart quantity={cartQuantity} onAddToCart={onAddToCart} onRemoveFromCart={onRemoveFromCart} />
            </div>
            <div className="container_description">
              <h3 className='grid_item__category'>{item.category}</h3>
              <p className='grid_item__name'>{item.name}</p>
              <p className='grid_item__price'>${item.price.toFixed(2)}</p>
            </div>
          </div>
    </>
  )
}