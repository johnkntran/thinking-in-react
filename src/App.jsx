import FilterableProductTable from "./components/FilterableProductTable";
import data from "./data";


export default function App() {
  return (
    <FilterableProductTable products={data} />
  );
}
