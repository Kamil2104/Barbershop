import { FiFacebook, FiInstagram, FiMail, FiPhone } from 'react-icons/fi'

import type { ContactOption } from '../types/contact'

export const contactOptions: ContactOption[] = [
    {
      logo: <FiFacebook />,
      link: 'https://facebook.com/modernbarbershop123',
      text: 'Facebook'
    },
    {
      logo: <FiInstagram />,
      link: 'https://instagram.com/modernbarbershop123',
      text: 'Instagram'
    },
    {
      logo: <FiMail />,
      link: 'mailto:contact@modernbarbershop123.co.uk',
      text: 'Email'
    },
    {
      logo: <FiPhone />,
      link: 'tel: +48 784 737 319',
      text: 'Call Us'
    }
]
