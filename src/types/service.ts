type Package = 'Haircut' | "Beard Trim" | 'Full Grooming'

export interface OfferingItem {
  type: Package
  name: string,
  description: string,
  price: number,
  duration: number,
}