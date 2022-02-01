import PostMetaTitle from "@components/PostMetaTitle"
import PostAuthor from "@components/PostAuthor"
import { FormatDate } from 'utils/date'

export default function InfoPost({
    category,
    date,
    title,
    shortDescription,
    authorAvatar,
    authorName,
    authorJob,
    slug }) {
    return (
        <>
            <PostMetaTitle
                category={category}
                date={FormatDate(date)}
                title={title}
                slug={slug}
            />
            <p className="text-white/60 mt-5 w-10/12">{shortDescription}</p>
            <PostAuthor
                authorName={authorName}
                authorJob={authorJob}
                authorAvatar={authorAvatar}
            />
        </>
    )
}