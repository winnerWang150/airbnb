import { useEffect, useState } from "react"

const useScrollFn = () => {
  const [currentScrollTop, setCurrentScrollTop] = useState(0)
  const scrollHandler = () => {
    setCurrentScrollTop(window.scrollY)
  }
  useEffect(() => {
    window.addEventListener('scroll', scrollHandler, true)
    return () => {
      window.removeEventListener('scroll', scrollHandler, true)
    }
  })

  return currentScrollTop
}

const scrollTop = (scrollY) => {
  window.scrollTo(0, scrollY)
}

export default function useScrollTop () {
  const currentTop = useScrollFn()
  return [currentTop, scrollTop]
}