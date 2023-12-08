const router = require('express').Router();
const {
    createThought,
    getThoughts,
    getSingleThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thoughtsController');

router.route('/').post(createThought).get(getThoughts);

router.route('/:id').get(getSingleThought).delete(deleteThought);

router.route('/:thoughtId/reactions').post(addReaction).delete(removeReaction);

module.exports = router;