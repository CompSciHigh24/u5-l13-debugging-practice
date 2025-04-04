// Have both terminals set up, make sure to make the server public!

// Add your base URL that will be used to build the paths
const baseURL = "...";

// Get all menu items
async function getAllMenuItems() {
  const res = await fetch(baseURL + 'menus');
  const data = await res.json();
  console.log("All Menu Items:", data);
}
// uncomment to test GET route
// getAllMenuItems();


// Add a new menu item
async function addNewItem(name, cost, rating, review) {
  const res = await fetch(baseURL + '/menu/new', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, cost, rating, review }),
  });
  console.log("New Item Added:", res);
}

// uncomment to test POST route
// addNewItem("Fries", 3.5, 4, "Crispy and golden");


// Update an item by name (only cost in this example)
async function updateItemCost(name, newCost) {
  const res = await fetch(baseURL + '/menu/update/' + name, {
    method: "UPDATE",
    headers: { "Content-Type": "application/json" },
    body: { cost: newCost }
  });
  const data = await res.json();
  console.log("Updated Item:", data);
}

// uncomment to test PATCH route
// updateItemCost("Fries", 2.99);


// Delete an item by name
function deleteItem(name) {
  const res = await fetch(baseURL + '/delete/' + name, {
    method: "DELETE",
  });
  const data = await res.json();
  console.log("Deleted Item:", data);
}

// uncomment to test DELETE route
// deleteItem("Fries");
