import Container from "@components/Container";
import Head from "next/head";
import SectionHeader from "@components/SectionHeader";
import PostList from "@components/PostList";

export async function getServerSideProps({ params: { category },req,res }) {
  res.setHeader("Cache-Control", `s-maxage=60, stale-while-revalidate`);

  const reqCategory = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/categories?slug=" + category
  );

  const categoryData = await reqCategory.json();

  const reqPosts = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/posts?_where[category.slug]=" + category
  );

  const posts = await reqPosts.json();

  return {
    props: {
      categoryData: categoryData.length > 0 ? categoryData[0] : {},
      posts,
    },
  };
}

export default function Posts({ posts, categoryData }) {
  console.log(posts);
 

  return (
    <>
      <Head>
        <title>{categoryData.name} &mdash; Epictetus</title>
      </Head>
      <Container>
        <SectionHeader>{categoryData.name}</SectionHeader>
        <PostList
          posts={posts}
          noResultTitle="No Posts"
          noResultDescription="No posts in this category"
        />
      </Container>
    </>
  );
}
