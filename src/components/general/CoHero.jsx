import CoTag from "./CoTag";

const CoHero = (props) => {
	return (
		<div className="hero" style={{ zIndex: "1", gap: "12rem" }}>
			<div className="hero-data">
				<img className="hero-logo" src={props.logo} />
				<img className="hero-logoName" src={props.logoName} />
				<p className="hero-role">{props.role}</p>
				<CoTag tags={props.tags} subc={props.subc} align="center" />
			</div>
			<div className="hero-banner" style={{backgroundImage: "url('"+props.banner+"')"}}></div>
		</div>
	);
};

export default CoHero;
