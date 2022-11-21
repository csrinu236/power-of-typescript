"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const posts_1 = require("./posts");
const typicode = new posts_1.Posts({
    apiKey: "123456",
});
const post = {
    userId: 12,
    title: "Title ",
    body: "Hello world",
};
typicode.getPostById("12").then((data) => {
    console.log(data);
});
