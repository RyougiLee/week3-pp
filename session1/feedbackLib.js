let feedbacks = []

let nextId = 1;

function getAll() {
    return feedbacks;
}

function addOne(sender, message, rating) {
    // Check if any parameter is empty or undefined
    if (!sender || !message || rating === undefined) {
        return false;
    }

    const newFeedback = {
        id: nextId++,
        sender,
        message,
        rating
    };

    feedbacks.push(newFeedback);
    return newFeedback;
}

function findById(id) {
    const numericId = Number(id);
    const feedback = feedbacks.find(item => item.id === numericId);
    if (feedback) {
        return feedback;
    } else {
        return false;
    }
}

function updateOneById(id, updatedData) {
    const feedback = findById(id);
    if (feedback) {
        // Update properties only if provided in updatedData
        if (updatedData.sender) {
            feedback.sender = updatedData.sender;
        }
        if (updatedData.message !== undefined) {
            feedback.message = updatedData.message;
        }
        if (updatedData.rating !== undefined) {
            feedback.rating = updatedData.rating;
        }
        return feedback;
    }
    return false;
}

function deleteOneById(id) {
    const feedback = findById(id);
    if (feedback) {
        const initialLength = feedbacks.length;
        feedbacks = feedbacks.filter(feedback => feedback.id !== Number(id));
        return feedbacks.length < initialLength; // Indicate successful deletion if the length has decreased
    }
    return false; // Return false if the item was not found
}

if (require.main === module) {
    let result = addOne("John Smith", "Great session on React components! I found the examples very helpful.", 4);
    console.log(result);
    console.log("getAll called:", getAll());
    console.log("findById called:", findById(1));
    // rest of the tests here
}

Feedback = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById
};

module.exports = Feedback;
