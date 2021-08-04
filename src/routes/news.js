const express = require("express");
const newsRouter = express.Router();
const axios = require("axios");

newsRouter.get("", async (req, res) => {
  try {
    const newsAPI = await axios.get("https://raddy.co.uk/wp-json/wp/v2/posts/");
    /// console.log(newsAPI.data);
    res.render("news", { articles: newsAPI.data });
  } catch (error) {
    if (error.response) {
      res.render("news", { articles: null });
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      res.render("news", { articles: null });

      console.log(error.request);
    } else {
      res.render("news", { articles: null });

      console.log("Error", err.message);
    }
  }
});

newsRouter.get("/:id", async (req, res) => {
  let articleID = req.params.id;
  try {
    const newsAPI = await axios.get(
      ` https://raddy.co.uk/wp-json/wp/v2/posts/${articleID}`
    );
    /// console.log(newsAPI.data);
    res.render("newsOne", { articles: newsAPI.data });
  } catch (error) {
    if (error.response) {
      res.render("newsOne", { articles: null });
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      res.render("newsOne", { articles: null });

      console.log(error.request);
    } else {
      res.render("newsOne", { articles: null });

      console.log("Error", err.message);
    }
  }
});

newsRouter.post("", async (req, res) => {
  let articleID = req.params.id;
  try {
    const newsAPI = await axios.get(
      ` https://raddy.co.uk/wp-json/wp/v2/posts?search=`
    );
    /// console.log(newsAPI.data);
    res.render("newsOne", { articles: newsAPI.data });
  } catch (error) {
    if (error.response) {
      res.render("newsOne", { articles: null });
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      res.render("newsOne", { articles: null });

      console.log(error.request);
    } else {
      res.render("newsOne", { articles: null });

      console.log("Error", err.message);
    }
  }
});

module.exports = newsRouter;
