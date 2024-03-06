import { type PropsWithChildren } from 'react'
import Footer from '@/components/layout/footer/Footer'

export default function LandingLayout({ children }: PropsWithChildren) {
  return (
    <section className="h-full xl:max-w-7xl mx-auto md:py-10">
      {/* <div className="p-4 lg:flex lg:items-center"> */}
      {children}
      {/* </div> */}

      {/* <Footer /> */}
    </section>
  )
}
