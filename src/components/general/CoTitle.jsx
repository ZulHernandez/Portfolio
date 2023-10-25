import PropTypes from "prop-types";
var titles;

const CoTitulos = ({ color }) => {
	return titles.map((title) => {
		return (
			<h1 style={{ color: color }} key={title}>
				{title}
			</h1>
		);
	});
};

const CoTitle = (props) => {

	CoTitle.propTypes = {
		titles: PropTypes.array.isRequired,
		color: PropTypes.string,
		space: PropTypes.bool,
	}; 

	titles = props.titles;
	let space = props.space ? "-plus" : "";
	return (
		<div className={"title-container" + space}>
			<CoTitulos color={props.color} />
		</div>
	);
};

export default CoTitle;
