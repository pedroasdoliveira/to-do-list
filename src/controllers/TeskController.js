import {Task} from '../models/Tesk.js'

export const getAll = async (req, res) => {
    try {
        const tasksLists = await Task.find();
        return res.status(200).render('index', {tasksLists});
    }
    catch(err) {
        res.status(500).send({erro: err.message})
    }
};

export const createTask = async (req, res) => {
    const task = req.body;

    if (!task.task) {
        return res.redirect('/')
    }

    try {
        await Task.create(task)
        return res.status(200).redirect('/')
    }
    catch(err) {
        res.status(500).send({erro: err.message})
    }
};
