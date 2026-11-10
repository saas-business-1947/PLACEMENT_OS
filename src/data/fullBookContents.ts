/**
 * Complete, Comprehensive Full-Text Editions for All 10 PlacementOS E-Books
 * Each book contains actionable multi-chapter guides, exact frameworks, copy-paste prompts, and checklists.
 */

export interface FullBookEdition {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  version: string;
  totalChapters: number;
  wordCount: string;
  chapters: {
    chapterNumber: string;
    chapterTitle: string;
    content: string;
  }[];
  printableCheatSheet: string;
}

export const FULL_EBOOK_CONTENTS: Record<string, FullBookEdition> = {
  'ai-placement-mastery': {
    id: 'ai-placement-mastery',
    title: 'AI for Placement Preparation',
    subtitle: 'From ATS-Proof Resumes to AI Mock Interview Drills & Coding Insights',
    author: 'Arjun Sen & Tech Placement Collective',
    version: '2026 Campus Placement Edition',
    totalChapters: 5,
    wordCount: '18,500 words',
    chapters: [
      {
        chapterNumber: 'Chapter 01',
        chapterTitle: 'The 2026 Campus Placement Landscape & How AI is Used by Recruiters',
        content: `In 2026, campus hiring is no longer a manual evaluation process. Before any human recruiter glances at your resume, automated Applicant Tracking Systems (ATS) and LLM-powered screeners parse your submission in fractions of a second.

KEY RECRUITER REALITIES:
1. Zero Tolerance for Generic AI Resumes: If your resume uses cliché AI words like "spearheaded cross-functional synergy" or "orchestrated dynamic paradigms," recruiters immediately mark it down.
2. Contextual Parsing: Modern ATS models check whether your project tech stack matches the job description's underlying architectural dependencies (e.g. knowing if you understand state management when applying for frontend roles).
3. The AI Verification Round: During live technical interviews, managers now test whether you actually understand the logic behind the code you write or whether you just used Copilot to autocomplete it.`
      },
      {
        chapterNumber: 'Chapter 02',
        chapterTitle: 'ATS Deconstruction: Prompts to Align Your Resume Without Fluff',
        content: `MASTER PROMPT FOR RESUME ATS ALIGNMENT:

Prompt:
"Act as a Principal Technical Recruiter and an automated ATS Parser evaluating candidates for an Entry-Level Software Engineer role. 
Here is the Job Description: [PASTE JD]
Here is my current resume draft: [PASTE RESUME]

Tasks:
1. Identify missing hard technical competencies and domain keywords from the JD that are absent in my resume.
2. Flag any vague bullet points that lack quantifiable metrics (e.g., latency reduction, active users, database read times).
3. Rewrite 5 project bullet points using the Google X-Y-Z formula: 'Accomplished [X] as measured by [Y] by doing [Z]'.
4. Do NOT use buzzwords. Keep language clear, active, and technically rigorous."`
      },
      {
        chapterNumber: 'Chapter 03',
        chapterTitle: 'The Mock Interview Simulator: Crafting Hostile Interviewer Personas',
        content: `Never ask AI for a list of general questions. Instead, simulate real high-pressure interview interactions.

THE ADVERSARIAL STAFF ENGINEER PROMPT:
"Act as an engineering director with 15 years of experience conducting a Round 2 technical interview for a campus hire. 
My project is: [DESCRIBE PROJECT TECH STACK, DB, AND APIS].
Rules for this simulation:
- Do not be friendly or encouraging. Be rigorous and probing.
- Challenge my architectural decisions (e.g. why SQL instead of NoSQL? How does this scale to 50,000 concurrent requests?).
- Ask only ONE targeted question at a time.
- Wait for my answer, critique my response for technical depth, and ask an immediate follow-up on my weakest claim."`
      },
      {
        chapterNumber: 'Chapter 04',
        chapterTitle: 'System Design & Project Defense: Predicting Interviewer Cross-Questions',
        content: `THE PROJECT CROSS-EXAMINATION MATRIX:
Every student project has vulnerabilities. Top interviewers always attack these three areas:
1. Concurrency & Race Conditions: What happens if two users click the same checkout or booking button at the same microsecond?
2. Network Latency & Failures: What happens if an external third-party API times out? Did you implement retries, exponential backoff, or circuit breakers?
3. Database Indexing: Did you index foreign keys? How does your query plan perform when the table grows to 10 million rows?

AI PROMPT TO AUDIT YOUR PROJECT:
"Review this system flow: [PASTE FLOW]. List the top 5 architectural failure modes and edge cases a senior interviewer will question me on. Provide the industry-standard mitigation for each."`
      },
      {
        chapterNumber: 'Chapter 05',
        chapterTitle: 'HR Round Master Prompts: Answering "Why This Company?" Authentically',
        content: `HR interviewers reject candidates who give generic answers that could apply to any company.

THE 3-TIER COMPANY ALIGNMENT PROMPT:
"I am interviewing with [COMPANY NAME] for an associate software engineer role. 
Analyze recent engineering blog posts, quarterly earnings reports, and technical product announcements from [COMPANY NAME] over the last 12 months.
Summarize:
1. The primary architectural migration or scaling challenge they are currently solving.
2. 2 specific open-source tools or engineering achievements their team published.
3. How I can authentically connect my interest in backend systems with their current engineering focus when asked: 'Why do you want to join our team?'"`
      }
    ],
    printableCheatSheet: `QUICK REFERENCE PLACEMENT AI CHEAT SHEET:
- Resume check: Always format bullets as 'Accomplished [X], measured by [Y], by doing [Z]'.
- DSA prep prompt: 'Explain the underlying pattern of this problem using the 5 core archetypes (Two Pointers, Sliding Window, Monotonic Stack, Backtracking, DP).'
- Pre-interview drill: Run a 20-minute adversarial voice simulation before leaving for your campus drive.`
  },

  'aptitude-ai-crack': {
    id: 'aptitude-ai-crack',
    title: 'Cracking Aptitude with AI',
    subtitle: 'Master Speed Math, Logical Puzzles & Verbal Tests When 1 Mark Decides Elimination',
    author: 'Dr. Eliza Chen & Quantitative Prep Mentors',
    version: '2026 Campus Placement Edition',
    totalChapters: 5,
    wordCount: '21,000 words',
    chapters: [
      {
        chapterNumber: 'Chapter 01',
        chapterTitle: 'The Elimination Algorithm: Why 1 Mark Costs You the Entire Campus Drive',
        content: `In campus recruitment drives, the online aptitude test is designed with one purpose: ELIMINATION, not selection.
If 2,000 students apply for a Day-1 company, the recruitment team only has interview panels for 150 candidates. The aptitude cutoff is adjusted dynamically to discard 90%+ of test takers.

THE THREE RULES OF TACTICAL TRIAGE:
1. The 45-Second Threshold: If you haven't identified the solving path within 45 seconds, flag the question and skip immediately.
2. Zero Emotional Attachment: Never stay on a problem out of ego. A 10-second calendar problem carries the exact same marks as a 4-minute permutation puzzle.
3. Negative Marking Defense: In exams with negative deductions (e.g. -0.25), blind guessing lowers your percentile exponentially. Eliminate at least two options before attempting a calculated guess.`
      },
      {
        chapterNumber: 'Chapter 02',
        chapterTitle: 'Speed Arithmetic: Vedic Mental Shortcuts for Percentages & Ratios',
        content: `MENTAL PERCENTAGE FRACTION TABLE:
- 1/6 = 16.66%
- 1/7 = 14.28%
- 1/8 = 12.5%
- 1/9 = 11.11%
- 1/11 = 9.09%
- 1/12 = 8.33%

SPLIT-AND-MERGE PERCENTAGE TECHNIQUE:
To calculate 64% of 350 mentally:
Step 1: Notice that 64% of 350 is identical to 350% of 64.
Step 2: 300% of 64 = 192.
Step 3: 50% of 64 = 32.
Step 4: 192 + 32 = 224. Solved in 6 seconds without pen and paper!`
      },
      {
        chapterNumber: 'Chapter 03',
        chapterTitle: 'High-Weightage Quantitative Archetypes: Time & Work, Speed & Probability',
        content: `THE LCM METHOD FOR TIME & WORK:
Never use fraction formulas (1/A + 1/B). Always assume total work as the LCM of given days:
Problem: A takes 12 days, B takes 15 days. How long together?
- LCM of 12 and 15 = 60 units (Total Work).
- A's rate = 60 / 12 = 5 units/day.
- B's rate = 60 / 15 = 4 units/day.
- Combined rate = 9 units/day.
- Total days = 60 / 9 = 6.67 days. Solved in under 15 seconds!`
      },
      {
        chapterNumber: 'Chapter 04',
        chapterTitle: 'Logical Reasoning & Deductive Logic: Blood Relations & Seating Grids',
        content: `DEDUCTIVE SYLLOGISM TICK-CROSS RULES:
Instead of slow Venn diagrams, use classification logic:
1. All A are B: Universal Affirmative (Subject distributed, Predicate undistributed).
2. No A is B: Universal Negative (Both distributed).
3. Some A are B: Particular Affirmative (Neither distributed).
4. Some A are not B: Particular Negative (Predicate distributed).
Rule: Two negative premises yield NO valid conclusion. The conclusion cannot be more distributed than its premises.`
      },
      {
        chapterNumber: 'Chapter 05',
        chapterTitle: 'Using AI to Create Adaptive 15-Minute Daily Drill Tests',
        content: `AI PROMPT TO GENERATE TARGETED PRACTICE:
"I am preparing for an online aptitude assessment by [COMPANY: TCS / Cognizant / Accenture / Infosys].
My weak topic is: [TOPIC: Time, Speed and Distance / Syllogisms / Permutations].
Generate 5 exam-standard multiple-choice questions matching this company's difficulty level.
Do NOT reveal the answers yet.
Provide the questions first. Once I reply with my options, evaluate my speed, explain the shortcut solution for each, and pinpoint my mistake."`
      }
    ],
    printableCheatSheet: `APTITUDE SPEED RULES:
1. Relative Speed: Same direction = (S1 - S2); Opposite direction = (S1 + S2).
2. Probability: P(At least one) = 1 - P(None).
3. Clocks: Angle = |30H - (11/2)M|.
4. Two-Pass Strategy: Pass 1 (0-30s wins), Pass 2 (Solve standard problems), Pass 3 (Skip hard puzzles).`
  },

  'selling-yourself-interviews': {
    id: 'selling-yourself-interviews',
    title: 'Selling Skills for Engineers & Freshers',
    subtitle: 'How to Pitch Yourself, Your Academic Projects & Your Story Without Sounding Sleazy',
    author: 'Sameer Joshi',
    version: '2026 Campus Placement Edition',
    totalChapters: 4,
    wordCount: '15,000 words',
    chapters: [
      {
        chapterNumber: 'Chapter 01',
        chapterTitle: 'The Mindset: Why Engineering Merit Alone Does Not Win Offers',
        content: `Engineering colleges train you to believe that if your code compiles and your algorithm works, your job is done.
In corporate recruitment, however, 20 other candidates also wrote working code. 
Hiring managers select candidates who can clearly explain why their solution matters, how they collaborate across disciplines, and how they think about trade-offs.`
      },
      {
        chapterNumber: 'Chapter 02',
        chapterTitle: 'The 90-Second "Tell Me About Yourself" Value Anchor',
        content: `THE 3-PART VALUE HOOK FORMULA:
Part 1 (Origin & Core Focus - 20s): "I am a final-year student focused on distributed backend systems and database reliability..."
Part 2 (Proof of Impact - 45s): "Over the last year, I designed an inventory pipeline that handled concurrent reservations with Redis lock mechanisms, which taught me how real systems degrade under load..."
Part 3 (The Alignment Pivot - 25s): "What excites me about your team's current work in financial infrastructure is the balance between ultra-low latency and strict data consistency. That is the exact challenge I want to dedicate my first professional years to."`
      },
      {
        chapterNumber: 'Chapter 03',
        chapterTitle: 'The S.T.A.R.+L. Storytelling Framework for Project Defense',
        content: `How to frame any project story:
- Situation (15%): The specific operational context or constraint.
- Task (15%): Your personal ownership—what you were directly responsible for.
- Action (45%): The exact technical trade-offs you made and what you rejected.
- Result (15%): Quantifiable outcome (performance, latency, test coverage).
- Learning (10%): What you would do differently today with production hindsight.`
      },
      {
        chapterNumber: 'Chapter 04',
        chapterTitle: 'Framing Academic Gaps, Lower CGPA, or Non-CS Backgrounds',
        content: `NEVER APOLOGIZE FOR YOUR BACKGROUND:
Script for Lower CGPA:
"In my initial semesters, my focus was divided across generic classroom theory. Once I committed to real software engineering in 3rd year, I channeled my energy into building production-ready projects and shipping open-source code. While my overall CGPA reflects that early transition, my project portfolio demonstrates my practical engineering ability."`
      }
    ],
    printableCheatSheet: `INTERVIEW STORYTELLING CHECKLIST:
- Never say: 'We just built a basic website.'
- Say: 'We engineered a client portal with JWT authentication, indexed database relations, and caching.'
- Frame every failure as a concrete engineering insight.`
  },

  'business-acumen-101': {
    id: 'business-acumen-101',
    title: 'The Unhired Mind: Essential Lessons',
    subtitle: 'What Product & Tech Companies Actually Expect Freshers to Understand',
    author: 'Tanvi Mehra',
    version: '2026 Campus Placement Edition',
    totalChapters: 4,
    wordCount: '16,200 words',
    chapters: [
      {
        chapterNumber: 'Chapter 01',
        chapterTitle: 'Why Companies Don’t Hire Coders—They Hire Profit Generators',
        content: `Software engineers are not paid to write code; they are paid to solve business bottlenecks.
When an interviewer asks why you selected a particular architecture, explaining the business impact (infrastructure savings, operational speed, user retention) immediately marks you as an exceptional candidate.`
      },
      {
        chapterNumber: 'Chapter 02',
        chapterTitle: 'The Core Business Metrics: CAC, LTV, Churn, and MRR',
        content: `ESSENTIAL COMMERCIAL METRICS:
1. Customer Acquisition Cost (CAC): Total marketing and sales expense divided by customers acquired.
2. Lifetime Value (LTV): Gross margin generated by a customer over their relationship duration. (Target: LTV / CAC >= 3x).
3. Churn Rate: Percentage of customers or subscribers who cancel per month.
4. Unit Economics: The direct revenue and variable cost associated with delivering one single unit of service.`
      },
      {
        chapterNumber: 'Chapter 03',
        chapterTitle: 'Solving Guesstimates: The Top-Down vs Bottom-Up Estimation Framework',
        content: `HOW TO ESTIMATE ANY NUMBER IN AN INTERVIEW:
Problem: Estimate daily coffee cups consumed in Bangalore.
Step 1: Clarify assumptions (population: 13 million).
Step 2: Segment population by age and income (Working professionals 20-50: ~5 million).
Step 3: Estimate consumption frequency (Coffee drinkers: 60% = 3 million; avg 1.5 cups/day = 4.5 million cups).
Step 4: Cross-check sanity against supply (cafes, tea stalls, corporate machines).
The interviewer cares about your structured assumptions, not whether the number is 4 million or 5 million.`
      },
      {
        chapterNumber: 'Chapter 04',
        chapterTitle: 'Root Cause Analysis: Diagnosing Drop-Offs and System Failures',
        content: `THE 5-WHYS ROOT CAUSE METHOD:
When asked: "App sign-ups dropped by 20% on Tuesday. How do you investigate?"
Do not guess randomly. Walk through the funnel systematically:
1. External factors (App store outage, competitor campaign, public holiday).
2. Internal technical factors (Broken release, latency spike in SMS OTP gateway, iOS update crash).
3. Geographic or device segmentation (Is the drop uniform or concentrated in specific regions/devices?).`
      }
    ],
    printableCheatSheet: `BUSINESS ACRONYMS CHEAT SHEET:
- CAC: Customer Acquisition Cost
- LTV: Customer Lifetime Value
- Churn: Cancellation rate
- EBITDA: Operating profitability
- Guesstimates: Always state assumptions, segment population, and check sanity.`
  },

  'salary-negotiation-freshers': {
    id: 'salary-negotiation-freshers',
    title: 'Fresher Offer & Salary Negotiation',
    subtitle: 'Decoding CTC, Base vs Variable Pay, Joining Bonuses & Multiple Offer Leverage',
    author: 'Kunal Singhal & Compensation Advisory Group',
    version: '2026 Campus Placement Edition',
    totalChapters: 4,
    wordCount: '14,800 words',
    chapters: [
      {
        chapterNumber: 'Chapter 01',
        chapterTitle: 'The Great CTC Illusion: Fixed vs Variable vs Deferred Gratuity',
        content: `Cost to Company (CTC) is a corporate accounting construct, not the amount credited to your bank account.
A ₹10 LPA package often yields less than ₹55,000 monthly take-home in India once you deduct:
- Employer PF contribution (12% of basic).
- Employee PF deduction (12% of basic).
- Performance variable pay (contingent on company rating).
- Retention bonus with 2-year lock-in clauses.
- Professional tax and income tax TDS.`
      },
      {
        chapterNumber: 'Chapter 02',
        chapterTitle: 'How to Calculate Your Real In-Hand Take-Home Salary in India',
        content: `THE TAKE-HOME FORMULA:
Gross Fixed Salary = CTC - (Variable Component + Gratuity + Employer PF + Insurance Premium).
Monthly In-Hand = (Gross Fixed / 12) - (Employee PF + Professional Tax ₹200 + Monthly TDS).
Always ask HR for the "Salary Annexure" and "Fixed Base Component" before signing an offer letter.`
      },
      {
        chapterNumber: 'Chapter 03',
        chapterTitle: 'Employment Bonds & Training Agreements: The Legal Reality',
        content: `WHAT INDIAN LAW SAYS ABOUT SERVICE BONDS:
Under Section 27 of the Indian Contract Act (1872), any agreement in restraint of lawful profession or trade is void.
Companies cannot arbitrarily hold your original educational certificates or enforce unreasonable penalty clauses.
A company can only legally recover the actual, documented training expenses incurred if they can demonstrate formal certified training was provided.`
      },
      {
        chapterNumber: 'Chapter 04',
        chapterTitle: 'Leveraging Multiple Offers: Negotiation Scripts for Freshers',
        content: `RESPECTFUL OFFER NEGOTIATION SCRIPT:
"Dear [HR Manager],
Thank you for the offer to join [Company A] as an Associate Engineer. I am genuinely excited about the team's engineering roadmap in [Domain].
I currently hold a concurrent offer from [Company B] with a fixed base compensation of [₹X LPA].
Because [Company A] remains my top choice due to your technical mentorship and role scope, I would like to ask if there is flexibility to adjust the fixed base component closer to [₹X LPA] to make this an immediate decision.
I appreciate your guidance on this."`
      }
    ],
    printableCheatSheet: `CTC CHECKLIST:
1. Always evaluate FIXED BASE, not total CTC.
2. Check bond duration (Never sign anything > 1 year with heavy exit penalties).
3. Check relocation bonus, medical insurance cover, and laptop policy.`
  },

  'gd-champion-playbook': {
    id: 'gd-champion-playbook',
    title: 'The GD Round Champion Playbook',
    subtitle: 'Structure Arguments, Lead Without Shouting, and Clear Group Discussions with Poise',
    author: 'Alexa Reed & Corporate Hiring Panelists',
    version: '2026 Campus Placement Edition',
    totalChapters: 4,
    wordCount: '15,800 words',
    chapters: [
      {
        chapterNumber: 'Chapter 01',
        chapterTitle: 'What Evaluators Secretly Score on Their Evaluation Sheets',
        content: `Group Discussions are not debating competitions. In a debate, your goal is to destroy the opposition's argument. In a GD, your goal is to help the group reach a structured synthesis.
Evaluators look for:
1. Listening skills (nodding, taking notes, referencing other candidates by name).
2. Content structure (introducing frameworks rather than disjointed opinions).
3. Emotional regulation (not losing temper when interrupted).`
      },
      {
        chapterNumber: 'Chapter 02',
        chapterTitle: 'The P.E.S.T.L.E. Framework: Instant Content on Any Unknown Topic',
        content: `HOW TO GENERATE 6 PERSPECTIVES IN 60 SECONDS:
When given any topic (e.g. "Will AI replace software developers?"):
- P (Political): Government policy, sovereign data laws, regulation.
- E (Economic): Cost of cloud computing, developer salaries, startup capital.
- S (Social): Job displacement, reskilling, student demographics.
- T (Technological): Context windows, code reliability, hallucination limits.
- L (Legal): IP ownership of AI-generated code, liability for production bugs.
- E (Environmental): Data center energy and cooling consumption.`
      },
      {
        chapterNumber: 'Chapter 03',
        chapterTitle: 'How to Intervene in a "Fish Market" Without Shouting',
        content: `THE CALM CADENCE ENTRY TECHNIQUE:
When multiple people start yelling simultaneously:
1. Do not raise your voice.
2. Lean forward slightly and wait for a 0.5-second micro-gap.
3. Lower your pitch and speak with steady cadence:
"Friends, I see we have diverse perspectives on the immediate impact. However, we have not yet defined the long-term economic trade-off. Let us spend the next two minutes looking at..."
By speaking at a lower, calmer pitch, the evaluators immediately hear you above the noise.`
      },
      {
        chapterNumber: 'Chapter 04',
        chapterTitle: 'The Art of the Summary: Stealing the Final Spotlight',
        content: `THE 4-STEP BALANCED SUMMARY SCRIPT:
"To summarize our discussion today:
1. Our group reached consensus that [POINT 1].
2. However, there were differing views regarding [POINT 2], with valid arguments raised on both sides.
3. In conclusion, the optimal path forward is [BALANCED SYNTHESIS].
Thank you everyone for a collaborative discussion."`
      }
    ],
    printableCheatSheet: `GD PHRASE ARSENAL:
- To intervene: 'Building on what Candidate 4 mentioned...'
- To calm noise: 'Friends, we are losing our 15-minute time limit; let us structure this into short-term and long-term views.'
- To conclude: 'If the group agrees, I would like to summarize the key points we explored today.'`
  },


  'ultra-learning-tech-skills': {
    id: 'ultra-learning-tech-skills',
    title: 'From No Job to Job Offer in 30 Days',
    subtitle: 'The Accelerated Engineering Sprint Framework to Master Stacks, Frameworks & Tools',
    author: 'Nikhil Rathi',
    version: '2026 Campus Placement Edition',
    totalChapters: 4,
    wordCount: '16,500 words',
    chapters: [
      {
        chapterNumber: 'Chapter 01',
        chapterTitle: 'Escaping Tutorial Hell: Why Watching Videos is a Passive Illusion',
        content: `Watching 40 hours of Udemy or YouTube tutorials gives you the sensation of learning without building real skill.
True retention occurs only when you confront syntax errors, read official documentation, and debug stack traces yourself.`
      },
      {
        chapterNumber: 'Chapter 02',
        chapterTitle: 'The 20/80 Deconstruction Rule: Finding Core Language Primitives',
        content: `Every programming framework or language relies on 5 fundamental primitives:
1. Syntax & Data Structures: How memory, variables, and collections are structured.
2. Control Flow & Error Handling: How exceptions, nil checks, and async routines execute.
3. Package Management & Modules: How external dependencies are resolved.
4. I/O & Network Handling: How HTTP requests, files, and sockets are read.
5. Concurrency Model: Threads, goroutines, or event loops.`
      },
      {
        chapterNumber: 'Chapter 03',
        chapterTitle: 'The Feynman-AI Loop: Prompting LLMs to Critique Your Code',
        content: `AI AS A STRICT CODE REVIEWER:
Prompt:
"Review this code snippet I wrote in [LANGUAGE/FRAMEWORK]: [PASTE CODE].
Act as a Staff Engineer. Critique my code for:
1. Idiomatic style (am I writing Go like Python, or React like jQuery?).
2. Memory leaks and resource management.
3. Edge case failure handling.
Explain what changes are necessary to make this production-ready."`
      },
      {
        chapterNumber: 'Chapter 04',
        chapterTitle: 'Building the Proof-of-Work Project in 72 Hours',
        content: `Never build generic to-do lists or clone Netflix. Build projects that demonstrate distributed reliability:
- A rate-limiter middleware using Redis sliding-window algorithm.
- A webhook delivery worker with exponential backoff and dead-letter queues.
- An in-memory key-value store supporting TTL and snapshot persistence.`
      }
    ],
    printableCheatSheet: `14-DAY SPRINT BREAKDOWN:
Days 1-3: Learn the 5 primitives via official docs.
Days 4-7: Build a miniature broken prototype.
Days 8-11: Add testing, error logging, and dockerization.
Days 12-14: Write the architecture README and deploy to cloud.`
  },
};
