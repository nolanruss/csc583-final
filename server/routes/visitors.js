  const express = require('express'),
        flash = require('req-flash'),
        Visitor = require('../models/visitor')
        

/* apoc require statement must always go after the explicit loading of the 
 * .env file */
require('dotenv').load()
const apoc = require('apoc')

module.exports = (() => {
    'use strict'

    const router = express.Router()
   
    /* Visitor signin API endpoint. */
    router.post('/signin', (req, res) => {
        const newVisitor = new Visitor({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          telephone: req.body.telephone,
          company: req.body.company,
          officialVisit: req.body.officialVisit,
          escortRequired:  req.body.escortRequired,
          escortName: req.body.escortName,
          createdOn: new Date
        })

        Visitor.create(newVisitor, (err) => {
          if (err) {
            if (err.name === 'MongoError' && err.code === 11000) {
              //search error message body for error source = 'email' or 'registrantname'
              if (err.message.search('email') != '-1') {
                res.statusMessage = 'email'
                return res.status(409).send()
              }
            }
            /* Error message not displayed by default, included this to make stack trace 
              * more descriptive. */
            console.log(err.message)
            throw err
          }
          res.status(200).send()
        })
    })

    /* Registrant listing endpoint. */
    router.get('/list/all', (req,res) => {
      Visitor.find({}, function(err, visitors) {
        if (err) throw err
        else {
          const visitorMap = {
            data: {},
            count: {},
          }
          visitorMap.data = visitors
          visitorMap.count = visitors.length
          res.send(visitorMap)        
          console.log(JSON.stringify(visitorMap.data))
          //res.json({visitorMap})
        }
      })
    })

    return router
})()
