import {
  Interest,
  PersonalInformation,
  Profile,
  Skill,
  WorkHistory,
} from '@/models'
import { defaultState } from './defaultState'

export interface State {
  profile: Profile
  personalInfo: PersonalInformation
  languages: Skill[]
  interests: Interest[]
  isSideBarOpen: boolean
  skills: Skill[]
  topSkills: Skill[]
  workHistory: WorkHistory[]
}

export default () => defaultState
