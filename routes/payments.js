const express = require("express");

const router = express.Router();

const cors = require('cors');

router.use(cors());


require('dotenv').config();
const stripe = require('stripe')('sk_test_51MedOvFmBl6qtJ7QWKxeComTsvG0CLXpy9Yy1RlC9z4LLZwm8Mk2whg9o39X9GuHG6AXG2qLLk5xWt7BcaTziFeX000uYFnKd3');


router.post('/', async (req, res) => {
    const { amount } = req.body;
    // Access(res);

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'usd',
        });

        return res.status(200).send(paymentIntent.client_secret);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
});

module.exports = router;
