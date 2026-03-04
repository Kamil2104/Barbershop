import { useEffect, useState } from 'react'

const Loader = () => {
  const [dots, setDots] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => (prev + 1) % 4)
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface-primary">
      <div className="text-center">
        <div
          className="w-16 lg:w-20 h-16 lg:h-20 mx-auto rounded-full border-4 md:border-5 lg:border-6 border-solid border-text-subtle border-t-text-primary animate-spin"
        />
        <p className="mt-4 text-text-primary tracking-[0.2em] text-base lg:text-lg">
          {'LOADING' + '.'.repeat(dots)}
        </p>
      </div>
    </div>
  )
}

export default Loader;