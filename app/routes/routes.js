module.exports = function (router) {

var version = '3';

//CREATE LICENCE
    //question page - do they need additional conditions
    router.post('/question', function(req, res) {
      var needadditional = req.session.data['needadditional'];
      if (needadditional == "yes"){
        res.redirect(version +'/conditions');
      }
      else if (needadditional == "no"){
        res.redirect(version + '/bespoke');
      }

    });
    //bespoke page - do they need bespoke conditions
    router.post('/bespoke', function(req, res) {
      var needbespoke = req.session.data['needbespoke'];
      if (needbespoke == "yes"){
        res.redirect(version +'/bespoke2');
      }
      else if (needbespoke == "no"){
        res.redirect(version + '/check-your-answers');
      }
    });


//ADDITIONAL CONDITIONS

//additional conditions page
//GET VALUES FROM EACH Passed in form field
//check against if else which is true in order
//set a 'no' value as hidden form field in each rendered page
  router.post('/conditions', function(req, res) {
   var a1 = req.session.data['1a'];
   var a2 = req.session.data['2a'];
   var a3 = req.session.data['3a'];
   var c3 = req.session.data['3c'];
   var c32 = req.session.data['3c2'];
   var e3 = req.session.data['3e'];
   var f3 = req.session.data['3f'];
   var g3 = req.session.data['3g'];
   var j3 = req.session.data['3j'];
   var a4 = req.session.data['4a'];
   var b4 = req.session.data['4b'];
   var h5 = req.session.data['5h'];
   var b6 = req.session.data['6b'];
   var a7 = req.session.data['7a'];
   var b7 = req.session.data['7b'];
   var a8 = req.session.data['8a'];
   var b8 = req.session.data['8b'];
   var c8 = req.session.data['8c'];
   var a9 = req.session.data['9a'];
   var a13 = req.session.data['13a'];
   var a14 = req.session.data['14a'];
   var b14 = req.session.data['14b'];
   var c14 = req.session.data['14c'];
   var d14 = req.session.data['14d'];

    if (a1 == "yes"){
      res.redirect(version +'/additional/1a');
    }
    else if (a2 == "yes"){
      res.redirect(version + '/additional/2a');
    }
    else if (a3 == "yes"){
      res.redirect(version + '/additional/3a');
    }
    else if (c3 == "yes"){
      res.redirect(version + '/additional/3c');
    }
    else if (c32 == "yes"){
      res.redirect(version + '/additional/3c2');
    }
    else if (e3 == "yes"){
      res.redirect(version + '/additional/3e');
    }
    else if (f3 == "yes"){
      res.redirect(version + '/additional/3f');
    }
    else if (g3 == "yes"){
      res.redirect(version + '/additional/3g');
    }
    else if (j3 == "yes"){
      res.redirect(version + '/additional/3j');
    }
    else if (a4 == "yes"){
      res.redirect(version + '/additional/4a');
    }
    else if (b4 == "yes"){
      res.redirect(version + '/additional/4b');
    }
    else if (h5 == "yes"){
      res.redirect(version + '/additional/5h');
    }
    else if (b6 == "yes"){
      res.redirect(version + '/additional/6b');
    }
    else if (a7 == "yes"){
      res.redirect(version + '/additional/7a');
    }
    else if (b7 == "yes"){
      res.redirect(version + '/additional/7b');
    }
    else if (a8 == "yes"){
      res.redirect(version + '/additional/8a');
    }
    else if (b8 == "yes"){
      res.redirect(version + '/additional/8b');
    }
    else if (c8 == "yes"){
      res.redirect(version + '/additional/8c');
    }
    else if (a9 == "yes"){
      res.redirect(version + '/additional/9a');
    }
    else if (a13 == "yes"){
      res.redirect(version + '/additional/13a');
    }
    else if (a14 == "yes"){
      res.redirect(version + '/additional/14a');
    }
    else if (b14 == "yes"){
      res.redirect(version + '/additional/14b');
    }
    else if (c14 == "yes"){
      res.redirect(version + '/additional/14c');
    }
    else if (d14 == "yes"){
      res.redirect(version + '/additional/14d');
    }
    else {
      res.redirect(version +'/bespoke');
    }
    //END ADDITIONAL CONDITIONS
  });
}
