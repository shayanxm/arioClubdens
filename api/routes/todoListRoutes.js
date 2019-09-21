'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');
  var docList = require('../controllers/docController');
  var factorList = require('../controllers/factorController');
  var productList = require('../controllers/productController');
  var offerList = require('../controllers/offerController');
  // todoList Routes
  app.route('/paitens')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);

app.route('/doctors')
.get(docList.list_all_tasks)
.post(docList.create_a_task);

app.route('/factors')
.get(factorList.list_all_tasks)
.post(factorList.create_a_task);

app.route('/products')
.get(productList.list_all_tasks)
.post(productList.create_a_task);


app.route('/offers')
.get(offerList.list_all_tasks)
.post(offerList.create_a_task);

///


  app.route('/tasks/:paitenId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);

    app.route('/tasks/doctorId')
    .get(docList.read_a_task)
    .put(docList.update_a_task)
    .delete(docList.delete_a_task);

    app.route('/tasks/factorId')
    .get(factorList.read_a_task)
    .put(factorList.update_a_task)
    .delete(factorList.delete_a_task);


    app.route('/tasks/productId')
    .get(productList.read_a_task)
    .put(productList.update_a_task)
    .delete(productList.delete_a_task);


    app.route('/tasks/offerId')
    .get(offerList.read_a_task)
    .put(offerList.update_a_task)
    .delete(offerList.delete_a_task);


};
