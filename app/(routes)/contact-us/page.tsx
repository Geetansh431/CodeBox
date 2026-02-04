'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Mail, MessageSquare, MapPin } from 'lucide-react';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      description: 'Send us an email',
      detail: 'support@codebox.com',
    },
    {
      icon: MessageSquare,
      title: 'Chat Support',
      description: 'Join our community',
      detail: 'Discord Server',
    },
    {
      icon: MapPin,
      title: 'Location',
      description: 'Where we are based',
      detail: 'San Francisco, CA',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-12 px-4 font-game">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-game font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Have a question? Found a bug? Want to collaborate? We'd love to hear
            from you. Reach out and let's connect!
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="gap-2 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-2 border-border/50 p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-game font-bold mb-6">
                Send us a Message
              </h2>
              <form className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      placeholder="Your name"
                      className="bg-muted/50 border-border/50 focus:border-primary"
                      disabled
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-muted/50 border-border/50 focus:border-primary"
                      disabled
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    placeholder="What is this about?"
                    className="bg-muted/50 border-border/50 focus:border-primary"
                    disabled
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell us more about your message..."
                    className="bg-muted/50 border-border/50 focus:border-primary min-h-[150px] resize-none"
                    disabled
                  />
                </div>

                {/* Submit Button */}
                <Button
                  className="w-full font-game text-lg"
                  variant="pixel"
                  disabled
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
