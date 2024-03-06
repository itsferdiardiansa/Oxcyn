'use client'

import { useState, useEffect, useRef, useMemo, memo } from 'react'
import { cn } from '@oxcyn/utils'
import greetings from '@/constants/greetings'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Transition } from 'react-transition-group'

import packageJson from '@root/package.json'

import style from './style.module.scss'

function Greetings({ isLoading }: { isLoading: boolean }) {
  const [selectedGreeting, setSelectedGreeting] = useState<{
    id: ReturnType<Crypto['randomUUID']>
    text: string[]
  } | null>(null)
  const [mounted, setMounted] = useState<boolean>(false)
  const textContainerRef = useRef(null)
  const textRefs = new Array()
  const textSlideOut = useRef(null)

  const greetingsLn = useMemo(() => greetings.length - 1, [])

  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max)
  }

  const tlConfig = useMemo(
    () => ({
      stagger: 0.12,
      delay: 0.4,
      ease: 'easing',
    }),
    []
  )

  let tl = useMemo(() => {
    return gsap.timeline({
      repeatDelay: 0.4,
      onComplete: () => {
        if (!isLoading) return
        const rd = getRandomInt(greetingsLn)

        setSelectedGreeting({
          id: crypto.randomUUID(),
          text: greetings[rd].split(''),
        })
      },
    })
  }, [])

  useEffect(() => {
    setMounted(true)
    setSelectedGreeting({
      id: crypto.randomUUID(),
      text: greetings[getRandomInt(greetingsLn)].split(''),
    })

    return () => {}
  }, [])

  useGSAP(
    () => {
      if (!Boolean(textRefs.length) && !mounted) return

      tl.to(textRefs, { ...tlConfig, y: 0 })
      tl.to(textRefs, { ...tlConfig, y: 150 })
    },
    { dependencies: [textRefs, mounted], scope: textContainerRef }
  )

  return (
    <Transition
      in={isLoading}
      addEndListener={(node: HTMLElement, done: () => void) => {
        const tl2 = gsap.timeline({
          repeatDelay: 0.5,
        })

        tl2.to(textSlideOut.current, {
          y: -100,
          ease: 'power1.out',
          autoAlpha: 0,
          duration: 0.7,
          onStart: () => {
            tl.invalidate()
            setMounted(false)
          },
        })

        tl2.to(node, {
          ease: 'power4.out',
          autoAlpha: isLoading ? 1 : 0,
          onComplete: () => {
            done()
          },
        })
      }}
    >
      <div ref={textContainerRef} className={cn(style['text'])}>
        <div ref={textSlideOut} className={style['text-slide-out']}></div>

        <div className={style['text-wrapper']}>
          {!!selectedGreeting?.text.length &&
            selectedGreeting.text.map((char, index) => (
              <span
                key={index}
                className={cn(style['char'])}
                ref={element => textRefs.push(element)}
              >
                {char}
              </span>
            ))}
        </div>

        <div className={style['text-version-info']}>v{packageJson.version}</div>
      </div>
    </Transition>
  )
}

export default memo(Greetings)
