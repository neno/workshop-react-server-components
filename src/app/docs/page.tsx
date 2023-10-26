import { Stack } from '@/ui/Stack';
import Image from 'next/image';
import Link from 'next/link';

export default function DocsPage() {
  return (
    <div className='max-w-5xl'>
      <Stack className='gap-8'>
        <h1>React Server Components: What & Why</h1>

        <h2 className='my-0'>Introduction</h2>
        <p>
          Checkout the official React Server Components RFC:&nbsp;
          <Link  className='underline' href='https://nextjs.org/docs/app/building-your-application/rendering/server-components'>Server Components</Link> and <Link className='underline' href='https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns'>Composition pattern</Link>
          
        </p>
        <p>
          All the diagrams are taken from:&nbsp;
          <Link
            className='underline'
            href='https://www.joshwcomeau.com/react/server-components'
          >
            https://www.joshwcomeau.com/react/server-components
          </Link>
          <br />
          Anyway, this is in my opintion the best article explaining the concept
          and the evolution of React Server Components so far.
        </p>

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

        <h3 className='my-0'>Problems</h3>
        <ul className='list-disc pl-4 flex flex-col gap-2'>
          <li>Empty page</li>
          <li>No SEO</li>
          <li>
            Potentially bad user experience:
            <br />
            user needs to wait until bundle is loaded and executed. Then usually
            a spinner or a content skeleton is shown. But still all the data
            from all components needs to be loaded and rendered client-side for
            that the user sees some meaningfull content on
          </li>
          <li>
            Maybe parent component has a useEffect call which loads data from
            the server and renders children which also have useEffect hooks and
            also load data from the server. And so on...
          </li>
          <li>This will then lead to infamous the network waterfall</li>
        </ul>

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
            Server fetches data and responds with rendered HTML, the JS bundle
            and also content in JSON format.
          </li>
          <li>
            Then Client sees the rendered HTML but to make it interactive he
            needs to re-hydrate the HTML with downloaded JS and JSON content.
          </li>
          <li>Client requests content from the database</li>
          <li>Client renders the page</li>
        </ul>

        <h3 className='my-0'>Benefits</h3>
        <ul className='list-disc pl-4 flex flex-col gap-2'>
          <li>SEO</li>
          <li>User has content initially loaded in to the shell.</li>
          <li>
            Better user experience: Faster load time because no api calls are
            need for initial content.
          </li>
          <li>
            Subsequent loadings are taking place in background, user does not
            notice them.
          </li>
        </ul>

        <h3 className='my-0'>Problems with this approach</h3>
        <ul className='list-disc pl-4 flex flex-col gap-2'>
          <li>Content rendering is taking place on Server and Client side</li>
          <li>
            React needs to rehydrate the content and connect static HTML with
            the Virtual-DOM.
          </li>
          <li>No SEO</li>
        </ul>

        <h2 className='my-0'>React Server Components</h2>

        <h3>Why?</h3>
        <ul className='list-disc pl-4 flex flex-col gap-2'>
          <li>
            A majority of a React application is usually static. Think about
            E-Commerce shop. All the products lists and product details are
            static. Only the cart and interaction elements (e.g. search field,
            Add to Cart button, etc.) are dynamic.
          </li>
          <li>
            This means all static parts will never get updated and they
            don&apos;t need any kind of interaction.
          </li>
          <li>
            Also, when using server components, you can still benefit from heavy
            libraries e.g. markdown, moment, etc. because they are used on
            Server-side, which means they are not shipped to the client because
            they are not included in any JS bundle.
          </li>
        </ul>

        <h3>What are Server Components</h3>

        <div className='max-w-5xl relative'>
          <Image
            src='/06.png'
            alt='Visualzed flow of a server-side React app'
            width={1358}
            height={534}
          />
        </div>

        <h3>New Paradigm</h3>
        <ul className='list-disc pl-4 flex flex-col gap-2'>
          <li>Server components are the default</li>
          <li>Client components need to marked with &lsquo;useclient&rsquo;</li>
        </ul>

        <div className='max-w-5xl relative'>
          <Image
            src='/09.png'
            alt='Visualzed flow of a server-side React app'
            width={1428}
            height={848}
          />
        </div>

        <h3>Benefits</h3>
        <ul className='list-disc pl-4 flex flex-col gap-2'>
          <li>
            React Server Components is not a replacement for Server Side
            Rendering.
          </li>
          <li>
            In contrast to traditional SSR (Server Side Rendering) to re-fetch
            and re-render the whole page. They enable a much more fine grained
            control over what needs to be updated.
          </li>
          <li>
            Server components are not shipped as HTML to client but as a Stream
            that looks very much like JSON
          </li>
          <li>
            The Server Component that needs to be updated gets rendered on the
            server and streamed to the client. This enables React on the client
            to just replace this single piece of the whole page.
          </li>
          <li>
            With Server Components you can talk directly to the database, use
            any kind of credentials and they will never get exposed to the
            client.
          </li>
        </ul>

        <h3>Problems</h3>
        <p>Only time can tell - but I am sure, we will see soon...</p>
      </Stack>
    </div>
  );
}
