import { Interest, PersonalInformation, Profile, Skill } from '@/models'
import { defaultState } from './defaultState'

export interface State {
  profile: Profile
  personalInfo: PersonalInformation
  languages: Skill[]
  interests: Interest[]
  isSideBarOpen: boolean
  skills: Skill[]
  topSkills: Skill[]
}

export default () => defaultState
