import { Code } from 'bright';

const codeSnippet = `
const App = () => (
  <html>
    <body>
      <h1>Hello from RSC!</h1>
    </body>
  </html>
);
`;

export function Rsc1() {
  return <Code lang='js'>{codeSnippet}</Code>;
}
