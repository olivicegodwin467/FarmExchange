// Init dependencies
import express from 'express';
const router = express.Router();
import {fetch, fetchOne, create, update, remove} from '../controller/userController.js';


// Routes
router.get('/fetch', fetch);
router.get('/:id', fetchOne);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', remove);

export default router;