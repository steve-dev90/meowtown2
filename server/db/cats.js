const defaultConn = require('./connection')

const getCats = (testConn) => {
  const db = testConn || defaultConn
  return db('cats')
    .select()
}

const getCatById = (id, testConn) => {
  const db = testConn || defaultConn
  return db('cats')
    .select()
    .where('id',id)
}

const newCat = (cat, testConn) => {
  const db = testConn || defaultConn
  return db('cats')
    .insert(cat)
}

const updateCat = (cat, id, testConn) => {
  const db = testConn || defaultConn
  return db('cats')
    .where('id', id)
    .update(cat)
}

module.exports = {
  getCats,
  getCatById,
  newCat,
  updateCat
}
