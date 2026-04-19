import './App.css'
import { useState } from 'react'
import Stat from './components/Stat'

export default function App() {
	// states
	const [text, setText] = useState('')
	const [excludeSpaces, setExcludeSpaces] = useState(false)

	// variables
	const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length
	const characterCount = excludeSpaces
		? text.replace(/\s/g, '').length
		: text.length
	const maxCharacters = 200
	const remainingCharacters = maxCharacters - characterCount
	const overLimit = Math.abs(remainingCharacters)
	const stats = [
		{ label: 'Characters', value: characterCount },
		{ label: 'Words', value: wordCount },
	]

	return (
		<main className="character-counter">
			<h1 className="character-counter__title">Character Counter</h1>

			{/* TEXTAREA */}
			<textarea
				placeholder="Start typing here..."
				name="textarea"
				id="textarea"
				value={text}
				onChange={(e) => setText(e.target.value)}
				className="character-counter__textarea"></textarea>

			{/* CHECKBOX */}
			<div className="character-counter__option">
				<input
					id="exclude-spaces"
					type="checkbox"
					checked={excludeSpaces}
					onChange={(e) => setExcludeSpaces(e.target.checked)}
				/>
				<label htmlFor="exclude-spaces">Exclude spaces</label>
			</div>

			<p>Remaining: {remainingCharacters}</p>
			{remainingCharacters < 0 && (
				<p>{overLimit} characters over limit!</p>
			)}

			{/* STATS */}
			<div className="character-counter__stats">
				{stats.map((stat) => (
					<Stat
						label={stat.label}
						value={stat.value}
						key={stat.label}
					/>
				))}
			</div>
		</main>
	)
}
