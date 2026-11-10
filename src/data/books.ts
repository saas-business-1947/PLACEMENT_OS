export interface Book {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  authorBio: string;
  category: 'AI & Tech Prep' | 'Aptitude & Rounds' | 'Communication & GD' | 'Career & Business' | 'Mental Mastery & Time';
  problemSolved: string;
  price: number; // in INR
  originalPrice: number;
  coverImage: string;
  publicationYear: number;
  pages: number;
  readTime: string;
  isbn: string;
  formats: string[];
  description: string;
  synopsis: string;
  toc: { chapter: string; title: string; page: number }[];
  excerpt: {
    title: string;
    subtitle: string;
    content: string[];
  };
  features: string[];
  reviews: { quote: string; reviewer: string; role: string; publication: string }[];
  featured?: boolean;
}

export const BOOKS: Book[] = [
  {
    id: 'ai-placement-mastery',
    title: 'AI for Placement Preparation',
    subtitle: 'From ATS-Proof Resumes to AI Mock Interview Drills & Coding Insights',
    author: 'Arjun Sen & Tech Placement Collective',
    authorBio: 'Ex-Faang Software Architect and Senior Campus Recruiter with 10+ years conducting campus drives across IITs, NITs, and Tier-2 engineering colleges.',
    category: 'AI & Tech Prep',
    problemSolved: 'Overwhelmed by AI buzzwords, failing ATS screening, and unsure how to practice for real interview questions.',
    price: 149,
    originalPrice: 399,
    coverImage: '/assets/images/book_ai_placement_1791820203176.jpg',
    publicationYear: 2026,
    pages: 218,
    readTime: '3.5 hrs',
    isbn: '978-93-84920-01-4',
    formats: ['DRM-Free PDF', 'EPUB 3.0', 'Print-Ready A4', 'Notion Prompt Kit'],
    description: 'The definitive handbook to turn generative AI into your 24/7 personal campus placement coach—without copying generic robotic answers that get you rejected.',
    synopsis: 'Campus recruiters in 2026 can spot ChatGPT-generated resumes within 10 seconds. This playbook teaches you the reverse: how to feed real Job Descriptions (JDs) into AI to simulate tough engineering and HR interviewers, analyze edge cases in your DSA solutions, and practice high-pressure cross-questioning before you ever step into an interview room.',
    toc: [
      { chapter: 'Chapter 01', title: 'The 2026 Placement Landscape: How Companies Filter Freshers', page: 12 },
      { chapter: 'Chapter 02', title: 'ATS Deconstruction: Prompts to Align Your Resume Without Fluff', page: 44 },
      { chapter: 'Chapter 03', title: 'The Mock Interview Simulator: Crafting Hostile Interviewer Personas', page: 86 },
      { chapter: 'Chapter 04', title: 'System Design & Project Defense: Predicting Interviewer Cross-Questions', page: 132 },
      { chapter: 'Chapter 05', title: 'HR Round Master Prompts: Answering "Why This Company?" Authentically', page: 178 },
      { chapter: 'Appendix', title: '50 Copy-Paste Tested Placement Prompts for Tech & Core Branches', page: 202 },
    ],
    excerpt: {
      title: 'Chapter 03: The Mock Interview Simulator',
      subtitle: 'Prompting AI to act like an inquisitive 15-year engineering manager',
      content: [
        'The biggest mistake final year students make with AI is asking: "Give me common interview questions for React or Python." The model will return vanilla textbook questions that no serious recruiter will ever ask you.',
        'Instead, you must assign AI a adversarial role: "Act as a grumpy Staff Engineer at an enterprise SaaS company. You have reviewed my project architecture on my GitHub. Interrogate me on why I chose PostgreSQL over MongoDB, challenge my database indexing strategy, and do not accept generic answers. Only ask one question at a time and critique my answer for depth."',
        'When you practice like this for 30 minutes every evening, real interviewers will feel easy. You will have already defended every trade-off, edge case, and system bottleneck in private.'
      ]
    },
    features: [
      '50+ Battle-tested AI prompts specifically tailored for Indian campus placement drives',
      'Resume ATS score booster templates with zero robotic phrasing',
      'DSA explanation prompts that uncover underlying problem patterns (Sliding Window, Two Pointers, DP)',
      'Bonus: Interviewer psychological rubric breakdown sheet'
    ],
    reviews: [
      {
        quote: 'Cleared 3 Day-1 campus offers including a 16 LPA product company. The mock interview persona prompts were game-changing.',
        reviewer: 'Rohan Deshmukh',
        role: 'Final Year CSE',
        publication: 'VIT Vellore'
      },
      {
        quote: 'This book stopped me from panicking about AI taking jobs and showed me how to use AI to beat the competition.',
        reviewer: 'Ananya Sharma',
        role: 'Placed at Top FinTech',
        publication: 'NIT Trichy'
      }
    ],
    featured: true
  },
  {
    id: 'aptitude-ai-crack',
    title: 'Cracking Aptitude with AI',
    subtitle: 'Master Speed Math, Logical Puzzles & Verbal Tests When 1 Mark Decides Elimination',
    author: 'Dr. Eliza Chen & Quantitative Prep Mentors',
    authorBio: 'Competitive exam math coach and AI reasoning researcher who has trained 40,000+ graduates to clear mass recruitment elimination filters.',
    category: 'Aptitude & Rounds',
    problemSolved: 'Getting eliminated in Round 1 online aptitude tests where 90% of applicants are rejected before anyone reads their resume.',
    price: 149,
    originalPrice: 399,
    coverImage: '/assets/images/book_aptitude_ai_1791820215432.jpg',
    publicationYear: 2026,
    pages: 240,
    readTime: '4.0 hrs',
    isbn: '978-93-84920-02-1',
    formats: ['DRM-Free PDF', 'EPUB 3.0', 'Printable Formula Cheat Sheets'],
    description: 'Aptitude is the brutal gatekeeper of campus drives. Learn mental math tricks, speed frameworks, and how to use AI to generate endless variations of your weakest topics.',
    synopsis: 'Over 85% of applicants are eliminated in Round 1 before a human ever speaks to them. You don’t need to be a math genius—you need pattern recognition and speed. This book reveals the 25 recurring question patterns across TCS, Infosys, Cognizant, Accenture, and product firm tests, with AI prompt recipes that generate target drills for your exact weak spots.',
    toc: [
      { chapter: 'Module 01', title: 'The Elimination Algorithm: Why 1 Mark Costs You the Entire Campus Drive', page: 14 },
      { chapter: 'Module 02', title: 'Speed Arithmetic: Vedic Mental Shortcuts for Percentages & Ratios', page: 48 },
      { chapter: 'Module 03', title: 'High-Weightage Quant: Time & Work, Speed-Distance, Permutations Decoded', page: 94 },
      { chapter: 'Module 04', title: 'Logical Reasoning: Blood Relations, Seating Arrangements & Syllogisms', page: 146 },
      { chapter: 'Module 05', title: 'Using AI to Create Adaptive 15-Minute Daily Drill Tests', page: 198 },
      { chapter: 'Formulary', title: 'The 1-Page Aptitude Emergency Cheat Sheet', page: 232 },
    ],
    excerpt: {
      title: 'Module 01: The Math of the First Cut',
      subtitle: 'Understanding negative marking and tactical question triage',
      content: [
        'In campus aptitude exams, the biggest trap is emotional attachment to a question. You spent three minutes on a complex train-crossing problem, got stuck, and spent two more minutes trying to salvage your pride. You just killed your chances.',
        'Aptitude tests are not math competitions; they are speed triage assessments. Every question carries equal weight. A 10-second calendar question is worth the exact same mark as an 8-variable seating arrangement puzzle.',
        'The top 5% of candidates who clear every aptitude test use the "Two-Pass Rule": Pass 1 for instant 30-second wins; Pass 2 for calculated solvable puzzles; Pass 3 is skipped entirely to protect accuracy and avoid negative deductions.'
      ]
    },
    features: [
      'Comprehensive coverage of all 25 core Quantitative and Logical Reasoning archetypes',
      'Vedic speed math formulas explained with zero mathematical jargon',
      'AI prompt templates to generate 100 similar practice questions for any problem you get wrong',
      'Includes printable formulas sheet to review 30 minutes before exams'
    ],
    reviews: [
      {
        quote: 'Failed 4 online assessments in August. Read this, practiced the Two-Pass Rule, and cleared the next 6 tests consecutively.',
        reviewer: 'Karthik Raja',
        role: 'Placed at TCS Digital',
        publication: 'PSG College of Technology'
      },
      {
        quote: 'The AI drill generation prompts saved me from buying expensive test series subscriptions.',
        reviewer: 'Sneha Patel',
        role: 'Final Year IT',
        publication: 'DA-IICT Gandhinagar'
      }
    ],
    featured: false
  },
  {
    id: 'gd-champion-playbook',
    title: 'The GD & Negotiation Playbook',
    subtitle: 'Structure Arguments, Lead Without Shouting, and Clear Group Discussions with Poise',
    author: 'Alexa Reed & Corporate Hiring Panelists',
    authorBio: 'Executive communication mentor and former campus placement cell advisor with experience evaluating 500+ group discussions.',
    category: 'Communication & GD',
    problemSolved: 'Fear of public speaking, getting shouted down in chaotic GD "fish markets", and knowing what to say on unexpected abstract topics.',
    price: 99,
    originalPrice: 299,
    coverImage: '/assets/images/book_gd_negotiation_1791820226531.jpg',
    publicationYear: 2026,
    pages: 180,
    readTime: '3.0 hrs',
    isbn: '978-93-84920-03-8',
    formats: ['DRM-Free PDF', 'EPUB 3.0', 'Audio Scripts & Flowcharts'],
    description: 'Never get silenced in a group discussion again. Master proven entry cues, the PESTLE argument framework, and how to become the natural moderator evaluators pick first.',
    synopsis: 'When 10 students are put in a room and given a controversial topic, 8 of them shout over each other while 2 freeze in terror. Evaluators do not select the loudest speaker—they pick the student who brings order to chaos, introduces clean frameworks, and builds consensus. This playbook gives you the exact sentence starters and structures to shine.',
    toc: [
      { chapter: 'Play 01', title: 'What Evaluators Secretly Score on Their Evaluation Sheets', page: 10 },
      { chapter: 'Play 02', title: 'The P.E.S.T.L.E. Framework: Instant Content on Any Unknown Topic', page: 38 },
      { chapter: 'Play 03', title: 'How to Intervene Gracefully in a "Fish Market" Without Shouting', page: 72 },
      { chapter: 'Play 04', title: 'Abstract & Case Study Topics: Connecting Dots When You Know Nothing', page: 110 },
      { chapter: 'Play 05', title: 'The Art of the Summary: Stealing the Final Evaluation Spotlight', page: 144 },
      { chapter: 'Scripts', title: '30 Plug-and-Play Transition Phrases for Group Dynamics', page: 168 },
    ],
    excerpt: {
      title: 'Play 03: The Fish Market Interruption',
      subtitle: 'How to command room silence with low vocal pitch and physical stillness',
      content: [
        'When three or four candidates start shouting simultaneously, your natural human instinct is to raise your volume to compete. Do not do this. The evaluator’s ears are already fatigued, and anyone shouting is marked down for emotional dysregulation.',
        'Instead, use the "Acknowledge and Pivot" technique. Lean forward slightly, wait for a 0.5-second micro-pause, drop your voice two semitones lower than the room’s average, and say in a steady, calm cadence: "Friends, while both perspectives on regulation are valid, our group has not yet examined the economic viability of this policy. Let us look at..."',
        'By lowering your pitch while everyone else is screeching, you create an acoustic contrast. The entire table instinctively turns to look at you, and the evaluator notes you as the group leader.'
      ]
    },
    features: [
      'The 4-part opening formula that sets the agenda without sounding arrogant',
      'PESTLE and 3-Pillar frameworks to generate 6 talking points on any abstract topic within 60 seconds',
      'The exact vocabulary to pacify aggressive candidates politely',
      'Comprehensive list of top 40 anticipated 2026 GD topics with data points'
    ],
    reviews: [
      {
        quote: 'I used to freeze in GDs. Using the "Acknowledge and Pivot" phrase got me picked in the Deloitte campus drive on the first try.',
        reviewer: 'Pooja Iyer',
        role: 'Placed at Deloitte India',
        publication: 'BMS College of Engineering'
      },
      {
        quote: 'Short, practical, and devoid of theoretical fluff. Every final year student should read this before Day 1.',
        reviewer: 'Vikram Choudhury',
        role: 'Campus Placement Coordinator',
        publication: 'KIIT Bhubaneswar'
      }
    ],
    featured: false
  },
  {
    id: 'monk-mode-focus',
    title: 'Unshakable Focus & Time Mastery',
    subtitle: 'Surviving Final Year Placement Anxiety, Defeating Doomscrolling & Balancing 8th Sem',
    author: 'Eleanor Vance & Student Wellbeing Initiative',
    authorBio: 'Cognitive behavioral coach and former student counselor who specializes in academic burnout, digital distraction, and performance anxiety.',
    category: 'Mental Mastery & Time',
    problemSolved: 'Crippling placement anxiety, panic when seeing peers get placed, Instagram doomscrolling, and failing to juggle projects and prep.',
    price: 99,
    originalPrice: 299,
    coverImage: '/assets/images/book_focus_calm_1791820236091.jpg',
    publicationYear: 2026,
    pages: 196,
    readTime: '3.2 hrs',
    isbn: '978-93-84920-04-5',
    formats: ['DRM-Free PDF', 'EPUB 3.0', 'Printable Daily Time Block Planner'],
    description: 'Protect your mental health during the most stressful 6 months of your college life. Reclaim 4 hours of pure focus daily and eliminate toxic comparison syndrome.',
    synopsis: 'Placement season is an emotional rollercoaster. Seeing your friends celebrate offers on WhatsApp while you sit through rejections can cause paralyzing anxiety and imposter syndrome. This empathetic, science-backed manual teaches you how to enter "Monk Mode"—clearing digital noise, managing your daily energy, and staying grounded until your breakthrough comes.',
    toc: [
      { chapter: 'Chapter 01', title: 'The Anatomy of Placement Season Anxiety: Why Your Brain Freezes', page: 12 },
      { chapter: 'Chapter 02', title: 'The Toxic Comparison Trap: Managing WhatsApp Groups & LinkedIn Envy', page: 46 },
      { chapter: 'Chapter 03', title: 'Monk Mode Protocol: Rebuilding Attention Spans Damaged by Reels', page: 82 },
      { chapter: 'Chapter 04', title: 'The 4-Block Day: Balancing 8th Sem Exams, Major Project & Placement Prep', page: 120 },
      { chapter: 'Chapter 05', title: 'Handling Rejection: The 24-Hour Reset Routine After a Disappointing Drive', page: 158 },
      { chapter: 'Guide', title: 'Sleep, Nutrition & Caffeine Architecture for High-Stakes Exam Weeks', page: 184 },
    ],
    excerpt: {
      title: 'Chapter 02: The Toxic Comparison Trap',
      subtitle: 'Surviving the notification barrage of other people’s offer letters',
      content: [
        'There is a specific gut-wrenching feeling that happens around October or November: your phone buzzes with a WhatsApp group notification showing a photo of a batchmate holding an offer letter with 200 congratulatory emojis.',
        'If you are still unplaced, your amygdala interprets that photo as existential danger: "I am falling behind. Everyone is moving forward except me. I wasted four years." You retreat to Instagram or YouTube for three hours to numb the sting, only to feel twice as guilty later.',
        'You must internalize the law of campus hiring: placements are not a linear ranking of human worth; they are a Poisson distribution of matching rounds. Company visits are stochastic. The student placed on Day 1 is not twice as smart as the student placed on Day 45. Your only job is to protect your emotional battery so you are sharp when your ideal matching company arrives.'
      ]
    },
    features: [
      'The 24-hour rejection recovery protocol to reset mental stamina after getting rejected',
      'The "4-Block Day" template for balancing college attendance, final project, and DSA prep',
      'Step-by-step phone friction system to stop mindless scrolling without deleting essential apps',
      'Printable printable daily habit tracker calibrated for the 90 days before placements'
    ],
    reviews: [
      {
        quote: 'This book literally saved my mental health during 7th semester. Got rejected in 8 companies before landing my dream offer.',
        reviewer: 'Aditya Nair',
        role: 'Placed at American Express',
        publication: 'Manipal Institute of Technology'
      },
      {
        quote: 'Every placement cell should make this mandatory reading alongside resume writing.',
        reviewer: 'Dr. Meera Nambiar',
        role: 'Dean of Student Affairs',
        publication: 'College of Engineering Trivandrum'
      }
    ],
    featured: false
  },
  {
    id: 'selling-yourself-interviews',
    title: 'Selling Skills for Engineers & Freshers',
    subtitle: 'How to Pitch Yourself, Your Academic Projects & Your Story Without Sounding Sleazy',
    author: 'Sameer Joshi',
    authorBio: 'B2B Sales Leader and former college campus interviewer who transformed over 15,000 introverted tech graduates into compelling communicators.',
    category: 'Communication & GD',
    problemSolved: 'Being technically skilled but sounding nervous, dull, or unable to explain projects when an interviewer asks "Tell me about yourself".',
    price: 99,
    originalPrice: 299,
    coverImage: '/assets/images/selling_skills_3d_mockup_1794303185847.jpg',
    publicationYear: 2026,
    pages: 188,
    readTime: '3.1 hrs',
    isbn: '978-93-84920-05-2',
    formats: ['DRM-Free PDF', 'EPUB 3.0', 'STAR Method Worksheet'],
    description: 'Companies do not hire the best technician; they hire the person who communicates their value most convincingly. Master authentic self-pitching.',
    synopsis: 'You built a brilliant machine learning project or web application, but when the interviewer asks: "Walk me through your project," you stutter through technical jargon and lose their attention. Selling is not manipulation—selling is the ability to connect what you know with the problem the company needs to solve. Learn the narrative frameworks used by top consultants.',
    toc: [
      { chapter: 'Lesson 01', title: 'Why Technical Merit Alone Won’t Get You Hired', page: 12 },
      { chapter: 'Lesson 02', title: 'The 90-Second "Tell Me About Yourself" Hook That Anchors the Interview', page: 40 },
      { chapter: 'Lesson 03', title: 'The S.T.A.R.+L. Framework for Project Stories (Situation, Task, Action, Result, Learning)', page: 78 },
      { chapter: 'Lesson 04', title: 'How to Confidently Frame Academic Gaps, Low CGPA, or Non-CS Backgrounds', page: 118 },
      { chapter: 'Lesson 05', title: 'Body Language, Eye Contact & Camera Presence in Video Interviews', page: 154 },
    ],
    excerpt: {
      title: 'Lesson 02: The 90-Second Hook',
      subtitle: 'Transforming the most common interview opener into your biggest advantage',
      content: [
        'When an interviewer asks, "Tell me about yourself," 90% of students recite their resume in chronological order: "My name is Rahul, I did schooling in Lucknow, I got 88%, then I joined XYZ college in branch..." The interviewer has tuned out before you finish your second sentence.',
        'The interviewer already has your resume in front of them. What they are actually asking is: "Why are you sitting in front of me today, and why should I care about your next 30 minutes?"',
        'Use the "Past-Present-Future Value Anchor": Start with what problem captivated you in college (Past), what real capability you developed while building projects (Present), and why this specific role solves a mutual challenge (Future Value).'
      ]
    },
    features: [
      'Complete script breakdowns for the 10 most common HR traps ("What is your biggest weakness?")',
      'The S.T.A.R.+L framework with 12 real engineering project examples',
      'How to position your final year project as commercial product rather than classroom assignment',
      'Checklist for Zoom/Google Meet virtual interview setups and audio calibration'
    ],
    reviews: [
      {
        quote: 'I had an average 6.8 CGPA. This book taught me how to frame my practical skills, and I cracked a 12 LPA consultant role.',
        reviewer: 'Deepak Varma',
        role: 'Placed at ZS Associates',
        publication: 'Thapar University'
      },
      {
        quote: 'Essential for introverted engineering students who find self-promotion terrifying.',
        reviewer: 'Shruti Kulkarni',
        role: 'Placement Trainer',
        publication: 'Pune Institute of Computer Technology'
      }
    ],
    featured: false
  },
  {
    id: 'salary-negotiation-freshers',
    title: 'Fresher Offer & Salary Negotiation',
    subtitle: 'Decoding CTC, Base vs Variable Pay, Joining Bonuses & Multiple Offer Leverage',
    author: 'Kunal Singhal & Compensation Advisory Group',
    authorBio: 'Former Senior HR Talent Partner who has structured compensation packages for over 8,000 campus and lateral hires in Bangalore and Hyderabad.',
    category: 'Career & Business',
    problemSolved: 'Confused by inflated CTC figures (getting ₹12L on paper but only ₹65k in hand) and afraid to ask for better terms or role clarity.',
    price: 99,
    originalPrice: 299,
    coverImage: '/assets/images/book_salary_negotiation_1794318800000.png',
    publicationYear: 2026,
    pages: 172,
    readTime: '2.8 hrs',
    isbn: '978-93-84920-06-9',
    formats: ['DRM-Free PDF', 'EPUB 3.0', 'In-Hand CTC Calculator Excel'],
    description: 'Don’t get tricked by phantom CTC numbers. Learn how to calculate in-hand monthly salary, evaluate service bonds, and professionally negotiate terms.',
    synopsis: 'A company offers you a "10 LPA package", but when the first paycheck arrives, you only receive ₹54,000 because ₹3 lakhs was deferred stocks with 4-year vesting and ₹2 lakhs was retention bonus. This no-nonsense guide decodes Indian tech compensation structures, explains employment bond legalities, and teaches you how to negotiate without losing the offer.',
    toc: [
      { chapter: 'Unit 01', title: 'The Great CTC Illusion: Fixed vs Variable vs Gratuity vs Stock Options', page: 14 },
      { chapter: 'Unit 02', title: 'How to Calculate Your Real In-Hand Take-Home Salary in India', page: 44 },
      { chapter: 'Unit 03', title: 'Employment Bonds & Training Agreements: What is Actually Legally Binding', page: 80 },
      { chapter: 'Unit 04', title: 'Leveraging Multiple Offers: How to Ask for Band Upgrades Respectfully', page: 114 },
      { chapter: 'Unit 05', title: 'Non-Salary Levers: Joining Location, Remote Days, and Early Appraisal Clauses', page: 146 },
    ],
    excerpt: {
      title: 'Unit 01: Decoding the CTC Lie',
      subtitle: 'Why a 10 LPA offer might be identical to an 8 LPA offer in real cash',
      content: [
        'Cost to Company (CTC) is the single most misunderstood number in Indian higher education. CTC does not represent the money transferred into your bank account on the last day of the month; it represents every single rupee the company incurs to keep a chair occupied for you.',
        'This includes employer PF contributions, gratuity provisions (which you can only claim after five continuous years), group medical insurance premiums, and performance bonuses that depend on company-wide EBITDA targets.',
        'Always ask HR for the "Salary Annexure" before signing. The only number that determines your standard of living in Gurgaon, Pune, or Bengaluru is the Gross Fixed Base Salary per month.'
      ]
    },
    features: [
      'The In-Hand Salary formula sheet with PF, Professional Tax, and Income Tax brackets',
      'Word-for-word email negotiation templates for campus and off-campus offers',
      'Legal clarity on Indian service bonds and exit penalty clauses',
      'How to tactfully request location preference between Bangalore, Hyderabad, and Pune'
    ],
    reviews: [
      {
        quote: 'Saved me from signing a 3-year exploitative bond with a service agency. Ended up with an unbonded product firm offer.',
        reviewer: 'Mohit Agarwal',
        role: 'Placed at Oracle Financial',
        publication: 'SRM Institute'
      },
      {
        quote: 'Every parent and student needs to read the CTC breakdown chapter before popping champagne.',
        reviewer: 'Sunita Rao',
        role: 'Parent & Career Counselor',
        publication: 'Bangalore'
      }
    ],
    featured: false
  },
  {
    id: 'business-acumen-101',
    title: 'The Unhired Mind: Essential Lessons',
    subtitle: 'What Product & Tech Companies Actually Expect Freshers to Understand',
    author: 'Tanvi Mehra',
    authorBio: 'Principal Product Manager at a leading unicorn startup; guest speaker on business design across top management and engineering institutes.',
    category: 'Career & Business',
    problemSolved: 'Failing techno-managerial interviews because you only talk about code syntax and don’t understand business impact, ROI, or user metrics.',
    price: 99,
    originalPrice: 299,
    coverImage: '/assets/images/book_business_acumen_1794318810000.png',
    publicationYear: 2026,
    pages: 206,
    readTime: '3.4 hrs',
    isbn: '978-93-84920-07-6',
    formats: ['DRM-Free PDF', 'EPUB 3.0', '10 Guesstimate Case Studies'],
    description: 'Bridge the gap between engineering and real business. Understand CAC, LTV, churn, revenue models, and guesstimates to stand out in top interviews.',
    synopsis: 'Anyone can memorize syntax or LeetCode solutions. What distinguishes candidates who get 20+ LPA packages from those getting 4 LPA is commercial awareness: understanding how software turns into revenue, how businesses prioritize features, and how to answer case studies and guesstimates with structured business logic.',
    toc: [
      { chapter: 'Chapter 01', title: 'Why Companies Don’t Hire Coders—They Hire Profit Generators', page: 12 },
      { chapter: 'Chapter 02', title: 'The Core Business Metrics Every Fresher Must Know: CAC, LTV, MRR, Churn', page: 48 },
      { chapter: 'Chapter 03', title: 'How Modern Tech Business Models Work: SaaS, Marketplace, Fintech & Ads', page: 92 },
      { chapter: 'Chapter 04', title: 'Cracking Guesstimates: The Top-Down vs Bottom-Up Estimation Framework', page: 136 },
      { chapter: 'Chapter 05', title: 'Root Cause Analysis: "Why Did App Sign-Ups Drop by 15% This Week?"', page: 174 },
    ],
    excerpt: {
      title: 'Chapter 01: Coders vs Profit Generators',
      subtitle: 'The mindset shift that separates high-tier product hires',
      content: [
        'Junior candidates often believe engineering excellence means using the newest, trendiest technology stack. In interview discussions, they proudly explain that they rebuilt a simple blog using five microservices, Kafka message brokers, and Kubernetes clusters.',
        'To an engineering director, this shows dangerous commercial naivety. That architecture will cost thousands of dollars in cloud infrastructure and maintenance hours for zero incremental business benefit.',
        'When you answer interview questions by highlighting trade-offs—such as: "We chose a simple monolithic architecture because it minimized server costs and let us validate user retention 3 weeks faster"—you prove you think like an owner, not a task-doer.'
      ]
    },
    features: [
      '10 Step-by-step solved guesstimates frequently asked in analyst and product interviews',
      'The 1-page Business Metrics glossary explained in simple everyday examples',
      'Frameworks to analyze tech giants (Amazon, Swiggy, Zerodha, Stripe, Google)',
      'Techniques to answer product design questions ("Improve WhatsApp for Senior Citizens")'
    ],
    reviews: [
      {
        quote: 'Helped me crack the Business Analyst role at a tier-1 firm. The guesstimate framework is unmatched.',
        reviewer: 'Abhishek Roy',
        role: 'Placed at Bain Capability Network',
        publication: 'IIT Kharagpur'
      },
      {
        quote: 'Gave me the vocabulary to impress hiring managers far beyond standard technical questions.',
        reviewer: 'Divya Soni',
        role: 'Associate PM',
        publication: 'NSUT Delhi'
      }
    ],
    featured: false
  },
  {
    id: 'ultra-learning-tech-skills',
    title: 'From No Job to Job Offer in 30 Days',
    subtitle: 'The Accelerated Engineering Sprint Framework to Master Stacks, Frameworks & Tools',
    author: 'Nikhil Rathi',
    authorBio: 'Staff Polyglot Engineer and Open Source maintainer who has built production systems in Go, Rust, TypeScript, and Python.',
    category: 'AI & Tech Prep',
    problemSolved: 'Panicking when a dream company’s job description demands a technology (e.g. Next.js, Docker, Kubernetes) you never learned in college.',
    price: 149,
    originalPrice: 399,
    coverImage: '/assets/images/book_design_systems_1791818816955.jpg',
    publicationYear: 2026,
    pages: 210,
    readTime: '3.6 hrs',
    isbn: '978-93-84920-08-3',
    formats: ['DRM-Free PDF', 'EPUB 3.0', '14-Day Sprint Notion Template'],
    description: 'You do not have 6 months to take a 60-hour Udemy course. Learn the rapid deconstruction method used by elite hackers to build portfolio proof in two weeks.',
    synopsis: 'College syllabuses are 5 to 10 years behind industry needs. When an upcoming campus drive requires Cloud, Docker, TypeScript, or GenAI concepts, watching endless video tutorials creates "tutorial hell" with zero retained skill. This blueprint gives you an intense 14-day project-first sprint framework to ship working repositories that prove your mastery.',
    toc: [
      { chapter: 'Sprint 01', title: 'Escaping Tutorial Hell: Why Watching Videos is Passive Illusion', page: 14 },
      { chapter: 'Sprint 02', title: 'The 20/80 Deconstruction Rule: Finding the 5 Core Primitives of Any Language', page: 48 },
      { chapter: 'Sprint 03', title: 'The Feynman-AI Loop: Prompting LLMs to Critique Your Code Like Senior Devs', page: 90 },
      { chapter: 'Sprint 04', title: 'Building the "Proof-of-Work" Project in 72 Hours That Shuts Up Doubters', page: 134 },
      { chapter: 'Sprint 05', title: 'Writing the Architecture README That Makes Recruiters Click Your Link', page: 178 },
    ],
    excerpt: {
      title: 'Sprint 01: Escaping Tutorial Hell',
      subtitle: 'Why passive watching creates zero neurological competence',
      content: [
        'You buy a 54-hour course on Udemy. You watch 20 hours while nodding along. You type code alongside the instructor. You feel productive. But the moment you open an empty VS Code window and face a blank cursor, your mind goes completely blank.',
        'This is the illusion of competence. Recognition is not recall. When you copy an instructor’s code, your brain exercises zero problem-solving pathways. It is the equivalent of watching someone else lift weights at the gym.',
        'The 14-Day Sprint flips this model upside down: you start with a broken, miniature project on Day 1. You only consult documentation when you encounter a compilation error. Frustration is not an obstacle to learning; frustration is the exact biological marker of neural rewiring.'
      ]
    },
    features: [
      'The 14-Day Day-by-Day schedule breakdown for learning any backend, frontend, or data stack',
      'The Project Architecture README template that gets GitHub stars and recruiter callbacks',
      'How to use AI to generate intentional edge-case bugs in your code to test your understanding',
      '5 Complete portfolio project ideas that stand out from generic to-do lists and weather apps'
    ],
    reviews: [
      {
        quote: 'Went from zero Go knowledge to clearing the Golang backend round at a product startup in 12 days.',
        reviewer: 'Pranav Joshi',
        role: 'Placed at Gojek India',
        publication: 'PES University Bangalore'
      },
      {
        quote: 'The Feynman-AI feedback loop changed how I study everything, including my semester subjects.',
        reviewer: 'Harsh Vardhan',
        role: 'Final Year ECE',
        publication: 'BITS Pilani'
      }
    ],
    featured: false
  },
  {
    id: 'campus-to-cubicle-worklife',
    title: 'First Company on Github',
    subtitle: 'Managing Corporate Culture Shock, Work Pressure, 70-Hour Myths & Avoiding Burnout',
    author: 'Priya Sundaram',
    authorBio: 'Organizational psychologist and former corporate wellness mentor for Fortune 500 tech campuses in Bangalore and Chennai.',
    category: 'Mental Mastery & Time',
    problemSolved: 'Anxiety about toxic corporate environments, fear of unrealistic work hours, manager politics, and transitioning from college life.',
    price: 99,
    originalPrice: 299,
    coverImage: '/assets/images/book_campus_cubicle_1794318805000.png',
    publicationYear: 2026,
    pages: 184,
    readTime: '3.0 hrs',
    isbn: '978-93-84920-09-0',
    formats: ['DRM-Free PDF', 'EPUB 3.0', 'Workplace Boundaries Guide'],
    description: 'Survive and thrive in your first 90 days. How to build respectful boundaries, handle high workloads without breakdown, and protect your personal life.',
    synopsis: 'College gives you flexible schedules, late-night tea breaks with friends, and forgiveness for missed mornings. Corporate life introduces strict 9-to-6 routines, corporate email politics, sprint deadlines, and performance pressure. This compassionate guide equips final-year students with the psychological armor to build a flourishing career without losing their health.',
    toc: [
      { chapter: 'Section 01', title: 'The Shock of Day 1: De-programming College Habits for Corporate Realities', page: 12 },
      { chapter: 'Section 02', title: 'The First 90 Days: How to Build Trust with Your Team Lead & Manager', page: 46 },
      { chapter: 'Section 03', title: 'Debunking the "70-Hour Hustle": Sustainable High Performance vs Burnout', page: 86 },
      { chapter: 'Section 04', title: 'Saying "No" Professionally: Boundary Setting Without Threatening Your Job', page: 124 },
      { chapter: 'Section 05', title: 'Building a Life Outside the Office: Hobbies, Friends & Financial Independence', page: 156 },
    ],
    excerpt: {
      title: 'Section 03: Sustainable Performance',
      subtitle: 'Why people pleasing in your first year leads straight to exhaustion',
      content: [
        'When freshers join a company, they are desperate to prove their enthusiasm. They respond to Slack messages at 11:30 PM on Sunday. They take on weekend production support shifts without being asked. They never push back on impossible deadlines.',
        'Here is the harsh corporate reality: whatever baseline you establish in your first three months becomes your manager’s permanent expectation. If you show that your time has zero boundaries, you will simply be given more work than the team members who protect their calendar.',
        'High performers are not people who work 80 hours until their health collapses; high performers are dependable engineers who communicate timelines proactively, deliver high-quality code in focused hours, and log off cleanly to recharge.'
      ]
    },
    features: [
      'The 90-Day Onboarding Checklist for your first engineering or consulting role',
      'Script library for replying to after-hours Slack messages without sounding rude',
      'Personal finance starter guide: Tax regime choices, emergency funds, and basic investing for freshers',
      'Techniques to handle critical performance reviews and imposter syndrome'
    ],
    reviews: [
      {
        quote: 'Read this during my final semester. It prepared me mentally for the transition more than any college orientation.',
        reviewer: 'Deepika Raman',
        role: 'Associate Software Engineer',
        publication: 'Cognizant Chennai'
      },
      {
        quote: 'A compassionate, realistic guide that every graduate stepping into the corporate world needs.',
        reviewer: 'Aravind Swaminathan',
        role: 'Engineering Manager',
        publication: 'Hyderabad'
      }
    ],
    featured: false
  },
  {
    id: 'deep-work-time-architecture',
    title: 'Time & Attention Architecture for Final Years',
    subtitle: 'Balancing College Attendance, Final Year Project, Coding Practice & Placement Drives',
    author: 'Vikramaditya Rao',
    authorBio: 'Systems engineer, productivity researcher, and creator of the 3-Hour Deep Work protocol used by thousands of engineering students.',
    category: 'Mental Mastery & Time',
    problemSolved: 'Feeling constantly overwhelmed with zero time, chaotic schedules, impending semester deadlines, and exhaustion.',
    price: 99,
    originalPrice: 299,
    coverImage: '/assets/images/book_time_attention_1794318790000.png',
    publicationYear: 2026,
    pages: 176,
    readTime: '2.9 hrs',
    isbn: '978-93-84920-10-6',
    formats: ['DRM-Free PDF', 'EPUB 3.0', 'Printable Weekly Time Blocking Matrix'],
    description: 'You don’t have a time problem; you have an energy fragmentation problem. Learn how to extract 3 hours of unbroken deep work from hectic college days.',
    synopsis: 'Between mandatory 75% college attendance, lab submissions, final year project reviews, family expectations, and placement tests, final year students feel like they are drowning in obligations. This book provides a ruthless prioritization engine designed specifically for the unique time constraints of Indian colleges.',
    toc: [
      { chapter: 'Principle 01', title: 'The Illusion of Being "Too Busy": Where Your 16 Hours Actually Disappear', page: 12 },
      { chapter: 'Principle 02', title: 'The 3-Hour Unbroken Golden Block: Morning vs Night Strategies', page: 44 },
      { chapter: 'Principle 03', title: 'Handling the 75% Attendance Trap: Tactical Time Optimization in College', page: 82 },
      { chapter: 'Principle 04', title: 'The Final Year Project Shortcut: Delivering Rigor Without Burning Weeks', page: 120 },
      { chapter: 'Principle 05', title: 'Weekly Reviews: Auditing Progress Before the Next Placement Drive', page: 150 },
    ],
    excerpt: {
      title: 'Principle 02: The Unbroken Golden Block',
      subtitle: 'Why three continuous hours beat eight fragmented hours every single time',
      content: [
        'Most college students study like this: open a LeetCode problem, check WhatsApp after 7 minutes, write three lines of code, open Instagram to reply to a story, switch back to code, check college email for placement notices. At the end of four hours, they feel exhausted, yet have only solved half a problem.',
        'Cognitive scientists call this "attention residue." Every time you switch tasks, a fragment of your working memory remains tethered to the previous distraction. Your brain never reaches the theta-state where complex algorithms become intuitive.',
        'If you protect just ONE 180-minute block each day—phone in airplane mode in another room, door closed, zero notifications—you will out-prepare 95% of your classmates who sit at their desks for ten distracted hours.'
      ]
    },
    features: [
      'The College Day Time-Audit template to find hidden 45-minute pockets between lectures',
      'Strategies to handle college project partner friction and divide work efficiently',
      'The "Do Not Disturb" boundary system for college hostels and shared PG rooms',
      'Emergency 7-day sprint plan when placement drives are announced on short notice'
    ],
    reviews: [
      {
        quote: 'Helped me juggle a 9.1 CGPA and an off-campus 18 LPA placement while staying sane.',
        reviewer: 'Shubham Tiwari',
        role: 'Placed at Microsoft India',
        publication: 'IIIT Allahabad'
      },
      {
        quote: 'Practical, brutally honest, and tailored for Indian engineering college realities.',
        reviewer: 'Gayathri Krishnan',
        role: 'Final Year EEE',
        publication: 'Anna University'
      }
    ],
    featured: false
  }
];

export const BUNDLE_DEAL = {
  id: 'final-year-all-access-bundle',
  title: 'The Complete Final Year Placement & Career Survival Kit',
  subtitle: 'All 10 E-Books + AI Prompt Cheat Sheets + GD Audio Frameworks + In-Hand CTC Calculator',
  price: 699,
  originalPrice: 1140,
  savingsPercent: 39,
  description: 'Everything a final-year college student needs to conquer placement drives, master AI interview tools, clear aptitude eliminations, negotiate higher packages, and protect mental wellbeing.',
  includedBookIds: BOOKS.map(b => b.id)
};

export const MULTI_BOOK_TIERS = [
  { count: 3, price: 249, label: 'Any 3' },
  { count: 5, price: 399, label: 'Any 5' },
  { count: 10, price: 699, label: 'Complete 10' }
];
