import { State } from './state'

export const getters = {
  profile: (state: State) => state.profile,
  personalInfo: (state: State) => state.personalInfo,
  fullName: (state: State) =>
    `${state.profile.firstName} ${state.profile.lastName}`,

  address: (state: State) => {
    const { location, city, country } = state.personalInfo
    return `${location}, ${city}, ${country}`
  },
  mailTo: (state: State) => {
    return `mailto:${state.personalInfo.emailAddress}`
  },
  tel: (state: State) => `tel:${state.personalInfo.phoneNumber}`,
  workAvailability: (state: State) => {
    return state.profile.isAvailableForWork ? 'Available' : 'Not at this time'
  },
  interests: (state: State) => state.interests,
  languages: (state: State) => state.languages,
  topSkills: (state: State) =>
    state.topSkills.sort((a, b) => b.level - a.level),
  skills: (state: State) => state.skills.sort((a, b) => b.level - a.level),
  workHistory: (state: State) => state.workHistory,
}
