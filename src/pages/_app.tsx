import '../styles/TailwindCss.css'
import type { AppProps } from 'next/app'
import MainLayout from '@layout/MainLayout'
import { AuthProvider } from '@hooks/useAuth'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </AuthProvider>
  )
}
