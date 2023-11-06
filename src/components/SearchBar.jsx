export default function SearchBar(props) {
  return (
    <form>
      <input type="text" placeholder="Search..." value={props.searchTerm} />
      <div className="search-checkbox">
        <input type="checkbox" checked={props.inStock} />
        <label>Only show products in stock</label>
      </div>
    </form>
  );
}
