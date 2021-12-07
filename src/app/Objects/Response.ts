export class SportResponse {
  events: [Event]
  leagues: [League] // League - Object
  season: any // Season - Object

  // Optionals 
  day: Day
  week: Week
}

export class Address {
  city: string

  // Optionals
  state: string
}

export class AlternativePlay {
  $ref: string
}

export class AlternativeType {
  abbreviation: string
  alternativeText: string
  id: string
  text: string
  type: string
}

export class Athlete {
  displayName: string // This is string, string e.g. 'Justin ', 'Holiday'
  fullName: string // Tyhis is string, string e.g. 'Justin ', 'Holiday'
  id: string
  links: [Link] // Link - Object
  position: Position // Position - Object
  shortName: string // Two part string 'J. ' 'Holiday'
  team: Team

  // Optionals
  active: boolean
  headshot: string
  jersey: string
}

export class Batter {
  athlete: Athlete
  period: number // This is inning
  playerId: number
  summary: string
}

export class Broadcast {
  market: string
  names: [string]
}

export class Competition {
  attendance: number // Check 
  broadcasts: [Broadcast] // Broadcast - Object
  competitors: [Competitor] // Competitor - Object
  conferenceCompetition: boolean
  date: string
  geoBroadcasts: GeoBroadcast
  id: string
  neutralSite: boolean
  notes: [string]
  recent: boolean
  startDate: string
  status: Status
  timeValid: boolean
  type: CompetitionType
  uid: string
  venue: Venue

  // optionals
  headlines: [Headline]
  odds: [Odd]
  situation: Situation
  tickets: [Ticket]
  series: [any] // Will need to look into this one. It might not be an array.
  wasSuspended: boolean
}

export class CompetitionType {
  abbreviation: string
  id: string
}

export class Competitor {
  homeAway: string
  id: string
  order: number
  records: [Record]
  score: string
  statistics: [Statistic]
  team: Team
  type: string
  uid: string

  // Optionals
  errors: number
  hits: number
  leaders: [Leader]
  lineScores: [Linescore]
  probables: [Probable]
  winner: boolean
}

export class Day {
  date: Date
}

export class DeviceRestrictions {
  devices: [string]
  type: string
}

export class Event {
  competitions: [Competition]
  date: string
  id: string
  links: [Link]
  name: string
  season: Season
  shortName: string
  status: Status
  uid: string

  // Optionals 
  weather: string
}

export class GeoBroadcast {
  lang: string
  market: Market
  media: Media
  region: string
  type: Geo_Type
}

export class GeoRestrictions {
  countries: [string]
  type: string
}

export class Geo_Type {
  id: string
  shortName: string
}

export class Headline {
  description: string
  shortLinkText: string
  type: string
  video: [Video]
}

export class LastPlay {
  id: string
  scoreValue: number
  text: string
  type: LastPlay_Type

  // Optionals
  alternativePlay: AlternativePlay
  alternativeType: AlternativeType
  atBatId: string
  athletesInvolved: [Athlete]
  probability: Probability
  summaryType: string
  team: Team
}

export class LastPlay_Type {
  id: string
  text: string
}

export class Leader { 
  abbreviation: string
  displayName: string
  leaders: [StatLeader]
  name: string
  shortDisplayName: string
}

export class League {
  abbreviation: string
  calendar: [string]
  calendarEndDate: string
  calendarIsWhitelist: boolean
  calendarStartDate: string
  calendarType: any // This says Enum e.g. 'day'. NEED to check
  id: string
  name: string
  season: League_Season
  slug: string
  uid: string

  // Optional
  midsizeName: string
}

export class League_Season {
  endDate: string
  startDate: string
  type: Season_Type
  year: string
}

export class Linescore {
  value: number
}

export class Link {
  href: string

  // Optionals
  isExternal: boolean
  isPremium: boolean
  language: string
  rel: [string]
  shortText: string
  text: string
}

export class Market {
  id: string
  type: string
}

export class Media {
  shortName: string
}

export class Odd {
  details: string
  overUnder: number
  provider: Provider

  // Optionals
  awayTeamOdds: TeamOdds
  homeTeamOdds: TeamOdds
}

export class Position {
  abbreviation: string
}

export class Probability {
  awayWinPercentage: number
  homeWinPercentage: number
  tiePercentage: number
}

export class Probable {
  abbreviation: string
  athlete: Athlete
}

export class Provider {
  id: string
  name: string // Two part string 'William Hill ' '(New Jersey)'
  priority: number
}

export class Record {
  abbreviation: string
  name: string // Two part string
  summary: string
  type: string // Could turn into Enum
}

export class Season {
  type: number
  year: number

  //Optionals 

  slug: number
}

export class Season_Type {
  abbreviation: string
  id: string
  name: string
  type: number
}

export class Situation {
  lastPlay: LastPlay

  // Optionals
  balls: number
  batter: Athlete
  dueUp: [Athlete]
  strikes: number
  onFirst: boolean
  onSecond: boolean
  onThird: boolean
  outs: number
  pitcher: Athlete
}

export class SpreadRecord {
  losses: number
  pushes: number
  summary: string
  wins: number
}

export class Statistic {
  abbreviation: string
  displayValue: string
  name: string // Could be enum
  rankDisplayValue: string
}

export class StatLeader {
  athlete: Athlete
  displayValue: string
  team: Team
  value: number
}

export class Status {
  clock: number
  displayClock: string
  period: number
  type: Status_Type
}

export class Status_Type {
  completed: boolean
  description: string
  detail: string
  id: string
  name: string // Could become an enum
  shortDetail: string
  state: string

  // Optionals
  altDetail: string
}

export class Team {
  id: string

  // Optionals
  abbreviation: string
  alternateColor: string
  color: string
  displayName: string // Two Parter
  isActive: boolean
  links: [Link]
  location: string
  logo: string
  name: string
  shortDisplayName: string
  uid: string
  venue: Venue
}

export class TeamOdds {
  averageScore: number
  favorite: boolean
  moneyLine: number
  spreadOdds: number
  spreadRecord: SpreadRecord
  team: Team
  underdog: boolean
}

export class Ticket {
  links: [Link]
  numberAvailable: any // This could be string or number // NEED to check
  summary: string
}

export class Tracking {
  coverageType: string
  leagueName: string
  sportName: string
  trackingId: string
  trackingName: string
}

export class Venue {
  address: Address
  capacity: number
  fullName: string
  id: string
  indoor: boolean
}

export class Video {
  deviceRestrictions: DeviceRestrictions
  duration: number
  geoRestrictions: GeoRestrictions
  headline: string
  id: number

  // Weird chunk from the python not sure what is going on with these fields
  links: [Link]
  source: string
  thumbnail: string
  tracking: Tracking
}

export class Week {
  number: number
}
