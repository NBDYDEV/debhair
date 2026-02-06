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
            },
        }
    })

    return (
        <section className="bg-gradient-to-t from-background via-primary/30 to-background py-16 md:py-20 lg:py-24 overflow-hidden">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ReviewsClient reviews={newData || []} />
            </div>
        </section>
    )
}
