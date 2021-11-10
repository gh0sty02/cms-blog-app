interface PostsInterface {
  author: {
    bio: string;
    name: string;
    id: string;
    photo: {
      url: string;
    };
  };
  categories: [];
  createdAt: string;
  excerpt: string;
  featuredImage: { url: string };
  slug: string;
  title: string;
}

export default PostsInterface;
