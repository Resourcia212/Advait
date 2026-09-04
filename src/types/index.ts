export type Language = 'en' | 'mr';

export interface DoctorInfo {
  name: string;
  salutation: string;
  degrees: string;
  university: string;
  registrationNo: string;
  specialization: string;
  specializationMarathi: string;
  image: string;
  additionalImages?: string[];
  phone?: string;
  displayPhone?: string;
  bio: {
    en: string;
    mr: string;
  };
  keyPillars: {
    en: string[];
    mr: string[];
  };
}

export interface ClinicLocation {
  id: string;
  clinicNumber: number;
  name: string;
  subname?: string;
  leadDoctorName: string;
  leadDoctorDegree: string;
  leadDoctorRoleEn: string;
  leadDoctorRoleMr: string;
  leadDoctorImage: string;
  leadDoctorPhone: string;
  leadDoctorDisplayPhone: string;
  addressLine1: string;
  addressLine2: string;
  landmark?: string;
  area: string;
  city: string;
  pincode?: string;
  phonePrimary: string;
  phoneSecondary: string;
  email: string;
  mapLink: string;
  badge?: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  nameMarathi: string;
  category: ServiceCategory;
  shortDescription: {
    en: string;
    mr: string;
  };
  fullDescription: {
    en: string;
    mr: string;
  };
  indications: {
    en: string[];
    mr: string[];
  };
  keyHighlights: {
    en: string[];
    mr: string[];
  };
  iconName: string;
  isFeatured?: boolean;
}

export type ServiceCategory = 
  | 'implantology'
  | 'maxillofacial'
  | 'cosmetic'
  | 'restorative';

export interface CategoryInfo {
  id: ServiceCategory;
  name: string;
  nameMarathi: string;
  icon: string;
  description: {
    en: string;
    mr: string;
  };
}

export interface MaxillofacialProsthesisItem {
  id: string;
  title: string;
  titleMarathi: string;
  organName: string;
  organNameMarathi: string;
  description: {
    en: string;
    mr: string;
  };
  clinicalObjective: {
    en: string;
    mr: string;
  };
  iconName: string;
  tags: string[];
}

export type GalleryCategory = 'all' | 'clinic' | 'implants-rehab' | 'maxillo-aesthetic';

export interface GalleryItem {
  id: string;
  title: string;
  titleMarathi: string;
  category: GalleryCategory;
  caption: {
    en: string;
    mr: string;
  };
  imageUrl: string;
  additionalImages?: string[];
  tag: string;
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  email: string;
  preferredClinic: string;
  preferredDoctor?: string;
  preferredDate: string;
  preferredTime: string;
  treatment: string;
  message: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  preferredClinic: string;
  preferredDoctor?: string;
  preferredDate?: string;
  message: string;
}
