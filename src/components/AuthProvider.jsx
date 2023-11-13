import { createContext, useEffect, useState } from 'react';
import getUser from '../api';

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [userId, setUserId] = useState(0);
  const [user, setUser] = useState({id: 0, name: ''});

  useEffect(() => {
    let ignore = false;
    setUserId(Math.round(Math.random() + 1));
    async function startFetching() {
      setUser({id: 0, name: ''});
      const result = await getUser(userId);
      if (!ignore) {
        setUser(result);
      }
    }
    startFetching();
    return () => {
      setInterval(() => {setUserId(Math.round(Math.random() + 1));}, 5000);
      ignore = true;
    }
  }, [userId]);

  return (
    <AuthContext.Provider value={user}>
      { children }
    </AuthContext.Provider>
  )
}
