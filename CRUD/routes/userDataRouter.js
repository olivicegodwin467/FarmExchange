import express from 'express';
import {createUserData , fetchUserData, fetchOneUserData, updateUserData, removeUserData} from '../controller/userDataController.js';
const router = express.Router();

router.post('/create', createUserData);
router.get('/fetch', fetchUserData);
router.get('/fetch/:id', fetchOneUserData);
router.put('/update/:id', updateUserData);
router.delete('/delete/:id', removeUserData);


export default router;