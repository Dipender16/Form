const expressAsyncHandler = require("express-async-handler");
const collectionSchemaRef = require("../models/model");

const getData = expressAsyncHandler(async (req, res) => {
  const blogs = await collectionSchemaRef.find();
  res.status(200).json(blogs);
});

const addData = expressAsyncHandler(async (req, res) => {
  const { name, email, tel, age, country } = req.body;
  const newBlog = await collectionSchemaRef.create({
    name,
    email,
    tel,
    age,
    country,
  });
  res.status(201).json({ data: newBlog, message: "data added" });
});

module.exports = {
  getData,
  addData
};
