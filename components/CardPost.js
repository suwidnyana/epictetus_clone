import InfoPost from "@components/InfoPost"
import Link from "next/link"
export default function CardPost({thumbnail, ...post}) {
    
    return(
        <article>
          <Link href="/detail">
        <a>
          <img src={thumbnail} className="w-full rounded mb-4" />
        </a>
      </Link>
      <InfoPost
        {...post}
      />
    </article>
    )
}