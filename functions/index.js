const functions = require("firebase-functions");

const express = require('express');
const app = express();
const cors = require('cors');

const stripe = require('stripe')('sk_test_51IEov1HcHUE1yY9LE4NXdClLonro3VjNESdFRMdvE84xAQWHBpSqTd0OMxR7RG4vAIZd4PesnsRfcIMKGdpwtZTa00ZciI67FB');

app.use(cors({origin: true}));

app.use(express.json());

app.post('/payments/create',async (req,res) =>{
    const total = req.query.total;
    console.log('Payment Request Recieved BOOM!!! for this amount >>>', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'inr'
    });
    res.status(201).send({
        clinetSecret: paymentIntent.client_secret,
    })
})

exports.api = functions.https.onRequest(app);

//http://localhost:5001/challenge-e20f9/us-central1/api