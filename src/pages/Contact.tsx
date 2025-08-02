import Navigation from "@/components/Navigation";
import ChatbotButton from "@/components/ChatbotButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the message
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about fraud prevention or need help with our platform? 
            We're here to assist you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-gradient-card shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <MessageSquare className="h-6 w-6 mr-2 text-primary" />
                Send us a Message
              </CardTitle>
              <CardDescription>
                Fill out the form below and we'll respond within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="mt-1"
                    placeholder="Describe your question or concern..."
                  />
                </div>
                
                <Button type="submit" className="w-full bg-gradient-primary">
                  Send Message
                  <Mail className="h-4 w-4 ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-primary" />
                  Support Hotline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground mb-2">
                  1-800-FRAUD-HELP
                </div>
                <p className="text-muted-foreground">
                  Available Monday-Friday, 9 AM - 6 PM EST
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-primary" />
                  Email Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-semibold text-foreground mb-2">
                  support@fraudwise.com
                </div>
                <p className="text-muted-foreground">
                  We typically respond within 24 hours
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-primary" />
                  Office Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-semibold text-foreground mb-2">
                  FraudWise Education Center
                </div>
                <p className="text-muted-foreground">
                  123 Security Boulevard<br />
                  Washington, DC 20001<br />
                  United States
                </p>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <Card className="bg-gradient-primary text-white">
              <CardHeader>
                <CardTitle className="text-xl">Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-1">How do I report a scam?</h4>
                  <p className="text-white/90 text-sm">
                    Visit our Resources page for official reporting channels and emergency contacts.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Are the quizzes really free?</h4>
                  <p className="text-white/90 text-sm">
                    Yes! All our educational content is completely free and always will be.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">How often is content updated?</h4>
                  <p className="text-white/90 text-sm">
                    We regularly update our quizzes and resources to reflect the latest fraud trends.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <ChatbotButton />
    </div>
  );
};

export default Contact;