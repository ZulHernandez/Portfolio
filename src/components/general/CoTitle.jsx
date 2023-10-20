var titles;

const CoTitulos = ({color}) => {
	return titles.map((title) => {
		return <h1 style={{color: color}} key={title}>{title}</h1>;
	});
};

const CoTitle = (props) => {
	titles = props.titles;
	let space = props.space ? "-plus" : "";
	return (
		<div className={"title-container" + space} >
			<CoTitulos color={props.color}/>
		</div>
	);
};

export default CoTitle;
