import { GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import { getPosts } from "../services/index";
import { Categories, PostCard, PostWidget } from "../components/index";
import PostsInterface from "../interfaces/Post";

interface postsArray {
  posts: [{ cursor: string; node: PostsInterface }];
}

const Home: React.FC<postsArray> = ({ posts }: postsArray) => (
  <div className="container mx-auto px-10 mb-8 ">
    <Head>
      <title>CMS Blog</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-8 col-span-1">
        {posts.map((post) => (
          <PostCard key={Math.random()} post={post.node} />
        ))}
      </div>
      <div className="lg:col-span-4 col-span-1">
        <div className="lg:sticky relative top-8">
          <PostWidget categories={[]} slug={""} />
          <Categories />
        </div>
      </div>
    </div>
  </div>
);

// export async function getStaticProps(): GetStaticProps {
//
// }
export const getStaticProps: GetStaticProps = async () => {
  const posts: [{}] = await getPosts();

  return {
    props: { posts },
  };
};

export default Home;
