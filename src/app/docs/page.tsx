import Image from 'next/image';
import Link from 'next/link';
import { Composability } from './snippets/composability';
import styles from './docs.module.css';
import { Rsc1 } from './snippets/rsc-1';
import { Rsc2 } from './snippets/rsc-2';
import { Rsc3 } from './snippets/rsc-3';

export default function DocsPage() {
  return (
    <div className={styles.stack}>
      <h1>React Server Components: What & Why</h1>
      <div className='flex flex-row-reverse gap-16'>
        <div className='flex-0 w-1/4'>
          <nav className='sticky top-16 p-4 border border-neutral-700 rounded'>
            <ul className='flex flex-col gap-4'>
              <li>
                <a href='#ressources' className='block'>
                  Ressources
                </a>
              </li>
              <li>
                <a href='#a-client-side-react-app' className='block'>
                  A client-sie React App
                </a>
                <ul className='my-2 flex flex-col gap-2 text-sm'>
                  <li>
                    <a href='#a-client-side-react-app-problems' className='p-4'>
                      Problems
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href='#ssr' className='block'>
                  Server side rendering (SSR)
                </a>
                <ul className='my-2 flex flex-col gap-2 text-sm'>
                  <li>
                    <a href='#ssr-benefits' className='p-4'>
                      Benefits
                    </a>
                  </li>
                  <li>
                    <a href='#ssr-problems' className='p-4'>
                      Problems
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href='#rsc' className='block'>
                  React Server Components (RSC)
                </a>
                <ul className='my-2 flex flex-col gap-2 text-sm'>
                  <li>
                    <a href='#rsc-why' className='p-4'>
                      Why?
                    </a>
                  </li>
                  <li>
                    <a href='#rsc-new-paradigm' className='p-4'>
                      A new paradigm
                    </a>
                  </li>
                  <li>
                    <a href='#rsc-what-are-rsc' className='p-4'>
                      What are server components?
                    </a>
                  </li>
                  <li>
                    <a href='#rsc-how-does-it-work' className='p-4'>
                      How does it work?
                    </a>
                  </li>
                  <li>
                    <a href='#rsc-benefits' className='p-4'>
                      Benefits
                    </a>
                  </li>
                  <li>
                    <a href='#rsc-problems' className='p-4'>
                      Problems
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a href='#dev-experience' className='block'>
                  Developer Experience
                </a>
                <ul className='my-2 flex flex-col gap-2 text-sm'>
                  <li>
                    <a href='#dev-experience-composability' className='p-4'>
                      Composability
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div className={`${styles.stack} !gap-16 flex-1 bg-neutral-900 p-8`}>
          <section className={styles.stack} id='ressources'>
            <h2 className='my-0'>Ressources</h2>
            <p>
              Checkout the official React Server Components RFC:&nbsp;
              <Link
                className='underline'
                href='https://nextjs.org/docs/app/building-your-application/rendering/server-components'
              >
                Server Components
              </Link>{' '}
              and{' '}
              <Link
                className='underline'
                href='https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns'
              >
                Composition pattern
              </Link>
            </p>
            <ul className='list-disc pl-4 flex flex-col gap-2'>
              <li>
                All the diagrams are taken from:&nbsp;
                <Link
                  className='underline'
                  href='https://www.joshwcomeau.com/react/server-components'
                >
                  https://www.joshwcomeau.com/react/server-components
                </Link>
                <br />
                <small>by Josh Comeau, September 19th, 2023</small>
                <p className='mt-2'>
                  Anyway, this is in my opinion one of the best article
                  explaining the concept and the evolution of React Server
                  Components so far.
                </p>
              </li>
              <li>
                <Link href='https://www.youtube.com/watch?v=9CN9RCzznZc'>
                  How Next.js is delivering React’s vision for the future
                </Link>
                <br />
                <small>
                  by Sam Selikoff @ Next.js Conf 2023 — Introducing Next.js 14
                </small>
              </li>
              <li>
                <Link href='https://portal.gitnation.org/contents/simplifying-server-components'>
                  Simplifying Server Components
                </Link>
                <br />
                <small>
                  by Mark Dalgleish @ React Advanced Conference 2023, London
                </small>
              </li>
            </ul>
          </section>
          <section className={styles.stack} id='a-client-side-react-app'>
            <h2 className='my-0'>A client-side React app</h2>
            <ul className='list-disc pl-4 flex flex-col gap-2'>
              <li>Client requests a page</li>
              <li>Server responds with empty HTML and a JS bundle</li>
              <li>Client downloads the JS bundle</li>
              <li>Client requests content from the database</li>
              <li>Client renders the page</li>
            </ul>
            <div className='w-full relative'>
              <Image
                src='/03.png'
                alt='Visualzed flow of a client-side React app'
                width={1450}
                height={1200}
              />
            </div>
            <h3 className='my-0' id='a-client-side-react-app-problems'>
              Problems
            </h3>
            <ul className='list-disc pl-4 flex flex-col gap-2'>
              <li>Empty page</li>
              <li>No SEO</li>
              <li>
                Potentially bad user experience:
                <br />
                user needs to wait until bundle is loaded and executed. Then
                usually a spinner or a content skeleton is shown. But still all
                the data from all components needs to be loaded and rendered
                client-side for that the user sees some meaningfull content on
              </li>
              <li>
                Maybe parent component has a useEffect call which loads data
                from the server and renders children which also have useEffect
                hooks and also load data from the server. And so on...
              </li>
              <li>This will then lead to infamous the network waterfall</li>
            </ul>
          </section>
          <section className={styles.stack} id='ssr'>
            <h2 className='my-0'>Server-side Rendering</h2>
            <div className='max-w-5xl relative'>
              <Image
                src='/04.png'
                alt='Visualzed flow of a server-side React app'
                width={1446}
                height={1204}
              />
            </div>
            <ul className='list-disc pl-4 flex flex-col gap-2'>
              <li>Client requests a page</li>
              <li>
                Server fetches data and responds with rendered HTML, the JS
                bundle and also content in JSON format.
              </li>
              <li>
                Then Client sees the rendered HTML but to make it interactive he
                needs to re-hydrate the HTML with downloaded JS and JSON
                content.
              </li>
              <li>Client requests content from the database</li>
              <li>Client renders the page</li>
            </ul>
            <h3 className='my-0' id='ssr-benefits'>
              Benefits
            </h3>
            <ul className='list-disc pl-4 flex flex-col gap-2'>
              <li>SEO</li>
              <li>User has content initially loaded in to the shell.</li>
              <li>
                Better user experience: Faster load time because no api calls
                are need for initial content.
              </li>
              <li>
                Subsequent loadings are taking place in background, user does
                not notice them.
              </li>
            </ul>
            <h3 className='my-0' id='ssr-problems'>
              Problems with this approach
            </h3>
            <ul className='list-disc pl-4 flex flex-col gap-2'>
              <li>
                Content rendering is taking place on Server and Client side
              </li>
              <li>
                React needs to rehydrate the content and connect static HTML
                with the Virtual-DOM.
              </li>
              <li>No SEO</li>
            </ul>
          </section>
          <section className={styles.stack} id='rsc'>
            <h2 className='my-0'>React Server Components</h2>
            <section id='rsc-why' className={`${styles.stack} !gap-4`}>
              <h3>Why?</h3>
              <ul className='list-disc pl-4 flex flex-col gap-2'>
                <li>
                  A majority of a React application is usually static. Think
                  about E-Commerce shop. All the products lists and product
                  details are static. Only the cart and interaction elements
                  (e.g. search field, Add to Cart button, etc.) are dynamic.
                </li>
                <li>
                  This means all static parts will never get updated and they
                  don&apos;t need any group of interaction.
                </li>
                <li>
                  Also, when using server components, you can still benefit from
                  heavy libraries e.g. markdown, moment, etc. because they are
                  used on Server-side, which means they are not shipped to the
                  client because they are not included in any JS bundle.
                </li>
              </ul>
            </section>
            <section id='rsc-new-paradigm' className={`${styles.stack} !gap-4`}>
              <h3>A new paradigm</h3>
              <ul className='list-disc pl-4 flex flex-col gap-2'>
                <li>Server components are the default</li>
                <li>
                  Client components need to marked with &lsquo;useclient&rsquo;
                </li>
              </ul>
              <div className='max-w-5xl relative'>
                <Image
                  src='/09.png'
                  alt='Visualzed flow of a server-side React app'
                  width={1428}
                  height={848}
                />
              </div>
            </section>
            <section id='rsc-what-are-rsc' className={`${styles.stack} !gap-4`}>
              <h3>What are server components?</h3>
              <div className='max-w-5xl relative'>
                <Image
                  src='/06.png'
                  alt='Visualzed flow of a server-side React app'
                  width={1358}
                  height={534}
                />
              </div>
            </section>
            <section className={`${styles.stack} !gap-4`}>
              <h3 id='sc-how-does-it-work'>How does it work?</h3>
              <p>
                Static HTML is simple to deal with. Rendering just some basic
                tags with some strings inside.
              </p>
              <Rsc1 />
              <p>This of course maps to calls to `React.createElement`:</p>
              <Rsc2 />
              <p>
                And since all of these arguments are primitive Javascript
                values, you could serialise this into a string or nested arrays
                send that over the network. Then on the client you do the
                reverse. You turn this data structure into a tree of React
                elements.
              </p>
              <Rsc3 />
              <p>
                Ultimatively RSC is all about having serialisable components,
                having trees of React elements that we can send over the network
              </p>
              <p>
                Server components is just serialised virtual DOM sent over the
                network to offload code from the client. That`s the whole point:
                getting fresh markup without having to re-run the code
              </p>
              <p>
                Check this speach from Mark Dalgleish for more
                information:&nbsp;
                <Link href='https://portal.gitnation.org/contents/simplifying-server-components'>
                  Simplifying Server Components
                </Link>
              </p>
            </section>
            <section id='rsc-benefits' className={`${styles.stack} !gap-4`}>
              <h3>Benefits</h3>
              <ul className='list-disc pl-4 flex flex-col gap-2'>
                <li>
                  React Server Components is not a replacement for Server Side
                  Rendering.
                </li>
                <li>
                  In contrast to traditional SSR (Server Side Rendering) to
                  re-fetch and re-render the whole page. They enable a much more
                  fine grained control over what needs to be updated.
                </li>
                <li>
                  Server components are not shipped as HTML to client but as a
                  Stream that looks very much like JSON
                </li>
                <li>
                  The Server Component that needs to be updated gets rendered on
                  the server and streamed to the client. This enables React on
                  the client to just replace this single piece of the whole
                  page.
                </li>
                <li>
                  With Server Components you can talk directly to the database,
                  use any group of credentials and they will never get exposed
                  to the client.
                </li>
              </ul>
            </section>
            <section id='rsc-problems' className={`${styles.stack} !gap-4`}>
              <h3>Problems</h3>
              <ul className='list-disc pl-4 flex flex-col gap-2'>
                <li>
                  As of now the Javascript for client components gets sent to
                  the client, donwloaded and executed (hydrated) right away and
                  makes the button or whatever component interactive. But maybe
                  the user never clicks on this button.
                </li>
                <li>
                  Currently only Next.js supports server components. Vite is
                  almost ready. Remix seems to be working on it allthough they
                  have their own Full Stack Components.
                </li>
              </ul>
            </section>
          </section>
          <section id='dev-experience' className={styles.stack}>
            <h2>Developer Experience</h2>
            <p>What`s the benefit for the developer?</p>
            <section
              id='dev-experience-composability'
              className={`${styles.stack} !gap-4`}
            >
              <h3>Composability</h3>
              <ul className='list-disc pl-4 flex flex-col gap-2'>
                <li>
                  We have server only and client only pieces. They are running
                  on two different places in two different environments, server
                  and client. But we can still compose them together. This is
                  called <em>Isomorphic Composition</em>.
                </li>
                <li>
                  And, by the way, you don`t need to learn a new language or
                  even a new framework. You can use the same React you already
                  know.
                </li>
              </ul>
              <Composability />
              <p>
                Check the presentation of Sam Selikoff for more
                information:&nbsp;
                <Link href='https://www.youtube.com/watch?v=9CN9RCzznZc'>
                  How Next.js is delivering React’s vision for the future
                </Link>
              </p>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
}
