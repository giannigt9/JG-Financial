import type { TeamProfile } from './types'
import { contact } from './contact'

export const teamProfiles = [
  {
    id: 'julian-gaviria',
    name: contact.owner,
    title: contact.ownerTitle,
    photo: {
      src: '/assets/partners/julian-gaviria.jpg',
      position: '50% 42%',
    },
    bio: 'Founded JG Financial to give agents a real shot at this industry through mentorship, contracts, and a culture of genuine impact.',
    highlights: [
      'Born and raised in Miami, Florida',
      'Attended University of Florida',
      '2+ years of sales and training experience',
      '700K+ personal IP',
      '10M+ agency IP',
    ],
  },
  {
    id: 'zaccari-antonucci',
    name: 'Zaccari Antonucci',
    title: 'Partner',
    photo: {
      src: '/assets/partners/zaccari-antonucci.jpg',
      position: '44% 50%',
    },
    bio: 'Partner at JG Financial, dedicated to helping agents build successful careers and create lasting impact through the insurance industry. A husband, leader, and entrepreneur passionate about personal growth, faith, and developing others.',
    highlights: [
      '2+ years of insurance sales and leadership experience',
      '$50K+ monthly producer',
      'Currently leading a 7-figure insurance agency',
      'Trained and mentored agents across the country',
      'Passionate about faith, family, and helping others win',
    ],
  },
  {
    id: 'keenan-lawrence',
    name: 'Keenan Lawrence',
    title: 'Partner',
    photo: {
      src: '/assets/partners/keenan-lawrence.jpg',
      position: '50% 34%',
    },
    bio: 'Founder of Factored Financial under JG Financial as a Partner dedicated to helping agents thrive by providing the tools, mentorship, and opportunities needed for long-term success in an industry that has the potential to transform lives and build lasting financial independence.',
    highlights: [
      '2+ years in the insurance industry',
      '500K+ yearly personal IP',
      'Leading 400K/month agency',
      'Advanced markets professional',
      'Owns office in Raton, Florida',
    ],
  },
  {
    id: 'alejandro-maya',
    name: 'Alejandro Maya',
    title: 'Partner',
    photo: {
      src: '/assets/partners/alejandro-maya.jpg',
      position: '50% 14%',
    },
    bio: 'Partner at JG Financial.',
    highlights: [],
  },
  {
    id: 'amir-gibson',
    name: 'Amir Gibson',
    title: 'Partner',
    photo: {
      src: '/assets/partners/amir-gibson.jpg',
      position: '50% 35%',
    },
    bio: 'Partner at JG Financial.',
    highlights: [],
  },
] satisfies Array<TeamProfile>
