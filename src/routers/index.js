const users = require('./users'); 
const category = require('./category'); 

const routers = [
    ...users,
    ...category
]; 

const router = (arg) => {
    arg.use(routers);
};

module.exports = router;