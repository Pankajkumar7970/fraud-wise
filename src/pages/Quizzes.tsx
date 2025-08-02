import { useState } from "react";
import Navigation from "@/components/Navigation";
import ChatbotButton from "@/components/ChatbotButton";
import QuizCard from "@/components/QuizCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { quizzes, getCompletedQuizzesCount, getTotalScore } from "@/data/quizData";
import { Shield, DollarSign, Trophy, Target } from "lucide-react";

const Quizzes = () => {
  const [activeFilter, setActiveFilter] = useState<"all" | "fraud" | "financial">("all");
  
  const completedCount = getCompletedQuizzesCount();
  const totalScore = getTotalScore();
  const totalQuizzes = quizzes.length;

  const filteredQuizzes = quizzes.filter(quiz => 
    activeFilter === "all" || quiz.category === activeFilter
  );

  const fraudQuizzes = quizzes.filter(quiz => quiz.category === "fraud");
  const financialQuizzes = quizzes.filter(quiz => quiz.category === "financial");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Fraud & Financial Literacy Quizzes
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Test your knowledge and learn to protect yourself from fraud while building financial literacy.
            Each quiz contains practical tips and real-world scenarios.
          </p>
        </div>

        {/* Progress Dashboard */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-card shadow-card rounded-lg p-6 text-center">
            <Target className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">{completedCount}/{totalQuizzes}</div>
            <div className="text-muted-foreground">Quizzes Completed</div>
          </div>
          
          <div className="bg-gradient-card shadow-card rounded-lg p-6 text-center">
            <Trophy className="h-8 w-8 text-accent mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">{totalScore}</div>
            <div className="text-muted-foreground">Total Score</div>
          </div>
          
          <div className="bg-gradient-card shadow-card rounded-lg p-6 text-center">
            <Shield className="h-8 w-8 text-success mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">
              {completedCount > 0 ? Math.round((totalScore / (completedCount * 5)) * 100) : 0}%
            </div>
            <div className="text-muted-foreground">Average Score</div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          <Button
            variant={activeFilter === "all" ? "default" : "outline"}
            onClick={() => setActiveFilter("all")}
            className={activeFilter === "all" ? "bg-gradient-primary" : ""}
          >
            All Quizzes ({totalQuizzes})
          </Button>
          <Button
            variant={activeFilter === "fraud" ? "default" : "outline"}
            onClick={() => setActiveFilter("fraud")}
            className={`${activeFilter === "fraud" ? "bg-gradient-primary" : ""} flex items-center space-x-2`}
          >
            <Shield className="h-4 w-4" />
            <span>Fraud Awareness ({fraudQuizzes.length})</span>
          </Button>
          <Button
            variant={activeFilter === "financial" ? "default" : "outline"}
            onClick={() => setActiveFilter("financial")}
            className={`${activeFilter === "financial" ? "bg-gradient-primary" : ""} flex items-center space-x-2`}
          >
            <DollarSign className="h-4 w-4" />
            <span>Financial Literacy ({financialQuizzes.length})</span>
          </Button>
        </div>

        {/* Quiz Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredQuizzes.map((quiz) => (
            <QuizCard key={quiz.id} quiz={quiz} />
          ))}
        </div>

        {/* Educational Note */}
        <div className="mt-12 bg-gradient-primary rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Why Take These Quizzes?
          </h3>
          <p className="text-white/90 max-w-3xl mx-auto">
            Financial fraud costs Americans billions of dollars each year. These interactive quizzes 
            help you recognize warning signs, understand prevention strategies, and build the knowledge 
            needed to protect yourself and your loved ones from financial scams.
          </p>
        </div>
      </div>

      <ChatbotButton />
    </div>
  );
};

export default Quizzes;