import jsonData from '../../data.json';
import SearchBar from '../searchbar';
import { useState } from 'react';
import ProductsTable from '../productsTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [pesquisa, setSearch] = useState('');
  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar pesquisa={pesquisa} setSearch={setSearch} />
      <ProductsTable products={products} pesquisa={pesquisa}></ProductsTable>
    </div>
  );
}
export default ProductsPage;
