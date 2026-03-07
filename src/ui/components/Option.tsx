import type { MenuItem } from '@/types/navigation'
import AnchorButton from '@/ui/components/AnchorButton'

interface OptionProps {
  item: MenuItem
  onClick?: () => void
}

const Option = ({ item, onClick }: OptionProps) => {
  return (
    <AnchorButton
      text={item.label}
      href={item.href}
      onClick={onClick}
      className="
        relative
        text-sm md:text-base
        font-semibold lg:font-bold
        tracking-wide
        text-zinc-900
        py-0
        px-0
        lg:transition-all lg:duration-200
        lg:hover:text-zinc-600
        lg:after:content-['']
        lg:after:absolute
        lg:after:left-0
        lg:after:bottom-0
        lg:after:h-px
        lg:after:w-0
        lg:after:bg-zinc-900
        lg:after:transition-all
        lg:hover:after:w-full"
    />
  )
}

export default Option