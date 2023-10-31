import type { Metadata } from 'next';
import { GeistSans } from "geist/font";
import { Nav } from '@/ui/nav/Nav';
import { Container } from '@/ui/Container';
import { APP_NAME } from '@/constants';
import './globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={GeistSans.className}>
        <div className='h-full'>

        <header className="py-8">
          <Container>
            <Nav />
          </Container>
        </header>
        <main className='container mx-auto'>
          <Container>{children}</Container>
        </main>
        <footer className='container mx-auto my-16 sticky-bottom-0'>
          <Container>
            <p className='text-center text-neutral-400'>
              &copy; {new Date().getFullYear()} {APP_NAME}
            </p>
          </Container>
        </footer>
        </div>
      </body>
    </html>
  );
}
