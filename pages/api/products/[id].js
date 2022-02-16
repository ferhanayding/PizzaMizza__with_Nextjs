import Product from "../../../Models/Product";
import dbConnect from "../../../utils/mongo";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  dbConnect();
  if (method === "GET") {
    try {
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  if (method === "POST") {
    // try {
    //   // const newProduct = await Product.create()
    //   //   post  yapıyordun
    //   res.status(201).json(product);
    // } catch (error) {
    //   res.status(500).json(error);
    // }
  }
  if (method === "PUT") {
    // try {
    //   res.status(200).json(product);
    // } catch (error) {
    //   res.status(500).json(error);
    // }
  }
  if (method === "DELETE") {
    // try {
    //   res.status(200);
    // } catch (error) {
    //   res.status(500).json(error);
    // }
  }
}
