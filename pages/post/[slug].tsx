import React from "react";

import { getPosts, getPostDetails } from "../../services/index";
import IPostDetails from "../../interfaces/IPostDetails";

import {
  PostDetail,
  Categories,
  PostWidget,
  Author,
  Comments,
  CommentsForm,
  Loader,
} from "../../components";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";

interface IPost {
  post: IPostDetails;
}

const PostDetails: React.FC<IPost> = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          {<PostDetail post={post} />}
          {post.author && <Author author={post.author} />}
          {post.slug && <CommentsForm slug={post.slug} />}
          {post.slug && <Comments slug={post.slug} />}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            {post.slug && (
              <PostWidget
                slug={post.slug}
                categories={post.categories.map((category) => category.slug)}
              />
            )}

            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await getPostDetails(params.slug);

  return {
    props: { post: data },
  };
};

export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
