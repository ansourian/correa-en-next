"use client"

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"

const DESKTOP_SCROLL_VISIBILITY_OFFSET = 200
const MOBILE_SCROLL_VISIBILITY_OFFSET = 40

const isMobileViewport = () => {
  return window.matchMedia("(max-width: 767px)").matches
}

const getScrollVisibilityOffset = () => {
  if (isMobileViewport()) {
    return MOBILE_SCROLL_VISIBILITY_OFFSET
  }

  return DESKTOP_SCROLL_VISIBILITY_OFFSET
}

const getScrollPosition = (scrollTarget) => {
  return Math.max(
    document.scrollingElement?.scrollTop || 0,
    window.scrollY || 0,
    window.pageYOffset || 0,
    document.documentElement.scrollTop || 0,
    document.body.scrollTop || 0,
    scrollTarget?.scrollTop || 0
  )
}

const getScrolledElements = () => {
  const pageScrollElements = [
    document.scrollingElement,
    document.documentElement,
    document.body,
  ]

  const shiftedScrollElements = Array.from(
    document.querySelectorAll("*")
  ).filter((element) => element.scrollTop > 0)

  return Array.from(
    new Set([...pageScrollElements, ...shiftedScrollElements].filter(Boolean))
  )
}

const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)
  const scrollElementRef = useRef(null)
  const lastTouchTimeRef = useRef(0)
  const pathname = usePathname()

  useEffect(() => {
    const scrollListenerOptions = {
      passive: true,
      capture: true,
    }

    const handleScroll = (event) => {
      const scrollTarget = event?.target
      const scrollPosition = getScrollPosition(scrollTarget)

      if (scrollTarget?.scrollTop > 0) {
        scrollElementRef.current = scrollTarget
      }

      setIsVisible(scrollPosition > getScrollVisibilityOffset())
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    document.addEventListener("scroll", handleScroll, scrollListenerOptions)
    window.addEventListener("touchmove", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("scroll", handleScroll, scrollListenerOptions)
      window.removeEventListener("touchmove", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [pathname])

  const scrollToTop = () => {
    const scrollOptions = {
      top: 0,
      left: 0,
      behavior: "smooth",
    }

    const topElements = [
      document.getElementById("page-top"),
      document.body,
      document.querySelector("main"),
    ]

    const handleScrollElementTop = (scrollElement) => {
      if (!scrollElement) return

      try {
        scrollElement.scrollTo?.(scrollOptions)
      } catch {
        scrollElement.scrollTop = 0
        scrollElement.scrollLeft = 0
      }
    }

    const handleScrollIntoView = (scrollElement) => {
      if (!scrollElement) return

      try {
        scrollElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      } catch {
        return
      }
    }

    try {
      window.scrollTo(scrollOptions)
    } catch {
      document.documentElement.scrollTop = 0
    }

    topElements.forEach(handleScrollIntoView)
    getScrolledElements().forEach(handleScrollElementTop)
    handleScrollElementTop(scrollElementRef.current)
    setIsVisible(false)
  }

  const handleClick = (event) => {
    event.preventDefault()

    if (Date.now() - lastTouchTimeRef.current < 500) return

    scrollToTop()
  }

  const handleTouchEnd = (event) => {
    event.preventDefault()
    lastTouchTimeRef.current = Date.now()
    scrollToTop()
  }

  return (
    <button
      aria-label="Volver arriba"
      aria-hidden={!isVisible}
      className={`scroll-top-button ${
        isVisible ? "scroll-top-button-visible" : ""
      }`}
      onClick={handleClick}
      onTouchEnd={handleTouchEnd}
      title="Volver arriba"
      type="button"
    >
      <KeyboardArrowUpIcon className="icono-volver" />
      <span className="volver-text"></span>
    </button>
  )
}

export default ScrollTopButton
