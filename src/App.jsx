import './App.css'
import { useState } from 'react'

export default function App() {
	// states
	const [text, setText] = useState('')

	// variables
	const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length

	return (
		<main className="character-counter">
			<h1 className="character-counter__title">Character Counter</h1>
			<textarea
				value={text}
				onChange={(e) => setText(e.target.value)}
				className="character-counter__textarea"></textarea>
			<div className="character-counter__stats">
				<div className="character-counter__stat">
					<p className="character-counter__stat-label">Characters</p>
					<p>{text.length}</p>
				</div>
				<div className="character-counter__stat">
					<p className="character-counter__stat-label">Words</p>
					<p>{wordCount}</p>
				</div>
			</div>
		</main>
	)
}
