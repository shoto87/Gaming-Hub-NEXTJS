import { SessionProvider } from 'next-auth/react';
import Layout from '../components/Layout';

import '../styles/globals.css'; // Adjust this path based on your file structure

function MyApp({ Component, pageProps }) {
    return (
        <SessionProvider session={pageProps.session}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </SessionProvider>
    );
}

export default MyApp;
