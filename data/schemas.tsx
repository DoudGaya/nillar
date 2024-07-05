import {CiInstagram} from 'react-icons/ci'
import {CiLinkedin} from 'react-icons/ci'
import {CiTwitter} from 'react-icons/ci'
import { CiFacebook } from 'react-icons/ci'

export const socials = [
    {
        id: 1,
        name: 'Facebook',
        url: 'https://web.facebook.com/nillarmagazines',
        icons: <CiFacebook size={30} />
    },
    {
        id: 2,
        name: 'Twitter',
        url: 'https://twitter.com/magazines',
        icons: <CiTwitter size={30} />
    },
    {
        id: 3,
        name: 'Linkedln',
        url: 'https://www.linkedin.com/company/nillar/',
        icons: <CiLinkedin size={30} />
    },
    {
        id: 4,
        name: 'instagram',
        url: 'https://instagram.com/nillarmagazines/',
        icons: <CiInstagram size={30} />
    },
]