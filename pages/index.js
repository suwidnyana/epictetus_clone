import { useState } from 'react';
import FeaturedPost from '@components/FeaturedPost';
import CardPost from '@components/CardPost';
import mockPosts from '../utils/posts.json'
import Container from '@components/Container';
import Head from 'next/head';

export async function getServerSideProps() {

  const reqFeatured = await fetch(process.env.NEXT_PUBLIC_API_URL + '/posts?featured=true');
  const featured = await reqFeatured.json()

  const reqPosts = await fetch(process.env.NEXT_PUBLIC_API_URL + '/posts?featured_ne=true');
  const posts = await reqPosts.json()

  return {
    props: {
      feature: featured.length > 0 ? featured[0] : false,
      posts
    }
  }
}

export default function Home({ feature, posts: initialPosts, categories }) {
  const [posts, setPosts] = useState(initialPosts);
  console.log(categories)
  return (
    <>
      <Head>
        <title>Home &mdash; Epictetus</title>
      </Head>
      <Container>
        {feature && <FeaturedPost {...feature} />}
        <div className="flex -mx-4 flex-wrap mt-6">
          {posts.map(post => (
            <div key={post.id} className="md:w-4/12 w-full px-4 py-6">
              <CardPost {...post} />
            </div>
          ))}
        </div>
      </Container>
    </>
  )
}
