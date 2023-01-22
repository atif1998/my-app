const { authJwt } = require("../middlerwares");
const controller = require("../controllers/user.controller");

// module.exports = function (app) {
//     app.post('/api/v1/registerUser', controller.newUser)
//     app.get('/api/v1/allUsers', controller.allUsers)
//     app.get('/api/v1/oneUser/:id', controller.oneUser)
//     app.get('/api/v1/editUser', controller.editUser)
//     app.delete('/api/v1/removeUser/:id', controller.removeUser)
// };