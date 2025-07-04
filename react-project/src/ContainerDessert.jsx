import './style/grid-container.css'

export default function ContainerDessert({children}){
    return (
        <>
            <h1 className='title_dessert'>Dessert</h1>
            <div className="container_dessert">
                {children}   
            </div>
        </>
    )
}