// src/components/ui/FallbackImage.tsx
import Typography from "./Typography";

interface FallbackImageProps {
  alt: string;
}

const FallbackImage = ({ alt }: FallbackImageProps) => (
  <div className="w-full h-full flex items-center justify-center bg-zinc-900 p-6">
    <div className="relative flex flex-col items-center">
      <Typography
        variant="h1"
        className="text-text-inverted opacity-[0.05] absolute top-3 md:-top-1 lg:-top-2 tracking-tighter select-none"
      >
        404
      </Typography>

      <Typography
        variant="h2"
        className="text-text-inverted opacity-30 tracking-[0.4em] mb-1"
      >
        Signal Lost
      </Typography>

      <div className="h-px w-12 bg-text-inverted/20 my-3" />

      <Typography
        variant="p-sm"
        className="text-text-muted uppercase tracking-[0.25em] text-[10px]! md:text-[11px]! lg:text-[12px]! leading-relaxed max-w-[200px] text-center"
      >
        Unable to resolve: {alt || "Media Content"}
      </Typography>
    </div>
  </div>
);

export default FallbackImage;