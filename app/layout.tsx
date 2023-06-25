import Sidebar from '@/components/Sidebar';
import './globals.css';
import { Figtree } from 'next/font/google';
import SupabaseProvider from '@/providers/SupabaseProvider';

const font = Figtree({ subsets: ['latin'] });

export const metadata = {
	title: 'Spotify - Next Player: Music for everyone',
	description:
		'Spotify is a digital music service that gives you access to millions of songs.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={font.className}>
				<SupabaseProvider>
					<Sidebar>
						{children}
					</Sidebar>
				</SupabaseProvider>
			</body>
		</html>
	);
}
