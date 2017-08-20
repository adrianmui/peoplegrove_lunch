const router = require('express').Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.sendFile('./../../../../public/index.html');
});
  
router.get('/landing', (req, res, next) => {
    console.log(`current user is: ${req.user}`);
    res.render('index', {user: req.user})
  
router.get('/profile', (req, res, next) => {
  res.render('user/profiles', {user: req.user})
})
  
});
  
  
module.exports = router; 