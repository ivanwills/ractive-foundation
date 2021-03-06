Ractive.extend({
	template: RactiveF.templates['ux-tabarea'],
	oninit: function () {

		var tabLinks = this.findComponent('ux-tablinks');
		var tabPanes = this.findComponent('ux-tabpanes');

		var tabLink = tabLinks.findAllChildComponents('ux-tablink');
		var tabPane = tabPanes.findAllChildComponents('ux-tabpane');

		_.each(tabLink, function (link, i) {
			var childPane = tabPane[i];
			if (childPane) {
				link.set({
					tabPane: childPane,
					uid: link._guid
				});
			}
		});
	}
});
