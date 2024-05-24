
import s from './ProductsApp.module.css'
import PropTypes from 'prop-types'

export const ProductCard = ({ item }) => {
    return (
        <li className={s.product_style}>
            <div>
                <img src={item.thumbnail} alt={item.title} />
            </div>
            <article>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <div className={s.options}>
                    <p>{item.price}$</p>
                    <button>Add to cart</button>
                </div>
            </article>
        </li>
    )
}

ProductCard.propTypes = {
    item: PropTypes.shape({
        thumbnail: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number
    })
}

export default ProductCard
