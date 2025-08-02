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
    id: "ponzi-schemes",
    title: "Ponzi Schemes",
    description: "Understand how Ponzi schemes work and how to avoid them",
    category: "fraud",
    questions: [
      {
        id: 1,
        question: "What is the main characteristic of a Ponzi scheme?",
        options: [
          "High returns guaranteed by the government",
          "New investor money pays earlier investors",
          "Investments in legitimate government bonds",
          "Returns backed by insurance"
        ],
        correctAnswer: 1,
        explanation: "Ponzi schemes use money from new investors to pay returns to earlier investors, creating the illusion of a profitable investment."
      },
      {
        id: 2,
        question: "Why do Ponzi schemes eventually collapse?",
        options: [
          "Government regulation shuts them down",
          "The organizer gets bored and quits",
          "They run out of new investors to pay old ones",
          "Market conditions change"
        ],
        correctAnswer: 2,
        explanation: "Ponzi schemes require a constant flow of new investors. When recruitment slows, there isn't enough money to pay existing investors."
      },
      {
        id: 3,
        question: "What should you be suspicious of in an investment offer?",
        options: [
          "Detailed financial statements",
          "Consistent returns regardless of market conditions",
          "Licensed brokers handling your account",
          "Written contracts and disclosures"
        ],
        correctAnswer: 1,
        explanation: "Legitimate investments fluctuate with market conditions. Consistent high returns regardless of market performance is a red flag."
      },
      {
        id: 4,
        question: "Who was Charles Ponzi?",
        options: [
          "A legitimate investor who created mutual funds",
          "The criminal who gave his name to Ponzi schemes",
          "A government regulator who stopped fraud",
          "A bank president from the 1920s"
        ],
        correctAnswer: 1,
        explanation: "Charles Ponzi was an Italian swindler who became infamous for using this technique in the early 1900s, giving the scheme its name."
      },
      {
        id: 5,
        question: "What's the best way to verify an investment opportunity?",
        options: [
          "Ask friends for their opinion",
          "Check with regulatory authorities and research the company",
          "Look at the website design quality",
          "Trust the salesperson's credentials"
        ],
        correctAnswer: 1,
        explanation: "Always verify investment opportunities with regulatory authorities like the SEC and research the company's background thoroughly."
      }
    ]
  },
  {
    id: "pyramid-schemes",
    title: "Pyramid Schemes",
    description: "Learn to identify and avoid pyramid scheme recruitment tactics",
    category: "fraud",
    questions: [
      {
        id: 1,
        question: "What is the primary focus of a pyramid scheme?",
        options: [
          "Selling quality products to consumers",
          "Recruiting new participants rather than selling products",
          "Providing investment advice",
          "Building legitimate business networks"
        ],
        correctAnswer: 1,
        explanation: "Pyramid schemes focus primarily on recruiting new participants rather than selling legitimate products or services."
      },
      {
        id: 2,
        question: "How do participants typically make money in a pyramid scheme?",
        options: [
          "By selling products to consumers",
          "By recruiting others and earning from their fees",
          "Through salary from the company",
          "From government subsidies"
        ],
        correctAnswer: 1,
        explanation: "In pyramid schemes, participants make money primarily by recruiting others and earning a portion of their recruitment fees."
      },
      {
        id: 3,
        question: "What happens to most people who join pyramid schemes?",
        options: [
          "They become wealthy quickly",
          "They break even on their investment",
          "They lose their money",
          "They get promoted to management"
        ],
        correctAnswer: 2,
        explanation: "Mathematical reality means that the vast majority of pyramid scheme participants lose their money, with only those at the top profiting."
      },
      {
        id: 4,
        question: "What's a common recruitment tactic used by pyramid schemes?",
        options: [
          "Detailed business plans and profit projections",
          "Emphasis on 'getting rich quick' and 'financial freedom'",
          "Conservative return estimates",
          "Government endorsements"
        ],
        correctAnswer: 1,
        explanation: "Pyramid schemes often use emotional appeals about quick wealth and financial freedom to attract new recruits."
      },
      {
        id: 5,
        question: "How can you distinguish a legitimate MLM from a pyramid scheme?",
        options: [
          "MLMs have more colorful marketing materials",
          "Legitimate MLMs focus on selling actual products to consumers",
          "Pyramid schemes are always illegal, MLMs are not",
          "MLMs require higher initial investments"
        ],
        correctAnswer: 1,
        explanation: "Legitimate multi-level marketing companies focus on selling real products to actual consumers, not just recruiting."
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
  {
    id: "mortgage-fraud",
    title: "Mortgage Fraud",
    description: "Protect yourself from mortgage-related scams and fraud",
    category: "fraud",
    questions: [
      {
        id: 1,
        question: "What is a common mortgage rescue scam tactic?",
        options: [
          "Offering legitimate loan modifications",
          "Promising to stop foreclosure for an upfront fee",
          "Providing free credit counseling",
          "Referring you to licensed attorneys"
        ],
        correctAnswer: 1,
        explanation: "Mortgage rescue scammers often promise to stop foreclosure in exchange for upfront fees, then disappear with the money."
      },
      {
        id: 2,
        question: "What should you never do when contacted about mortgage assistance?",
        options: [
          "Ask for credentials and references",
          "Pay upfront fees before services are provided",
          "Consult with a HUD-approved counselor",
          "Read all documents carefully"
        ],
        correctAnswer: 1,
        explanation: "Legitimate mortgage assistance providers don't require large upfront fees. Be wary of anyone demanding payment before providing services."
      },
      {
        id: 3,
        question: "Who should you contact for legitimate mortgage help?",
        options: [
          "Door-to-door solicitors",
          "HUD-approved housing counseling agencies",
          "Companies that contact you first",
          "Social media advertisers"
        ],
        correctAnswer: 1,
        explanation: "HUD-approved housing counseling agencies provide free or low-cost legitimate mortgage assistance and counseling."
      },
      {
        id: 4,
        question: "What's a red flag in mortgage advertising?",
        options: [
          "Detailed terms and conditions",
          "Guarantees to stop foreclosure regardless of situation",
          "Licensed professional credentials",
          "References from previous clients"
        ],
        correctAnswer: 1,
        explanation: "No legitimate service can guarantee to stop foreclosure regardless of your specific financial situation."
      },
      {
        id: 5,
        question: "If you're facing foreclosure, what's the first step?",
        options: [
          "Ignore the notices until the last minute",
          "Contact your mortgage lender immediately",
          "Pay the first company that offers help",
          "Move out of your home"
        ],
        correctAnswer: 1,
        explanation: "Contact your mortgage lender as soon as possible when facing difficulties. Many lenders offer legitimate assistance programs."
      }
    ]
  },
  {
    id: "tax-scams",
    title: "Tax Scams",
    description: "Recognize and avoid tax-related fraud and scams",
    category: "fraud",
    questions: [
      {
        id: 1,
        question: "How does the IRS typically contact taxpayers about issues?",
        options: [
          "Through phone calls demanding immediate payment",
          "Via email with urgent payment requests",
          "Through the mail with official letters",
          "Through text messages with payment links"
        ],
        correctAnswer: 2,
        explanation: "The IRS initial contact is typically through official mail. They don't call or email demanding immediate payment."
      },
      {
        id: 2,
        question: "What payment methods does the IRS never accept?",
        options: [
          "Check or money order",
          "Gift cards or prepaid debit cards",
          "Direct bank transfer through official IRS payment system",
          "Credit card through approved payment processors"
        ],
        correctAnswer: 1,
        explanation: "The IRS never accepts gift cards, prepaid debit cards, or wire transfers as payment methods."
      },
      {
        id: 3,
        question: "What should you do if someone calls claiming to be from the IRS?",
        options: [
          "Provide your Social Security number to verify identity",
          "Hang up and call the IRS directly using official numbers",
          "Give them your bank account information",
          "Pay immediately to avoid penalties"
        ],
        correctAnswer: 1,
        explanation: "Hang up and contact the IRS directly using official phone numbers to verify any claimed issues."
      },
      {
        id: 4,
        question: "What's a common tax refund scam warning sign?",
        options: [
          "The refund amount matches your tax return",
          "A refund much larger than expected",
          "Receiving the refund through direct deposit",
          "Having to wait several weeks for processing"
        ],
        correctAnswer: 1,
        explanation: "Be suspicious of refunds that are much larger than you expected, as this could indicate identity theft or fraud."
      },
      {
        id: 5,
        question: "During tax season, what should you be most careful about?",
        options: [
          "Filing your taxes on time",
          "Phishing emails claiming to be from the IRS",
          "Using tax preparation software",
          "Keeping organized records"
        ],
        correctAnswer: 1,
        explanation: "Tax season brings increased phishing attempts with emails that appear to be from the IRS but are actually scams."
      }
    ]
  },
  {
    id: "lottery-sweepstakes-fraud",
    title: "Lottery/Sweepstakes Fraud",
    description: "Identify fake lottery and sweepstakes scams",
    category: "fraud",
    questions: [
      {
        id: 1,
        question: "What's the biggest red flag in a lottery scam?",
        options: [
          "Winning a lottery you never entered",
          "Having to pay taxes on winnings",
          "Requiring photo ID to claim prizes",
          "Needing to sign legal documents"
        ],
        correctAnswer: 0,
        explanation: "You cannot win a legitimate lottery or sweepstakes that you never entered."
      },
      {
        id: 2,
        question: "What do lottery scammers typically ask for upfront?",
        options: [
          "Your mailing address for the check",
          "Fees for taxes, processing, or insurance",
          "Photo identification",
          "Your signature on winner forms"
        ],
        correctAnswer: 1,
        explanation: "Scammers ask for upfront fees claiming they're for taxes, processing, or insurance. Legitimate lotteries deduct taxes from winnings."
      },
      {
        id: 3,
        question: "How do legitimate lotteries handle taxes on winnings?",
        options: [
          "Winners must pay all taxes upfront",
          "Taxes are deducted from the prize amount",
          "Winners pay taxes to the lottery company",
          "No taxes are required on lottery winnings"
        ],
        correctAnswer: 1,
        explanation: "Legitimate lotteries deduct taxes directly from your winnings before payment. You never pay taxes to win."
      },
      {
        id: 4,
        question: "What should you do if contacted about winning a foreign lottery?",
        options: [
          "Provide your bank account for direct deposit",
          "Pay the required fees to claim your prize",
          "Ignore it completely - it's illegal to play foreign lotteries",
          "Ask for more details about the lottery"
        ],
        correctAnswer: 2,
        explanation: "It's illegal for US residents to participate in foreign lotteries, so any such contact is definitely a scam."
      },
      {
        id: 5,
        question: "What's a legitimate way sweepstakes notify winners?",
        options: [
          "Through certified mail with official documentation",
          "Via urgent phone calls demanding quick action",
          "Through email requesting immediate payment",
          "Text messages with payment links"
        ],
        correctAnswer: 0,
        explanation: "Legitimate sweepstakes typically notify winners through certified mail with official documentation, not urgent phone calls or emails."
      }
    ]
  },
  {
    id: "charity-scams",
    title: "Charity Scams",
    description: "Ensure your donations reach legitimate charitable organizations",
    category: "fraud",
    questions: [
      {
        id: 1,
        question: "When do charity scams typically increase?",
        options: [
          "During summer months",
          "After natural disasters or tragedies",
          "During presidential elections",
          "At the beginning of the year"
        ],
        correctAnswer: 1,
        explanation: "Charity scammers often exploit people's generosity after natural disasters, tragedies, or emergencies."
      },
      {
        id: 2,
        question: "How should you research a charity before donating?",
        options: [
          "Only look at their website",
          "Check charity rating sites like Charity Navigator",
          "Trust door-to-door solicitors",
          "Base decisions on emotional appeals only"
        ],
        correctAnswer: 1,
        explanation: "Use charity rating websites like Charity Navigator, GuideStar, or CharityWatch to research organizations before donating."
      },
      {
        id: 3,
        question: "What's a red flag when donating to charity?",
        options: [
          "Providing detailed financial information",
          "Pressure to donate immediately",
          "Accepting multiple payment methods",
          "Sending thank you acknowledgments"
        ],
        correctAnswer: 1,
        explanation: "Legitimate charities don't pressure you to donate immediately. Take time to research before giving."
      },
      {
        id: 4,
        question: "What's the safest way to donate to charity?",
        options: [
          "Cash to door-to-door solicitors",
          "Check or credit card to established charities",
          "Wire transfer to foreign accounts",
          "Gift cards as requested by callers"
        ],
        correctAnswer: 1,
        explanation: "Donate by check or credit card to established, verified charities. Avoid cash donations or wire transfers."
      },
      {
        id: 5,
        question: "What should legitimate charities provide?",
        options: [
          "Promises that 100% goes directly to victims",
          "Detailed information about their programs and finances",
          "Guarantees of specific outcomes",
          "Immediate tax deduction certificates"
        ],
        correctAnswer: 1,
        explanation: "Legitimate charities provide detailed information about their programs, how donations are used, and their financial management."
      }
    ]
  },
  {
    id: "debt-relief-scams",
    title: "Debt Relief Scams",
    description: "Avoid fraudulent debt relief and credit repair services",
    category: "fraud",
    questions: [
      {
        id: 1,
        question: "What do debt relief scammers typically promise?",
        options: [
          "Gradual improvement over time",
          "Complete elimination of all debt immediately",
          "Negotiation with creditors",
          "Credit counseling education"
        ],
        correctAnswer: 1,
        explanation: "Debt relief scammers often promise immediate elimination of all debt, which is unrealistic and usually impossible."
      },
      {
        id: 2,
        question: "What should debt relief companies NOT ask for upfront?",
        options: [
          "Information about your debts",
          "Large fees before providing any services",
          "Contact information for creditors",
          "Details about your income"
        ],
        correctAnswer: 1,
        explanation: "Legitimate debt relief companies cannot legally charge large upfront fees before providing services under federal law."
      },
      {
        id: 3,
        question: "What's a red flag in debt relief advertising?",
        options: [
          "Offering free initial consultations",
          "Guaranteeing to eliminate debt regardless of situation",
          "Explaining their fees clearly",
          "Providing references from past clients"
        ],
        correctAnswer: 1,
        explanation: "No legitimate service can guarantee to eliminate debt regardless of your specific financial situation."
      },
      {
        id: 4,
        question: "Where can you find legitimate debt counseling?",
        options: [
          "Cold callers who contact you first",
          "HUD-approved credit counseling agencies",
          "Social media advertisements",
          "Door-to-door salespeople"
        ],
        correctAnswer: 1,
        explanation: "HUD-approved credit counseling agencies provide legitimate, often free or low-cost debt counseling services."
      },
      {
        id: 5,
        question: "What's dangerous about debt relief scam advice?",
        options: [
          "They provide too much education",
          "They advise stopping payments to creditors",
          "They recommend budgeting",
          "They suggest speaking with creditors"
        ],
        correctAnswer: 1,
        explanation: "Scammers often advise stopping payments to creditors, which can damage your credit score and lead to legal action."
      }
    ]
  },
  {
    id: "fake-check-scams",
    title: "Fake Check Scams",
    description: "Learn to identify counterfeit checks and related scams",
    category: "fraud",
    questions: [
      {
        id: 1,
        question: "What makes fake check scams particularly dangerous?",
        options: [
          "The checks always look obviously fake",
          "Banks immediately detect fake checks",
          "Fake checks can look very realistic",
          "Only elderly people fall for them"
        ],
        correctAnswer: 2,
        explanation: "Modern fake checks can look very realistic, making them difficult to detect without proper verification."
      },
      {
        id: 2,
        question: "In a typical fake check scam, what happens after you deposit the check?",
        options: [
          "You keep all the money",
          "The bank immediately rejects it",
          "You're asked to send some money back or buy gift cards",
          "Nothing happens"
        ],
        correctAnswer: 2,
        explanation: "Scammers typically ask you to send some money back or purchase gift cards after you deposit their fake check."
      },
      {
        id: 3,
        question: "How long can it take for a bank to discover a check is fake?",
        options: [
          "Immediately",
          "Several days to weeks",
          "Never - banks can't detect fake checks",
          "Only if you report it"
        ],
        correctAnswer: 1,
        explanation: "It can take days or even weeks for banks to discover a check is fake, during which time you might think the money is real."
      },
      {
        id: 4,
        question: "Who is responsible if you deposit a fake check?",
        options: [
          "The bank that accepted it",
          "The person who gave you the check",
          "You are responsible for the money",
          "The government insurance"
        ],
        correctAnswer: 2,
        explanation: "You are responsible for checks you deposit. If a check turns out to be fake, you owe the bank that money."
      },
      {
        id: 5,
        question: "What's the safest approach when receiving unexpected checks?",
        options: [
          "Deposit them immediately",
          "Wait and verify the source independently",
          "Cash them at check-cashing stores",
          "Spend the money right away"
        ],
        correctAnswer: 1,
        explanation: "Always verify unexpected checks independently by contacting the supposed issuer directly through official channels."
      }
    ]
  },
  {
    id: "online-banking-fraud",
    title: "Online Banking Fraud",
    description: "Protect your online banking and financial accounts",
    category: "fraud",
    questions: [
      {
        id: 1,
        question: "What's the most important security feature for online banking?",
        options: [
          "Using the same password for all accounts",
          "Two-factor authentication (2FA)",
          "Banking only on public Wi-Fi",
          "Saving passwords in browsers"
        ],
        correctAnswer: 1,
        explanation: "Two-factor authentication adds an essential extra layer of security to protect your banking accounts."
      },
      {
        id: 2,
        question: "When should you be most suspicious of banking emails?",
        options: [
          "When they contain your account balance",
          "When they ask you to click links to verify account info",
          "When they come during business hours",
          "When they include the bank's logo"
        ],
        correctAnswer: 1,
        explanation: "Banks never ask you to click email links to verify account information. Always log in through the official website directly."
      },
      {
        id: 3,
        question: "What's unsafe about public Wi-Fi for banking?",
        options: [
          "It's too slow for banking websites",
          "Others can potentially intercept your data",
          "Banks block public Wi-Fi connections",
          "It costs money to use"
        ],
        correctAnswer: 1,
        explanation: "Public Wi-Fi networks can be insecure, allowing others to potentially intercept your banking information."
      },
      {
        id: 4,
        question: "How often should you check your bank statements?",
        options: [
          "Once a year",
          "Only when you receive them in the mail",
          "At least monthly, preferably more often",
          "Only when you suspect problems"
        ],
        correctAnswer: 2,
        explanation: "Check your bank statements at least monthly, or even weekly, to quickly identify any unauthorized transactions."
      },
      {
        id: 5,
        question: "What should you do immediately if you notice unauthorized transactions?",
        options: [
          "Wait to see if more appear",
          "Contact your bank immediately",
          "Try to figure out who did it yourself",
          "Change your password and hope it stops"
        ],
        correctAnswer: 1,
        explanation: "Contact your bank immediately when you notice unauthorized transactions. Quick action can limit your liability."
      }
    ]
  },
  {
    id: "employment-fraud",
    title: "Employment Fraud",
    description: "Recognize and avoid job-related scams and fraudulent employers",
    category: "fraud",
    questions: [
      {
        id: 1,
        question: "What's a major red flag in job postings?",
        options: [
          "Detailed job descriptions",
          "Vague job duties with promises of high pay",
          "Requirements for specific skills",
          "Company contact information"
        ],
        correctAnswer: 1,
        explanation: "Be suspicious of job postings with vague descriptions but promises of unusually high pay for minimal work."
      },
      {
        id: 2,
        question: "What should legitimate employers NEVER ask for upfront?",
        options: [
          "Your resume and references",
          "Payment for training materials or background checks",
          "Your availability to start work",
          "Examples of your previous work"
        ],
        correctAnswer: 1,
        explanation: "Legitimate employers never require you to pay for training materials, background checks, or other job-related expenses upfront."
      },
      {
        id: 3,
        question: "What's suspicious about a job interview process?",
        options: [
          "Meeting in the company's office",
          "Conducting interviews only via text message",
          "Asking about your experience",
          "Requesting references"
        ],
        correctAnswer: 1,
        explanation: "Legitimate employers conduct proper interviews, not just text message conversations. Be wary of jobs offered without real interviews."
      },
      {
        id: 4,
        question: "How should you research potential employers?",
        options: [
          "Only look at their job posting",
          "Check their website, reviews, and Better Business Bureau",
          "Trust their promises about the company",
          "Ask friends if they've heard of them"
        ],
        correctAnswer: 1,
        explanation: "Research potential employers thoroughly through their official website, employee reviews, and Better Business Bureau ratings."
      },
      {
        id: 5,
        question: "What's a common work-from-home scam?",
        options: [
          "Remote customer service positions",
          "Envelope stuffing or assembly work",
          "Online tutoring jobs",
          "Virtual assistant positions"
        ],
        correctAnswer: 1,
        explanation: "Envelope stuffing and simple assembly work from home are classic scams that rarely provide the promised income."
      }
    ]
  },
  {
    id: "student-loan-scams",
    title: "Student Loan Scams",
    description: "Protect yourself from fraudulent student loan services",
    category: "fraud",
    questions: [
      {
        id: 1,
        question: "What do student loan scammers commonly promise?",
        options: [
          "Help with paperwork for a small fee",
          "Immediate loan forgiveness for an upfront fee",
          "Assistance understanding loan terms",
          "Connections to legitimate servicers"
        ],
        correctAnswer: 1,
        explanation: "Student loan scammers often promise immediate loan forgiveness in exchange for upfront fees, which is not how legitimate programs work."
      },
      {
        id: 2,
        question: "Where can you get FREE help with federal student loans?",
        options: [
          "Only through paid services",
          "Federal Student Aid website and your loan servicer",
          "Social media advertisements",
          "Door-to-door representatives"
        ],
        correctAnswer: 1,
        explanation: "The Federal Student Aid website (studentaid.gov) and your official loan servicer provide free assistance with federal student loans."
      },
      {
        id: 3,
        question: "What's a red flag in student loan relief offers?",
        options: [
          "Requiring official government forms",
          "Guaranteeing loan forgiveness regardless of situation",
          "Directing you to official government websites",
          "Explaining program requirements clearly"
        ],
        correctAnswer: 1,
        explanation: "No legitimate service can guarantee loan forgiveness regardless of your specific situation or loan type."
      },
      {
        id: 4,
        question: "How much should you pay for student loan assistance?",
        options: [
          "Whatever the company charges",
          "Nothing - legitimate federal assistance is free",
          "A percentage of your loan balance",
          "Monthly fees until loans are resolved"
        ],
        correctAnswer: 1,
        explanation: "Legitimate federal student loan assistance programs are free. You never need to pay for help with federal loan programs."
      },
      {
        id: 5,
        question: "What should you do if contacted about student loan services?",
        options: [
          "Sign up immediately to get help",
          "Verify any claims through official federal resources",
          "Provide your FSA ID for verification",
          "Pay the fee to secure your spot"
        ],
        correctAnswer: 1,
        explanation: "Always verify any student loan service claims through official federal resources like studentaid.gov before taking action."
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
  },
  {
    id: "tax-planning",
    title: "Tax Planning",
    description: "Learn essential tax planning strategies for personal finance",
    category: "financial",
    questions: [
      {
        id: 1,
        question: "What's the primary benefit of contributing to a traditional 401(k)?",
        options: [
          "Immediate tax-free withdrawals",
          "Current year tax deduction",
          "No taxes ever on the money",
          "Higher investment returns"
        ],
        correctAnswer: 1,
        explanation: "Traditional 401(k) contributions reduce your current year's taxable income, providing immediate tax benefits."
      },
      {
        id: 2,
        question: "When should you start planning for taxes?",
        options: [
          "Only during tax season",
          "Throughout the year",
          "Only when you receive tax documents",
          "After you retire"
        ],
        correctAnswer: 1,
        explanation: "Effective tax planning happens throughout the year, not just during tax season."
      },
      {
        id: 3,
        question: "What's a tax-advantaged way to save for healthcare expenses?",
        options: [
          "Regular savings account",
          "Health Savings Account (HSA)",
          "Checking account",
          "Credit card rewards"
        ],
        correctAnswer: 1,
        explanation: "HSAs offer triple tax advantages: deductible contributions, tax-free growth, and tax-free withdrawals for qualified medical expenses."
      },
      {
        id: 4,
        question: "What's the difference between tax deductions and tax credits?",
        options: [
          "There is no difference",
          "Deductions reduce taxable income, credits reduce tax owed",
          "Credits reduce taxable income, deductions reduce tax owed",
          "Both work exactly the same way"
        ],
        correctAnswer: 1,
        explanation: "Deductions reduce your taxable income, while credits directly reduce the amount of tax you owe dollar-for-dollar."
      },
      {
        id: 5,
        question: "What's important about keeping tax records?",
        options: [
          "Only keep them for one year",
          "Keep important records for 3-7 years",
          "Throw them away immediately after filing",
          "Only keep them if you owe money"
        ],
        correctAnswer: 1,
        explanation: "Keep important tax records for 3-7 years in case of audits or amendments, depending on the type of document."
      }
    ]
  },
  {
    id: "debt-management",
    title: "Debt Management",
    description: "Learn effective strategies for managing and reducing debt",
    category: "financial",
    questions: [
      {
        id: 1,
        question: "What's the 'debt snowball' method?",
        options: [
          "Pay minimum on all debts",
          "Pay off smallest debts first while making minimums on others",
          "Pay off highest interest rate debts first",
          "Consolidate all debts into one payment"
        ],
        correctAnswer: 1,
        explanation: "The debt snowball method focuses on paying off the smallest debts first to build momentum and motivation."
      },
      {
        id: 2,
        question: "What's the 'debt avalanche' method?",
        options: [
          "Pay off smallest debts first",
          "Pay off highest interest rate debts first",
          "Pay equal amounts on all debts",
          "Only pay minimum payments"
        ],
        correctAnswer: 1,
        explanation: "The debt avalanche method prioritizes paying off debts with the highest interest rates first to minimize total interest paid."
      },
      {
        id: 3,
        question: "What's a good debt-to-income ratio to maintain?",
        options: [
          "Below 36% for total debt",
          "50% or higher is ideal",
          "Debt-to-income doesn't matter",
          "100% is acceptable"
        ],
        correctAnswer: 0,
        explanation: "Financial experts generally recommend keeping your total debt-to-income ratio below 36%, with housing costs below 28%."
      },
      {
        id: 4,
        question: "When might debt consolidation be beneficial?",
        options: [
          "When you want to take on more debt",
          "When you can get a lower interest rate",
          "When you want to extend payment terms indefinitely",
          "It's never beneficial"
        ],
        correctAnswer: 1,
        explanation: "Debt consolidation can be beneficial when you can secure a lower interest rate or simplify payments, but requires discipline."
      },
      {
        id: 5,
        question: "What's the most important factor in getting out of debt?",
        options: [
          "Having perfect credit",
          "Earning a high income",
          "Creating and sticking to a budget",
          "Using credit cards for everything"
        ],
        correctAnswer: 2,
        explanation: "Creating and consistently following a realistic budget is the foundation of successful debt reduction, regardless of income level."
      }
    ]
  },
  {
    id: "digital-payment-safety",
    title: "Digital Payment Safety",
    description: "Secure practices for online payments and digital wallets",
    category: "financial",
    questions: [
      {
        id: 1,
        question: "What's the safest type of payment for online purchases?",
        options: [
          "Debit cards",
          "Credit cards",
          "Wire transfers",
          "Cash payments"
        ],
        correctAnswer: 1,
        explanation: "Credit cards offer better fraud protection and dispute resolution compared to debit cards for online purchases."
      },
      {
        id: 2,
        question: "What should you check before entering payment information online?",
        options: [
          "The website has lots of colors",
          "The URL starts with 'https://' and shows a lock icon",
          "The website loads quickly",
          "There are many advertisements"
        ],
        correctAnswer: 1,
        explanation: "Always ensure the website uses HTTPS encryption (lock icon) before entering payment information."
      },
      {
        id: 3,
        question: "What's a safe practice when using digital wallets?",
        options: [
          "Store all your payment methods",
          "Use biometric authentication when available",
          "Share your wallet password with family",
          "Use public Wi-Fi for payments"
        ],
        correctAnswer: 1,
        explanation: "Biometric authentication (fingerprint, face recognition) adds an extra layer of security to digital wallet access."
      },
      {
        id: 4,
        question: "How often should you review digital payment statements?",
        options: [
          "Once a year",
          "Only when problems occur",
          "At least monthly",
          "Never - they're automated"
        ],
        correctAnswer: 2,
        explanation: "Review all payment statements at least monthly to quickly identify any unauthorized transactions."
      },
      {
        id: 5,
        question: "What's the risk of using payment apps on public Wi-Fi?",
        options: [
          "Slower transaction speeds",
          "Higher fees",
          "Potential data interception by criminals",
          "No risks - public Wi-Fi is safe"
        ],
        correctAnswer: 2,
        explanation: "Public Wi-Fi networks can be insecure, potentially allowing criminals to intercept your payment information."
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