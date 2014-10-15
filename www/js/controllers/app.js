/*!
 * ma-ville
 * Copyright 2014 Simon MAHÉ <mahe.simon@gmail.com>
 * Licensed under AGPL-3.0 (https://www.gnu.org/licenses/agpl.txt)
 */
'use strict';

/** App controller
 */
app.controller('AppCtrl', function() {

  var sample = [
    { id: 1, label: 'Arbre couché sur le trottoir', description: 'Trottoir edommagé', img: 'img/reports/tree_s.jpg' },
    { id: 2, label: 'Dépot sauvage d\'ordure', description: 'Pneus, frigidaire, chaises, tables...', img: 'img/reports/trash_s.jpg' },
    { id: 3, label: 'Nid de frelons', description: 'Nid de frelons asiatiques d\'environ 60cm de diamètre', img: 'img/reports/hornet_s.jpg' }
  ];

  this.rootReports = sample;

});
