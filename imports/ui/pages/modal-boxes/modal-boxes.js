import { Template } from 'meteor/templating';
import ModalBoxes from 'meteor/lylak:modal-boxes';

import './modal-boxes.html';

import '../../components/modal-boxes/modal-one/modal-one.js';
import '../../components/modal-boxes/modal-two/modal-two.js';
import '../../components/modal-boxes/modal-three/modal-three.js';

Template.Page_modal_boxes.events({
    'click a.btn[href^="#"]': function (e) {
        e.preventDefault();
        const modalTemplate = e.target.getAttribute("href").substr(1);
        ModalBoxes.open({
            template: modalTemplate,
            className: 'modals-group',
            animation: {
                enter: 'in',
                leave: 'out',
            },
            data: {
                myData: 'myData ' + modalTemplate
            }
        });
    }
});
