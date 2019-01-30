import express from 'express'
import sqlite3 from 'sqlite3'

const { Router } = require('express')

const db = new sqlite3.Database(':memory:')

db.serialize(function () {
  db.run('CREATE TABLE lorem (info TEXT)')
  var stmt = db.prepare('INSERT INTO lorem VALUES (?)')

  for (var i = 0; i < 10; i++) {
    stmt.run('Ipsum ' + i)
  }

  stmt.finalize()

  db.each('SELECT rowid AS id, info FROM lorem', function (err, row) {
    console.log(row.id + ': ' + row.info)
  })
const router = Router()

router.use(express.json())


router.get('/db', function(req, res, next) {
    res.json({foo: 1})
})

router.get('/db/:id', function(req, res, next) {
  let id = req.params.id
  let sql = `SELECT rowid AS id, info FROM lorem where rowid = ${id}`
  console.log(sql)
  db.get(sql, function (err, row) {
    console.log(row.id + ': ' + row.info)
    res.json(row)
  })
})

module.exports = router
