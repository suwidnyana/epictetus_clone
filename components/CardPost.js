import InfoPost from "@components/InfoPost";
import Link from "next/link";

export default function CardPost(props) {
  return (
    <article>
      <Link href={props.slug}>
        <a>
          <img
            src={process.env.NEXT_PUBLIC_API_URL + props.thumbnail.url}
            className="rounded-xl w-full mb-4 md:mb-0"
          />
        </a>
      </Link>
      <InfoPost
        slug={props.slug}
        category={props.category.name}
        date={props.published_at}
        title={props.title}
        shortDescription={props.headline}
        authorAvatar={process.env.NEXT_PUBLIC_API_URL + props.author.avatar.url}
        authorName={props.author.name}
        authorJob={props.author.job}
      />
    </article>
  );
}
