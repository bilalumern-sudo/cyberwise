export interface CourseModule {
  id: string;
  title: string;
  bullets?: string[];
}

export interface Course {
  id: string;
  title: string;
  category: 'Marketing' | 'Media' | 'Business' | 'Communication';
  description: string;
  duration: string;
  level: string;
  badge?: string;
  modules: string[];
  careerOptions: string[];
  imageUrl: string;
}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  course: string;
  quote: string;
  avatarUrl: string;
  rating: number;
  badge?: string;
}

export interface InquiryForm {
  name: string;
  phone: string;
  email: string;
  courseInterested: string;
  message: string;
}

export interface PathwayStep {
  step: string;
  title: string;
  description: string;
  academicOutcome: string;
  careerOutcome: string;
}
