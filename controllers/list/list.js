const express = require('express')
const List = require('../../models/listObj.model')

function index(req, res, next){
  List.find({}, (err, result) => {
    res.render('list/index',{list:result});
  })
}

function create(req, res, next) {
  let list = new List(
    {name: "Bolsas de arroz", quantity: 2}
    {name: "Queso", quantity: 1}
    {name: "Yogurts bebibles", quantity: 5}
  );
  list.save( err => {
    if(err){
      res.send('error!!!')
    } else {
      res.send('list was created!!')
    }
  });
}

module.exports ={
  index,
  create
};
