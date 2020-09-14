const express = require("express");
const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
  burger.all(function (data) {
    console.log("This is data if it exists", data);
    const hbsObject = {
      burgers: data,
    };
    console.log("This is the hbsObject if it works", hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", (req, res) => {
  burger.create(["burger_name"], [req.body.burger_name], function (result) {
    console.log("from create", req.body);
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers", (req, res) => {
  var condition = "id = " + req.body.id;

  console.log("condition", condition);

  burger.update(
    {
      devour_it: req.body.devour_it,
    },
    condition,
    function (result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});
router.delete("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.body.id;

  burger.delete(condition, function (result) {
    console.log(result);
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
