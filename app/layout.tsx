import Navbar from '@/components/Navbar'
import Providers from '@/components/Providers'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

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
			<Providers>
				<body
					className={cn(
						'min-h-screen font-sans antialiased grainy',
						inter.className
					)}>
					<Navbar />
					{children}
				</body>
			</Providers>
		</html>
	)
}
