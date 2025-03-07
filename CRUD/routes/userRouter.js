import express from 'express';
import { fetch, create, fetchOne, update, remove } from '../controller/userController.js';
const router = express.Router();

router.post('/create', create);
router.get('/fetch', fetch);
router.get('/fetch/:id', fetchOne);
router.put('/update/:id', update); 
router.delete('/delete/:id', remove);

export default router;