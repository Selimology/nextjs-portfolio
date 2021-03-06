import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes'; //darkmode
import MainLayout from '../components/mainLayout';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider enableSystem={true} attribute="class">
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </ThemeProvider>
    );
}

export default MyApp;
