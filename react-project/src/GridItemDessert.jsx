import data from '../public/data.json'
import BtnAddToCart from './BtnAddToCart'
import './style/grid-item.css'

export default function GridItemDessert(){
  return(
    <>
    { /** o que o map vai fazer é iterar elmento por elemento dentro do json data.json, retornando na tela um html dos itens de sobremesa*/ }

      {data.map((item,index)=>{
        return (
          <div key={index} className='grid_item'>
                <div className='container_img'>
                  <picture>
                      <source media="(max-width: 480px)" srcSet={item.image.mobile}/>
                      <source media="(max-width: 768px)" srcSet={item.image.tablet}/>
                      <img src={item.image.desktop} alt={item.name} className='grid_item__image' />
                  </picture>
                  <BtnAddToCart/>
                </div>

                <div className="container_description">
                  <h3 className='grid_item__category'>{item.category}</h3>
                  <p className='grid_item__name'>{item.name}</p>
                  <p className='grid_item__price'>${item.price.toFixed(2)}</p>
                </div>
          </div>
        )})}   
    </>
  )
}