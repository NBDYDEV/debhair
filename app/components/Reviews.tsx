import { getReviewsData } from '../lib/api'
import { resolveReviewsImageUrl } from '../lib/url'
import ReviewsClient from './ReviewsClient'

export default async function Reviews() {
    const reviews = await getReviewsData()
    const newData = reviews?.map((step) => {
        return {
            ...step,
            avatar: {
                id: step.avatar.id,
                name: step.avatar.name,
                width: step.avatar.width,
                height: step.avatar.height,
                url: resolveReviewsImageUrl(step.avatar.url) ?? '',
                formats: step.avatar.formats,
            }
        }
    })

    return (
        <section className="bg-gradient-to-t from-background via-primary/30 to-background py-16 md:py-24 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <ReviewsClient reviews={newData || []} />
            </div>
        </section>
    )
}