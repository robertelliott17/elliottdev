(function() {
	var app = angular.module('store', [ ]);

	app.controller('SiteController', function() {
	});

	app.controller('PanelController', function() {
		this.tab = 1;

		this.selectTab = function(setTab) {
			this.tab = setTab;
		};

		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		};
	});

	app.controller('CalcController', function() {
		this.principal = 279000;
		this.rate = 3.875;
		this.loanDuration = 30;
		this.payment = 0;

		this.calculatePmt = function() {
			var monthlyInterest = this.rate / (12*100);
			var numMonths = this.loanDuration * 30;
			this.payment = this.principal * (monthlyInterest / (1 - Math.pow((1 + monthlyInterest), -numMonths)));
		};
	});
})();