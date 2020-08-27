
var productsname = [];

const adding = (req,res,next)=>{
    productsname.push(req.body.proname);
    res.redirect('/products');
}

module.exports = {
    'adding':adding,
    'productsname':productsname,
}
