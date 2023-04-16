import { asset, Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/src/server/types.ts";
import sass from "https://deno.land/x/denosass@1.0.5/mod.ts";
const compile = sass("./scss/site.scss");
const siteCss = compile.to_string() as string;

export default function App({ Component }: AppProps) {
  return (
    <html data-custom="data">
      <Head>
        <title>Fresh</title>
        {/* <link rel="stylesheet" href={asset("style.css")} /> */}
        <style dangerouslySetInnerHTML={{ __html: siteCss }} />
      </Head>
      <body class="bodyClass">
        <Component />
      </body>
    </html>
  );
}