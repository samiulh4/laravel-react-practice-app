import {createBrowserRouter} from 'react-router-dom';
import SignIn from './views/SignIn';


const router = createBrowserRouter([
    {
        path: '/',
        element: <SignIn />
    },
        
]);

export default router;