import FilterableProductTable from "./components/FilterableProductTable";
import { AuthProvider } from "./components/AuthProvider";
import data from "./data";


export default function App() {
  return (
    <AuthProvider>
      <FilterableProductTable products={data} />
    </AuthProvider>
  );
}
