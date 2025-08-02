import AsyncStorage from '@react-native-async-storage/async-storage';

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
  category: 'fraud' | 'financial';
  questions: Question[];
}

export const quizzes: Quiz[] = [
  {
    id: 'phishing-basics',
    title: 'Phishing Email Recognition',
    description: 'Learn to identify and avoid phishing emails that steal personal information.',
    category: 'fraud',
    questions: [
      {
        id: 'phish-1',
        question: 'What is the most common sign of a phishing email?',
        options: [
          'Professional company logo',
          'Urgent language demanding immediate action',
          'Proper grammar and spelling',
          'Personalized greeting with your name'
        ],
        correctAnswer: 1,
        explanation: 'Phishing emails often use urgent language to pressure you into acting quickly without thinking. Legitimate companies rarely demand immediate action via email.'
      },
      {
        id: 'phish-2',
        question: 'You receive an email claiming to be from your bank asking you to verify your account. What should you do?',
        options: [
          'Click the link and enter your information',
          'Reply with your account details',
          'Contact your bank directly using their official phone number',
          'Forward the email to friends for advice'
        ],
        correctAnswer: 2,
        explanation: 'Always verify suspicious emails by contacting the organization directly through official channels. Banks will never ask for sensitive information via email.'
      },
      {
        id: 'phish-3',
        question: 'Which email address is most likely to be legitimate?',
        options: [
          'security@amaz0n-support.com',
          'noreply@amazon.com',
          'amazon.security@gmail.com',
          'support@amazon-verification.net'
        ],
        correctAnswer: 1,
        explanation: 'Legitimate companies use their official domain names. Be wary of domains with numbers replacing letters, extra hyphens, or using free email services.'
      },
      {
        id: 'phish-4',
        question: 'What should you do if you accidentally clicked a suspicious link?',
        options: [
          'Ignore it and hope nothing happens',
          'Immediately change passwords and monitor accounts',
          'Turn off your computer',
          'Delete your browser history'
        ],
        correctAnswer: 1,
        explanation: 'If you clicked a suspicious link, immediately change your passwords, monitor your accounts for unusual activity, and consider running antivirus software.'
      },
      {
        id: 'phish-5',
        question: 'Which of these is NOT a red flag in an email?',
        options: [
          'Generic greeting like "Dear Customer"',
          'Spelling and grammar errors',
          'A professional email signature',
          'Threats of account closure'
        ],
        correctAnswer: 2,
        explanation: 'A professional email signature is actually a good sign. Red flags include generic greetings, poor grammar, and threatening language about account closures.'
      }
    ]
  },
  {
    id: 'investment-scams',
    title: 'Investment Fraud Prevention',
    description: 'Recognize and avoid common investment scams and fraudulent schemes.',
    category: 'fraud',
    questions: [
      {
        id: 'invest-1',
        question: 'What is a major red flag in investment opportunities?',
        options: [
          'Detailed risk disclosures',
          'Promises of guaranteed high returns with no risk',
          'Licensed financial advisors',
          'Transparent fee structures'
        ],
        correctAnswer: 1,
        explanation: 'All investments carry risk. Any promise of guaranteed high returns with no risk is a classic sign of fraud. Legitimate investments always involve some level of risk.'
      },
      {
        id: 'invest-2',
        question: 'Before investing, you should always:',
        options: [
          'Act quickly before the opportunity disappears',
          'Research the investment and verify the advisor\'s credentials',
          'Invest your entire savings for maximum returns',
          'Keep the investment secret from family'
        ],
        correctAnswer: 1,
        explanation: 'Always research investments thoroughly and verify that advisors are properly licensed. Legitimate opportunities don\'t require immediate decisions.'
      },
      {
        id: 'invest-3',
        question: 'What is a Ponzi scheme?',
        options: [
          'A legitimate investment strategy',
          'A type of government bond',
          'A fraud that pays existing investors with new investors\' money',
          'A retirement savings plan'
        ],
        correctAnswer: 2,
        explanation: 'A Ponzi scheme uses money from new investors to pay returns to existing investors, creating the illusion of legitimate returns until it inevitably collapses.'
      },
      {
        id: 'invest-4',
        question: 'Which statement about cryptocurrency investments is true?',
        options: [
          'All cryptocurrency investments are scams',
          'Cryptocurrency is risk-free',
          'You should be extra cautious of unsolicited crypto investment offers',
          'Cryptocurrency guarantees high returns'
        ],
        correctAnswer: 2,
        explanation: 'While cryptocurrency can be legitimate, be extremely cautious of unsolicited investment offers, especially those promising guaranteed returns or using high-pressure tactics.'
      },
      {
        id: 'invest-5',
        question: 'If an investment seems too good to be true, you should:',
        options: [
          'Invest immediately before others find out',
          'Be skeptical and investigate thoroughly',
          'Invest a small amount to test it',
          'Ask the promoter for references'
        ],
        correctAnswer: 1,
        explanation: 'If an investment seems too good to be true, it probably is. Always be skeptical and conduct thorough research before investing any money.'
      }
    ]
  },
  {
    id: 'budgeting-basics',
    title: 'Personal Budgeting Fundamentals',
    description: 'Master the basics of creating and maintaining a personal budget.',
    category: 'financial',
    questions: [
      {
        id: 'budget-1',
        question: 'What is the 50/30/20 budgeting rule?',
        options: [
          '50% savings, 30% needs, 20% wants',
          '50% needs, 30% wants, 20% savings',
          '50% wants, 30% savings, 20% needs',
          '50% investments, 30% bills, 20% entertainment'
        ],
        correctAnswer: 1,
        explanation: 'The 50/30/20 rule suggests allocating 50% of after-tax income to needs, 30% to wants, and 20% to savings and debt repayment.'
      },
      {
        id: 'budget-2',
        question: 'Which expense is considered a "need" rather than a "want"?',
        options: [
          'Cable TV subscription',
          'Dining out at restaurants',
          'Basic groceries',
          'Gym membership'
        ],
        correctAnswer: 2,
        explanation: 'Basic groceries are essential for survival and health, making them a need. Cable TV, dining out, and gym memberships are typically considered wants.'
      },
      {
        id: 'budget-3',
        question: 'How often should you review and adjust your budget?',
        options: [
          'Once a year',
          'Never, once it\'s set',
          'Monthly',
          'Only when you get a raise'
        ],
        correctAnswer: 2,
        explanation: 'You should review your budget monthly to track spending, identify areas for improvement, and make necessary adjustments based on changing circumstances.'
      },
      {
        id: 'budget-4',
        question: 'What should you do first when creating a budget?',
        options: [
          'Set spending limits for each category',
          'Track your current income and expenses',
          'Open a savings account',
          'Cut all unnecessary expenses'
        ],
        correctAnswer: 1,
        explanation: 'Before creating a budget, you need to understand your current financial situation by tracking all income and expenses for at least a month.'
      },
      {
        id: 'budget-5',
        question: 'What is an emergency fund?',
        options: [
          'Money for vacation expenses',
          'Funds for unexpected expenses like job loss or medical bills',
          'Money for holiday shopping',
          'Investment money for high-risk opportunities'
        ],
        correctAnswer: 1,
        explanation: 'An emergency fund is money set aside specifically for unexpected expenses like job loss, medical emergencies, or major repairs. It provides financial security and peace of mind.'
      }
    ]
  }
];

const STORAGE_KEY = 'quiz_progress';

export interface QuizProgress {
  [quizId: string]: {
    completed: boolean;
    score: number;
    completedAt?: string;
  };
}

export const saveQuizResult = async (quizId: string, score: number): Promise<void> => {
  try {
    const existingProgress = await getQuizProgress();
    const updatedProgress: QuizProgress = {
      ...existingProgress,
      [quizId]: {
        completed: true,
        score,
        completedAt: new Date().toISOString(),
      },
    };
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProgress));
  } catch (error) {
    console.error('Error saving quiz result:', error);
  }
};

export const getQuizProgress = async (): Promise<QuizProgress> => {
  try {
    const progressData = await AsyncStorage.getItem(STORAGE_KEY);
    return progressData ? JSON.parse(progressData) : {};
  } catch (error) {
    console.error('Error getting quiz progress:', error);
    return {};
  }
};

export const getUserProgress = (): QuizProgress => {
  // This is a synchronous version for compatibility
  // In a real app, you'd want to use the async version
  return {};
};

export const getCompletedQuizzesCount = (): number => {
  // Mock implementation - in real app, use async storage
  return 0;
};

export const getTotalScore = (): number => {
  // Mock implementation - in real app, use async storage
  return 0;
};