var titles;

const CoTitulos = () => {
	return titles.map((title) => {
		return <h1 key={title}>{title}</h1>;
	});
};

const CoTitle = (props) => {
	titles = props.titles;
	let space = props.space ? "-plus" : "";
	return (
		<div className={"title-container" + space} >
			<CoTitulos/>
		</div>
	);
};

export default CoTitle;
