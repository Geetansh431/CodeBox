'use client';

import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

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
                    {tier.price > 0 && (
                      <span className="text-gray-400 text-base">/month</span>
                    )}
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  variant={tier.isPopular ? 'pixel' : 'outline'}
                  size="lg"
                  className={`w-full font-game text-lg mb-8 cursor-pointer ${
                    !tier.isPopular &&
                    'border-2 border-gray-500 text-white hover:bg-gray-700'
                  }`}
                >
                  {tier.cta}
                </Button>

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
