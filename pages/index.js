import { useState } from 'react';
import FeaturedPost from '@components/FeaturedPost';
import CardPost from '@components/CardPost';
import mockPosts from '../utils/posts.json'
import Layout from '@components/Layout';
import Container from '@components/Container';
import Head from 'next/head';

export async function getServerSideProps() {

  const reqFeatured = await fetch(process.env.NEXT_PUBLIC_API_URL + '/posts');

  let featured = await reqFeatured.json()


  if (featured.length < 1) {
    featured = {}
  }

  return {
    props: {
      feature: featured[0]
    }
  }
}

export default function Home({ feature }) {
  const [posts, setPosts] = useState(mockPosts);

  return (
    <Layout>
      <Head>
        <title>Home &mdash; Epictetus</title>
      </Head>
      <Container>
        <FeaturedPost {...feature} />
        <div className="flex -mx-4 flex-wrap mt-6">
          {posts.map(post => (
            <div key={post.id} className="md:w-4/12 w-full px-4 py-6">
              <CardPost {...post} />
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  )
}
