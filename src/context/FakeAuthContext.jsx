import { createContext, useContext, useReducer } from "react";
//Created Context
const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
  error: "",
};

const FAKE_USER = {
  name: "jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const REJECTED = "REJECTED";
const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, user: action.payload, isAuthenticated: true };
    case LOGOUT:
      return { ...state, user: null, isAuthenticated: false };
    case REJECTED:
      return { ...state, error: "Wrong Credentials" };
    default:
      throw new Error("Invalid Action Type!");
  }
};

//Auth Container
function AuthProvider({ children }) {
  const [{ user, isAuthenticated, error }, dispatch] = useReducer(
    reducer,
    initialState
  );
  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      dispatch({ type: LOGIN, payload: FAKE_USER });
      console.log("Logged In");
    } else {
      dispatch({ type: REJECTED });
    }
  }
  function logout() {
    dispatch({ type: LOGOUT });
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        error,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

//Custom Hook
const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined)
    throw new Error("You are accessing Authcontext outside the Provider");

  return context;
};

export { AuthProvider, useAuth };
