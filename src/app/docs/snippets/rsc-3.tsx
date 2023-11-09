import { Code } from 'bright';

const codeSnippet = `
['html', null, 
  ['body', null, 
    ['h1', null, 'Hello from RSC!']
  ]
]
`;

export function Rsc3() {
  return <Code lang='js'>{codeSnippet}</Code>;
}
