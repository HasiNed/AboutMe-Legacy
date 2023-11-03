import '@/styles/globals.css'

export const metadata = {
  title: 'About Yunqin Zhu',
  icons: {
    icon: `${process.env.NEXT_PUBLIC_BASE_PATH}/favicon.ico`,
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
