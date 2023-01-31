import Document, {Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps} from "next/document";

class  MyDocument extends Document {
    render() {
        return (
          <Html>
            <Head>
                {/* favicon */}
                {/* webfont */}
                {/* stylesheet */}
                {/* scripts/js */}
            </Head>
            <body className="mi-class-personalizado-gobal">
              <Main />
              <NextScript />
            </body>
          </Html>
        )
      }
}

export default MyDocument
