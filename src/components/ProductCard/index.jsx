import { ThemeButton } from "../../style/buttons"
import { ThemeBody, ThemeCaption, ThemeTitle } from "../../style/typography"
import { Li } from "./styles"

const Card = ({product, cart, setCart}) => {

    const handleCart = (product) => {

        const isThere = cart.find(e => e === product)
        if(isThere) {
            return alert('O produto já existe no carrinho!')
        }
        alert('Producto adicionado!')
        setCart([...cart, product])
    }

    return (
        
        <Li>
            <img src={product.img} alt="" />
            <div className="info">
                <ThemeTitle tag={'h3'} className={'title3'} color={'var(--Grey-4)'}>{product.name}</ThemeTitle>
                <ThemeCaption>{product.category}</ThemeCaption>
                <ThemeBody color={'var(--Green)'}>{product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}</ThemeBody>
                <ThemeButton onClick={() => handleCart(product)} buttonSize={'sm'} buttonStyle={'solid'}>Adicionar</ThemeButton>
            </div>
        </Li>
    )
}
export default Card;