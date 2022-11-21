import { Posts, Post } from "./posts";

const typicode = new Posts({
  apiKey: "123456",
});

const post: Post = {
  userId: 12,
  title: "Title ",
  body: "Hello world",
};

typicode.getPostById("12").then((data) => {
  console.log(data);
});
