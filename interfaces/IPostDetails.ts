interface IPostDetails {
  title: string;
  excerpt: string;
  featuredImage: { url: string };
  author: {
    name: string;
    bio: string;
    photo: {
      url: string;
    };
  };
  createdAt: string;
  slug: string;
  content: {
    raw: {
      children: {};
    };
  };
  categories: {
    name: string;
    slug: string;
  };
}

export default IPostDetails;
