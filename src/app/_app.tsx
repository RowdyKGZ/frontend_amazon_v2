import type { AppProps } from 'next/app';
import { comment } from 'postcss';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
