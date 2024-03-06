import { useMemo, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import style from './style.module.scss'
import { type Contents } from '@/firestore/collections/contents'

export default function Banner({ title, subTitle }: Contents['banner']) {
  const bannerTitleRef = useRef<HTMLHeadingElement | null>(null)
  const bannerSubTitleRef = useRef<HTMLHeadingElement | null>(null)

  let tl = useMemo(() => {
    return gsap.timeline({
      repeatDelay: 2,
    })
  }, [])

  const tlConfig = useMemo(
    () => ({
      delay: 0.8,
      duration: 0.4,
      ease: 'easing',
    }),
    []
  )

  useGSAP(
    () => {
      if (!bannerTitleRef && !bannerSubTitleRef) return

      tl.to(bannerTitleRef.current, { ...tlConfig, y: 0, opacity: 1 })
      tl.to(bannerSubTitleRef.current, {
        ...tlConfig,
        y: 0,
        delay: 0.2,
        opacity: 1,
      })
    },
    { scope: bannerTitleRef }
  )

  return (
    <div className={style['banner']}>
      <h1 ref={bannerTitleRef} className={style['banner-title']}>
        {title}
      </h1>

      <h3 ref={bannerSubTitleRef} className={style['banner-subtitle']}>
        {subTitle}
      </h3>
    </div>
  )
}
