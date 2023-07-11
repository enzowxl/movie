import React, {
    ReactNode,
    createContext,
    useState,
    useEffect
} from 'react'


interface Props {
    children: ReactNode;
}

interface User {
    info: {}
}

export const AuthContext = createContext<{
        user: User | null;
        logged: boolean;
    }>
    ({
        user: null,
        logged: false,
    });
 
export default function Provider({ children }: Props) {

    const [user, updateUser] = useState<User | null>({info: {name: 'enzo'}})


    return (

        <AuthContext.Provider
            value={{
                user,
                logged: !!user,
            }}
        >

            {children}

        </AuthContext.Provider>

    )

}