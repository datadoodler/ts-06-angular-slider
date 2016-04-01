angular.module('app').controller('ctrl1', ctrl1);


function ctrl1($interval, $rootScope) {
    //var vm = this;
    //vm.priceSlider = 150;
    this.showSpeedSlider=false;
    this.forceRender=false;
    this.speedSlider = {

        value: 50,

        options: {
            floor: 0,
            ceil: 100,
            step: 1,
            hideLimitLabels: true,
            showTicksValues: false,
            ticksValuesTooltip: false,
            showSelectionBar: true,
            translate : function(value){
                //if(value < 30) return "";
                //if(value > 60) return "Fast";
                //return "Normal"
                return "";
            }
        }
    };

    this.clickButton = function () {
        this.showSpeedSlider = !this.showSpeedSlider;
        console.log(this.showSpeedSlider);
        if(this.forceRender){
            console.log('$rootscope.broadcast rzSliderForceRender');
            // Force rendering at every iteration of the interval.
            $interval(function () {
                $rootScope.$broadcast('rzSliderForceRender');
            }, 1,500, true, $rootScope)
    }};
    return this;
}