"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Posts = void 0;
const base_1 = require("./base");
class Posts extends base_1.Base {
    getPostById(id) {
        return this.invoke(`/posts/${id}`);
    }
    getAllPosts() {
        return this.invoke(`/posts`);
    }
    createPost(post) {
        return this.invoke(`/posts`, {
            method: "POST",
            body: JSON.stringify(post),
        });
    }
}
exports.Posts = Posts;
