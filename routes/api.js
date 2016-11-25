'use strict';
var express = require('express');
var router = express.Router();
var todos = require('../data');

router.post('/create', function(req, res) {
  todos.push({
    text: req.body['new-todo'],
    done: false
  });

  res.render('partials/list', {
    layout: undefined,
    todos: todos
  });
});

router.post('/edit/:id', function(req, res) {
  var id = req.params.id;

  res.render('partials/editTodoForm', {
    layout: undefined,
    todo: todos[id],
    id: id
  });
});

router.post('/toggle/:id', function(req, res) {
  var id = req.params.id;
  todos[id].done = !todos[id].done;

  res.render('partials/todo', {
    layout: undefined,
    content: todos[id],
    id: id
  });
});

router.post('/update/:id', function(req, res) {

  var id = req.params.id;
  todos[id].text = req.body['edited-todo'];

  res.render('partials/todo', {
    layout: undefined,
    content: todos[id],
    id: id
  });
});

router.post('/delete/:id', function(req, res) {
  if (req.body._method !== 'DELETE') {
    return res.status(500);
  }

  delete todos[req.params.id];

  res.set('X-IC-Remove', 'true')
    .status(200)
    .send('');
});

module.exports = router;
