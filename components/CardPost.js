import InfoPost from "@components/InfoPost";
import Link from "next/link";

export default function CardPost(props) {
  return (
    <article>
      <Link href={`/${props.slug}`}>
        <a>
          <img
            src={props.thumbnail.name}
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
        authorAvatar={props.author.avatar.name}
        authorName={props.author.name}
        authorJob={props.author.job}
      />
    </article>
  );
}
