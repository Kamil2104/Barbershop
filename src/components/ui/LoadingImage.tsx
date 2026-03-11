const LoadingImage = () => {
  return (
    <div className="w-full h-full overflow-hidden bg-surface-loading-animation">
      <div
        className="w-full h-full animate-shimmer"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, var(--color-surface-subtle) 50%, transparent 100%)',
          backgroundSize: '200% 100%'
        }}
      />
    </div>
  )
}

export default LoadingImage