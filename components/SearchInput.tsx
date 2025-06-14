// 'use client'

import { Search } from 'lucide-react'
// import { useRouter } from 'next/navigation'
// import React, { useState, FormEvent } from 'react'
import Form from 'next/form'

const SearchInput = () => {
	// const router = useRouter()
	// const [searchQuery, setSearchQuery] = useState('')

	// EXAMPLE WITH ROUTER CLIENT COMPONENT
	// const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
	// 	e.preventDefault()

	// 	if (searchQuery.trim()) {
	// 		router.push(`/search/${encodeURIComponent(searchQuery.trim())}`)
	// 	}
	// }

	return (
		<Form
			action={'/search'}
			// onSubmit={handleSubmit}
			className="relative w-full flex-1 max-w-[300px]"
		>
			<input
				type="text"
				name="term"
				placeholder="Search courses..."
				// value={searchQuery}
				// onChange={(e) => setSearchQuery(e.target.value)}
				className="w-full rounded-full bg-secondary/80 px-4 py-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
			/>
			<Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
		</Form>
	)
}

export default SearchInput
