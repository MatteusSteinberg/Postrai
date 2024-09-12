import React from 'react'


export default function DashboardLayout({ children, className }) {
  return (
    <div className={`dashboard-wrapper ${className}`}>
      {children}
    </div>
  )
}
