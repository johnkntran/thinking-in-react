import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

export default function FilterableProductTable(props) {
  return (
    <main>
      <SearchBar />
      <ProductTable products={props.products} />
    </main>
  );
}
