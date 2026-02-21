import { useState, useEffect } from 'react'

const useServicesItemsLimit = () => {
  const [itemsToShow, setItemsToShow] = useState(3)

  useEffect(() => {
    const updateItems = () => {
      const width = window.innerWidth

      // md: → 4 items
      if (width >= 768 && width < 1024) {
        setItemsToShow(4)
      } else {
        // sm: and lg: → 3 items
        setItemsToShow(3)
      }
    }

    updateItems()
    window.addEventListener('resize', updateItems)

    return () => {
      window.removeEventListener('resize', updateItems)
    }
  }, [])

  return itemsToShow
}

export default useServicesItemsLimit