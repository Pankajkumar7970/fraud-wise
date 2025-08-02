import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ChatbotButton = () => {
  const handleChatbotClick = () => {
    // In a real implementation, this would open the Chatbase widget
    console.log("Opening chatbot...");
    // You could integrate with Chatbase here
  };

  return (
    <Button
      onClick={handleChatbotClick}
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-gradient-primary shadow-card-hover hover:shadow-card z-50 group"
      size="icon"
    >
      <MessageCircle className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
    </Button>
  );
};

export default ChatbotButton;