export default function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <div className="search-checkbox">
        <input type="checkbox" />
        <label>Only show products in stock</label>
      </div>
    </form>
  );
}
