import React from "react";

interface userType {
    email: string;
    password: string;
}
interface UserContextType {
    user: userType
    setUser: (user: userType) => void;
}

const defaultUserValue: UserContextType = {
    user: {
        email: '',
        password: ''
    },
    setUser: () => { }
};

const UserContext = React.createContext<UserContextType>(defaultUserValue);

export default UserContext;
export type { UserContextType, userType };