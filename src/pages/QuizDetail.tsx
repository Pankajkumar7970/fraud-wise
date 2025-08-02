import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import ChatbotButton from "@/components/ChatbotButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { quizzes, saveQuizResult, Question } from "@/data/quizData";
import { CheckCircle, XCircle, RotateCcw, Home, Award } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const QuizDetail = () => {
  const { quizId } = useParams<{ quizId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const quiz = quizzes.find(q => q.id === quizId);

  useEffect(() => {
    if (!quiz) {
      navigate("/quizzes");
    }
  }, [quiz, navigate]);

  if (!quiz) {
    return null;
  }

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);

    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      // Quiz completed
      const score = newAnswers.reduce((total, answer, index) => {
        return total + (answer === quiz.questions[index].correctAnswer ? 1 : 0);
      }, 0);
      
      saveQuizResult(quiz.id, score);
      setShowResults(true);
      
      toast({
        title: "Quiz Completed!",
        description: `You scored ${score} out of ${quiz.questions.length}`,
      });
    }
  };

  const handleShowExplanation = () => {
    setShowExplanation(true);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  const calculateScore = () => {
    return answers.reduce((total, answer, index) => {
      return total + (answer === quiz.questions[index].correctAnswer ? 1 : 0);
    }, 0);
  };

  const getScoreMessage = (score: number) => {
    const percentage = (score / quiz.questions.length) * 100;
    if (percentage >= 80) return "Excellent! You're well-prepared to identify and avoid these threats.";
    if (percentage >= 60) return "Good job! Review the explanations to strengthen your knowledge.";
    return "Keep learning! Review the material and try again to improve your protection skills.";
  };

  if (showResults) {
    const score = calculateScore();
    const percentage = Math.round((score / quiz.questions.length) * 100);
    
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-gradient-card shadow-card-hover">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">
                  <Award className="h-16 w-16 text-accent" />
                </div>
                <CardTitle className="text-3xl font-bold text-foreground">
                  Quiz Completed!
                </CardTitle>
                <div className="flex justify-center space-x-4 mt-4">
                  <Badge variant="secondary" className="text-lg px-4 py-2">
                    Score: {score}/{quiz.questions.length}
                  </Badge>
                  <Badge 
                    variant={percentage >= 80 ? "default" : percentage >= 60 ? "secondary" : "destructive"}
                    className="text-lg px-4 py-2"
                  >
                    {percentage}%
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {quiz.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {getScoreMessage(score)}
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Review Your Answers:</h4>
                  {quiz.questions.map((question, index) => (
                    <div key={question.id} className="border rounded-lg p-4">
                      <div className="flex items-start space-x-2">
                        {answers[index] === question.correctAnswer ? (
                          <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                        ) : (
                          <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                        )}
                        <div className="flex-1">
                          <p className="font-medium text-sm">{question.question}</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Your answer: {question.options[answers[index]]}
                          </p>
                          {answers[index] !== question.correctAnswer && (
                            <p className="text-sm text-success mt-1">
                              Correct: {question.options[question.correctAnswer]}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <Button onClick={restartQuiz} variant="outline" className="flex-1">
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Retake Quiz
                  </Button>
                  <Button 
                    onClick={() => navigate("/quizzes")} 
                    className="flex-1 bg-gradient-primary"
                  >
                    <Home className="h-4 w-4 mr-2" />
                    Back to Quizzes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <ChatbotButton />
      </div>
    );
  }

  const question = quiz.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-foreground mb-2">{quiz.title}</h1>
            <div className="flex items-center justify-between mb-4">
              <span className="text-muted-foreground">
                Question {currentQuestion + 1} of {quiz.questions.length}
              </span>
              <Badge variant="outline">
                {quiz.category === "fraud" ? "Fraud Awareness" : "Financial Literacy"}
              </Badge>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question Card */}
          <Card className="bg-gradient-card shadow-card mb-6">
            <CardHeader>
              <CardTitle className="text-xl">{question.question}</CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-3">
              {question.options.map((option, index) => (
                <Button
                  key={index}
                  variant={selectedAnswer === index ? "default" : "outline"}
                  className={`w-full text-left justify-start h-auto p-4 ${
                    selectedAnswer === index ? "bg-gradient-primary" : ""
                  }`}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showExplanation}
                >
                  <span className="mr-3 font-semibold">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  {option}
                </Button>
              ))}
            </CardContent>
          </Card>

          {/* Explanation */}
          {showExplanation && (
            <Card className="bg-gradient-card shadow-card mb-6">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-2">
                  {selectedAnswer === question.correctAnswer ? (
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  )}
                  <div>
                    <p className="font-semibold mb-2">
                      {selectedAnswer === question.correctAnswer ? "Correct!" : "Incorrect"}
                    </p>
                    <p className="text-muted-foreground">{question.explanation}</p>
                    {selectedAnswer !== question.correctAnswer && (
                      <p className="text-success mt-2">
                        Correct answer: {String.fromCharCode(65 + question.correctAnswer)}. {question.options[question.correctAnswer]}
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <Button
              variant="outline"
              onClick={() => navigate("/quizzes")}
              className="flex-1"
            >
              Back to Quizzes
            </Button>
            
            {!showExplanation ? (
              <Button
                onClick={handleShowExplanation}
                disabled={selectedAnswer === null}
                className="flex-1 bg-secondary hover:bg-secondary/80"
              >
                Show Explanation
              </Button>
            ) : (
              <Button
                onClick={handleNextQuestion}
                className="flex-1 bg-gradient-primary"
              >
                {currentQuestion < quiz.questions.length - 1 ? "Next Question" : "Finish Quiz"}
              </Button>
            )}
          </div>
        </div>
      </div>

      <ChatbotButton />
    </div>
  );
};

export default QuizDetail;