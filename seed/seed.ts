// seed/seed.ts

export const visaInfo = [
  {
    id: 1,
    title: "Study Permit Basics",
    description:
      "A study permit is required for international students to study in Canada for over 6 months.",
    content:
      "To study in Canada for more than six months, international students must obtain a study permit...",
    link: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit.html",
    university: "General",
    author: { name: "Emma Johnson", email: "emma@ish.com" },
    rating: { likes: 25, average: 4.5 },
  },
  {
    id: 2,
    title: "Work Permit Options",
    description:
      "Post-graduation work permits allow students to work in Canada after their studies.",
    content:
      "After completing your studies, a Post-Graduation Work Permit (PGWP) lets you work in Canada...",
    link: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work.html",
    university: "General",
    author: { name: "Liam Patel", email: "liam@ish.com" },
    rating: { likes: 18, average: 4.2 },
  },
  {
    id: 3,
    title: "Navigating UofT’s Visa Process",
    description: "Tips for University of Toronto students applying for study permits.",
    content:
      "At the University of Toronto, international students should start their visa process...",
    link: "https://www.utoronto.ca/international-students",
    university: "University of Toronto",
    author: { name: "Sophia Chen", email: "sophia@ish.com" },
    rating: { likes: 30, average: 4.7 },
  },
  {
    id: 4,
    title: "Housing and Visas at UBC",
    description: "How UBC students can align visa applications with housing needs.",
    content:
      "The University of British Columbia (UBC) advises students to secure a study permit...",
    link: "https://students.ubc.ca/international",
    university: "University of British Columbia",
    author: { name: "Noah Kim", email: "noah@ish.com" },
    rating: { likes: 22, average: 4.3 },
  },
  {
    id: 5,
    title: "McGill’s Guide to Co-op Work Permits",
    description: "Understanding co-op work permits for McGill University students.",
    content:
      "McGill’s co-op programs require a special Co-op Work Permit in addition to your study permit...",
    link: "https://www.mcgill.ca/internationalstudents/work/co-op",
    university: "McGill University",
    author: { name: "Ava Rodriguez", email: "ava@ish.com" },
    rating: { likes: 15, average: 4.0 },
  },
  {
    id: 6,
    title: "Extending Your Stay in Canada",
    description: "Steps to extend your study permit before it expires.",
    content:
      "To extend your study permit, apply online at least 30 days before it expires...",
    link: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/extend-study-permit.html",
    university: "General",
    author: { name: "Ethan Lee", email: "ethan@ish.com" },
    rating: { likes: 20, average: 4.4 },
  },
  {
    id: 7,
    title: "UAlberta’s Visa Tips for Newcomers",
    description: "Visa advice tailored for University of Alberta students.",
    content:
      "New international students at the University of Alberta should prepare for their study permit...",
    link: "https://www.ualberta.ca/international",
    university: "University of Alberta",
    author: { name: "Olivia Smith", email: "olivia@ish.com" },
    rating: { likes: 28, average: 4.6 },
  },
  {
    id: 8,
    title: "Health Insurance and Visas",
    description: "How visa status affects health coverage in Canada.",
    content:
      "Your study permit status ties into health insurance eligibility. Most provinces require...",
    link: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/health-care.html",
    university: "General",
    author: { name: "Mason Taylor", email: "mason@ish.com" },
    rating: { likes: 17, average: 4.1 },
  },
];

// 10 job listings total:
export const jobs = [
  {
    id: 1,
    title: "Part-Time Barista",
    company: "Tim Hortons",
    location: "Toronto, ON",
    type: "Part-Time",
    salary: "$16/hour",
    description: "Serve coffee and assist customers in a fast-paced environment.",
    contact: "hr.toronto@timhortons.ca",
    premium: false,
  },
  {
    id: 2,
    title: "Software Developer Intern",
    company: "TechCorp",
    location: "Vancouver, BC",
    type: "Internship",
    salary: "$25/hour",
    description: "Work on real projects with a skilled development team.",
    contact: "careers@techcorp.com",
    premium: true,
  },
  {
    id: 3,
    title: "Retail Assistant",
    company: "ShopCo",
    location: "Calgary, AB",
    type: "Part-Time",
    salary: "$15/hour",
    description: "Assist customers and manage inventory in a retail setting.",
    contact: "jobs@shopco.ca",
    premium: false,
  },
  {
    id: 4,
    title: "Student Research Assistant",
    company: "University Lab",
    location: "Edmonton, AB",
    type: "Part-Time",
    salary: "$18/hour",
    description: "Assist professors with data collection and analysis.",
    contact: "research@uni.ca",
    premium: false,
  },
  {
    id: 5,
    title: "Marketing Intern",
    company: "Brandify",
    location: "Montreal, QC",
    type: "Internship",
    salary: "$20/hour",
    description: "Support marketing campaigns and social media management.",
    contact: "info@brandify.com",
    premium: true,
  },
  {
    id: 6,
    title: "Library Assistant",
    company: "City Library",
    location: "Ottawa, ON",
    type: "Part-Time",
    salary: "$14/hour",
    description: "Shelve books, assist patrons, and maintain library records.",
    contact: "hr@citylibrary.ca",
    premium: false,
  },
  {
    id: 7,
    title: "Teaching Assistant (TA)",
    company: "University Department",
    location: "Toronto, ON",
    type: "Part-Time",
    salary: "$22/hour",
    description: "Grade papers, hold office hours, and support student learning.",
    contact: "ta@unidept.ca",
    premium: true,
  },
  {
    id: 8,
    title: "Campus Tour Guide",
    company: "Campus Services",
    location: "Vancouver, BC",
    type: "Seasonal",
    salary: "$17/hour",
    description: "Lead prospective students on campus tours.",
    contact: "tours@campus.ca",
    premium: false,
  },
  {
    id: 9,
    title: "Graphic Designer (Intern)",
    company: "DesignHub",
    location: "Toronto, ON",
    type: "Internship",
    salary: "$19/hour",
    description: "Create digital assets and assist with design projects.",
    contact: "hr@designhub.com",
    premium: true,
  },
  {
    id: 10,
    title: "Resident Assistant",
    company: "DormLife",
    location: "Calgary, AB",
    type: "Part-Time",
    salary: "$15/hour + housing discount",
    description: "Support dorm students and organize community events.",
    contact: "ra@dormlife.ca",
    premium: false,
  },
];

// 10 housing listings total:
export const housing = [
  {
    id: 1,
    title: "Cozy Apartment Near UBC",
    location: "Vancouver, BC",
    rent: "$1200/month",
    description: "1-bedroom apartment, 10-minute walk to UBC campus.",
    contact: "landlord.van@gmail.com",
    premium: false,
  },
  {
    id: 2,
    title: "Shared House in Downtown Toronto",
    location: "Toronto, ON",
    rent: "$800/month",
    description: "Room in a shared house, close to public transit.",
    contact: "torontohousing@outlook.com",
    premium: true,
  },
  {
    id: 3,
    title: "Studio Near McGill",
    location: "Montreal, QC",
    rent: "$1000/month",
    description: "Quiet studio apartment, perfect for students.",
    contact: "mcgill.rentals@yahoo.com",
    premium: false,
  },
  {
    id: 4,
    title: "Spacious Basement Suite",
    location: "Edmonton, AB",
    rent: "$900/month",
    description: "Furnished basement with separate entrance.",
    contact: "edmonton.rentals@abmail.ca",
    premium: false,
  },
  {
    id: 5,
    title: "2-Bed Condo",
    location: "Calgary, AB",
    rent: "$1400/month",
    description: "Newly renovated condo near downtown Calgary.",
    contact: "calgarycondo@exmaple.com",
    premium: true,
  },
  {
    id: 6,
    title: "On-Campus Residence",
    location: "Toronto, ON",
    rent: "$700/month",
    description: "Single dorm room in campus housing block.",
    contact: "campusliving@uni.ca",
    premium: false,
  },
  {
    id: 7,
    title: "Shared Loft",
    location: "Vancouver, BC",
    rent: "$1100/month",
    description: "Modern loft shared with two other students.",
    contact: "loftvan@gmail.com",
    premium: true,
  },
  {
    id: 8,
    title: "Room Near Metro Station",
    location: "Montreal, QC",
    rent: "$750/month",
    description: "Close to public transit, perfect for commuting to campus.",
    contact: "montrealrooms@service.ca",
    premium: false,
  },
  {
    id: 9,
    title: "Family Home Upper Floor",
    location: "Ottawa, ON",
    rent: "$950/month",
    description: "Private upper floor in a family home, utilities included.",
    contact: "ottawahome@provider.com",
    premium: false,
  },
  {
    id: 10,
    title: "UBC Campus Apartments",
    location: "Vancouver, BC",
    rent: "$1300/month",
    description: "On-campus apartments for graduate students.",
    contact: "ubchapts@ubc.ca",
    premium: true,
  },
];

// 5 “other services” for the new page
export const otherServices = [
  {
    id: 1,
    title: "Advanced Resume Review",
    description: "Get an in-depth review of your resume from a career expert.",
    price: 30, // base price in dollars
  },
  {
    id: 2,
    title: "Academic Writing Consultation",
    description: "One-on-one session to improve your research or essay writing.",
    price: 40,
  },
  {
    id: 3,
    title: "Mock Interview Practice",
    description:
      "Simulated interview session to boost your confidence and communication.",
    price: 25,
  },
  {
    id: 4,
    title: "LinkedIn Profile Optimization",
    description: "Stand out to recruiters with a polished LinkedIn profile.",
    price: 20,
  },
  {
    id: 5,
    title: "Scholarship Application Review",
    description:
      "Professional feedback on scholarship essays and supporting documents.",
    price: 35,
  },
];
