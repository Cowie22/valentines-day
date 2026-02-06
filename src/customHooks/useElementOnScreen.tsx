import { useState, useEffect, useRef, MutableRefObject } from 'react'

interface Options {
  root?: Element | null
  rootMargin?: string
  threshold?: number | number[]
}

const useElementOnScreen = (options: Options): [MutableRefObject<HTMLElement | null>, boolean] => {
  const contentRef = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  const callBack = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries
    setIsVisible(entry.boundingClientRect.bottom < (entry.rootBounds?.bottom || 0))
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callBack, options)
    const currentRef = contentRef.current

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [options])

  return [contentRef, isVisible]
}

export default useElementOnScreen
