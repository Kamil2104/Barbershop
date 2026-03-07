import { useState, useEffect } from 'react'

interface UseServicesItemsLimitProps {
  section: 'services' | 'gallery'
}

const useServicesItemsLimit = ({ section }: UseServicesItemsLimitProps) => {
  const [itemsToShow, setItemsToShow] = useState(3)

  useEffect(() => {
    const updateItems = () => {
      const width = window.innerWidth

      // md:
      if (width >= 768 && width < 1024) {
        setItemsToShow(4)
      } else {
        // sm:
        setItemsToShow(3)
      }
    }

    updateItems()
    window.addEventListener('resize', updateItems)

    return () => {
      window.removeEventListener('resize', updateItems)
    }
  }, [section])

  return itemsToShow
}

export default useServicesItemsLimit