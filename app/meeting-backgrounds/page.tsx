import { ImageGallery } from '../components/image-gallery'
import { ImageCount } from 'app/components/image-count'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Meeting Backgrounds',
  description: 'Fun virtual meeting backgrounds for your video calls and meetings. Download high-quality backgrounds for free.',
  keywords: ['meeting backgrounds', 'virtual backgrounds', 'video call backgrounds', 'fun backgrounds', 'funny zoom gmeet backgrounds'],
}

export default function MeetingBackgroundsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-neutral-900 mb-4">
          Meeting Backgrounds
        </h1>
        <p className="text-lg text-neutral-600 mb-2">
          Funny backgrounds for your video calls specifically with your Customers.
        </p>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-neutral-900">
            Available Backgrounds
          </h2>
          <ImageCount />
        </div>
      </div>

      <ImageGallery />

      <div className="mt-12 pl-3 p-2 bg-neutral-50 border border-neutral-200 rounded-lg">
        <h3 className="text-sm font-semibold text-neutral-900">
          All content © original owners.
        </h3>
      </div>
    </div>
  )
}
