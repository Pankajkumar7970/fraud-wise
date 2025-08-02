import Navigation from "@/components/Navigation";
import ChatbotButton from "@/components/ChatbotButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Phone, Shield, FileText, AlertTriangle } from "lucide-react";

const Resources = () => {
  const resources = [
    {
      title: "Federal Trade Commission (FTC)",
      description: "Report fraud and get consumer protection resources",
      url: "https://www.ftc.gov/",
      icon: Shield,
      category: "Government"
    },
    {
      title: "Consumer Financial Protection Bureau",
      description: "Financial education and complaint submission",
      url: "https://www.consumerfinance.gov/",
      icon: FileText,
      category: "Government"
    },
    {
      title: "AARP Fraud Watch Network",
      description: "Fraud prevention resources and alerts",
      url: "https://www.aarp.org/money/scams-fraud/",
      icon: AlertTriangle,
      category: "Nonprofit"
    },
    {
      title: "FBI Internet Crime Complaint Center",
      description: "Report internet-related crimes",
      url: "https://www.ic3.gov/",
      icon: Shield,
      category: "Government"
    }
  ];

  const emergencyContacts = [
    {
      name: "FTC Fraud Hotline",
      number: "1-877-FTC-HELP",
      description: "Report fraud and identity theft"
    },
    {
      name: "Social Security Fraud Hotline",
      number: "1-800-269-0271",
      description: "Report Social Security fraud"
    },
    {
      name: "IRS Identity Theft Hotline",
      number: "1-800-908-4490",
      description: "Report tax-related identity theft"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Fraud Prevention Resources
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access trusted resources, report fraud, and get help when you need it most.
          </p>
        </div>

        {/* Emergency Contacts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
            <Phone className="h-6 w-6 mr-2 text-destructive" />
            Emergency Contacts
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {emergencyContacts.map((contact, index) => (
              <Card key={index} className="bg-gradient-card shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg text-destructive">{contact.name}</CardTitle>
                  <CardDescription>{contact.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">
                    {contact.number}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Official Resources */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Official Resources & Reporting
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((resource, index) => {
              const IconComponent = resource.icon;
              return (
                <Card key={index} className="bg-gradient-card shadow-card hover:shadow-card-hover transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <IconComponent className="h-8 w-8 text-primary" />
                        <div>
                          <CardTitle className="text-lg">{resource.title}</CardTitle>
                          <span className="text-sm text-muted-foreground">{resource.category}</span>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="mt-2">
                      {resource.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.open(resource.url, '_blank')}
                    >
                      Visit Website
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Quick Tips */}
        <section className="mb-12">
          <Card className="bg-gradient-primary text-white">
            <CardHeader>
              <CardTitle className="text-2xl">Quick Safety Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">If You're Being Scammed:</h4>
                  <ul className="space-y-1 text-white/90">
                    <li>• Stop all communication immediately</li>
                    <li>• Don't send money or personal information</li>
                    <li>• Document everything (emails, calls, messages)</li>
                    <li>• Report to authorities using contacts above</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Prevention Best Practices:</h4>
                  <ul className="space-y-1 text-white/90">
                    <li>• Verify caller/sender identity independently</li>
                    <li>• Never give personal info over phone/email</li>
                    <li>• Use strong, unique passwords</li>
                    <li>• Monitor accounts and credit reports regularly</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Educational Materials */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Educational Materials
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle>Fraud Alert Guidelines</CardTitle>
                <CardDescription>
                  Learn how to place and manage fraud alerts on your credit reports
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Download PDF
                  <FileText className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle>Identity Theft Recovery</CardTitle>
                <CardDescription>
                  Step-by-step guide to recovering from identity theft
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Download PDF
                  <FileText className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle>Safe Online Banking</CardTitle>
                <CardDescription>
                  Best practices for secure online and mobile banking
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Download PDF
                  <FileText className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      <ChatbotButton />
    </div>
  );
};

export default Resources;