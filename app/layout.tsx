import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Quill',
	description: 'SaaS App to chat with your pdfs.',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body
				className={cn(
					'min-h-screen font-sans antialiased grainy',
					inter.className
				)}>
					<Navbar />
				{children}
			</body>
		</html>
	)
}
