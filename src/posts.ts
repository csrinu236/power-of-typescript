import { Base } from "./base";

export interface Post {
  id?: number;
  title: string;
  body: string;
  userId: number;
}

export class Posts extends Base {
  // here, we are not calling constructor,
  // so no super invocation needed.

  getPostById(id: string): Promise<Post> {
    return this.invoke(`/posts/${id}`);
  }

  getAllPosts(): Promise<Post[]> {
    return this.invoke(`/posts`);
  }

  createPost(post: Post) {
    return this.invoke(`/posts`, {
      method: "POST",
      body: JSON.stringify(post),
    });
  }
}
