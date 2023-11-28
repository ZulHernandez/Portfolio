import PropTypes from "prop-types";

const CoTags = ({ tags }) => {
	return tags.map((tag) => {
		return (
			<span className={"job-card-data-tags-tag " + tag} key={tag}>
				{tag}
			</span>
		);
	});
};

const CoTag = (props) => {
	let tags = props.tags;
	let display = "block";

	!props.subc ? (display = "none") : (display = "block");

	return (
		<div
			className="job-card-data-tags"
			style={{ justifyContent: props.align ? "center" : "left" }}
		>
			<img loading="lazy"
				style={{ display: display }}
				className="job-card-data-tags-img"
				src={props.subc}
				alt={props.subcName}
			></img>
			<CoTags tags={tags} />
		</div>
	);
};

CoTag.propTypes = {
	tags: PropTypes.array.isRequired,
	subc: PropTypes.string,
	align: PropTypes.string,
	subcName: PropTypes.string,
};

export default CoTag;
