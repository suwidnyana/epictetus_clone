import Layout from "@components/Layout";
import Container from "@components/Container";
import CardPost from "@components/CardPost";
import Head from "next/head";
import { useState } from "react";
import SectionHeader from "@components/SectionHeader";

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
        <title>Categories &mdash; Epictetus</title>
      </Head>
      <Container>
        <SectionHeader>{categoryData.name}</SectionHeader>
        <div className="flex -mx-4 flex-wrap mt-6">
          {posts.map((post) => (
            <div key={post.id} className="md:w-4/12 w-full px-4 py-6">
              <CardPost {...post} />
            </div>
          ))}
        </div>
        {/* {!posts.length ? (
                    <div className="text-center py-20">
                        <h2 className="text-6xl">No result</h2>
                        <p className="text-xl mt-4 text-white/60 md:w-6/12 w-full mx-auto">We couldn't find any posts with the keyword 'ewqeqw'. Please try another keyword</p>
                    </div>
                ) : (
                    <div className="flex -mx-4 flex-wrap mt-6">
                        {posts.map(post => (
                            <div key={post.id} className="md:w-4/12 w-full px-4 py-6">
                                <CardPost {...post} />
                            </div>
                        ))}
                    </div>
                )} */}
      </Container>
    </>
  );
}
