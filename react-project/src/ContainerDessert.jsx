import './style/grid-container.css'

export default function ContainerDessert({children}){
    return (
        <>
            <div className="container_dessert">
                {children}   
            </div>
        </>
    )
}