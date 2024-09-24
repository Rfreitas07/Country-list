import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import './globals.css'
import Image from 'next/image'
const nunitoSans = Nunito_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Países do mundo',
  description: 'Dados relevantes sobre cada país do mundo e suas bandeiras - EM NEXT 13',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={nunitoSans.className}>
        
        <main className= "bg-gray-100 min-h-screen flex flex-col items-center">        
        
        <nav className="w-full bg-white h-22 flex items-center justify-center">
          
          <section className='container flex items-center gap-3'>
          
          <Image width={48} height={48} src="/globoazul.jpg" alt= "logo Aplicação"/>
            <div className='flex flex-col p-4 font-bold mt-5'>
            <h1 className='font-bold text-2xl'>Lista de Países</h1>
          <p>Aqui você tem a lista com todos os países do mundo!</p>
            <p>Clique na bandeira do país que deseja para saber mais sobre ele!</p>
            </div>
          </section>
        </nav>
        
        {children}



        </main>
      </body>
    </html>
  )
}
