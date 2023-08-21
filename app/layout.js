import Header from './components/Header/Header'
import './globals.css'
import { Inter,Cairo } from 'next/font/google'
import SearchModel from "./components/model/SearchModel"
import NavButtom from "./components/NavButtom"
import LabelButttom from "./components/LabelButttom"

const inter = Inter({ subsets: ['latin'] })
const cairo = Cairo({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cairo.className}>
        <Header />
        <SearchModel />
        <div>
          {children}
        </div>
        <LabelButttom />
        <NavButtom />
      </body>
    </html>
  )
}
