import { Template } from 'meteor/templating';

import './select-boxes.html';

Template.Page_select_boxes.helpers({
    yourConfig() {
       return {
           className: 'your-modal-class(es)',
           currentVal: 'css',
           valKey: 'mode', // select value key in options array(default 'val')
           txtKey: 'text', // select text key in options array(default 'txt')
           options: [
               {
                   text: 'JavaScript/JSON',
                   mode: 'javascript'
               },
               {
                   text: 'CSS/SCSS',
                   mode: 'css'
               },
               {
                   text: 'PHP',
                   mode: 'php'
               },
               {
                   text: 'HTML',
                   mode: 'htmlmixed'
               }
           ],
           onChange() { // onChange callback
               console.log(this) // 'this' it is selected object
           }
       };
   }
});
