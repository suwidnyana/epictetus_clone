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
    authorJob }) {
    return (
        <>
            <PostMetaTitle
                category={category}
                date={FormatDate(date)}
                title={title}
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