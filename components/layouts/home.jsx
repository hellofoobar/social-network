import React from 'react';
import Signupform from '../signup/signupform.jsx';
import Header from '../header/header.jsx';
import FeatureList from '../features/featurelist.jsx';

export default class HomeLayout extends React.Component {
    render() {
        return (
        <div>
        	<Header />
        	<div className="container">
        		<div className="row">
	        		<div className="col-md-6">
						<FeatureList />
	        		</div>
	        		<div className="col-md-5 col-md-offset-1">
	        			<Signupform /> 
	        		</div>
	        	</div>
	        </div>
	    </div>
        )
    }
}