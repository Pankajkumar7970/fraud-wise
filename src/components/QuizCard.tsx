import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, DollarSign } from "lucide-react";
import { Quiz } from "@/data/quizData";
import { getUserProgress } from "@/data/quizData";

interface QuizCardProps {
  quiz: Quiz;
}

const QuizCard = ({ quiz }: QuizCardProps) => {
  const progress = getUserProgress();
  const isCompleted = progress[quiz.id]?.completed || false;
  const score = progress[quiz.id]?.score || 0;

  const CategoryIcon = quiz.category === "fraud" ? Shield : DollarSign;

  return (
    <Card className="bg-gradient-card shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105 group">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2">
            <CategoryIcon className="h-5 w-5 text-primary" />
            <Badge variant={quiz.category === "fraud" ? "destructive" : "secondary"} className="text-xs">
              {quiz.category === "fraud" ? "Fraud Awareness" : "Financial Literacy"}
            </Badge>
          </div>
          {isCompleted && (
            <div className="flex items-center space-x-1">
              <CheckCircle className="h-4 w-4 text-success" />
              <span className="text-sm text-success font-medium">{score}/5</span>
            </div>
          )}
        </div>
        
        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {quiz.title}
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          {quiz.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            5 Questions • {isCompleted ? "Completed" : "Not Started"}
          </div>
          <Link to={`/quiz/${quiz.id}`}>
            <Button 
              className="bg-gradient-primary hover:opacity-90 shadow-button"
              size="sm"
            >
              {isCompleted ? "Retake Quiz" : "Start Quiz"}
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuizCard;