const Task = require("../models/tasks.js")

const getAllTasks = async (req, res) => {
  try {
    tasks = await Task.find({})
    res.status(200).json({ tasks })
  } catch (err) {
    res.status(500).json({ msg: err })
  }
}

const createTask = async (req, res) => {
  try {
    task = await Task.create(req.body)
    res.status(201).json({ task })
  } catch (err) {
    res.status(500).json({ msg: err })
  }
}

const getSingleTask = async (req, res) => {
  try {
    // const { id: taskID } = req.params
    task = await Task.findOne({ _id: req.params.id })

    if (!task) {
      return res.status(404).send("task not found")
    }
    res.status(200).json({ task })
  } catch (err) {
    res.status(500).json({ msg: err })
  }
}

const updateTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
    if (!task) {
      return res.status(404).send("task not found")
    }
    res.status(200).json({ task })
  } catch (err) {
    res.status(500).json({ msg: err })
  }
}

const deleteTask = async (req, res) => {
  try {
    // const { id: taskID } = req.params
    task = await Task.findOneAndDelete({ _id: req.params.id })

    if (!task) {
      return res.status(404).send("task not found")
    }
    res.status(200).json({ task })
  } catch (err) {
    res.status(500).json({ msg: err })
  }
}

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
}
