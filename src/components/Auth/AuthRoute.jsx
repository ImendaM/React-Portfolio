import { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router'

const AuthRoute = (props) => {
    const { children } = props;
    const auth = getAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoading(false);
            } else {
                setLoading(false);
                navigate('/login');
            }
        });
        return () => unsubscribe();
    }, [auth, navigate]);

    if (loading) return <p></p>;
    return <div>{ children }</div>;
}

export default AuthRoute;