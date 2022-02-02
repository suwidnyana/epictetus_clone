import { useState } from "react";
import FeaturedPost from "@components/FeaturedPost";
import CardPost from "@components/CardPost";
import mockPosts from "../utils/posts.json";
import Container from "@components/Container";
import Head from "next/head";
import PostList from "@components/PostList";

export async function getServerSideProps() {
  const reqFeatured = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/posts?featured=true"
  );
  const featured = await reqFeatured.json();

  const reqPosts = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/posts?featured_ne=true"
  );
  const posts = await reqPosts.json();

  return {
    props: {
      feature: featured.length > 0 ? featured[0] : false,
      posts,
    },
  };
}

export default function Home({ feature, posts: initialPosts }) {
  const [posts, setPosts] = useState(initialPosts);
  return (
    <>
      <Head>
        <title>Home &mdash; Epictetus</title>
      </Head>
      <Container>
        {feature && <FeaturedPost {...feature} />}
        <PostList posts={posts} />
      </Container>
    </>
  );
}
