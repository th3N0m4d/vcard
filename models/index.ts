export interface Website {
  url: string
  icon: string
}

export interface ContactInfo {
  emailAddress: string
  phoneNumber: string
  dateOfBirth: Date
}

export interface Social {
  id: string
  profileUrl: string
  title: string
  icon: string
}

export interface Profile {
  aboutMe: string
  firstName: string
  lastName: string
  avatarUrl: string
  headline: string
  socialMediaLinks: Social[]
  isAvailableForWork: boolean
}

export interface PersonalInformation {
  country: string
  city: string
  location: string
  emailAddress: string
  phoneNumber: string
  dateOfBirth: string
  geolocation: {
    lat: number
    lng: number
  }
}

export interface Certificate {
  name: string
  organization: string
  credentialUrl: string
}

export interface History {
  startDate: string
  endDate?: string
  title: string
  logoUrl: string
  name: string
}

export interface Skill {
  name: string
  level?: number
}

export interface Interest {
  name: string
  icon: string
}

export interface WorkHistory extends History {
  description: string
}

export type StudyHistory = History

export interface Recommendation {
  authorsName: string
  role: string
  content: string
  companyName: string
}

export interface ContactForm {
  authorName: string
  email: string
  subject: string
  message: string
}
