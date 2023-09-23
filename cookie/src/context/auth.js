// auth context
import React, { createContext } from "react";

const AuthContext = createContext();
export const useAuth = () => React.useContext(AuthContext);

const initialAuthState = {
  authId: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, authId: action.authId };
    case "LOGOUT":
      return { ...state, authId: null };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [authState, dispatch] = React.useReducer(authReducer, initialAuthState);

  const login = (authId) => {
    dispatch({ type: "LOGIN", authId });
  };

  return (
    <AuthContext.Provider
      value={{
        authId: authState.authId,
        login,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
