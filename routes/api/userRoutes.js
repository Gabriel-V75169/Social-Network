const router = require('express').Router();
const {
    createUser,
    getUsers,
    getSingleUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/userController');

router.route('/').post(createUser).get(getUsers);

router.route('/:id').get(getSingleUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;