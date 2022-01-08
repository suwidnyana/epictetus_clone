import Link from 'next/link'
import InfoPost from '@components/InfoPost'
export default function FeaturedPost() {
    return(
        <article>
            <div className="flex -mx-4 lg:items-center items-start flex-wrap">
                <div className="px-4 lg:w-8/12 md:w-7/12 w-full">
                    <img src="/featured-thumbnail.png"  className="rounded-xl w-full mb-4 md:mb-0" alt="" />
                </div>
                <div className="lg:w-4/12 md:w-5/12 px-4 w-full">
                  <InfoPost
                    category="UI Design"
                    date="Januari, 6 2021"
                    title="Understanding color theory: the color wheel and finding complementary colors"
                    shortDescription="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum."
                    authorAvatar="/author-1.png"
                    authorName="Leslie Alexander"
                    authorJob="UI Designer"
                  />
                </div>
            </div>
            <hr className="border-white/10 mt-10 md:hidden"/>
        </article>
    )
}