import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export default function ProductTable(props) {
  const rows = [];
  let category = '';
  for (let product of props.products) {
    if (
      !props.searchTerm ||
      product.name.toLowerCase().includes(props.searchTerm.toLowerCase())
    ) {
      if (!props.inStock || product.stocked) {
        if (category !== product.category) {
          rows.push(
            <ProductCategoryRow
              category={product.category}
              key={product.category}
            />
          );
          category = product.category;
        }
        rows.push(
          <ProductRow
            product={product}
            key={product.name}
          />
        );
      }
    }
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
}
