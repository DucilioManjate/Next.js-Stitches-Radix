import Document, { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '@/components/styles'

export default class CustomDocuments extends Document {
    render() {
        return (
            <Html lang="pt-br">
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@700&display=swap" rel="stylesheet" />
                    <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}