import { BlogPosts } from 'app/components/posts'
import { MeetingBackgroundsCard } from 'app/components/meeting-backgrounds-card'
import Image from 'next/image'
export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Fun Side of Coldran
      </h1>
      <div className="my-8">
        <Image src="/sun.svg" alt="Coldran" draggable={false} className="-mb-4" width={40} height={40} />
        <MeetingBackgroundsCard />
      </div>


    </section>
  )
}
