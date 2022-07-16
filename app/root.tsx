import type { MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

import tailwindStyles from './styles/tailwind.css';
import indexStyles from './styles/index.css';
import codeStyles from './styles/code.css';
import codeblockStyles from './styles/codeblock.css';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Jerry Portfolio',
  viewport: 'width=device-width,initial-scale=1',
});

export function links() {
  return [
    { rel: 'stylesheet', href: tailwindStyles },
    { rel: 'stylesheet', href: indexStyles },
    { rel: 'stylesheet', href: codeStyles },
    { rel: 'stylesheet', href: codeblockStyles },
  ];
}

export default function App() {
  return (
    <html lang="en" className="dark">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
