import { Code } from 'bright';

const codeSnippet = `
const App = () => (
  React.createElement('html', null, 
    React.createElement('body', null, 
      React.createElement('h1', null, 'Hello from RSC!')
    )
  )
);
`;

export function Rsc2() {
  return <Code lang='js'>{codeSnippet}</Code>;
}
