import Link from 'next/link'
import Image from 'next/image'

export function MeetingBackgroundsCard() {
  return (
    <Link 
      href="/meeting-backgrounds"
      className="block group"
    >
      <div className="bg-white border border-neutral-200 rounded-lg p-6 hover:border-neutral-300 transition-shadow max-w-sm">
        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-neutral-900 group-hover:text-neutral-600 transition-colors">
              Meeting Backgrounds
            </h3>
            <p className="text-neutral-600 mt-1">
              Professional backgrounds for your video calls
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}
