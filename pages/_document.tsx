import { Html, Head, Main, NextScript } from 'next/document'
import { Theme } from "@radix-ui/themes";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <Theme appearance="dark">
          <Main />
          <NextScript />
        </Theme>
      </body>
    </Html>
  )
}
