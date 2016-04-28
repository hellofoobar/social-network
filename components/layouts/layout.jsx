import React from 'react';

export default class Layout extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.displayName = 'Layout';
    // }
    render() {
        return (
        	<div className="wrapper">
        		<div className="box">
        			<div classname="srow row-offcanvas row-offcanvas-left push-down-50">
	        			Navbar
	        			{this.props.sidebar}
	        			{this.props.content}
        			</div>
        		</div>
        	</div>
        );
    }
}
