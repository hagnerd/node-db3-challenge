const db = require("../db");

function find() {
  return db.select("*").from("schemes");
}

function findById(id) {}

function findSteps(id) {}

function add(scheme) {}

function update(changes, id) {}

function remove(id) {}

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};
