import CoTag from "./CoTag";


import PropTypes from "prop-types";
// Remove the duplicate import statement for CoTag
// import CoTag from "./CoTag";

const CoHero = (props) => {
	return (
		<div style={{ zIndex: "1" }} className="hero">
			<div className="hero-data">
				<img loading="lazy" className="hero-logo" src={props.logo} alt={props.company} />
				<img loading="lazy"
					className="hero-logoName"
					src={props.logoName}
					alt={props.company}
				/>
				<p className="hero-role">{props.role}</p>
				<CoTag tags={props.tags} subc={props.subc} align="center" />
			</div>
			<div
				style={{ backgroundImage: "url('" + props.banner + "')" }}
				className={"hero-banner-"+ props.company}
			></div>
		</div>
	);
};

CoHero.propTypes = {
	logo: PropTypes.string.isRequired,
	company: PropTypes.string.isRequired,
	logoName: PropTypes.string.isRequired,
	role: PropTypes.string.isRequired,
	tags: PropTypes.array.isRequired,
	subc: PropTypes.string.isRequired,
	banner: PropTypes.string.isRequired,
};

export default CoHero;
