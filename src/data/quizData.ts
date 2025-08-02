export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  category: "fraud" | "financial";
  questions: Question[];
  badge?: string;
}

export const quizzes: Quiz[] = [
  // Fraud Awareness Quizzes
  {
    id: "phishing-scams",
    title: "Phishing Scams",
    description: "Learn to identify and avoid email and website phishing attempts",
    category: "fraud",
    questions: [
      {
        id: 1,
        question: "What is the most common sign of a phishing email?",
        options: [
          "Professional formatting",
          "Urgent language requesting immediate action",
          "Company logo present",
          "Long detailed message"
        ],
        correctAnswer: 1,
        explanation: "Phishing emails often use urgent language to pressure victims into acting quickly without thinking critically."
      },
      {
        id: 2,
        question: "What should you do if you receive a suspicious email asking for personal information?",
        options: [
          "Reply with the requested information",
          "Click the link to verify your account",
          "Delete the email and contact the company directly",
          "Forward it to friends for their opinion"
        ],
        correctAnswer: 2,
        explanation: "Always verify suspicious requests by contacting the company directly through official channels, never through the suspicious email."
      },
      {
        id: 3,
        question: "Which URL is most likely a phishing attempt?",
        options: [
          "https://amazon.com",
          "https://paypal.com",
          "https://payp4l-security.com",
          "https://bankofamerica.com"
        ],
        correctAnswer: 2,
        explanation: "Phishing sites often use similar-looking domains with slight variations like replacing letters with numbers."
      },
      {
        id: 4,
        question: "What information should you NEVER provide in response to an email request?",
        options: [
          "Your favorite color",
          "Your Social Security Number",
          "Your city of residence",
          "Your first name"
        ],
        correctAnswer: 1,
        explanation: "Never provide sensitive information like SSN, passwords, or financial details via email, even if it appears legitimate."
      },
      {
        id: 5,
        question: "How can you verify if an email is legitimate?",
        options: [
          "Check if it has good grammar",
          "Look for the company logo",
          "Hover over links to see the actual URL",
          "Count the number of words"
        ],
        correctAnswer: 2,
        explanation: "Hovering over links reveals the actual destination URL, which often exposes phishing attempts."
      }
    ]
  },
  {
    id: "credit-card-fraud",
    title: "Credit Card Fraud",
    description: "Protect yourself from credit card fraud and unauthorized charges",
    category: "fraud",
    questions: [
      {
        id: 1,
        question: "How often should you check your credit card statements?",
        options: [
          "Once a year",
          "Every 6 months",
          "Monthly",
          "Weekly or more frequently"
        ],
        correctAnswer: 3,
        explanation: "Regular monitoring helps you catch fraudulent charges quickly, and many experts recommend checking weekly or even daily."
      },
      {
        id: 2,
        question: "What should you do immediately if you notice an unauthorized charge?",
        options: [
          "Wait to see if more charges appear",
          "Contact your credit card company immediately",
          "Ask friends if they've had similar issues",
          "Change your password only"
        ],
        correctAnswer: 1,
        explanation: "Quick action is crucial - contact your credit card company immediately to report fraudulent charges and prevent further damage."
      },
      {
        id: 3,
        question: "Which is the safest way to use your credit card online?",
        options: [
          "Only on websites with HTTPS encryption",
          "Any website that accepts credit cards",
          "Websites that don't require a password",
          "Sites that email you the receipt"
        ],
        correctAnswer: 0,
        explanation: "Always look for HTTPS (the lock icon) which encrypts your data during transmission."
      },
      {
        id: 4,
        question: "What's a good practice when using credit cards at ATMs?",
        options: [
          "Use any ATM for convenience",
          "Cover your PIN when entering it",
          "Write your PIN on the card",
          "Share your PIN with trusted friends"
        ],
        correctAnswer: 1,
        explanation: "Always cover your PIN entry to prevent shoulder surfing and potential theft."
      },
      {
        id: 5,
        question: "If your credit card is stolen, what should you NOT do?",
        options: [
          "Report it to the police",
          "Contact your credit card company",
          "Continue using other cards normally",
          "Post about it on social media with card details"
        ],
        correctAnswer: 3,
        explanation: "Never share card details on social media - this can lead to further fraud attempts."
      }
    ]
  },
  {
    id: "identity-theft",
    title: "Identity Theft",
    description: "Safeguard your personal information from identity thieves",
    category: "fraud",
    questions: [
      {
        id: 1,
        question: "What is the most effective way to prevent identity theft?",
        options: [
          "Avoid using the internet completely",
          "Safeguard personal information and monitor accounts regularly",
          "Only use cash for purchases",
          "Change your name frequently"
        ],
        correctAnswer: 1,
        explanation: "Protecting personal information and monitoring your accounts regularly are the best defenses against identity theft."
      },
      {
        id: 2,
        question: "Which document should you NEVER carry in your wallet?",
        options: [
          "Driver's license",
          "Credit card",
          "Social Security card",
          "Health insurance card"
        ],
        correctAnswer: 2,
        explanation: "Your Social Security card should be kept in a secure location at home, never carried in your wallet."
      },
      {
        id: 3,
        question: "How often should you check your credit report?",
        options: [
          "Never",
          "Once every 5 years",
          "Once a year from each credit bureau",
          "Only when applying for loans"
        ],
        correctAnswer: 2,
        explanation: "You're entitled to one free credit report annually from each of the three major credit bureaus."
      },
      {
        id: 4,
        question: "What's a red flag that might indicate identity theft?",
        options: [
          "Receiving expected bills on time",
          "Getting approved for credit you applied for",
          "Bills for accounts you didn't open",
          "Your credit score staying the same"
        ],
        correctAnswer: 2,
        explanation: "Bills or statements for accounts you didn't open are a major red flag for identity theft."
      },
      {
        id: 5,
        question: "What should you do with documents containing personal information before throwing them away?",
        options: [
          "Throw them away as-is",
          "Shred them completely",
          "Just tear them in half",
          "Burn them outside"
        ],
        correctAnswer: 1,
        explanation: "Shredding documents completely prevents dumpster diving identity thieves from accessing your information."
      }
    ]
  },
  {
    id: "investment-fraud",
    title: "Investment Fraud",
    description: "Recognize and avoid fraudulent investment schemes",
    category: "fraud",
    questions: [
      {
        id: 1,
        question: "What's a major red flag in an investment opportunity?",
        options: [
          "Detailed prospectus provided",
          "Guaranteed high returns with no risk",
          "Licensed financial advisor presenting",
          "Time to research and consider"
        ],
        correctAnswer: 1,
        explanation: "Legitimate investments always carry risk. Guarantees of high returns with no risk are classic fraud indicators."
      },
      {
        id: 2,
        question: "Before investing, you should always:",
        options: [
          "Act quickly before the opportunity disappears",
          "Research the investment and verify credentials",
          "Invest based on testimonials only",
          "Trust the salesperson completely"
        ],
        correctAnswer: 1,
        explanation: "Always research investments thoroughly and verify the credentials of anyone offering investment opportunities."
      },
      {
        id: 3,
        question: "What is a Ponzi scheme?",
        options: [
          "A legitimate investment strategy",
          "Using new investor money to pay earlier investors",
          "A type of government bond",
          "A retirement savings plan"
        ],
        correctAnswer: 1,
        explanation: "Ponzi schemes use money from new investors to pay returns to earlier investors, creating an illusion of profits."
      },
      {
        id: 4,
        question: "Which statement about investment returns is most accurate?",
        options: [
          "Higher returns always mean higher risk",
          "All investments guarantee profits",
          "Past performance guarantees future results",
          "Investment risk can be completely eliminated"
        ],
        correctAnswer: 0,
        explanation: "Higher potential returns typically come with higher risk - this is a fundamental principle of investing."
      },
      {
        id: 5,
        question: "What should you do if pressured to invest immediately?",
        options: [
          "Invest quickly to avoid missing out",
          "Ask for more time to research",
          "Borrow money to invest",
          "Make a small investment first"
        ],
        correctAnswer: 1,
        explanation: "Legitimate investment opportunities don't require immediate decisions. Pressure tactics are red flags."
      }
    ]
  },
  // Financial Literacy Quizzes
  {
    id: "budgeting-basics",
    title: "Budgeting Basics",
    description: "Master the fundamentals of personal budgeting and money management",
    category: "financial",
    questions: [
      {
        id: 1,
        question: "What's the recommended percentage of income to save each month?",
        options: [
          "5%",
          "10-20%",
          "30%",
          "50%"
        ],
        correctAnswer: 1,
        explanation: "Financial experts typically recommend saving 10-20% of your income, with 20% being ideal if possible."
      },
      {
        id: 2,
        question: "What should be your first financial priority?",
        options: [
          "Investing in stocks",
          "Building an emergency fund",
          "Buying a house",
          "Taking a vacation"
        ],
        correctAnswer: 1,
        explanation: "An emergency fund covering 3-6 months of expenses should be your first financial priority."
      },
      {
        id: 3,
        question: "What does the 50/30/20 budget rule suggest?",
        options: [
          "50% needs, 30% wants, 20% savings",
          "50% savings, 30% needs, 20% wants",
          "50% wants, 30% savings, 20% needs",
          "Equal split across all categories"
        ],
        correctAnswer: 0,
        explanation: "The 50/30/20 rule allocates 50% for needs, 30% for wants, and 20% for savings and debt repayment."
      },
      {
        id: 4,
        question: "How often should you review and adjust your budget?",
        options: [
          "Never, once set it's permanent",
          "Every 5 years",
          "Monthly or quarterly",
          "Only when income changes"
        ],
        correctAnswer: 2,
        explanation: "Regular budget reviews (monthly or quarterly) help you stay on track and adjust for changing circumstances."
      },
      {
        id: 5,
        question: "What's the best approach to tracking expenses?",
        options: [
          "Estimate at the end of the month",
          "Track every expense as it happens",
          "Only track large purchases",
          "Don't track, just limit spending"
        ],
        correctAnswer: 1,
        explanation: "Tracking every expense in real-time gives you the most accurate picture of your spending habits."
      }
    ]
  },
  {
    id: "saving-investing",
    title: "Saving & Investing",
    description: "Learn the principles of saving money and basic investing strategies",
    category: "financial",
    questions: [
      {
        id: 1,
        question: "What's the main difference between saving and investing?",
        options: [
          "There is no difference",
          "Saving is for short-term goals, investing for long-term growth",
          "Investing is always safer than saving",
          "Saving guarantees higher returns"
        ],
        correctAnswer: 1,
        explanation: "Saving typically focuses on capital preservation for short-term goals, while investing aims for long-term growth with some risk."
      },
      {
        id: 2,
        question: "What is compound interest?",
        options: [
          "Interest paid only on the principal",
          "Interest earned on interest",
          "A type of bank fee",
          "Interest that decreases over time"
        ],
        correctAnswer: 1,
        explanation: "Compound interest is interest earned on both your initial principal and previously earned interest, creating exponential growth."
      },
      {
        id: 3,
        question: "Which typically offers the highest returns over the long term?",
        options: [
          "Savings accounts",
          "Certificates of deposit",
          "Stock market investments",
          "Cash under the mattress"
        ],
        correctAnswer: 2,
        explanation: "Historically, stock market investments have provided the highest returns over long periods, though with higher risk."
      },
      {
        id: 4,
        question: "What does 'diversification' mean in investing?",
        options: [
          "Putting all money in one stock",
          "Spreading investments across different assets",
          "Only investing in your home country",
          "Avoiding all risky investments"
        ],
        correctAnswer: 1,
        explanation: "Diversification means spreading investments across different types of assets to reduce risk."
      },
      {
        id: 5,
        question: "When should you start investing?",
        options: [
          "Only after retirement",
          "When you're wealthy",
          "As early as possible, even with small amounts",
          "Only during economic booms"
        ],
        correctAnswer: 2,
        explanation: "Starting early, even with small amounts, allows compound interest more time to work in your favor."
      }
    ]
  }
];

export const getUserProgress = () => {
  const progress = localStorage.getItem('quizProgress');
  return progress ? JSON.parse(progress) : {};
};

export const saveQuizResult = (quizId: string, score: number) => {
  const progress = getUserProgress();
  progress[quizId] = {
    completed: true,
    score,
    completedAt: new Date().toISOString()
  };
  localStorage.setItem('quizProgress', JSON.stringify(progress));
};

export const getTotalScore = () => {
  const progress = getUserProgress();
  const completedQuizzes = Object.values(progress) as any[];
  return completedQuizzes.reduce((total, quiz) => total + (quiz.score || 0), 0);
};

export const getCompletedQuizzesCount = () => {
  const progress = getUserProgress();
  return Object.keys(progress).length;
};