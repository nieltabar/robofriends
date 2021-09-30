import React from 'react'

// Children Scroll can use its chidren to render its children
const Scroll = (props) =>{
	return(
		<div style={{overflowY: 'scroll', border: '6px solid black', height:'800px'}}>
		{props.children}
		</div>
		);
	
};

export default Scroll