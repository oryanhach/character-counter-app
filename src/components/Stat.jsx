export default function Stat(props) {
	return (
		<div className="character-counter__stat">
			<p className="character-counter__stat-label">{props.label}</p>
			<p>{props.value}</p>
		</div>
	)
}
