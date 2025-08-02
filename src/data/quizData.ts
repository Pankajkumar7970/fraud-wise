export interface Question {
  id: string;
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
}

export const quizzes: Quiz[] = [
  {
    id: "phishing-basics",
    title: "Phishing Email Recognition",
    description: "Learn to identify and avoid phishing attempts",
    category: "fraud",
    questions: [
      {
        id: "q1",
        question: "What is the most common sign of a phishing email?",
        options: [
          "Professional company logo",
          "Urgent language demanding immediate action",
          "Proper grammar and spelling",
          "Personalized greeting with your full name"
        ],
        correctAnswer: 1,
        explanation: "Phishing emails often use urgent language to pressure you into acting quickly without thinking. Legitimate companies rarely demand immediate action via email."
      },
      {
        id: "q2",
        question: "You receive an email claiming to be from your bank asking you to verify your account. What should you do?",
        options: [
          "Click the link and enter your information",
          "Reply with your account details",
          "Contact your bank directly using their official phone number",
          "Forward the email to friends for advice"
        ],
        correctAnswer: 2,
        explanation: "Always verify suspicious emails by contacting the organization directly through official channels, never through links or contact info in the suspicious email."
      },
      {
        id: "q3",
        question: "Which of these email addresses is most likely to be legitimate?",
        options: [
          "security@amaz0n-support.com",
          "noreply@amazon.com",
          "amazon.security@gmail.com",
          "support@amazon-verification.net"
        ],
        correctAnswer: 1,
        explanation: "Legitimate companies use their official domain names. Be wary of domains that use numbers instead of letters, free email services, or slight misspellings."
      },
      {
        id: "q4",
        question: "What should you do if you accidentally clicked a suspicious link?",
        options: [
          "Nothing, it's probably fine",
          "Enter fake information to confuse scammers",
          "Close the browser, run antivirus, and change passwords",
          "Complete the form to see what happens"
        ],
        correctAnswer: 2,
        explanation: "If you click a suspicious link, immediately close your browser, run a security scan, and change passwords for any accounts that might be compromised."
      },
      {
        id: "q5",
        question: "Phishing attacks can come through which channels?",
        options: [
          "Only email",
          "Email and text messages only",
          "Email, text, phone calls, and social media",
          "Only through malicious websites"
        ],
        correctAnswer: 2,
        explanation: "Phishing attacks can occur through multiple channels including email, SMS (smishing), phone calls (vishing), and social media platforms."
      }
    ]
  },
  {
    id: "investment-scams",
    title: "Investment Fraud Detection",
    description: "Recognize and avoid investment scams",
    category: "fraud",
    questions: [
      {
        id: "q1",
        question: "What is a major red flag in investment opportunities?",
        options: [
          "Detailed risk disclosures",
          "Guaranteed high returns with no risk",
          "Licensed financial advisors",
          "Transparent fee structures"
        ],
        correctAnswer: 1,
        explanation: "All legitimate investments carry risk. Any guarantee of high returns with no risk is a classic sign of a scam."
      },
      {
        id: "q2",
        question: "Before investing, you should always:",
        options: [
          "Act quickly before the opportunity disappears",
          "Research the investment and verify credentials",
          "Invest your life savings for maximum returns",
          "Trust recommendations from strangers online"
        ],
        correctAnswer: 1,
        explanation: "Always research investments thoroughly and verify that advisors are properly licensed before investing any money."
      },
      {
        id: "q3",
        question: "What is a Ponzi scheme?",
        options: [
          "A legitimate investment strategy",
          "A type of government bond",
          "A scam that pays early investors with new investors' money",
          "A high-yield savings account"
        ],
        correctAnswer: 2,
        explanation: "A Ponzi scheme uses money from new investors to pay returns to earlier investors, creating the illusion of legitimate returns until it inevitably collapses."
      },
      {
        id: "q4",
        question: "Which investment opportunity should you be most suspicious of?",
        options: [
          "A diversified mutual fund with a 7% annual return",
          "A 'secret' investment promising 50% returns in 30 days",
          "A certificate of deposit at your local bank",
          "An index fund tracking the S&P 500"
        ],
        correctAnswer: 1,
        explanation: "Extremely high returns promised in short timeframes, especially 'secret' opportunities, are classic signs of investment fraud."
      },
      {
        id: "q5",
        question: "If an investment opportunity seems too good to be true, you should:",
        options: [
          "Invest immediately before others find out",
          "Invest a small amount to test it",
          "Walk away and report it if necessary",
          "Ask for an even better deal"
        ],
        correctAnswer: 2,
        explanation: "If something seems too good to be true, it usually is. It's better to miss a 'great' opportunity than to lose your money to a scam."
      }
    ]
  },
  {
    id: "budgeting-basics",
    title: "Personal Budgeting Fundamentals",
    description: "Master the basics of personal budgeting",
    category: "financial",
    questions: [
      {
        id: "q1",
        question: "What is the 50/30/20 budgeting rule?",
        options: [
          "50% savings, 30% needs, 20% wants",
          "50% needs, 30% wants, 20% savings",
          "50% wants, 30% savings, 20% needs",
          "50% investments, 30% emergency fund, 20% spending"
        ],
        correctAnswer: 1,
        explanation: "The 50/30/20 rule suggests allocating 50% of after-tax income to needs, 30% to wants, and 20% to savings and debt repayment."
      },
      {
        id: "q2",
        question: "Which expense is considered a 'need' rather than a 'want'?",
        options: [
          "Netflix subscription",
          "Designer clothing",
          "Rent or mortgage payment",
          "Dining out at restaurants"
        ],
        correctAnswer: 2,
        explanation: "Housing costs like rent or mortgage payments are essential needs, while entertainment subscriptions and dining out are typically wants."
      },
      {
        id: "q3",
        question: "How often should you review and adjust your budget?",
        options: [
          "Once a year",
          "Never, once it's set",
          "Monthly",
          "Only when you get a raise"
        ],
        correctAnswer: 2,
        explanation: "Budgets should be reviewed monthly to track spending, identify areas for improvement, and adjust for changing circumstances."
      },
      {
        id: "q4",
        question: "What should you do first when creating a budget?",
        options: [
          "Set spending limits for each category",
          "Track your current income and expenses",
          "Open a new savings account",
          "Cut all unnecessary expenses"
        ],
        correctAnswer: 1,
        explanation: "Before creating a budget, you need to understand your current financial situation by tracking all income and expenses."
      },
      {
        id: "q5",
        question: "What is the primary purpose of an emergency fund?",
        options: [
          "To invest in the stock market",
          "To cover unexpected expenses or income loss",
          "To buy luxury items",
          "To pay for planned vacations"
        ],
        correctAnswer: 1,
        explanation: "An emergency fund provides financial security by covering unexpected expenses like medical bills, car repairs, or job loss."
      }
    ]
  }
];

// Simple storage simulation (in a real app, use AsyncStorage)
let userProgress: { [quizId: string]: { completed: boolean; score: number } } = {};

export const getUserProgress = () => userProgress;

export const saveQuizResult = (quizId: string, score: number) => {
  userProgress[quizId] = { completed: true, score };
};

export const getCompletedQuizzesCount = () => {
  return Object.values(userProgress).filter(p => p.completed).length;
};

export const getTotalScore = () => {
  return Object.values(userProgress).reduce((total, p) => total + (p.completed ? p.score : 0), 0);
};