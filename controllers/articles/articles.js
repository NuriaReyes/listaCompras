const express = require('express')
const Article = require('../../models/articles.model')

function index(req, res, next){
  Article.find({}, (err, result) => {
    res.render('articles/index',{articles:result});
  })
}

function create(req, res, next) {
  let article = new Article({
    name: "Doritos",
    price: 15.99,
    quantity: 2
  });
  article.save( err => {
    if(err){
      res.send('error!!!')
    } else {
      res.send('article was registered!!')
    }
  });
}

module.exports ={
  index,
  create
};
