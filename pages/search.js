import Container from "@components/Container";
import Head from "next/head";
import SectionHeader from "@components/SectionHeader";
import PostList from "@components/PostList";

export async function getServerSideProps({ query: { q } }) {
  const reqPosts = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/posts?title_contains=" + q
  );

  const posts = await reqPosts.json();

  return {
    props: {
      posts,
      q,
    },
  };
}

export default function Search({ posts, q }) {
  return (
    <>
      <Head>
        <title>Search &mdash; Epictetus</title>
      </Head>
      <Container>
        <SectionHeader>Search: {q}</SectionHeader>
        <PostList posts={posts} />
      </Container>
    </>
  );
}
