import ProductsRow from '../productsrow';

function ProductsTable({ products, pesquisa }) {
  return (
    <>
      <tr>
        <td>Name</td>
        <td>Price</td>
      </tr>
      {products
        .filter((produto) => {
          return produto.name.toLowerCase().includes(pesquisa.toLowerCase());
        })
        .map((produto) => {
          return <ProductsRow product={produto} />;
        })}
    </>
  );
}
export default ProductsTable;
