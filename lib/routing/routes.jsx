import React from 'react';
import {mount} from 'react-mounter';
import Layout from '../../components/layouts/layout.jsx';
import HomeLayout from '../../components/layouts/home.jsx';
import Sidebar from '../../components/sidebar/sidebar.jsx';
import Main from '../../components/main/main.jsx';


publicRoutes = FlowRouter.group({
	name:'publicroutes'
});
privateRoutes = FlowRouter.group({
	name:'privateroutes'
});
publicRoutes.route('/',{
	name:'Home',
	action() {
		mount(HomeLayout, {})
	}
});
privateRoutes.route('/dashboard', {
	name: 'Dashboard',
	action() {
		mount(Layout, {
			sidebar: <Sidebar />,
			content: <Main />
		});
	}
});

