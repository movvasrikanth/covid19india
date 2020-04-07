const apiCallFromNode1 = require('../apicalls/NodeJsCall1')


module.exports.states=function (req,res) {
  apiCallFromRequest.callApi(function(response){
    // data=JSON.parse(response);
    // console.log(data);
    // res.render('states', { data:data});
    // res.end();
    res.write(JSON.stringify(response));
    res.end();
  });
}
