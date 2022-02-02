import CardPost from "@components/CardPost";

export default function PostList({ posts }) {
  return (
    <div className="flex -mx-4 flex-wrap mt-6">
      {posts.map((post) => (
        <div key={post.id} className="md:w-4/12 w-full px-4 py-6">
          <CardPost {...post} />
        </div>
      ))}
    </div>
  );
}
