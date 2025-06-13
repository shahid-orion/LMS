import React from 'react'
import DarkModeToggle from './DarkModeToggle'
import Link from 'next/link'
import {
	Activity,
	BookMarkedIcon
	// BookOpen,
	// Sunrise,
	// Radiation
} from 'lucide-react'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { Button } from './ui/button'
import SearchInput from './SearchInput'

const Header = () => {
	return (
		<header className="sticky top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
			<div className="container mx-auto px-4">
				<div className="flex h-16 items-center justify-between gap-4">
					{/* Left */}
					<div className="flex items-center gap-4">
						<Link
							href="/"
							// prefetch={false}
							className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
						>
							<Activity className="h-6 w-6 text-red-500" />
							<span className="text-xl font-bold bg-gradient-to-r from-primary/90 to-primary bg-clip-text text-transparent">
								Rupantor
							</span>
						</Link>

						{/* <SearchInput /> */}
						<SearchInput />
					</div>
					{/* Right */}
					<div className="flex items-center space-x-2 md:space-x-4">
						<nav>
							<Link
								prefetch={false}
								href="/my-courses"
								className="flex space-x-2 items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors md:border md:border-border md:rounded-md md:px-4 md:py-2"
							>
								<BookMarkedIcon className="h-5 w-5" />
								<span className="hidden md:block">My Courses</span>
							</Link>
						</nav>
					</div>
					<DarkModeToggle />

					<SignedIn>
						<UserButton />
					</SignedIn>

					<SignedOut>
						<SignInButton mode="modal">
							<Button variant="outline" size="default">
								Sign In
							</Button>
						</SignInButton>
					</SignedOut>
				</div>
			</div>
		</header>
	)
}

export default Header
