import { PersonalInformation, Profile, Skill } from '@/models'
import { defaultState } from './defaultState'

export interface State {
  profile: Profile
  personalInfo: PersonalInformation
  languages: Skill[]
  interests: string[]
}

export default () => defaultState
