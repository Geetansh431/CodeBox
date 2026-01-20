'use client';
import React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { UserDetailContext } from '@/context/UserDetailContext';
import { AuthProvider, useAuth } from '@/context/AuthContext';
import { Header } from './_components/Header';

function InnerProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const { user } = useAuth();
  const [userDetail, setUserDetail] = React.useState<any>(user);

  React.useEffect(() => {
    if (user) {
      setUserDetail(user);
    }
  }, [user]);

  return (
    <NextThemesProvider {...props}>
      <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
        <div className="flex flex-col items-center">
          <Header />
        </div>
        {children}
      </UserDetailContext.Provider>
    </NextThemesProvider>
  );
}

export function Provider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <AuthProvider>
      <InnerProvider {...props}>{children}</InnerProvider>
    </AuthProvider>
  );
}
