import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import ChatbotButton from "@/components/ChatbotButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Brain, Award, Users, ArrowRight, CheckCircle } from "lucide-react";
import logoImage from "@/assets/fraud-wise-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <img 
              src={logoImage} 
              alt="FraudWise Logo" 
              className="h-24 w-24 mx-auto mb-6"
            />
            <h1 className="text-5xl font-bold mb-6">
              Protect Yourself from Fraud
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Learn to identify scams, build financial literacy, and safeguard your money 
              through interactive quizzes and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quizzes">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
                  Start Learning
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 text-lg px-8"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Choose FraudWise?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive fraud awareness and financial literacy education designed 
              to keep you and your money safe.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-card shadow-card hover:shadow-card-hover transition-all duration-300">
              <CardHeader className="text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Fraud Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Learn to identify and avoid common scams including phishing, 
                  identity theft, investment fraud, and more.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card hover:shadow-card-hover transition-all duration-300">
              <CardHeader className="text-center">
                <Brain className="h-12 w-12 text-secondary mx-auto mb-4" />
                <CardTitle>Financial Literacy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Master budgeting, saving, investing, and other essential 
                  financial skills for long-term success.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card hover:shadow-card-hover transition-all duration-300">
              <CardHeader className="text-center">
                <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle>Track Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Earn badges, track scores, and monitor your learning 
                  progress across all quiz categories.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">$5.8B</div>
              <div className="text-muted-foreground">Lost to fraud annually in the US</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">15+</div>
              <div className="text-muted-foreground">Interactive quiz categories</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-muted-foreground">Free educational content</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Protect Yourself?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of users who have already strengthened their fraud 
            awareness and financial knowledge.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-md mx-auto mb-8">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span>Expert-created content</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span>Real-world scenarios</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span>Immediate feedback</span>
            </div>
          </div>

          <Link to="/quizzes">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
              Start Your First Quiz
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <ChatbotButton />
    </div>
  );
};

export default Index;
