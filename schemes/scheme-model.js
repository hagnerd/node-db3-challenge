const db = require("../db");

function find() {
  return db.select("*").from("schemes");
}

function findById(id) {
  return db
    .select("*")
    .from("schemes")
    .where({ id });
}

function findSteps(id) {
  return db
    .from("schemes")
    .innerJoin("steps", "schemes.id", "steps.scheme_id")
    .where({ scheme_id: id });
}

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
