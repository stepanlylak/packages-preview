import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

/* Import layouts */
import '../../ui/layouts/main/main.js';

/* Import pages */
import '../../ui/pages/home/home.js';
import '../../ui/pages/modal-boxes/modal-boxes.js';
import '../../ui/pages/select-boxes/select-boxes.js';

// Set up all routes in the app
FlowRouter.route('/', {
    name: 'Route.home',
    action(params, queryParams) {
        BlazeLayout.render('Layout_main', {main: 'Page_home'});
    }
});

FlowRouter.route('/modal-boxes', {
    name: 'Route.modalBoxes',
    action(params, queryParams) {
        BlazeLayout.render('Layout_main', {main: 'Page_modal_boxes'});
    }
});

FlowRouter.route('/select-boxes/', {
    name: 'Route.selectBoxes',
    action(params, queryParams) {
        BlazeLayout.render('Layout_main', {main: 'Page_select_boxes'});
    }
});

FlowRouter.route('/*', {
    triggersEnter: [(context, redirect) => {
        redirect('/');
    }]
});
