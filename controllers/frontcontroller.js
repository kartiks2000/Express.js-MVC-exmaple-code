

const backcontrollers = require('../controllers/backcontroller');

exports.addproduct = (req,res,next)=>{
    res.render('addproduct');
}


exports.products = (req,res,next)=>{
    res.render('products',{'products':backcontrollers.productsname});
}