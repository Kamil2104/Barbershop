import type { OfferingItem } from "../types/service"

export const offerings: OfferingItem[] = [
    // HAIRCUT
    { type: 'Haircut', name: 'Classic Haircut', price: 25, duration: 30, description: 'Traditional haircut with attention to detail, leaving you looking sharp and polished.' },
    { type: 'Haircut', name: 'Skin Fade', price: 30, duration: 40, description: 'Modern skin fade haircut with precise blending for a clean, contemporary look.' },
    { type: 'Haircut', name: 'Scissor Cut', price: 32, duration: 45, description: 'Expert scissor technique for textured, layered styles that suit your personality.' },
    { type: 'Haircut', name: 'Buzz Cut', price: 18, duration: 20, description: 'Quick and clean all-over buzz cut, perfect for a low-maintenance style.' },
    { type: 'Haircut', name: 'Long Hair Trim', price: 28, duration: 35, description: 'Trim and shape longer hair to maintain healthy ends and natural flow.' },
    { type: 'Haircut', name: 'Haircut & Wash', price: 35, duration: 45, description: 'Full haircut including a relaxing wash to refresh your hair and scalp.' },
    { type: 'Haircut', name: 'Student Haircut', price: 20, duration: 30, description: 'Affordable haircut for students without compromising style and quality.' },
    { type: 'Haircut', name: 'Kids Haircut', price: 18, duration: 25, description: 'Gentle haircut for children, making the experience comfortable and fun.' },

    // BEARD
    { type: 'Beard Trim', name: 'Classic Beard Trim', price: 15, duration: 20, description: 'Simple beard trim to maintain shape and neat appearance.' },
    { type: 'Beard Trim', name: 'Beard Sculpting', price: 18, duration: 30, description: 'Precision sculpting to define beard lines and enhance facial structure.' },
    { type: 'Beard Trim', name: 'Hot Towel Shave', price: 25, duration: 40, description: 'Traditional hot towel shave leaving skin smooth and refreshed.' },
    { type: 'Beard Trim', name: 'Beard Line Up', price: 12, duration: 15, description: 'Sharp, clean beard edges for a polished look.' },
    { type: 'Beard Trim', name: 'Beard Wash & Conditioning', price: 17, duration: 25, description: 'Deep cleanse and conditioning treatment for soft and healthy beard hair.' },
    { type: 'Beard Trim', name: 'Premium Beard Treatment', price: 28, duration: 45, description: 'Luxury beard treatment including shaping, conditioning, and styling.' },

    // FULL GROOMING
    { type: 'Full Grooming', name: 'Haircut + Beard Trim', price: 40, duration: 60, description: 'Complete grooming package combining a stylish haircut with beard trim.' },
    { type: 'Full Grooming', name: 'Skin Fade + Beard Sculpt', price: 45, duration: 70, description: 'Modern skin fade haircut paired with precise beard sculpting.' },
    { type: 'Full Grooming', name: 'Haircut + Hot Towel Shave', price: 50, duration: 75, description: 'Full grooming including haircut and classic hot towel shave experience.' },
    { type: 'Full Grooming', name: 'Full Grooming Experience', price: 55, duration: 90, description: 'Premium package with haircut, beard trim, and skin treatments.' },
    { type: 'Full Grooming', name: 'Executive Package', price: 65, duration: 90, description: 'Luxury grooming package designed for busy executives seeking perfection.' },
    { type: 'Full Grooming', name: 'Wedding Groom Package', price: 85, duration: 120, description: 'Special full grooming for weddings including styling and finishing touches.' },
    { type: 'Full Grooming', name: 'Deluxe Grooming Session', price: 75, duration: 100, description: 'Extended deluxe grooming session with premium products and styling.' },
    { type: 'Full Grooming', name: 'Monthly Grooming Plan', price: 120, duration: 120, description: 'Monthly subscription plan including regular haircuts and beard care.' },
    { type: 'Full Grooming', name: 'VIP Grooming Experience', price: 90, duration: 110, description: 'Exclusive VIP grooming session with personalized care and luxury service.' },
]