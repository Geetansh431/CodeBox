'use client';

import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from 'sonner';

interface PricingTier {
  name: string;
  price: number;
  description: string;
  features: string[];
  isPopular?: boolean;
  cta: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    price: 0,
    description: 'Perfect for beginners',
    features: [
      'Access to 3 free courses',
      'Basic code editor',
      'Limited exercises (5 per course)',
      'Community support',
      'Progress tracking',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Pro',
    price: 9,
    description: 'For serious learners',
    features: [
      'All Starter features',
      'Access to 20+ courses',
      'Unlimited exercises',
      'Advanced code editor with AI hints',
      'Progress analytics',
    ],
    isPopular: true,
    cta: 'Upgrade to Pro',
  },
  {
    name: 'Premium',
    price: 19,
    description: 'For professional developers',
    features: [
      'All Pro features',
      'Exclusive advanced courses',
      'AI-powered code review',
      'Custom learning paths',
      '1-on-1 mentoring sessions',
    ],
    cta: 'Upgrade to Premium',
  },
];

export default function PricingPage() {
  const router = useRouter();
  const [loading, setLoading] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPlan, setCurrentPlan] = useState<string | null>(null);

  // Check if user is logged in and get subscription
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('/api/user');
        if (response.data) {
          setIsLoggedIn(true);
          setCurrentPlan(response.data.subscription || 'Starter');
        } else {
          setIsLoggedIn(false);
        }
      } catch {
        setIsLoggedIn(false);
      }
    };
    checkAuth();
  }, []);

  // Handle payment
  const handlePayment = async (planType: string, amount: number) => {
    if (!isLoggedIn) {
      toast.error('Please log in to upgrade your plan');
      router.push('/sign-in');
      return;
    }

    if (amount === 0) {
      // Free plan - no payment needed
      toast.success('You selected the free plan!');
      return;
    }

    setLoading(planType);

    try {
      // Step 1: Create order
      const orderResponse = await axios.post('/api/payment/order', {
        planType,
        amount,
      });

      const { orderId, keyId } = orderResponse.data;

      // Step 2: Open Razorpay checkout
      const options = {
        key: keyId,
        amount: amount * 100,
        currency: 'INR',
        name: 'Code Learning Platform',
        description: `${planType} Plan Subscription`,
        order_id: orderId,
        handler: async (response: any) => {
          try {
            // Step 3: Verify payment
            const verifyResponse = await axios.post('/api/payment/verify', {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            });

            if (verifyResponse.data.success) {
              toast.success(`Welcome to ${planType}! Payment successful.`);
              setCurrentPlan(planType);
              setTimeout(() => {
                router.push('/dashboard');
              }, 2000);
            }
          } catch (error) {
            toast.error('Payment verification failed');
            console.error(error);
          }
        },
        prefill: {
          name: 'User Name',
          email: 'user@example.com',
        },
        theme: {
          color: '#000000',
        },
      };

      // Load Razorpay script if not already loaded
      if (!(window as any).Razorpay) {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        script.onload = () => {
          const rzp = new (window as any).Razorpay(options);
          rzp.open();
        };
        document.body.appendChild(script);
      } else {
        const rzp = new (window as any).Razorpay(options);
        rzp.open();
      }
    } catch (error) {
      toast.error('Failed to create payment order');
      console.error(error);
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="min-h-screen font-game">
      {/* Hero Section */}
      <div className="pt-20 pb-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-game text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-4">
            Choose the perfect plan to accelerate your learning journey
          </p>
          <p className="text-base md:text-lg text-gray-400">
            No hidden fees. Cancel anytime. All plans include a 7-day free
            trial.
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="px-6 md:px-12 lg:px-24 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative border-4 rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105 ${
                tier.isPopular
                  ? 'border-yellow-400 shadow-[0_0_30px_rgba(250,204,21,0.3)] md:scale-105 lg:scale-100'
                  : 'border-gray-600 hover:border-gray-500'
              }`}
            >
              {/* Card Background */}
              <div className="p-8">
                {/* Tier Name */}
                <h3 className="font-game text-3xl md:text-4xl font-bold text-white mb-2 mt-4">
                  {tier.name}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-6">{tier.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="font-game text-5xl font-bold text-white">
                      ${tier.price}
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mb-8">
                  {currentPlan === tier.name ? (
                    <div className="w-full">
                      <Button
                        variant={tier.isPopular ? 'pixel' : 'outline'}
                        size="lg"
                        className={`w-full font-game text-lg cursor-not-allowed opacity-60 ${
                          !tier.isPopular &&
                          'border-2 border-gray-500 text-white'
                        }`}
                        disabled
                      >
                        Current Plan
                      </Button>
                    </div>
                  ) : (
                    <Button
                      variant={tier.isPopular ? 'pixel' : 'outline'}
                      size="lg"
                      className={`w-full font-game text-lg cursor-pointer ${
                        !tier.isPopular &&
                        'border-2 border-gray-500 text-white hover:bg-gray-700'
                      }`}
                      onClick={() => handlePayment(tier.name, tier.price)}
                      disabled={loading === tier.name}
                    >
                      {loading === tier.name ? 'Processing...' : tier.cta}
                    </Button>
                  )}
                </div>

                {/* Features List */}
                <div className="space-y-4">
                  <p className="text-gray-400 text-sm font-semibold uppercase">
                    What's included
                  </p>
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-200 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
