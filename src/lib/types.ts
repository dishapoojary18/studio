export type Internship = {
  id: string;
  title: string;
  company: string;
  location: string;
  stipend: string;
  duration: string;
  postedDate: string;
};

export type QA = {
  id: string;
  question: string;
  answer: string;
};

export type Rating = {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  avatar: string;
};
