import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCT = [
  {
    name: 'first Book',
    id:'p1',
    price: 6,
    description: 'the first book i ever wrote'
  },
  {
    name: 'second Book',
    id:'p2',
    price: 7,
    description: 'the second book i ever wrote'
  }
]

const Products = (props) => {


  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map(product=> (
          <ProductItem
          title={product.name}
          price={product.price}
          description={product.description}
          id={product.id}
          key={product.id}
        />
        ))}
      </ul>
    </section>
  );
};

export default Products;
