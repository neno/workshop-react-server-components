import Image from "next/image";

export default function DocsPage() {
  return (
    <>
      <h1>Docs</h1>
      <p>Docs page</p>

      <h2>A client-side React app</h2>
      <Image src='/01.png' alt='Visualzed flow of a client-side React app' width={1428} height={764} />
      <Image src='/03.png' alt='Visualzed flow of a client-side React app' width={1450} height={1200} />
      <h2>A server-side React app</h2>
      <Image src='/02.png' alt='Visualzed flow of a server-side React app' width={1416} height={764} />
      <Image src='/04.png' alt='Visualzed flow of a server-side React app' width={1446} height={1204} />
      
    </>
  );
}