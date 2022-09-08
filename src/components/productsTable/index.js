import ProductsRow from '../productsrow';

function ProductsTable({ products, pesquisa, checkBox }) {
  return (
    <>
      <tr>
        <td>Name</td>
        <td>Price</td>
      </tr>
      {checkBox &&
        products
          .filter((produto) => {
            return produto.inStock;
          })
          .filter((produto) => {
            return produto.name.toLowerCase().includes(pesquisa.toLowerCase());
          })
          .map((produto) => {
            return <ProductsRow product={produto} />;
          })}
      {!checkBox &&
        products
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
