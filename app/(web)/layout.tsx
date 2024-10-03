'use client'

import Footer from '@/components/footer'
import Header from '@/components/header'

import React from 'react'

type DashboardLayoutProps = {
    children: React.ReactNode
}

const DashboardLayout = ({
    children
}: DashboardLayoutProps) => {
  return (
    
    <>
        <Header/>

        {children}

        <Footer />
    
    </>

  )
}

export default DashboardLayout
