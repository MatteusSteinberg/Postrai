import React from 'react'
import Link from 'next/link'

export default function NavigationSubject({ to, children, active = false, as = null }) {


    return (
        <Link href={to} as={as ? as : to} scroll={false} shallow>
            <a className={`dashboard-navigation-subject ${active ? 'active' : ''}`}>
                {children}
            </a>
        </Link>
    )
}
