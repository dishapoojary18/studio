import type { Internship, QA, Rating } from '@/lib/types';

export const internships: Internship[] = [
  {
    id: '1',
    title: 'Frontend Developer Intern',
    company: 'Vercel',
    location: 'Remote',
    stipend: '₹25,000/month',
    duration: '3 Months',
    postedDate: '2 days ago',
  },
  {
    id: '2',
    title: 'Backend Developer Intern (Node.js)',
    company: 'Stripe',
    location: 'Bangalore',
    stipend: '₹35,000/month',
    duration: '6 Months',
    postedDate: '1 week ago',
  },
  {
    id: '3',
    title: 'Data Science Intern',
    company: 'Google',
    location: 'Hyderabad',
    stipend: '₹40,000/month',
    duration: '6 Months',
    postedDate: '3 days ago',
  },
  {
    id: '4',
    title: 'UI/UX Design Intern',
    company: 'Figma',
    location: 'Remote',
    stipend: '₹20,000/month',
    duration: '2 Months',
    postedDate: '5 days ago',
  },
  {
    id: '5',
    title: 'Product Management Intern',
    company: 'Microsoft',
    location: 'Bangalore',
    stipend: '₹30,000/month',
    duration: '4 Months',
    postedDate: '1 day ago',
  },
  {
    id: '6',
    title: 'Software Engineer Intern',
    company: 'Amazon',
    location: 'Hyderabad',
    stipend: '₹45,000/month',
    duration: '6 Months',
    postedDate: '10 days ago',
  },
];

export const questions: QA[] = [
  {
    id: '1',
    question: 'How accurate is the AI analysis?',
    answer:
      'Our AI, powered by Google\'s Gemini, is trained on a massive dataset of job descriptions and resumes. It provides a highly accurate analysis of the skills required for a specific role and how your resume stacks up. However, it should be used as a guide, not an absolute measure.',
  },
  {
    id: '2',
    question: 'Is my resume data safe?',
    answer:
      'Absolutely. We prioritize your privacy. Your resume is processed securely and is not stored long-term or used for any purpose other than providing you with the analysis. We do not share your data with third parties.',
  },
  {
    id: '3',
    question: 'Where do the course recommendations come from?',
    answer:
      'The AI suggests highly-rated and relevant courses from popular online learning platforms like Coursera and Udemy based on the specific skills you need to develop.',
  },
  {
    id: '4',
    question: 'How often is the internship list updated?',
    answer:
      'Our internship listings are for demonstration purposes in this version of the application. In a full-fledged product, these would be updated in real-time from various job portals.',
  },
];

export const ratings: Rating[] = [
    {
        id: '1',
        name: 'Priya Sharma',
        role: 'Computer Science Student',
        rating: 5,
        comment: 'SkillGap AI was a game-changer! It showed me exactly what I was missing for a Data Scientist role and suggested the perfect course. Highly recommend!',
        avatar: 'https://i.pravatar.cc/150?u=priya'
    },
    {
        id: '2',
        name: 'Rahul Verma',
        role: 'Aspiring Product Manager',
        rating: 4,
        comment: 'The analysis was incredibly detailed. It helped me re-focus my learning efforts. The UI is also very clean and easy to use.',
        avatar: 'https://i.pravatar.cc/150?u=rahul'
    },
    {
        id: '3',
        name: 'Anjali Singh',
        role: 'Final Year B.Tech Student',
        rating: 5,
        comment: 'I was struggling to get interviews. SkillGap pointed out key weaknesses in my resume. After updating it and taking a suggested course, I landed an internship!',
        avatar: 'https://i.pravatar.cc/150?u=anjali'
    },
    {
        id: '4',
        name: 'Amit Kumar',
        role: 'Job Seeker',
        rating: 4,
        comment: 'A great tool for anyone looking to upskill. The internship feature is a nice touch, though I wish there were more listings. The analysis is top-notch.',
        avatar: 'https://i.pravatar.cc/150?u=amit'
    }
]
