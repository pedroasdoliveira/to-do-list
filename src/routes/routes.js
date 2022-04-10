import express from 'express'
import {getAll, createTask} from '../controllers/TeskController.js'

export const routes = express.Router();

routes.get('/', getAll);

routes.post('/create', createTask);