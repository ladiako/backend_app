import { useCallback, useEffect, useState } from 'react';
import history from '../../histore'
const useUserAuthentication = () => {
    
    const [isLoggedIn, setIsLoggedIn] = useState();
    const token = window.sessionStorage.getItem('token');
    
    const fetchUser = useCallback(() => {
        if(token){
            setIsLoggedIn(true);
            history.push("/");
        }else{
            setIsLoggedIn(false);
            history.push('/login');
        }
    }, [token, isLoggedIn]);
    useEffect(() => {
        fetchUser();
    }, [fetchUser])

    return {
        isLoggedIn,
        setIsLoggedIn,
        fetchUser,
    }
}
export default  useUserAuthentication;