function Item(object){
  this.task = object.task;
  Item.all.push(this);
}

Item.all = [{
  task: "laundry"
},{
  task: "dishes"
}
];



module.exports = Item;
