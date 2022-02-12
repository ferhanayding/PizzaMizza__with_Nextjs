import dbConnect from "../../../utils/mongo";
import Product from "../../../Models/Product";

export default async function handler(req, res) {
  const { method } = req;
  dbConnect();
  //   console.log(req);
  if (method === "GET") {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  if (method === "POST") {
    try {
      const newPizza = await Product.create(req.body);
      res.status(201).json(newPizza);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
