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


//APPROVE LICENCE





//ADDITIONAL CONDITIONS

//additional conditions page
//GET VALUES FROM EACH Passed in form field
//chack against if else which is true in order
//set a 'no' value as hidden form field in each rendered page


router.post('/conditions', function(req, res) {
 var a1 = req.session.data['1a'];
 var a2 = req.session.data['2a'];


 if(typeof a1 !== 'undefined'){
   if (a1 == "yes"){
    res.redirect(version +'/additional/1a');
    }
  }

  else if(typeof a2 !== 'undefined'){
      if (a2 == "yes"){
      delete(a2);
      res.redirect(version + '/additional/2a');
  }
  else {

  }
}

else if(typeof a3 !== 'undefined'){
     if (a3 == "yes"){
      res.redirect(version + '/additional/3a');
    }
}

else if(typeof c3 !== 'undefined'){
     if (c3 == "yes"){
      res.redirect(version + '/additional/3c');
    }
}
else if(typeof e3 !== 'undefined'){
     if (e3 == "yes"){
      res.redirect(version + '/additional/3e');
    }
}
else if(typeof f3 !== 'undefined'){
     if (f3 == "yes"){
      res.redirect(version + '/additional/3f');
    }
}
else if(typeof g3 !== 'undefined'){
     if (g3 == "yes"){
      res.redirect(version + '/additional/3g');
    }
}
else if(typeof j3 !== 'undefined'){
     if (j3 == "yes"){
      res.redirect(version + '/additional/3j');
    }
}
else if(typeof a4 !== 'undefined'){
     if (a4 == "yes"){
      res.redirect(version + '/additional/4a');
    }
}
else if(typeof b4 !== 'undefined'){
     if (b4 == "yes"){
      res.redirect(version + '/additional/4b');
    }
}
else if(typeof h5 !== 'undefined'){
     if (h5 == "yes"){
      res.redirect(version + '/additional/5h');
    }
}
else if(typeof b6 !== 'undefined'){
     if (b6 == "yes"){
      res.redirect(version + '/additional/6b');
    }
}
else if(typeof a7 !== 'undefined'){
     if (a7 == "yes"){
      res.redirect(version + '/additional/7a');
    }
}
else if(typeof b7 !== 'undefined'){
     if (b7 == "yes"){
      res.redirect(version + '/additional/7b');
    }
}
else if(typeof a8 !== 'undefined'){
     if (a8 == "yes"){
      res.redirect(version + '/additional/8a');
    }
}
else if(typeof b8 !== 'undefined'){
     if (b8 == "yes"){
      res.redirect(version + '/additional/8b');
    }
}
else if(typeof c8 !== 'undefined'){
     if (c8 == "yes"){
      res.redirect(version + '/additional/8c');
    }
}
else if(typeof a9 !== 'undefined'){
     if (a9 == "yes"){
      res.redirect(version + '/additional/9a');
    }
}
else if(typeof a13 !== 'undefined'){
     if (a13 == "yes"){
      res.redirect(version + '/additional/13a');
    }
}
else if(typeof a14 !== 'undefined'){
     if (a14 == "yes"){
      res.redirect(version + '/additional/14a');
    }
}
else if(typeof b14 !== 'undefined'){
     if (b14 == "yes"){
      res.redirect(version + '/additional/14b');
    }
}
else if(typeof c14 !== 'undefined'){
     if (c14 == "yes"){
      res.redirect(version + '/additional/14c');
    }
}
else if(typeof d14 !== 'undefined'){
     if (d14 == "yes"){
      res.redirect(version + '/additional/14d');
    }
}

  else {
    res.redirect(version +'/check-your-answers');

  }

});
//1 set of routing then passed hidden foem var setting to no






}
