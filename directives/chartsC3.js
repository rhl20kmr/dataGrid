/**
 * Created by ebenson on 3/5/18.
 */

angular.module("ChartsC3", [])
    .directive("barChartC3", function () {
        return {
            restrict: "E",
            link: function(scope, element, attrs) { //Manipulate the DOM from here.

            },
            controller: ['$scope', '$rootScope', '$resource', '$http', '$filter', '$cookies', 'DateMath',
                function ($scope,$rootScope,$resource,$http,$filter,$cookies,DateMath) {

                    $scope.createBarChart3 = function (data, categories, settings) {

                        //console.log("data: " + JSON.stringify(data));
                        //console.log("categories: " + JSON.stringify(categories));

                        var chart = c3.generate({
                            bindto: settings.element,
                            color: {
                                pattern: settings.color
                            },
                            size: {
                                //width: settings.width,
                                height: settings.height
                            },
                            data: {
                                columns: [data],
                                type: 'bar',
                                onclick: function (d, i) {
                                    //console.log("onclick", d, i);
                                    $scope.chart3Click(d);
                                },
                                onmouseover: function (d, i) { document.body.style.cursor = 'pointer'; },
                                onmouseout: function (d, i) { document.body.style.cursor = 'default'; }
                            },
                            axis: {
                                rotated: settings.rotated,
                                x: {
                                    type: 'category',
                                    categories: categories
                                },
                                y: {
                                    tick: {
                                        format: d3.format("d"),
                                        outer: false
                                    }
                                }
                            }
                        });
                    };

                    $scope.createBarChart4 = function (data, categories, settings) {

                        //console.log("data: " + JSON.stringify(data));
                        //console.log("categories: " + JSON.stringify(categories));

                        var chart = c3.generate({
                            bindto: settings.element,
                            color: {
                                pattern: settings.color
                            },
                            size: {
                                //width: settings.width,
                                height: settings.height
                            },
                            data: {
                                columns: [data],
                                type: 'bar',
                                onclick: function (d, i) {
                                    //console.log("onclick", d, i);
                                    $scope.chart4Click(d);
                                },
                                onmouseover: function (d, i) { document.body.style.cursor = 'pointer'; },
                                onmouseout: function (d, i) { document.body.style.cursor = 'default'; }
                            },
                            axis: {
                                rotated: settings.rotated,
                                x: {
                                    type: 'category',
                                    categories: categories
                                },
                                y: {
                                    tick:{
                                        format: d3.format("d"),
                                        outer: false
                                    }
                                }
                            }
                        });
                    };

                    $scope.createBarChart5 = function (data, categories, settings) {

                        //console.log("data: " + JSON.stringify(data));
                        //console.log("categories: " + JSON.stringify(categories));

                        var chart = c3.generate({
                            bindto: settings.element,
                            color: {
                                pattern: settings.color
                            },
                            size: {
                                //width: settings.width,
                                height: settings.height
                            },
                            data: {
                                columns: [data],
                                type: 'bar',
                                onclick: function (d, i) {
                                    //console.log("onclick", d, i);
                                    $scope.chart5Click(d);
                                },
                                onmouseover: function (d, i) { document.body.style.cursor = 'pointer'; },
                                onmouseout: function (d, i) { document.body.style.cursor = 'default'; }
                            },
                            axis: {
                                rotated: settings.rotated,
                                x: {
                                    type: 'category',
                                    categories: categories
                                },
                                y: {
                                    tick:{
                                        format: d3.format("d")
                                    }
                                }
                            }
                        });
                    };

                    $scope.createBarChart6 = function (data, categories, settings) {

                        console.log("data: " + JSON.stringify(data));
                        console.log("categories: " + JSON.stringify(categories));

                        var chart = c3.generate({
                            bindto: settings.element,
                            color: {
                                pattern: settings.color
                            },
                            size: {
                                //width: settings.width,
                                height: settings.height
                            },
                            data: {
                                columns: [data],
                                type: 'bar',
                                onclick: function (d, i) {
                                    //console.log("onclick", d, i);
                                    $scope.chart6Click(d);
                                },
                                onmouseover: function (d, i) { document.body.style.cursor = 'pointer'; },
                                onmouseout: function (d, i) { document.body.style.cursor = 'default'; }
                            },
                            axis: {
                                rotated: settings.rotated,
                                x: {
                                    type: 'category',
                                    categories: categories
                                },
                                y: {
                                    tick:{
                                        format: d3.format("d"),
                                        outer: false
                                    }
                                }
                            }
                        });
                    };

                    $scope.createBarChart7 = function (data, categories, settings) {

                        //console.log("data: " + JSON.stringify(data));
                        //console.log("categories: " + JSON.stringify(categories));

                        var chart = c3.generate({
                            bindto: settings.element,
                            color: {
                                pattern: settings.color
                            },
                            size: {
                                //width: settings.width,
                                height: settings.height
                            },
                            data: {
                                columns: [data],
                                type: 'bar',
                                onclick: function (d, i) {
                                    //console.log("onclick", d, i);
                                    $scope.chart7Click(d);
                                },
                                onmouseover: function (d, i) { document.body.style.cursor = 'pointer'; },
                                onmouseout: function (d, i) { document.body.style.cursor = 'default'; }
                            },
                            axis: {
                                rotated: settings.rotated,
                                x: {
                                    type: 'category',
                                    categories: categories
                                },
                                y: {
                                    tick:{
                                        format: d3.format("d"),
                                        outer: false
                                    }
                                }
                            }
                        });
                    };
                }]
        };
    })
    .directive("stackedBarChartC3", function () {
        return {
            restrict: "E",
            link: function(scope, element, attrs) { //Manipulate the DOM from here.

            },
            controller: ['$scope', '$rootScope', '$resource', '$http', '$filter', '$cookies', 'DateMath',
                function ($scope,$rootScope,$resource,$http,$filter,$cookies,DateMath) {

                    $scope.createStackedBarChart6 = function (data, categories, groups, settings) {

                        //console.log("data: " + JSON.stringify(data));
                        //console.log("categories: " + JSON.stringify(categories));
                        //console.log("groups: " + JSON.stringify(groups));

                        var chart = c3.generate({
                            bindto: settings.element,
                            color: {
                                pattern: settings.color
                            },
                            size: {
                                //width: settings.width,
                                height: settings.height
                            },
                            data: {
                                columns: data,
                                type: 'bar',
                                groups: [groups],
                                onclick: function (d, i) {
                                    //console.log("onclick", d, i);
                                    $scope.chart6Click(d);
                                },
                                onmouseover: function (d, i) { document.body.style.cursor = 'pointer'; },
                                onmouseout: function (d, i) { document.body.style.cursor = 'default'; }
                            },
                            axis: {
                                rotated: settings.rotated,
                                x: {
                                    type: 'category',
                                    categories: categories
                                },
                                y: {
                                    tick:{
                                        format: d3.format("d"),
                                        outer: false
                                    }
                                }
                            }
                        });
                    };


                    $scope.createStackedBarChart7 = function (data, categories, groups, settings) {

                        //console.log("data: " + JSON.stringify(data));
                        //console.log("categories: " + JSON.stringify(categories));
                        //console.log("groups: " + JSON.stringify(groups));

                        var chart = c3.generate({
                            bindto: settings.element,
                            color: {
                                pattern: settings.color
                            },
                            size: {
                                //width: settings.width,
                                height: settings.height
                            },
                            data: {
                                columns: data,
                                type: 'bar',
                                groups: [groups],
                                onclick: function (d, i) {
                                    //console.log("onclick", d, i);
                                    $scope.chart7Click(d);
                                },
                                onmouseover: function (d, i) { document.body.style.cursor = 'pointer'; },
                                onmouseout: function (d, i) { document.body.style.cursor = 'default'; }
                            },
                            axis: {
                                rotated: settings.rotated,
                                x: {
                                    type: 'category',
                                    categories: categories
                                },
                                y: {
                                    tick:{
                                        format: d3.format("d"),
                                        outer: false
                                    }
                                }
                            }
                        });
                    };


                    $scope.createStackedBarChart = function (data, settings) {

                    //console.log("data: " + JSON.stringify(data));

                    var chart = c3.generate({
                        bindto: settings.element,
                        color: {
                            pattern: settings.colors
                        },
                        size: {
                            width: settings.width,
                            height: settings.height
                        },
                        data: {
                            columns: [
                                ['data1', -30, 200, 200, 400, -150, 250],
                                ['data2', 130, 100, -100, 200, -150, 50]
                            ],
                            type: 'bar',
                            groups: [
                                ['data1', 'data2']
                            ],
                            onmouseover: function (d, i) { document.body.style.cursor = 'pointer'; },
                            onmouseout: function (d, i) { document.body.style.cursor = 'default'; }
                        },
                        grid: {
                            y: {
                                lines: [{value:0}]
                            }
                        }
                    });

                };

            }]
        };
    })
    .directive("pieChartC3", function () {
        return {
            restrict: "E",
            link: function(scope, element, attrs) { //Manipulate the DOM from here.

            },
            controller: ['$scope', '$rootScope', '$resource', '$http', '$filter', '$cookies', 'DateMath',
                function ($scope,$rootScope,$resource,$http,$filter,$cookies,DateMath) {

                    $scope.createPieChart = function (data, settings) {

                        //console.log("data: " + JSON.stringify(data));
                        //console.log("settings: " + JSON.stringify(settings));

                        var chart = c3.generate({
                            bindto: settings.element,
                            color: {
                                pattern: settings.colors
                            },
                            size: {
                                //width: settings.width,
                                height: settings.height
                            },
                            data: {
                                columns: data,
                                type : 'pie',
                                onclick: function (d, i) {
                                    //console.log("onclick", d, i);
                                    $scope.chartTopFiveApplicationsClick(d.id);
                                }/*,
                                onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                                onmouseout: function (d, i) { console.log("onmouseout", d, i); }*/
                            },
                            tooltip: {
                                grouped: false,
                                position: function (data, width, height, element) {
                                    var x = event.offsetX;     // Get the horizontal coordinate
                                    var y = event.offsetY;     // Get the vertical coordinate

                                    return {top: y + 20, left: x + 10};
                                },
                                format: {
                                    value: function (value, ratio, id, index) {
                                        //console.log("value" + value);

                                        //All values are received in mb.
                                        if(value > 999){
                                            //Convert to gigabytes.
                                            return ((value/1024)).toFixed(0) + "gb";
                                        }else{
                                            if(value < 1){
                                                //console.log("value: " + value);
                                                if(value !== 0){
                                                    return ((value*1024)).toFixed(0) + "kb";
                                                }else{
                                                    return 0;
                                                }

                                            }else{
                                                return ((value)).toFixed(0) + "mb";
                                            }
                                        }

                                        /*if(value/1048576 > 999){
                                            return ((value/1048576)/1024).toFixed(0) + "gb";
                                        }else{
                                            if((value/1048576)/1024 < 0.001) {
                                                if((value/1048576)/1024 > 1) {
                                                    return ((value/1024)).toFixed(0) + "kb";
                                                }else{
                                                    return ((value/1024)).toFixed(2) + "kb";
                                                }
                                            }else{
                                                //console.log("value" + (value/1048576));
                                                if((value/1048576) > 1) {
                                                    return ((value/1024)/1024).toFixed(0) + "mb";
                                                }else{
                                                    return ((value/1024)/1024).toFixed(2) + "mb";
                                                }
                                            }
                                        }*/
                                    }
                                }
                            },
                            pie: {
                                label: {
                                    format: function (value, ratio, id) {
                                        //console.log("value" + value);

                                        //All values are received in mb.
                                        if(value > 999){
                                            //Convert to gigabytes.
                                            return ((value/1024)).toFixed(0) + "gb";
                                        }else{
                                            if(value < 1){
                                                //console.log("value: " + value);
                                                if(value !== 0){
                                                    return ((value*1024)).toFixed(0) + "kb";
                                                }else{
                                                    return 0;
                                                }

                                            }else{
                                                return ((value)).toFixed(0) + "mb";
                                            }
                                        }

                                        /*if(value/1048576 > 999){
                                            return ((value/1048576)/1024).toFixed(0) + "gb";
                                        }else{
                                            if((value/1048576)/1024 < 0.001) {
                                                if((value/1048576)/1024 > 1) {
                                                    return ((value/1024)).toFixed(0) + "kb";
                                                }else{
                                                    return ((value/1024)).toFixed(2) + "kb";
                                                }
                                            }else{
                                                //console.log("value" + (value/1048576));
                                                if((value/1048576) > 1) {
                                                    return ((value/1024)/1024).toFixed(0) + "mb";
                                                }else{
                                                    return ((value/1024)/1024).toFixed(2) + "mb";
                                                }
                                            }
                                        }*/
                                    }
                                }
                            }
                        });

                    };

                    $scope.createPieChartCount = function (data, settings) {

                        //console.log("data: " + JSON.stringify(data));
                        //console.log("settings: " + JSON.stringify(settings));

                        var chart = c3.generate({
                            bindto: settings.element,
                            color: {
                                pattern: settings.colors
                            },
                            size: {
                                //width: settings.width,
                                height: settings.height
                            },
                            data: {
                                columns: data,
                                type : 'pie',
                                onclick: function (d, i) {
                                    //console.log("onclick", d, i);
                                    $scope.chartThreatIndicatorOriginsClick(d.id);
                                }/*,
                                onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                                onmouseout: function (d, i) { console.log("onmouseout", d, i); }*/
                            },
                            tooltip: {
                                grouped: false,
                                position: function (data, width, height, element) {
                                    var x = event.offsetX;     // Get the horizontal coordinate
                                    var y = event.offsetY;     // Get the vertical coordinate

                                    return {top: y + 20, left: x + 10};
                                },
                                format: {
                                    value: function (value, ratio, id, index) {
                                        //console.log("value" + value);
                                        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                    }
                                }
                            },
                            pie: {
                                label: {
                                    format: function (value, ratio, id) {
                                        //console.log("value" + value);
                                        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                    }
                                }
                            }
                        });

                    };

                }]
        };
    })
    .directive("donutChartC3", function () {
        return {
            restrict: "E",
            link: function(scope, element, attrs) { //Manipulate the DOM from here.

            },
            controller: ['$scope', '$rootScope', '$resource', '$http', '$filter', '$cookies', 'DateMath',
                function ($scope,$rootScope,$resource,$http,$filter,$cookies,DateMath) {

                    $scope.createDonutChart = function (data, settings) {

                        //console.log("data: " + JSON.stringify(data));

                        var chart = c3.generate({
                            bindto: settings.element,
                            width: settings.width,
                            height: settings.height,
                            data: {
                                columns: [
                                    ['data1', 30],
                                    ['data2', 120]
                                ],
                                type : 'donut',
                                onclick: function (d, i) { console.log("onclick", d, i); },
                                onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                                onmouseout: function (d, i) { console.log("onmouseout", d, i); }
                            },
                            donut: {
                                title: "Iris Petal Width"
                            }
                        });

                        setTimeout(function () {
                            chart.load({
                                columns: [
                                    ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
                                    ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
                                    ["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
                                ]
                            });
                        }, 1500);

                        setTimeout(function () {
                            chart.unload({
                                ids: 'data1'
                            });
                            chart.unload({
                                ids: 'data2'
                            });
                        }, 2500);
                    };

                }]
        };
    })
    .directive("lineChartC3", function () {
        return {
            restrict: "E",
            link: function(scope, element, attrs) { //Manipulate the DOM from here.

            },
            controller: ['$scope', '$rootScope', '$resource', '$http', '$filter', '$cookies', 'DateMath',
                function ($scope,$rootScope,$resource,$http,$filter,$cookies,DateMath) {

                    $scope.createLineChart = function (data, settings) {

                        //console.log("data: " + JSON.stringify(data));

                        var midChart = settings.width / 3;

                        var chart = c3.generate({
                            title: {
                                text: settings.title
                            },
                            bindto: settings.element,
                            size: {
                                width: settings.width,
                                height: settings.height
                            },
                            data: {
                                columns: [
                                    ['data1', 30, 200, 100, 400, 150, 250],
                                    ['data2', 50, 20, 10, 40, 15, 25]
                                ]
                            },
                            grid: {
                                x: {
                                    show: true
                                },
                                y: {
                                    show: true
                                }
                            },
                            legend: {
                                position: 'right'
                            },
                            tooltip: {
                                grouped: true,
                                position: function (data, width, height, element) {
                                    return {top: 0, left: midChart};
                                }
                            }
                        });

                    };

                }]
        };
    })
    .directive("areaChartC3", function () {
        return {
            restrict: "E",
            link: function(scope, element, attrs) { //Manipulate the DOM from here.

            },
            controller: ['$scope', '$rootScope', '$resource', '$http', '$filter', '$cookies', 'DateMath',
                function ($scope,$rootScope,$resource,$http,$filter,$cookies,DateMath) {

                    $scope.createAreaChart = function (data, settings) {

                        //console.log("data: " + JSON.stringify(data));

                        var chart = c3.generate({
                            bindto: settings.element,
                            size: {
                                width: settings.width,
                                height: settings.height
                            },
                            data: {
                                columns: [
                                    ['data1', 300, 350, 300, 0, 0, 0],
                                    ['data2', 130, 100, 140, 200, 150, 50]
                                ],
                                types: {
                                    data1: 'area',
                                    data2: 'area-spline'
                                }
                            }
                        });

                    };

                }]
        };
    })
    .directive("stackedAreaChartC3", function () {
        return {
            restrict: "E",
            link: function(scope, element, attrs) { //Manipulate the DOM from here.

            },
            controller: ['$scope', '$rootScope', '$resource', '$http', '$filter', '$cookies', 'DateMath',
                function ($scope,$rootScope,$resource,$http,$filter,$cookies,DateMath) {

                    $scope.createStackedAreaChart = function (data, settings) {

                        //console.log("data: " + JSON.stringify(data));

                        var chart = c3.generate({
                            bindto: settings.element,
                            size: {
                                width: settings.width,
                                height: settings.height
                            },
                            data: {
                                columns: [
                                    ['data1', 300, 350, 300, 0, 0, 120],
                                    ['data2', 130, 100, 140, 200, 150, 50]
                                ],
                                types: {
                                    data1: 'area-spline',
                                    data2: 'area-spline'
                                    // 'line', 'spline', 'step', 'area', 'area-step' are also available to stack
                                },
                                groups: [['data1', 'data2']]
                            }
                        });
                    };

                }]
        };
    })
    .directive("scatterChartC3", function () {
        return {
            restrict: "E",
            link: function(scope, element, attrs) { //Manipulate the DOM from here.

            },
            controller: ['$scope', '$rootScope', '$resource', '$http', '$filter', '$cookies', 'DateMath',
                function ($scope,$rootScope,$resource,$http,$filter,$cookies,DateMath) {

                    $scope.createScatterChart = function (data, settings) {

                        //console.log("data: " + JSON.stringify(data));

                        var chart = c3.generate({
                            bindto: settings.element,
                            size: {
                                width: settings.width,
                                height: settings.height
                            },
                            data: {
                                xs: {
                                    setosa: 'setosa_x',
                                    versicolor: 'versicolor_x'
                                },
                                // iris data from R
                                columns: [
                                    ["setosa_x", 3.5, 3.0, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3.0, 3.0, 4.0, 4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3.0, 3.4, 3.5, 3.4, 3.2, 3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3.0, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3.0, 3.8, 3.2, 3.7, 3.3],
                                    ["versicolor_x", 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2.0, 3.0, 2.2, 2.9, 2.9, 3.1, 3.0, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3.0, 2.8, 3.0, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3.0, 3.4, 3.1, 2.3, 3.0, 2.5, 2.6, 3.0, 2.6, 2.3, 2.7, 3.0, 2.9, 2.9, 2.5, 2.8],
                                    ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
                                    ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
                                ],
                                type: 'scatter'
                            },
                            axis: {
                                x: {
                                    label: 'Sepal.Width',
                                    tick: {
                                        fit: false
                                    }
                                },
                                y: {
                                    label: 'Petal.Width'
                                }
                            }
                        });

                    };

                }]
        };
    })
    .directive("gaugeChartC3", function () {
        return {
            restrict: "E",
            link: function(scope, element, attrs) { //Manipulate the DOM from here.

            },
            controller: ['$scope', '$rootScope', '$resource', '$http', '$filter', '$cookies', 'DateMath',
                function ($scope,$rootScope,$resource,$http,$filter,$cookies,DateMath) {

                    $scope.createGaugeChart = function (data, settings) {

                        //console.log("data: " + JSON.stringify(data));

                        var chart = c3.generate({
                            bindto: settings.element,
                            size: {
                                width: settings.width,
                                height: settings.height
                            },
                            data: {
                                columns: [
                                    ['data', 91.4]
                                ],
                                type: 'gauge',
                                onclick: function (d, i) { console.log("onclick", d, i); },
                                onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                                onmouseout: function (d, i) { console.log("onmouseout", d, i); }
                            },
                            gauge: {
                                //        label: {
                                //            format: function(value, ratio) {
                                //                return value;
                                //            },
                                //            show: false // to turn off the min/max labels.
                                //        },
                                //    min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
                                //    max: 100, // 100 is default
                                //    units: ' %',
                                //    width: 39 // for adjusting arc thickness
                            },
                            color: {
                                pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
                                threshold: {
                                    //            unit: 'value', // percentage is default
                                    //            max: 200, // 100 is default
                                    values: [30, 60, 90, 100]
                                }
                            },
                            size: {
                                height: 180
                            }
                        });
                    };

                }]
        };
    })
    .directive("combinationLineBarChartC3", function () {
        return {
            restrict: "E",
            link: function(scope, element, attrs) { //Manipulate the DOM from here.

            },
            controller: ['$scope', '$rootScope', '$resource', '$http', '$filter', '$cookies', 'DateMath',
                function ($scope,$rootScope,$resource,$http,$filter,$cookies,DateMath) {

                    $scope.createCombinationLineBarChart = function (data, settings) {

                        //console.log("data: " + JSON.stringify(data));

                        //$scope.timeseries: ["date",1519862400000,1519948800000,1520035200000,1520121600000,1520208000000,1520294400000,1520380800000]
                        //$scope.group1: ["10.52.1.0","173749.9237","204734.8022","229234.6954","229663.8489","0.0000",0]
                        //$scope.group2: ["microsoft.com","5810.2757","8665.3763","7983.9714",0,0,0]

                        var midChart = settings.width / 3;
                        var centerChart = settings.height ;

                        var chart = c3.generate({
                            title: {
                                text: settings.title
                            },
                            bindto: settings.element,
                            size: {
                                width: settings.width,
                                height: settings.height
                            },
                            data: {
                                columns: [
                                    ['Restricet Host Access', 3, 3, 4, 5, 5, 5],
                                    /*['Compromised Credentials', 1, 1, 1, 2, 3, 3],
                                    ['DDos Attack', 20, 20, 10, 20, 30, 40],*/
                                    ['Severity', 30, 30, 50, 60, 70, 100],
                                    ['Confidence', 50, 50, 50, 70, 90, 100]
                                ],
                                type: 'bar',
                                types: {
                                    Severity: 'line',
                                    Confidence: 'line'
                                },
                                groups: [
                                    ['Zero Day Malware','Compromised Credentials', 'DDos Attack']
                                ]
                            },
                            grid: {
                                x: {
                                    show: true
                                },
                                y: {
                                    show: true
                                },
                                y2: {
                                    show: true
                                }
                            },
                            legend: {
                                position: 'right'
                            },
                            tooltip: {
                                grouped: true,
                                position: function (data, width, height, element) {
                                    return {top: -400, left: midChart};
                                }
                            }
                        });
                    };

                }]
        };
    })
    .directive("timeSeriesChartC3", function () {
        return {
            restrict: "E",
            link: function(scope, element, attrs) { //Manipulate the DOM from here.

            },
            controller: ['$scope', '$rootScope', '$resource', '$http', '$filter', '$cookies', 'DateMath',
                function ($scope,$rootScope,$resource,$http,$filter,$cookies,DateMath) {

                    $scope.createTimeSeriesChart = function (data, settings) {

                        //console.log("data: " + JSON.stringify(data));

                        //document.write("<div id=\"chart-11\" class=\"c3\" style=\"max-height: 280px; position: relative;\">");

                        var chart = c3.generate({
                            bindto: settings.element,
                            size: {
                                width: settings.width,
                                height: settings.height
                            },
                            data: {
                                x: 'x',
                                //        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
                                columns: [
                                    ['x', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'],
                                    //            ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
                                    ['data1', 30, 200, 100, 400, 150, 250],
                                    ['data2', 130, 340, 200, 500, 250, 350]
                                ]
                            },
                            axis: {
                                x: {
                                    type: 'timeseries',
                                    tick: {
                                        format: '%Y-%m-%d'
                                    }
                                }
                            },
                            legend: {
                                position: 'right'
                            },
                            tooltip: {
                                grouped: true,
                                position: function (data, width, height, element) {
                                    return {top: 0, left: 0};
                                }
                            }
                        });

                        //document.write("</div>");

                    };

                }]
        };
    })
    .directive("combinationTimeSeriesBarChartC3", function () {
        return {
            restrict: "E",
            link: function(scope, element, attrs) { //Manipulate the DOM from here.

            },
            controller: ['$scope', '$rootScope', '$resource', '$http', '$filter', '$cookies', 'DateMath',
                function ($scope,$rootScope,$resource,$http,$filter,$cookies,DateMath) {

                    $scope.createCombinationTimeSeriesBarChart = function (data, settings, interval) {

                        //console.log("data: " + JSON.stringify(data));
                        var dateFormatter = "";
                        /*
                            %a - abbreviated weekday name.
                            %A - full weekday name.
                            %b - abbreviated month name.
                            %B - full month name.
                            %c - date and time, as "%a %b %e %H:%M:%S %Y".
                            %d - zero-padded day of the month as a decimal number [01,31].
                            %e - space-padded day of the month as a decimal number [ 1,31]; equivalent to %_d.
                            %H - hour (24-hour clock) as a decimal number [00,23].
                            %I - hour (12-hour clock) as a decimal number [01,12].
                            %j - day of the year as a decimal number [001,366].
                            %m - month as a decimal number [01,12].
                            %M - minute as a decimal number [00,59].
                            %L - milliseconds as a decimal number [000, 999].
                            %p - either AM or PM.
                            %S - second as a decimal number [00,61].
                            %U - week number of the year (Sunday as the first day of the week) as a decimal number [00,53].
                            %w - weekday as a decimal number [0(Sunday),6].
                            %W - week number of the year (Monday as the first day of the week) as a decimal number [00,53].
                            %x - date, as "%m/%d/%Y".
                            %X - time, as "%H:%M:%S".
                            %y - year without century as a decimal number [00,99].
                            %Y - year with century as a decimal number.
                            %Z - time zone offset, such as "-0700".
                            %% - a literal "%" character.
                        */

                        var midChart = settings.width / 3;
                        var topChart = settings.height ;

                        switch(navigator.language){
                            case ("en-US"): //US English
                                if(interval === "hour"){
                                    $scope.dateFormatter = '%Y-%m-%d %H:%M';
                                }else{
                                    $scope.dateFormatter = '%m-%d'; //'%e %b'
                                }
                                break;
                            case ("en-GB"): //UK English
                                if(interval === "hour"){
                                    $scope.dateFormatter = '%d-%m-%Y %H:%M';
                                }else{
                                    $scope.dateFormatter = '%d-%m'; //'%e %b'
                                }    
                                break;
                            case ("en-IN"): //India English
                                if(interval === "hour"){
                                    $scope.dateFormatter = '%d-%m-%Y %H:%M';
                                }else{
                                    $scope.dateFormatter = '%d-%m'; //'%e %b'
                                }
                                break;
                            case ("de"): //German standard
                                if(interval === "hour"){
                                    $scope.dateFormatter = '%d.%m.%Y %H:%M';
                                }else{
                                    $scope.dateFormatter = '%d.%m'; //'%e %b'
                                }
                                break;
                            case ("el"): //Greek standard
                                if(interval === "hour"){
                                    $scope.dateFormatter = '%d.%m.%Y %H:%M';
                                }else{
                                    $scope.dateFormatter = '%d.%m'; //'%e %b'
                                }
                                break;
                            case ("jp"): //Japanese
                                if(interval === "hour"){
                                    $scope.dateFormatter = '%d-%m-%Y %H:%M';
                                }else{
                                    $scope.dateFormatter = '%d-%m'; //'%e %b'
                                }
                                break;
                            default:
                                if(interval === "hour"){
                                    $scope.dateFormatter = '%d-%m-%Y %H:%M';
                                }else{
                                    $scope.dateFormatter = '%d-%m'; //'%e %b'
                                }
                                break;
                        }


                        var chart = c3.generate({
                            bindto: settings.element,
                            size: {
                                width: settings.width,
                                height: settings.height
                            },
                            color:{
                                pattern: [
                                    '#3B9BB5',
                                    '#78D22D',
                                    '#E30F74',
                                    '#FBB300',
                                    '#00A4D1',
                                    '#6680C6',
                                    '#287CDF',
                                    '#AF413E',
                                    '#8BA94A',
                                    '#6B5289',
                                    '#c7c7c7',
                                    '#bcbd22',
                                    '#dbdb8d',
                                    '#9edae5',
                                    '#aec7e8',
                                    '#ffbb78',
                                    '#98df8a',
                                    '#ff9896',
                                    '#c5b0d5',
                                    '#c49c94',
                                    '#f7b6d2'
                                ],
                                pattern1: [
                                    '#00cc66',
                                    '#006699',
                                    '#7094db',
                                    '#0000cc',
                                    '#9932cc',
                                    '#d01916',
                                    '#f78b0e'
                                ],
                                pattern2: [
                                    '#1f77b4',
                                    '#ff7f0e',
                                    '#2ca02c',
                                    '#e31916',
                                    '#9467bd',
                                    '#17becf'
                                ],
                                pattern3: [
                                    '#c7c7c7',
                                    '#bcbd22',
                                    '#dbdb8d',
                                    '#9edae5',
                                    '#aec7e8',
                                    '#ffbb78',
                                    '#98df8a',
                                    '#ff9896',
                                    '#c5b0d5',
                                    '#c49c94',
                                    '#f7b6d2'
                                ]
                            },
                            data: data
                            /* example of expected data object:
                            {
                                types: {
                                    'TCP Recon': 'bar',
                                    'Unusual Incoming Bytes': 'bar',
                                    'Unusual Number of Connections To Host On Port': 'bar',
                                    'Unusual Average Duration To Host On Port': 'bar',
                                    'Unusual Number of Connections From Host On Port': 'bar',
                                    'Unusual Average Duration From Host On Port': 'bar',
                                    Severity: 'spline',
                                    Confidence: 'spline'
                                },
                                x: 'date',
                                columns: [
                                    ["date",1519862400000,1519948800000,1520035200000,1520121600000,1520208000000,1520294400000,1520380800000],
                                    ['TCP Recon', 3, 3, 4, 5, 5, 5, 5],
                                    ['Unusual Incoming Bytes', 1, 1, 1, 2, 3, 3, 3],
                                    ['Unusual Number of Connections To Host On Port', 2, 2, 1, 2, 3, 4, 3],
                                    ['Unusual Average Duration To Host On Port', 2, 2, 1, 2, 3, 4, 3],
                                    ['Unusual Number of Connections From Host On Port', 2, 2, 1, 2, 3, 4, 3],
                                    ['Unusual Average Duration From Host On Port', 2, 2, 1, 2, 3, 4, 3],
                                    ['Severity', 30, 30, 50, 60, 70, 100, 100],
                                    ['Confidence', 50, 50, 50, 70, 90, 100, 100]
                                ],
                                groups: [
                                    [
                                        'TCP Recon',
                                        'Unusual Incoming Bytes',
                                        'Unusual Number of Connections To Host On Port',
                                        'Unusual Average Duration To Host On Port',
                                        'Unusual Number of Connections From Host On Port',
                                        'Unusual Average Duration From Host On Port']
                                ],
                                axes: {
                                    Severity: 'y2',
                                    Confidence: 'y2'
                                },
                                colors: {
                                    Severity: '#ff0000',
                                    Confidence: '#3279bd'
                                }
                            }*/,
                            axis: {
                                x: {
                                    type: 'timeseries',
                                    localtime: settings.localTime, //true
                                    tick: {
                                        format: $scope.dateFormatter,
                                        rotate: settings.xTickRotation //60
                                    },
                                    label: {
                                        text: settings.xLabelText,
                                        position: settings.xLabelPosition // 'bottom-center'
                                    }
                                },
                                y: {
                                    label: {
                                        text: settings.yLabelText,
                                        position: settings.yLabelPosition // 'outer-middle'
                                    },
                                    tick: {
                                        //count: settings.ytickcount,
                                        format: d3.format('d')
                                    }
                                },
                                y2: {
                                    show: true,
                                    label: {
                                        text: settings.y2LabelText,
                                        position: settings.y2LabelPosition // 'outer-middle'
                                    },
                                    max: settings.y2Max, //100,
                                    min: settings.y2Min, //0,
                                    padding: settings.y2Padding //{top: 0, bottom: 0}
                                }
                            },
                            tooltip: {
                                position: function (data, width, height, element) {
                                    return {top: -Math.abs(topChart), left: midChart};
                                }
                            },
                            legend: {
                                position: settings.legendPosition //'right'
                            }//,
                            // zoom: {
                            //     enabled: true,
                            //     type: 'drag',
                            //     onzoom: function (domain) {
                            //         console.log("domain"+ JSON.stringify(domain));
                            //     }
                            // }
                        });
                    };
                }]
        };
    });