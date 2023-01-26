const path = require("path");

const express = require("express");

const router = express.Router();

const rootDir = require("../util/path");

const products = [];

router.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  // console.log("product-body", req.body);
  products.push({ title: req.body.title });
  console.log("products", products);
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
