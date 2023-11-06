import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default function FilterableProductTable(props) {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [inStock, setInStock] = React.useState(false);
  return (
    <main>
      <SearchBar
        searchTerm={searchTerm}
        inStock={inStock}
        onSearchTermChange={setSearchTerm}
        onInStockChange={setInStock}
      />
      <ProductTable
        products={props.products}
        searchTerm={searchTerm}
        inStock={inStock}
      />
    </main>
  );
}
