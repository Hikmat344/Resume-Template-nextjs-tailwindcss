import Navbar from '@/Components/Navbar'
import './globals.css'

export const metadata = {
  title: 'Hikmat Ullah',
  description: 'web developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-black'>
      {/* bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 */}
        <Navbar />
        {children}</body>
    </html>
  )
}
