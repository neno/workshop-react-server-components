import { Code } from 'bright';

const codeSnippet = `
<Modal> ----------------------------------------------> Client
  <Movie>
    <MovieHero>
      <Add/Remove Watchlist /> -----------------------> Client
    </MovieHero>
    <Suspense>
      <Reviews /> ------------------------------------> Stream
    </Suspense>
  </Movie>
</Modal>
`;

export function Composability() {
  return (
    <Code lang='js'>{codeSnippet}</Code>
  )
}