export type ActivityType = 'interview' | 'insight_search' | 'survey' | 'review' | 'twin_creation';

// !NOTE: not sure what could be other statuses
type TwinStatus = 'interview';

export interface Activity {
  activityType: ActivityType;
  name: string;
  completedAt: number;
  source?: string;
}

export type PersonalityLevel = 'high' | 'medium' | 'low';

export interface PersonalityTraces {
  impulsiveness: PersonalityLevel;
  exploratoryBehavior: PersonalityLevel;
  needForCognition: PersonalityLevel;
  riskAversion: PersonalityLevel;
  optimism: PersonalityLevel;
  needForUniqueness: PersonalityLevel;
}

export type Gender = 'male' | 'female' | 'other';

export type MaritalStatus = 'single' | 'married' | 'divorced' | 'widowed';

export interface Sociodemographics {
  gender: Gender;
  age: number;
  residence: string;
  maritalStatus: MaritalStatus;
  children: number;
  householdIncome: number;
  profession: string;
}

interface Twin {
  id: string;
  firstname: string;
  lastname: string;
  createdAt: number;
  email: string;
  lastUpdatedAt: number;
  status: TwinStatus;
  sociodemographics: Sociodemographics;
  personalityTraces: PersonalityTraces;
  interests: string[];
  activitiesHistory: Activity[];
}

export interface PanelData {
  twins: Twin[];
}
