import Container from "@components/Container";
import Head from "next/head";
import SectionHeader from "@components/SectionHeader";
import PostList from "@components/PostList";

export async function getServerSideProps({ params: { category } }) {
  const reqCategory = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/categories?slug=" + category
  );

  const categoryData = await reqCategory.json();

  const reqPosts = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/posts?_where[category.slug]=" + category
  );

  const posts = await reqPosts.json();

  if (!posts.length)
    return {
      notFound: true,
    };

  return {
    props: {
      posts,
      categoryData: categoryData.length > 0 ? categoryData[0] : {},
    },
  };
}

export default function Posts({ posts, categoryData }) {
  console.log(categoryData);

  return (
    <>
      <Head>
        <title>{categoryData.name} &mdash; Epictetus</title>
      </Head>
      <Container>
        <SectionHeader>{categoryData.name}</SectionHeader>
        <PostList posts={posts} />
      </Container>
    </>
  );
}
