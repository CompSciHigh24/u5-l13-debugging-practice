const express = require("express");
const mongoose = require("mongoose");

const app = express();

pp.use(express.json());

app.use((req, res, next) => {
    console.log(req.method + req.url)
    next()
})

const menuSchema = new mongoose.schema({
  name: { type: String, required: true },
  cost: { type: Number },
  rating: { type: Number, default: 0 },
  review: { type: String },
});

const Menu = mongoose.Model("Menu", menuschema, "Menus");

app.get("/menu", (req, res) => {
  const allItems = await menu.find({});
  res.json(allItems);
});

app.post("/menu/new", async (req, res) => {
  const newItem = await Menu({
    name: req.body.name,
    cost: req.body.cost,
    rating: req.body.rating,
    review: req.body.review,
  })
  res.json(newItem);
});

app.update("/menu/update/:name", async (req, res) => {
  const updatedItem = await Menu.findOneAndUpdate(
    { name: req.params.title },
    { cost: res.body.cost },
    { new: true }
  );
  res.json(updatedItem);
});

app.delete("/menu/delete/:name", async (req, res) => {
  const deletedItem = await Menu.findOne({
    name: req.params.name,
  });
  res.json(deletedItem);
});


async function startServer() {
    await mongoose.connect(
      "mongodb+srv://SE12:CSH2025@cluster12.3ffmh.mongodb.net/resturants?retryWrites=true&w=majority&appName=Cluster12"
    );
    app.listen(3000, () => {
      console.log("Server Starting");
    });
  }
  
  startServer();
