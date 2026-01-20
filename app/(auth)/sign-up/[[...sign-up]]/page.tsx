'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

export default function SignUpPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validate passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Validate password length
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setIsLoading(true);

    const result = await register(name, email, password);

    if (result.success) {
      router.push('/');
    } else {
      setError(result.error || 'Failed to create account');
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen grid w-full items-center bg-zinc-900 px-4 font-mono text-sm text-white">
      <form
        onSubmit={handleSubmit}
        className="mx-auto w-full sm:w-96 space-y-6 bg-zinc-800 px-4 py-8 border-4 border-black shadow-[8px_8px_0_0_#000]"
      >
        <header className="text-center flex flex-col items-center">
          <Image src={'/crown.png'} alt="logo" width={40} height={40} />
          <h1 className="mt-3 text-base font-bold tracking-wide text-yellow-400 uppercase">
            Create Account
          </h1>
        </header>

        {error && (
          <div className="block text-sm text-red-500 text-center">{error}</div>
        )}

        <div className="space-y-4">
          <div className="space-y-1">
            <label
              htmlFor="name"
              className="block font-bold text-yellow-400 uppercase"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 bg-zinc-900 border-2 border-black shadow-[3px_3px_0_0_#000] outline-none focus:border-yellow-400 text-white"
            />
          </div>

          <div className="space-y-1">
            <label
              htmlFor="email"
              className="block font-bold text-yellow-400 uppercase"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 bg-zinc-900 border-2 border-black shadow-[3px_3px_0_0_#000] outline-none focus:border-yellow-400 text-white"
            />
          </div>

          <div className="space-y-1">
            <label
              htmlFor="password"
              className="block font-bold text-yellow-400 uppercase"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 bg-zinc-900 border-2 border-black shadow-[3px_3px_0_0_#000] outline-none focus:border-yellow-400 text-white"
            />
          </div>

          <div className="space-y-1">
            <label
              htmlFor="confirmPassword"
              className="block font-bold text-yellow-400 uppercase"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-3 py-2 bg-zinc-900 border-2 border-black shadow-[3px_3px_0_0_#000] outline-none focus:border-yellow-400 text-white"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full px-4 py-2 bg-yellow-400 border-2 border-black shadow-[4px_4px_0_0_#000] active:translate-y-[2px] active:shadow-none text-black font-bold uppercase disabled:opacity-50"
        >
          {isLoading ? 'Creating account...' : 'Sign Up'}
        </button>

        <p className="text-center text-xs text-yellow-400">
          Already have an account?{' '}
          <Link
            href="/sign-in"
            className="font-bold underline underline-offset-2 hover:text-yellow-600"
          >
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
}
