const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)

exports.addNBIoT = functions
  .https
  .onRequest((req, res) => {

    let name = req.body.name
    let lat = req.body.lat
    let lng = req.body.lng
    let unix = req.body.unix

    if (req.get('content-type') === 'application/json') {
      return admin
        .database()
        .ref('/' + name)
        .set({
          name: name,
          lat: lat,
          lng: lng,
          unix: unix
        })
        .then(() => {
          res.status(200).send('add nb-iot success.');
        })
    } else { res.status(400).send('error.'); }

  })