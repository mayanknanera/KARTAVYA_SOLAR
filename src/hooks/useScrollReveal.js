import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function useScrollReveal(selector = '.reveal, .reveal-left, .reveal-right, .reveal-scale') {
  const { pathname } = useLocation()

  useEffect(() => {
    // Small delay so the new page's DOM is painted before we observe
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll(selector)
      if (!elements.length) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.12 }
      )

      elements.forEach((el) => observer.observe(el))
      return () => observer.disconnect()
    }, 80)

    return () => clearTimeout(timer)
  }, [pathname, selector])
}
