import Layout from '@components/Layout/Layout';
import {AppProps} from 'next/app'

function MyApp ({Component, pageProps}: AppProps){
    return (
        <Layout>
            <div id='id-definido-en-_app'>
                <Component {...pageProps} />
            </div>
        </Layout>
    )
    
}

export default MyApp;