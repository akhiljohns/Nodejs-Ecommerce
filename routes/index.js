var express = require('express');
var router = express.Router();
const userHelper = require('../helpers/user-helper');
var session = require('express-session');
const productHelper = require('../helpers/product-helper');
var   a = 0;
var regUsername = false;
var regEmail = false;



/* GET home page. */
router.get('/', async function (req, res, next) {
  if(req.session.user){
  let user = req.session.user;
  console.log(user);
  let products = await productHelper.showProducts();
  if (user) {
    res.render('index.hbs', { products, admin: false, user });
  } else {
    res.render('index.hbs', { products, admin: false });
  }
}else{
  res.redirect('/login');
}
});



router.get('/login', (req, res, next) => {
  if (req.session.user) {
    res.redirect('/');
  } else {
    res.render('./user/user-login.hbs', { err: a });
    a = 0
  }
});

router.post('/login', (req, res, next) => {
    userHelper.doLogin(req.body).then((response) => {
      if (response.status) {
        req.session.user = response.user;
        req.session.user.loggedIn = true;
        res.redirect('/');
      } else {
        a = 1
        res.redirect('/login');
        // res.render('./user/user-login.hbs', {err:'Invalid username or password'});
      }
    })
})


/////////////////////////////////////         SIGNUP

router.get('/signup', (req, res, next) => {
  if (req.session.user) {
    res.redirect('/');
  } else {
    if(regEmail){
      res.render('./user/user-signup.hbs', {errE:'Email already in use'});
    } else if(regUsername){
      res.render('./user/user-signup.hbs', {errU:'Username is not available'});
    } else {
      res.render('./user/user-signup.hbs');
    }

    regUsername = false;
    regEmail = false;
    
  }
});



router.post('/signup', async (req, res, next) => {
  
  regUsername = await userHelper.checkUsername(req.body.username);
  regEmail = await userHelper.checkEmail(req.body.email);

  if (regEmail || regUsername) {   
    res.redirect('/signup');
  } else {
    userHelper.doSignup(req.body).then((response) => {
      console.log(response);
      req.session.user = response;
      req.session.user.loggedIn = true;
      res.redirect('/');
    })
  }
})


//////////////////////////////////////     LOGOUT

router.get('/logout', (req, res, next) => {
  req.session.user = null;
  res.redirect('/');
})




module.exports = router;



