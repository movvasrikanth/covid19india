var express=require('express');
var router=express.Router();

var ctrlcovid=require("../controllers/covid.controllers.js");
// var ctrlstates=require("../controllers/states.controllers.js");

router
      .route("/node")
      .get(ctrlcovid.covid)

router
      .route("/totalvslastweek")
      .get(ctrlcovid.view)

// router
//       .route("/states")
//       .get(ctrlstates.states)

module.exports=router;
