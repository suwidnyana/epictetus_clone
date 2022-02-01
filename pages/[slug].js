import Layout from "@components/Layout";
import Container from "@components/Container";
import PostMetaTitle from "@components/PostMetaTitle";
import PostAuthor from "@components/PostAuthor";
import Head from "next/head";

export async function getServerSideProps({ params: { slug } }) {

  const reqDetail = await fetch(process.env.NEXT_PUBLIC_API_URL + '/posts?slug=' + slug);
  const single = await reqDetail.json()

  if (!single.length)
    return {
      notFound: true
    }

  return {
    props: {
      single: single.length > 0 ? single[0] : {}
    },
  };

}

export default function Detail({
  single: {
    title,
    published_at,
    thumbnail,
    category: {
      name: categoryName
    },
    headline,
    content,
    slug,
    author: {
      name: authorName,
      job: authorJob,
      avatar: {
        name: avatarName
      }
    } } }) {
  console.log(thumbnail.name)

  return (
    <Layout>
      <Head>
        <title>{title} &mdash; Epictetus</title>
      </Head>
      <Container>
        <div className="md:w-6/12 w-full mx-auto flex items-center flex-col">
          <PostMetaTitle
            slug={slug}
            category={categoryName}
            date={published_at}
            title={title}
            center
          />
          <PostAuthor
            authorName={authorName}
            authorJob={authorJob}
            authorAvatar={avatarName}
          />
        </div>
        <div className="md:w-10/12 w-full mx-auto my-10">
          <img src={thumbnail.name} className="w-full rounded-lg" />
        </div>
        <div className="md:w-8/12 w-full mx-auto leading-relaxed">
          <p className="text-xl mb-4">
            {headline}
          </p>
          <p className="mb-4">{content}</p>
        </div>
      </Container>
    </Layout>
  )
}