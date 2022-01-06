import Layout from "@components/Layout";
import Container from "@components/Container";
import CardPost from "@components/CardPost";
import mockpost from '../utils/posts.json'
import Head from "next/head";
import { useState } from "react";
export default function Posts() {
    const [posts, setPosts] = useState(mockpost)

    return (
        <Layout>
            <Container>
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