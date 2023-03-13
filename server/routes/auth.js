import {Router} from 'express'
import {register, login, getMe} from '../controllers/auth.js'
import {checkAuth} from "../utils/checkAuth.js";
const router = new Router();

//Registr
//http://localhost:3003/api/auth/register
router.post('/register', register);

//Login
//http://localhost:3003/api/auth/login
router.post('/login', login);




// Get Me
// http://localhost:3003/api/auth/me
router.get('/me', checkAuth, getMe);

export default router