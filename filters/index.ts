import { Profile } from '@/models'
import dayjs from 'dayjs'

const dayMonthYear = (value: string) => dayjs(value).format('DD/MM/YYYY')

const fullName = (profile: Pick<Profile, 'firstName' | 'lastName'>) =>
  `${profile.firstName} ${profile.lastName}`

const mailTo = (email: string) => `mailto:${email}`

const tel = (telephone: string) => `tel:${telephone}`

const checkAvailability = (availability: boolean) =>
  availability ? 'Available' : 'Not available'

const ieltsBandScale = (level: number) => {
  switch (level) {
    case 1:
      return 'Non user'
    case 2:
      return 'Intermittent User'
    case 3:
      return 'Extremely Limited User'
    case 4:
      return 'Limited User'
    case 5:
      return 'Modest user'
    case 6:
      return 'Competent User'
    case 7:
      return 'Good User'
    case 8:
      return 'Very Good User'
    case 9:
      return 'Expert User'
    default:
      return 'Did not attempt the test'
  }
}

export default {
  checkAvailability,
  dayMonthYear,
  fullName,
  ieltsBandScale,
  mailTo,
  tel,
}
