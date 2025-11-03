const Feedback = require("./feedbackLib");

const getAllFeedbacks = (req, res) => {
    res.json(Feedback.getAll());
};

const createFeedback = (req, res) => {
    body = req.body
    console.log(body)
    res.json(Feedback.addOne(body.sender, body.message, body.rating));
};

const getFeedbackById = (req, res) => {
    id = req.params.feedbackId
    res.json(Feedback.findById(id));
};

const updateFeedback = (req, res) => {
    id = req.params.feedbackId
    console.log(id)
    body = req.body
    res.json(Feedback.updateOneById(id, body));
};

const deleteFeedback = (req, res) => {
    id = req.params.feedbackId
    res.json(Feedback.deleteOneById(id));
};

module.exports = {
    getAllFeedbacks,
    getFeedbackById,
    createFeedback,
    updateFeedback,
    deleteFeedback,
};