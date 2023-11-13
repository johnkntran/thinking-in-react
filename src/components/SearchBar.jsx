import { useContext } from 'react';
import { AuthContext } from './AuthProvider';

export default function SearchBar(props) {
  const user = useContext(AuthContext);
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
      <aside>Current user is: {user.id ? `#${user.id} ${user.name}` : ''}</aside>
    </form>
  );
}
