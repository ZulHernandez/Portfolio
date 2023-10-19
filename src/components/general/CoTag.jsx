const CoTags = ({tags}) => {
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
		<div className="job-card-data-tags" style={{justifyContent: props.align ? "center" : "left"}}>
			<img
				style={{ display: display }}
				className="job-card-data-tags-img"
				src={props.subc}
			></img>
			<CoTags tags={tags}/>
		</div>
	);
};

export default CoTag;
