const express = require("express");
const recipesRouter = require("./recipes/recipe-router");
const server = express();

server.use(express.json());

server.use("/api/recipes", recipesRouter);

module.exports = server;
