"use client"
import React, { useEffect } from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { useUser } from '@clerk/nextjs'
import axios from 'axios'

export function Provider({
    children,
    ...props
    } : React.ComponentProps<typeof NextThemesProvider>) {

    const {user} = useUser();
    
    useEffect(() => {
        user && CreateNewUser();
    }, [user]);

    const CreateNewUser = async () => {
        const result = await axios.post('/api/user',{});
    }

    return (
        <NextThemesProvider {...props}>
           {children}
        </NextThemesProvider>
    )
}
