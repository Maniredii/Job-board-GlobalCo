// ============================================
// JobSphere — Mock Data & Data Utilities
// ============================================

// Indian Cities & States for location filtering
export const indianStates = [
  'Andhra Pradesh', 'Karnataka', 'Kerala', 'Maharashtra', 'Tamil Nadu',
  'Telangana', 'Delhi', 'Gujarat', 'Rajasthan', 'West Bengal',
  'Uttar Pradesh', 'Madhya Pradesh', 'Punjab', 'Haryana',
];

export const indianCities = [
  { city: 'Bengaluru', state: 'Karnataka' },
  { city: 'Hyderabad', state: 'Telangana' },
  { city: 'Mumbai', state: 'Maharashtra' },
  { city: 'Pune', state: 'Maharashtra' },
  { city: 'Chennai', state: 'Tamil Nadu' },
  { city: 'New Delhi', state: 'Delhi' },
  { city: 'Gurugram', state: 'Haryana' },
  { city: 'Noida', state: 'Uttar Pradesh' },
  { city: 'Kolkata', state: 'West Bengal' },
  { city: 'Ahmedabad', state: 'Gujarat' },
  { city: 'Jaipur', state: 'Rajasthan' },
  { city: 'Thiruvananthapuram', state: 'Kerala' },
  { city: 'Kochi', state: 'Kerala' },
  { city: 'Coimbatore', state: 'Tamil Nadu' },
  { city: 'Indore', state: 'Madhya Pradesh' },
  { city: 'Chandigarh', state: 'Punjab' },
  { city: 'Visakhapatnam', state: 'Andhra Pradesh' },
  { city: 'Nagpur', state: 'Maharashtra' },
  { city: 'Lucknow', state: 'Uttar Pradesh' },
  { city: 'Bhopal', state: 'Madhya Pradesh' },
];

export const companies = [
  {
    id: 'google',
    name: 'Google',
    logo: '/logos/google.svg',
    industry: 'Technology',
    size: '10,000+',
    founded: 1998,
    website: 'https://google.com',
    description: 'A multinational technology company specializing in Internet-related services and products.',
    location: 'Bengaluru, Karnataka',
    culture: ['Innovation', 'Collaboration', 'Impact'],
    benefits: ['Health Insurance', '401(k)', 'Remote Work', 'Gym Membership', 'Free Meals'],
    rating: 4.5,
    reviewCount: 12453,
  },
  {
    id: 'microsoft',
    name: 'Microsoft',
    logo: '/logos/microsoft.svg',
    industry: 'Technology',
    size: '10,000+',
    founded: 1975,
    website: 'https://microsoft.com',
    description: 'A multinational technology corporation producing computer software, consumer electronics, and related services.',
    location: 'Hyderabad, Telangana',
    culture: ['Growth Mindset', 'Diversity', 'Innovation'],
    benefits: ['Health Insurance', '401(k)', 'Stock Options', 'Parental Leave', 'Education Budget'],
    rating: 4.3,
    reviewCount: 9876,
  },
  {
    id: 'stripe',
    name: 'Stripe',
    logo: '/logos/stripe.svg',
    industry: 'Fintech',
    size: '5,000-10,000',
    founded: 2010,
    website: 'https://stripe.com',
    description: 'A financial infrastructure platform for businesses, processing payments for internet businesses.',
    location: 'Mumbai, Maharashtra',
    culture: ['Meritocracy', 'Transparency', 'User Focus'],
    benefits: ['Health Insurance', 'Equity', 'Remote Work', 'Learning Budget', 'Wellness Stipend'],
    rating: 4.6,
    reviewCount: 3421,
  },
  {
    id: 'airbnb',
    name: 'Airbnb',
    logo: '/logos/airbnb.svg',
    industry: 'Travel & Hospitality',
    size: '5,000-10,000',
    founded: 2008,
    website: 'https://airbnb.com',
    description: 'An online marketplace for lodging, primarily homestays for vacation rentals, and tourism activities.',
    location: 'Gurugram, Haryana',
    culture: ['Belonging', 'Adventure', 'Creativity'],
    benefits: ['Travel Credits', 'Health Insurance', 'Remote Work', 'Stock Options', 'Parental Leave'],
    rating: 4.4,
    reviewCount: 5632,
  },
  {
    id: 'spotify',
    name: 'Spotify',
    logo: '/logos/spotify.svg',
    industry: 'Entertainment',
    size: '5,000-10,000',
    founded: 2006,
    website: 'https://spotify.com',
    description: 'A digital music streaming service giving you access to millions of songs, podcasts, and videos.',
    location: 'Chennai, Tamil Nadu',
    culture: ['Innovation', 'Collaboration', 'Passion'],
    benefits: ['Premium Account', 'Health Insurance', 'Flexible Hours', 'Education Budget', 'Remote Work'],
    rating: 4.2,
    reviewCount: 4123,
  },
  {
    id: 'netflix',
    name: 'Netflix',
    logo: '/logos/netflix.svg',
    industry: 'Entertainment',
    size: '10,000+',
    founded: 1997,
    website: 'https://netflix.com',
    description: 'A streaming service offering a wide variety of award-winning TV shows, movies, anime, and more.',
    location: 'Mumbai, Maharashtra',
    culture: ['Freedom & Responsibility', 'High Performance', 'Innovation'],
    benefits: ['Unlimited PTO', 'Top of Market Pay', 'Stock Options', 'Health Insurance', 'Relocation'],
    rating: 4.1,
    reviewCount: 6789,
  },
  {
    id: 'shopify',
    name: 'Shopify',
    logo: '/logos/shopify.svg',
    industry: 'E-Commerce',
    size: '5,000-10,000',
    founded: 2006,
    website: 'https://shopify.com',
    description: 'A leading global commerce company providing tools to start, grow, market, and manage a retail business.',
    location: 'Pune, Maharashtra',
    culture: ['Entrepreneurship', 'Impact', 'Trust'],
    benefits: ['Health Insurance', 'Stock Options', 'Remote Work', 'Learning Budget', 'Home Office Budget'],
    rating: 4.3,
    reviewCount: 3987,
  },
  {
    id: 'figma',
    name: 'Figma',
    logo: '/logos/figma.svg',
    industry: 'Design Tools',
    size: '1,000-5,000',
    founded: 2012,
    website: 'https://figma.com',
    description: 'A collaborative interface design tool that allows teams to design, prototype, and gather feedback.',
    location: 'Bengaluru, Karnataka',
    culture: ['Design Thinking', 'Collaboration', 'Craft'],
    benefits: ['Health Insurance', 'Equity', 'Remote Work', 'Learning Budget', 'Mental Health Support'],
    rating: 4.7,
    reviewCount: 1567,
  },
];

export const categories = [
  { id: 'engineering', name: 'Engineering', icon: '⚡', count: 1243, color: '#6366f1' },
  { id: 'design', name: 'Design', icon: '🎨', count: 534, color: '#ec4899' },
  { id: 'marketing', name: 'Marketing', icon: '📢', count: 412, color: '#f59e0b' },
  { id: 'sales', name: 'Sales', icon: '💼', count: 356, color: '#10b981' },
  { id: 'product', name: 'Product', icon: '📦', count: 289, color: '#8b5cf6' },
  { id: 'data-science', name: 'Data Science', icon: '📊', count: 478, color: '#06b6d4' },
  { id: 'devops', name: 'DevOps', icon: '🔧', count: 312, color: '#f97316' },
  { id: 'management', name: 'Management', icon: '👥', count: 198, color: '#14b8a6' },
];

export const jobs = [
  {
    id: 'senior-frontend-google',
    title: 'Senior Frontend Engineer',
    company: 'google',
    category: 'engineering',
    type: 'Full-time',
    level: 'Senior',
    location: 'Bengaluru, Karnataka',
    remote: 'Hybrid',
    salary: { min: 2500000, max: 4500000, currency: 'INR' },
    description: `We're looking for a Senior Frontend Engineer to join our Search team. You'll be responsible for building the next generation of search experiences that reach billions of users worldwide.

You will work closely with product managers, designers, and backend engineers to deliver high-quality, performant web applications. The ideal candidate has deep expertise in modern JavaScript frameworks and a passion for creating exceptional user experiences.`,
    requirements: [
      '7+ years of experience in frontend development',
      'Expert knowledge of React, TypeScript, and modern CSS',
      'Experience with large-scale web applications',
      'Strong understanding of web performance optimization',
      'Experience with testing frameworks (Jest, Cypress)',
      'Excellent communication and collaboration skills',
    ],
    responsibilities: [
      'Design and implement new features for Google Search',
      'Optimize web performance for billions of users',
      'Mentor junior engineers and conduct code reviews',
      'Collaborate with cross-functional teams',
      'Contribute to technical architecture decisions',
    ],
    skills: ['React', 'TypeScript', 'CSS', 'Node.js', 'GraphQL', 'Performance'],
    benefits: ['Health Insurance', '401(k) Match', 'Stock Options', 'Free Meals', 'Gym'],
    passoutYear: '2020',
    postedDate: '2025-05-01',
    deadline: '2025-06-01',
    applicants: 234,
    featured: true,
  },
  {
    id: 'product-designer-stripe',
    title: 'Product Designer',
    company: 'stripe',
    category: 'design',
    type: 'Full-time',
    level: 'Mid',
    location: 'Mumbai, Maharashtra',
    remote: 'Remote',
    salary: { min: 1800000, max: 3000000, currency: 'INR' },
    description: `Join Stripe's design team to create beautiful, intuitive payment experiences. You'll be designing products that millions of businesses use every day to accept payments and manage their finances.

We value designers who can think strategically and execute with precision. You'll have the opportunity to work on complex problems with real-world impact.`,
    requirements: [
      '4+ years of product design experience',
      'Strong portfolio showcasing end-to-end design process',
      'Proficiency in Figma and prototyping tools',
      'Experience with design systems',
      'Understanding of frontend development principles',
      'Experience in fintech or payments industry is a plus',
    ],
    responsibilities: [
      'Design intuitive user interfaces for payment products',
      'Create and maintain design system components',
      'Conduct user research and usability testing',
      'Collaborate with engineers to ship pixel-perfect designs',
      'Present design concepts to stakeholders',
    ],
    skills: ['Figma', 'UI/UX', 'Design Systems', 'Prototyping', 'User Research'],
    benefits: ['Health Insurance', 'Equity', 'Remote Work', 'Learning Budget'],
    passoutYear: '2022',
    postedDate: '2025-04-28',
    deadline: '2025-05-28',
    applicants: 187,
    featured: true,
  },
  {
    id: 'ml-engineer-microsoft',
    title: 'Machine Learning Engineer',
    company: 'microsoft',
    category: 'data-science',
    type: 'Full-time',
    level: 'Senior',
    location: 'Hyderabad, Telangana',
    remote: 'Hybrid',
    salary: { min: 3000000, max: 5000000, currency: 'INR' },
    description: `Join Microsoft's AI & Research division to build cutting-edge machine learning models. You'll work on large language models and AI systems that power products used by millions.

This is an opportunity to push the boundaries of what's possible with AI and make a significant impact on the future of technology.`,
    requirements: [
      '5+ years of ML/AI experience',
      'PhD or MS in Computer Science, ML, or related field',
      'Strong programming skills in Python',
      'Experience with PyTorch or TensorFlow',
      'Published research papers is a plus',
      'Experience with large-scale distributed systems',
    ],
    responsibilities: [
      'Develop and train large-scale ML models',
      'Research and implement state-of-the-art algorithms',
      'Optimize model performance and inference speed',
      'Collaborate with research scientists and engineers',
      'Contribute to open-source ML tools and frameworks',
    ],
    skills: ['Python', 'PyTorch', 'TensorFlow', 'NLP', 'Computer Vision', 'MLOps'],
    benefits: ['Health Insurance', '401(k)', 'Stock Options', 'Education Budget'],
    passoutYear: '2021',
    postedDate: '2025-05-02',
    deadline: '2025-06-15',
    applicants: 312,
    featured: true,
  },
  {
    id: 'growth-marketing-airbnb',
    title: 'Growth Marketing Manager',
    company: 'airbnb',
    category: 'marketing',
    type: 'Full-time',
    level: 'Mid',
    location: 'Gurugram, Haryana',
    remote: 'Remote',
    salary: { min: 1500000, max: 2500000, currency: 'INR' },
    description: `We're seeking a Growth Marketing Manager to drive user acquisition and engagement for Airbnb. You'll develop and execute data-driven marketing strategies to grow our global community.

The ideal candidate combines creativity with analytical rigor to optimize campaigns across multiple channels.`,
    requirements: [
      '4+ years of growth marketing experience',
      'Experience with paid acquisition channels (Google, Meta, TikTok)',
      'Strong analytical skills and experience with data tools',
      'Experience with A/B testing and experimentation',
      'Knowledge of SEO and content marketing',
      'Travel or hospitality industry experience preferred',
    ],
    responsibilities: [
      'Develop and execute growth marketing strategies',
      'Manage multi-channel paid acquisition campaigns',
      'Analyze marketing performance and optimize ROI',
      'Collaborate with product and data teams',
      'Identify new growth opportunities and channels',
    ],
    skills: ['Growth Marketing', 'Analytics', 'SEO', 'Paid Ads', 'A/B Testing'],
    benefits: ['Travel Credits', 'Health Insurance', 'Remote Work', 'Stock Options'],
    passoutYear: '2022',
    postedDate: '2025-04-25',
    deadline: '2025-05-25',
    applicants: 156,
    featured: false,
  },
  {
    id: 'backend-engineer-spotify',
    title: 'Backend Engineer',
    company: 'spotify',
    category: 'engineering',
    type: 'Full-time',
    level: 'Entry Level',
    location: 'Chennai, Tamil Nadu',
    remote: 'Hybrid',
    salary: { min: 1200000, max: 2200000, currency: 'INR' },
    description: `Join Spotify's backend engineering team to build the infrastructure that powers music streaming for over 500 million users. You'll work on microservices, data pipelines, and real-time systems.

We're looking for engineers who are passionate about building scalable, reliable systems and are excited about the intersection of technology and music.`,
    requirements: [
      '3+ years of backend development experience',
      'Proficiency in Java, Scala, or Python',
      'Experience with microservices architecture',
      'Knowledge of cloud platforms (GCP, AWS)',
      'Experience with event-driven architectures',
      'Understanding of distributed systems',
    ],
    responsibilities: [
      'Design and build scalable microservices',
      'Optimize system performance and reliability',
      'Implement data pipelines and real-time processing',
      'Participate in on-call rotations',
      'Contribute to system architecture decisions',
    ],
    skills: ['Java', 'Python', 'Microservices', 'GCP', 'Kafka', 'Docker'],
    benefits: ['Premium Account', 'Health Insurance', 'Flexible Hours', 'Education Budget'],
    passoutYear: '2024',
    postedDate: '2025-04-30',
    deadline: '2025-05-30',
    applicants: 98,
    featured: false,
  },
  {
    id: 'data-scientist-netflix',
    title: 'Data Scientist - Content Analytics',
    company: 'netflix',
    category: 'data-science',
    type: 'Full-time',
    level: 'Senior',
    location: 'Mumbai, Maharashtra',
    remote: 'On-site',
    salary: { min: 2800000, max: 4000000, currency: 'INR' },
    description: `Netflix is looking for a Data Scientist to join our Content Analytics team. You'll analyze viewing patterns, predict content performance, and provide insights that drive billions of dollars in content investment decisions.

You'll work alongside some of the brightest minds in data science and have access to one of the most unique datasets in the world.`,
    requirements: [
      '5+ years of data science experience',
      'MS or PhD in Statistics, Economics, or related field',
      'Expert in SQL and Python',
      'Experience with causal inference and experimentation',
      'Strong visualization and communication skills',
      'Entertainment industry experience is a plus',
    ],
    responsibilities: [
      'Analyze content performance and viewing patterns',
      'Build predictive models for content success',
      'Design and analyze A/B experiments',
      'Present insights to executive leadership',
      'Develop analytical frameworks and dashboards',
    ],
    skills: ['Python', 'SQL', 'Statistics', 'Machine Learning', 'Causal Inference', 'Tableau'],
    benefits: ['Unlimited PTO', 'Top of Market Pay', 'Stock Options', 'Health Insurance'],
    passoutYear: '2020',
    postedDate: '2025-05-03',
    deadline: '2025-06-03',
    applicants: 267,
    featured: true,
  },
  {
    id: 'devops-engineer-shopify',
    title: 'Senior DevOps Engineer',
    company: 'shopify',
    category: 'devops',
    type: 'Full-time',
    level: 'Senior',
    location: 'Pune, Maharashtra',
    remote: 'Remote',
    salary: { min: 2200000, max: 3500000, currency: 'INR' },
    description: `Shopify is seeking a Senior DevOps Engineer to help us scale our infrastructure. You'll be responsible for building and maintaining the platform that powers over 4 million stores worldwide.

Join a team that values automation, reliability, and developer experience. You'll have a direct impact on how we ship software to millions of merchants.`,
    requirements: [
      '6+ years of DevOps/SRE experience',
      'Expert knowledge of Kubernetes and Docker',
      'Experience with infrastructure as code (Terraform)',
      'Strong Linux and networking skills',
      'Experience with CI/CD pipelines',
      'Knowledge of monitoring and observability tools',
    ],
    responsibilities: [
      'Design and maintain Kubernetes clusters',
      'Build and optimize CI/CD pipelines',
      'Implement infrastructure as code practices',
      'Monitor system health and respond to incidents',
      'Mentor team members on DevOps best practices',
    ],
    skills: ['Kubernetes', 'Docker', 'Terraform', 'AWS', 'CI/CD', 'Linux'],
    benefits: ['Health Insurance', 'Stock Options', 'Remote Work', 'Home Office Budget'],
    passoutYear: '2019',
    postedDate: '2025-04-27',
    deadline: '2025-05-27',
    applicants: 143,
    featured: false,
  },
  {
    id: 'product-manager-figma',
    title: 'Product Manager',
    company: 'figma',
    category: 'product',
    type: 'Full-time',
    level: 'Senior',
    location: 'Bengaluru, Karnataka',
    remote: 'Hybrid',
    salary: { min: 2500000, max: 3800000, currency: 'INR' },
    description: `Figma is looking for a Product Manager to lead our collaboration features. You'll define the product vision and strategy for how millions of designers and developers work together.

This is an exciting opportunity to shape the future of design collaboration and make an impact on the creative industry.`,
    requirements: [
      '5+ years of product management experience',
      'Experience with design or developer tools',
      'Strong analytical and data-driven decision making',
      'Excellent cross-functional leadership skills',
      'Experience with B2B SaaS products',
      'Technical background preferred',
    ],
    responsibilities: [
      'Define product vision and strategy for collaboration features',
      'Prioritize features based on user research and data',
      'Work closely with engineering and design teams',
      'Communicate product roadmap to stakeholders',
      'Analyze product metrics and identify opportunities',
    ],
    skills: ['Product Strategy', 'Data Analysis', 'User Research', 'Agile', 'Technical'],
    benefits: ['Health Insurance', 'Equity', 'Remote Work', 'Learning Budget'],
    passoutYear: '2020',
    postedDate: '2025-05-04',
    deadline: '2025-06-04',
    applicants: 189,
    featured: true,
  },
  {
    id: 'sales-manager-google',
    title: 'Enterprise Sales Manager',
    company: 'google',
    category: 'sales',
    type: 'Full-time',
    level: 'Senior',
    location: 'New Delhi, Delhi',
    remote: 'Hybrid',
    salary: { min: 2000000, max: 3500000, currency: 'INR' },
    description: `Join Google Cloud's Enterprise Sales team to drive adoption of cloud solutions among Fortune 500 companies. You'll manage strategic accounts and build long-term relationships with C-level executives.`,
    requirements: [
      '7+ years of enterprise sales experience',
      'Track record of exceeding sales quotas',
      'Experience selling cloud or SaaS solutions',
      'Strong relationship building skills',
      'MBA preferred',
    ],
    responsibilities: [
      'Manage and grow enterprise accounts',
      'Develop strategic account plans',
      'Lead complex sales cycles',
      'Collaborate with solution architects',
      'Forecast and report on pipeline',
    ],
    skills: ['Enterprise Sales', 'Cloud', 'Negotiation', 'Account Management', 'CRM'],
    benefits: ['Commission', 'Health Insurance', '401(k)', 'Stock Options'],
    passoutYear: '2019',
    postedDate: '2025-04-29',
    deadline: '2025-05-29',
    applicants: 112,
    featured: false,
  },
  {
    id: 'engineering-manager-stripe',
    title: 'Engineering Manager - Payments',
    company: 'stripe',
    category: 'management',
    type: 'Contract',
    level: 'Lead',
    location: 'Mumbai, Maharashtra',
    remote: 'Hybrid',
    salary: { min: 3500000, max: 5500000, currency: 'INR' },
    description: `Lead a team of world-class engineers building Stripe's core payments infrastructure. You'll manage a team of 8-12 engineers and drive technical strategy for payment processing that handles billions of dollars.`,
    requirements: [
      '8+ years of software engineering experience',
      '3+ years of engineering management experience',
      'Experience with payments or financial systems',
      'Strong technical background and systems thinking',
      'Excellent leadership and communication skills',
    ],
    responsibilities: [
      'Lead and grow a team of 8-12 engineers',
      'Drive technical strategy for payments infrastructure',
      'Partner with product and design on roadmap',
      'Recruit and develop engineering talent',
      'Ensure high availability and reliability',
    ],
    skills: ['Engineering Management', 'Payments', 'System Design', 'Leadership', 'Distributed Systems'],
    benefits: ['Health Insurance', 'Equity', 'Parental Leave', 'Learning Budget'],
    passoutYear: '2018',
    postedDate: '2025-05-01',
    deadline: '2025-06-01',
    applicants: 87,
    featured: true,
  },
  {
    id: 'frontend-engineer-netflix',
    title: 'Frontend Engineer - TV UI',
    company: 'netflix',
    category: 'engineering',
    type: 'Internship',
    level: 'Intern',
    location: 'Noida, Uttar Pradesh',
    remote: 'Hybrid',
    salary: { min: 600000, max: 1200000, currency: 'INR' },
    description: `Build the Netflix experience on Smart TVs and streaming devices. You'll develop performant, beautiful UI that works across hundreds of different devices.`,
    requirements: [
      '3+ years of frontend development experience',
      'Experience with React or similar frameworks',
      'Interest in embedded systems or TV platforms',
      'Strong JavaScript fundamentals',
      'Performance optimization experience',
    ],
    responsibilities: [
      'Develop TV UI features using React',
      'Optimize performance across devices',
      'Collaborate with platform teams',
      'Write unit and integration tests',
      'Participate in design reviews',
    ],
    skills: ['React', 'JavaScript', 'Performance', 'TV Platforms', 'CSS'],
    benefits: ['Unlimited PTO', 'Top of Market Pay', 'Health Insurance'],
    passoutYear: '2025',
    postedDate: '2025-05-02',
    deadline: '2025-06-02',
    applicants: 203,
    featured: false,
  },
  {
    id: 'ux-researcher-airbnb',
    title: 'UX Researcher',
    company: 'airbnb',
    category: 'design',
    type: 'Full-time',
    level: 'Mid',
    location: 'Gurugram, Haryana',
    remote: 'Remote',
    salary: { min: 1600000, max: 2800000, currency: 'INR' },
    description: `Help us understand what makes great travel experiences by conducting research that shapes Airbnb's products. You'll lead studies, analyze data, and present insights that impact millions of users.`,
    requirements: [
      '3+ years of UX research experience',
      'Experience with qualitative and quantitative methods',
      'Strong storytelling and presentation skills',
      'Experience with survey design and analysis',
      'Masters in HCI, Psychology, or related field',
    ],
    responsibilities: [
      'Plan and conduct user research studies',
      'Synthesize findings into actionable insights',
      'Present research to cross-functional teams',
      'Build and maintain research repositories',
      'Advocate for user-centered design',
    ],
    skills: ['User Research', 'Usability Testing', 'Survey Design', 'Data Analysis', 'Presentation'],
    benefits: ['Travel Credits', 'Health Insurance', 'Remote Work'],
    passoutYear: '2023',
    postedDate: '2025-04-26',
    deadline: '2025-05-26',
    applicants: 134,
    featured: false,
  },
];

// Helper functions
export function getAllJobs() {
  let allJobs = [...jobs];
  if (typeof window !== 'undefined') {
    try {
      const userJobs = JSON.parse(localStorage.getItem('jobsphere-user-jobs') || '[]');
      allJobs = [...userJobs, ...allJobs];
    } catch (e) {
      console.error('Failed to load user jobs', e);
    }
  }
  return allJobs;
}

export function getCompany(companyId) {
  return companies.find(c => c.id === companyId);
}

export function getJob(jobId) {
  return getAllJobs().find(j => j.id === jobId);
}

export function getJobWithCompany(jobId) {
  const job = getJob(jobId);
  if (!job) return null;
  return { ...job, companyData: getCompany(job.company) || job.companyMeta };
}

export function getJobsByCompany(companyId) {
  return getAllJobs().filter(j => j.company === companyId);
}

export function getJobsByCategory(categoryId) {
  return getAllJobs().filter(j => j.category === categoryId);
}

export function getFeaturedJobs() {
  return getAllJobs().filter(j => j.featured);
}

export function addJob(formData) {
  const id = formData.title.toLowerCase().replace(/\s+/g, '-') + '-' + Date.now();
  const today = new Date().toISOString().split('T')[0];
  const deadline = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

  const newJob = {
    id,
    title: formData.title,
    company: formData.company.toLowerCase().replace(/\s+/g, '-'),
    category: formData.category,
    type: formData.type,
    level: formData.level,
    location: formData.location,
    remote: formData.remote,
    salary: {
      min: parseInt(formData.salaryMin, 10) || 0,
      max: parseInt(formData.salaryMax, 10) || 0,
      currency: 'INR',
    },
    description: formData.description,
    requirements: formData.requirements.split('\n').filter(r => r.trim()),
    responsibilities: formData.responsibilities.split('\n').filter(r => r.trim()),
    skills: formData.skills.split(',').map(s => s.trim()).filter(Boolean),
    benefits: formData.benefits.split(',').map(b => b.trim()).filter(Boolean),
    postedDate: today,
    deadline,
    applicants: 0,
    featured: false,
    passoutYear: formData.passoutYear || '',
    userPosted: true,
    companyMeta: {
      name: formData.company,
      website: formData.companyWebsite,
      description: formData.companyDescription,
      contactEmail: formData.contactEmail,
    },
  };

  if (typeof window !== 'undefined') {
    try {
      const userJobs = JSON.parse(localStorage.getItem('jobsphere-user-jobs') || '[]');
      userJobs.unshift(newJob);
      localStorage.setItem('jobsphere-user-jobs', JSON.stringify(userJobs));
    } catch (e) {
      console.error('Failed to save user job', e);
    }
  }

  jobs.unshift(newJob);
  return newJob;
}

export function searchJobs({ query, category, type, level, remote, location, sortBy = 'newest', minSalary, passoutYear }) {
  let results = getAllJobs();

  if (query) {
    const q = query.toLowerCase();
    results = results.filter(j => 
      j.title.toLowerCase().includes(q) ||
      j.skills.some(s => s.toLowerCase().includes(q)) ||
      getCompany(j.company)?.name.toLowerCase().includes(q)
    );
  }

  if (category) {
    results = results.filter(j => j.category === category);
  }

  if (type) {
    results = results.filter(j => j.type === type);
  }

  if (level) {
    results = results.filter(j => j.level === level);
  }

  if (remote) {
    results = results.filter(j => j.remote === remote);
  }

  if (location) {
    const loc = location.toLowerCase();
    results = results.filter(j => {
      const jobLoc = j.location.toLowerCase();
      // Match city name or state name
      return jobLoc.includes(loc);
    });
  }

  if (minSalary) {
    const minSal = parseInt(minSalary, 10);
    results = results.filter(j => j.salary.max >= minSal || j.salary.min >= minSal);
  }

  if (passoutYear) {
    results = results.filter(j => j.passoutYear === passoutYear);
  }

  // Sorting
  switch (sortBy) {
    case 'newest':
      results.sort((a, b) => new Date(b.postedDate) - new Date(a.postedDate));
      break;
    case 'salary-high':
      results.sort((a, b) => b.salary.max - a.salary.max);
      break;
    case 'salary-low':
      results.sort((a, b) => a.salary.min - b.salary.min);
      break;
    case 'applicants':
      results.sort((a, b) => a.applicants - b.applicants);
      break;
    default:
      break;
  }

  return results;
}

export function formatSalary(salary) {
  const locale = salary.currency === 'INR' ? 'en-IN' : 'en-US';
  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: salary.currency,
    maximumFractionDigits: 0,
  });
  return `${formatter.format(salary.min)} - ${formatter.format(salary.max)}`;
}

export function timeAgo(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffInDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));
  
  if (diffInDays === 0) return 'Today';
  if (diffInDays === 1) return 'Yesterday';
  if (diffInDays < 7) return `${diffInDays} days ago`;
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
  if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} months ago`;
  return `${Math.floor(diffInDays / 365)} years ago`;
}

export function getStats() {
  return {
    totalJobs: jobs.length,
    totalCompanies: companies.length,
    totalCategories: categories.length,
    totalApplicants: jobs.reduce((sum, j) => sum + j.applicants, 0),
    featuredJobs: jobs.filter(j => j.featured).length,
    remoteJobs: jobs.filter(j => j.remote === 'Remote').length,
  };
}
