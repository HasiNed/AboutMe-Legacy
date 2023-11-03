import styles from '@/styles/demo.module.css'

import { Metadata } from 'next'
import Image from 'next/image'

const all_demo: Record<
  string,
  {
    title: string
    images: string[]
  }
> = {
  gl_demo: {
    title: 'OpenGL Demo',
    images: ['/aboutme/assets/gl_demo1.gif', '/aboutme/assets/gl_demo2.gif'],
  },
  reddit_demo: {
    title: 'Reddit Demo',
    images: ['/aboutme/assets/reddit_demo.gif'],
  },
  sizerec_demo: {
    title: 'ML Project Demo',
    images: ['/aboutme/assets/sizerec_demo.svg'],
  },
}

export async function generateMetadata({
  params,
}: {
  params: { demo_id: string }
}): Promise<Metadata> {
  const demo = all_demo[params.demo_id]

  return {
    title: `About Yunqin Zhu - ${demo.title}`,
  }
}

export async function generateStaticParams() {
  return Object.keys(all_demo).map((demo_id) => ({
    demo_id: demo_id,
  }))
}

export default function DemoPage({ params }: { params: { demo_id: string } }) {
  const demo = all_demo[params.demo_id]

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{demo.title}</h1>
      {demo.images.map((image) => (
        <Image
          className={styles.image}
          src={image}
          alt=""
          width={0}
          height={0}
        />
      ))}
    </main>
  )
}
