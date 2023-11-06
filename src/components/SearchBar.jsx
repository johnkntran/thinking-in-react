export default function SearchBar(props) {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={props.searchTerm}
        onChange={e => props.onSearchTermChange(e.target.value)}
      />
      <div className="search-checkbox">
        <input
          type="checkbox"
          checked={props.inStock}
          onChange={e => props.onInStockChange(e.target.checked)}
        />
        <label>Only show products in stock</label>
      </div>
    </form>
  );
}
