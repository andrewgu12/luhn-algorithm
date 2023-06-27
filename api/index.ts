import express from "express";
import cors from "cors";
import { calculateValidCard } from "./validateCreditCard";

const app = express();
const PORT = 3001;

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());

app.post("/credit-card-validate", (req, res) => {
  let status = 200;

  const creditCardNumber = req.body.creditCard;

  if (!creditCardNumber) {
    return res.status(200).send({ validCard: false });
  }

  const isValidCard = calculateValidCard(creditCardNumber);

  return res.status(status).send({ validCard: isValidCard });
});

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
