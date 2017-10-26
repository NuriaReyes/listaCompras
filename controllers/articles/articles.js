const express = require('express')
const Market = require('../../models/markets.model')

function index(req, res, next){
  User.find({}, (err, result) => {
    res.render('markets/index',{markets:result});
  })
}

function create(req, res, next) {
  let market = new Market({
    name: "Alsuper",
    address: "Paseo de las Facultades s/n, Quintas San Sebastian, Quintas Sebastián, 31125 Chihuahua, Chih.",
    webSite: "http://www.alsuper.com/",
    logo: "https://cdn0.talenteca.com/company-images/TK_COMPANY_LOGO-2016_03_15_04_32_30-83969429312688335671.png"
  });
  market.save( err => {
    if(err){
      res.send('error!!!')
    } else {
      res.send('market was registered!!')
    }
  });
}

module.exports ={
  index,
  create
};
