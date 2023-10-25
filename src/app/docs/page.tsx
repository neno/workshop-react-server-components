import { Stack } from '@/ui/Stack';
import Image from 'next/image';

import styles from './docs.module.css';

export default function DocsPage() {
  return (
    <div className='max-w-5xl'>
      <h1>Docs</h1>
      <p>Docs page</p>

      <Stack className='gap-8'>
        <h2 className='my-0'>A client-side React app</h2>
        <ul className='list-disc pl-4'>
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
        
        <h3 className='my-0'>Problems with this approach</h3>
        <ul className='list-disc pl-4'>
          <li>Empty page</li>
          <li>No SEO</li>
          <li>Potentially bad user experience:
            <br />
            user needs to wait until bundle is loaded and executed.
            Then usually a spinner or a content skeleton is shown.
            But still all the data from all components needs to be loaded and rendered client-side for that the user sees some meaningfull content on
            </li>
          <li>Maybe parent component has a useEffect call which loads data from the server and renders children which also have useEffect hooks and also load data from the server. And so on...</li>
          <li>This will then lead to infamous the network waterfall</li>
        </ul>



        <h2 className='my-0'>Server-side Rendering</h2>

        <ul className='list-disc pl-4'>
          <li>Client requests a page</li>
          <li>Server fetch Data and responds rendered HTML. But HTML is not interactive.</li>
          <li>Then Client downloads the JS bundle and "hydration" (do we need to explain hydration here) is run, making HTML interactive</li>
          <li>Client requests content from the database</li>
          <li>Client renders the page</li>
        </ul>

        <div className='max-w-5xl relative'>
          <Image
            src='/04.png'
            alt='Visualzed flow of a server-side React app'
            width={1446}
            height={1204}
          />
        </div>
      </Stack>
      {/* <h2>A server-side React app</h2>
      <Image
        src='/02.png'
        alt='Visualzed flow of a server-side React app'
        width={1416}
        height={764}
      /> */}
    </div>
  );
}
