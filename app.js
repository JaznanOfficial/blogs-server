const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const colors = require("colors");
require("dotenv").config();
const stripe = require("stripe")(process.env.stripe_secret_key);

app.use(cors());
app.use(express.json());

const usersRoute = require("./v1/Routes/users.route");
const categoriesRoute = require("./v1/Routes/categories.route");
const blogsRoute = require("./v1/Routes/blogs.route");

app.use("/api/v1/users", usersRoute);
app.use("/api/v1/categories", categoriesRoute);
app.use("/api/v1/blogs", blogsRoute);

// stripe server of dream-shop code------------->

app.post("/create-payment-page", async (req, res) => {
    try {
        const { amount, currency, name, quantity } = req.body;
        console.log(quantity);

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
                {
                    price_data: {
                        currency,
                        unit_amount: amount,
                        product_data: {
                            name: "Total Amount",
                        },
                    },
                    quantity: 1,
                },
            ],
            mode: "payment",
            success_url: "https://dream-shop-client.vercel.app/payment-success",
            cancel_url: "https://dream-shop-client.vercel.app/",
        });

        res.send({
            sessionId: session.id,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while creating the payment page" });
    }
});

// stripe server of dream-shop code------------->

app.get("/", (req, res) => {
    try {
        res.send("Welcome to blog server");
    } catch (error) {
        console.log(error.message);
    }
});
app.listen(PORT, () => console.log(`server is successfully running on port ${PORT}!`.white.bold));

exports = app;
