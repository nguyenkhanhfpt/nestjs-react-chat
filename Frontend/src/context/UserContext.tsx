import React, { ReactNode, createContext, useContext, useReducer } from "react";

interface UserContextType {
  id: number;
  email: string;
  username: string;
  avatar: string;
}

interface UserProviderProps {
  children: ReactNode;
}

const UserContext = createContext<UserContextType | null>(null);
const DispatchUserContext = createContext<UserContextType | null>(null);

const userReducer = (user: UserContextType | {}, action) => {
  switch (action.type) {
    case "LOGIN":
      let userLogin = {
        ...user,
        ...action.user,
      };
      sessionStorage.setItem("currentUser", JSON.stringify(userLogin));

      return userLogin;
    case "LOGOUT":
      return {};
  }
};

const useUser = () => {
  return useContext(UserContext);
};

const useDispatchUser = () => {
  return useContext(DispatchUserContext);
};

const getUserData = () => {
  let user = sessionStorage.getItem("currentUser");

  return JSON.parse(user || "{}");
};

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  let [user, dispatch] = useReducer(userReducer, getUserData());

  return (
    <UserContext.Provider value={user}>
      <DispatchUserContext.Provider value={dispatch}>
        {children}
      </DispatchUserContext.Provider>
    </UserContext.Provider>
  );
};

export { UserProvider, useUser, useDispatchUser };
