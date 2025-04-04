// Task 1: Debug Server Set up, Models, and Schema

const app = express();

pp.use(express.json());

app.use((req, res, next) => {
    console.log(req.method + req.url)
    next()
})

const menuSchema = new mongoose.schema({
  name: { type: String, require: true },
  cost: { type: Number },
  rating: { type: Number, default: 0 },
  review: { type: string },
});

const Menu = mongoose.Model("Menu", menu, "Menus");

// Task 2: Debug GET route

/*
app.get("/menu", (req, res) => {
  const allItems = await menu.find({});
  res.json(allItems);
});
*/

// Go to script.js for Task 3, verify both work before moving on!


// Task 4: Debug POST route

/*
app.post("/menu/new", async (req, res) => {
  const newItem = await Menu({
    name: req.body.name,
    cost: req.body.cost,
    rating: req.body.rating,
    review: req.body.review,
  })
  res.json(newItem);
});
*/

// Go to script.js for Task 5, verify both work before moving on!

// Task 6: Debug PATCH route

/*
app.update("/menu/update/:name", async (req, res) => {
  const updatedItem = await Menu.findOneAndUpdate(
    { name: req.params.title },
    { cost: res.body.cost },
    { new: true }
  );
  res.json(updatedItem);
});
*/

// Go to script.js for Task 7, verify both work before moving on!

// Task 8: Debug DELETE route

/*
app.delete("/menu/delete/:name", async (req, res) => {
  const deletedItem = await Menu.findOne({
    name: req.params.name,
  });
  res.json(deletedItem);
});
*/

// Go to script.js for the final Task #9!

// No bugs below! Leave it alone!
async function startServer() {
    await mongoose.connect(
      "mongodb+srv://SE12:CSH2025@cluster12.3ffmh.mongodb.net/resturants?retryWrites=true&w=majority&appName=Cluster12"
    );
    app.listen(3000, () => {
      console.log("Server Starting");
    });
}
  
  startServer();
