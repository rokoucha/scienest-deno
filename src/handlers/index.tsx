import { getEntries } from '../services/entry.ts'
import React from 'https://dev.jspm.io/react/index.js';
import ReactDOMServer from 'https://dev.jspm.io/react-dom/server.js';

export default async ({response}) => {
  const entries = await getEntries()

  response.body = ReactDOMServer.renderToString(
    <html lang='ja'>
      <head>
        <meta charSet='utf-8' />
        <title>Scienest</title>
      </head>
      <body>
        <ul>
          {entries.map(entry => (
            <li key={entry.path}>{entry.path} - {entry.body}</li>
          ))}
        </ul>
      </body>
    </html>
  )
}