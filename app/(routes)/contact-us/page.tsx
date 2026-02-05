'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: '' });
    setErrors({});

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle validation errors
        if (data.errors && Array.isArray(data.errors)) {
          const newErrors: FormErrors = {};
          data.errors.forEach((error: { field: string; message: string }) => {
            newErrors[error.field] = error.message;
          });
          setErrors(newErrors);
        }

        setSubmitStatus({
          type: 'error',
          message:
            data.message ||
            'Failed to send message. Please check the form and try again.',
        });
      } else {
        // Success
        setSubmitStatus({
          type: 'success',
          message:
            data.message ||
            'Message sent successfully! We will get back to you soon.',
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message:
          'An error occurred while sending your message. Please try again later.',
      });
    } finally {
      setIsLoading(false);
    }
  };

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

              {/* Status Messages */}
              {submitStatus.type && (
                <div
                  className={`mb-6 p-4 rounded-lg font-game ${
                    submitStatus.type === 'success'
                      ? 'bg-green-500/20 border border-green-500 text-green-700 dark:text-green-400'
                      : 'bg-red-500/20 border border-red-500 text-red-700 dark:text-red-400'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`bg-muted/50 border-border/50 focus:border-primary ${
                        errors.name ? 'border-red-500' : ''
                      }`}
                      disabled={isLoading}
                      required
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`bg-muted/50 border-border/50 focus:border-primary ${
                        errors.email ? 'border-red-500' : ''
                      }`}
                      disabled={isLoading}
                      required
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="What is this about?"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`bg-muted/50 border-border/50 focus:border-primary ${
                      errors.subject ? 'border-red-500' : ''
                    }`}
                    disabled={isLoading}
                    required
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Tell us more about your message..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`bg-muted/50 border-border/50 focus:border-primary min-h-[150px] resize-none ${
                      errors.message ? 'border-red-500' : ''
                    }`}
                    disabled={isLoading}
                    required
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full font-game text-lg"
                  variant="pixel"
                  disabled={isLoading}
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
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
