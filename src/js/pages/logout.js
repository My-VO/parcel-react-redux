import { useDispatch } from 'react-redux';

const Logout = () => {
    const dispatch = useDispatch();
    
    dispatch({ type: 'USER_RESET' })
    return null;
}

export default Logout;