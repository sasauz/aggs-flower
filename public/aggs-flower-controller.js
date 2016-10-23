define(function (require) {
    var module = require('ui/modules').get('kibana/aggs-flower', ['kibana']);
    var d3 = require('d3v4');   // requires latest d3 library that has been stored in d3v4 folder in kibana to allow both d3 versions to coexist
    
    module.controller('AggsFlowerCtrl', function ($scope, $element, $rootScope, Private) {
        // sample data
        var sampleData = {"took":302,"timed_out":false,"_shards":{"total":5,"successful":5,"failed":0},"hits":{"total":199405,"max_score":0,"hits":[]},"aggregations":{"2":{"doc_count_error_upper_bound":448,"sum_other_doc_count":200488,"buckets":[{"3":{"doc_count_error_upper_bound":47,"sum_other_doc_count":12601,"buckets":[{"key":"javascript","doc_count":9448},{"key":"jquery","doc_count":3362},{"key":"html","doc_count":1961},{"key":"css","doc_count":918},{"key":"angularjs","doc_count":888},{"key":"php","doc_count":692},{"key":"ajax","doc_count":529},{"key":"node.js","doc_count":429},{"key":"html5","doc_count":407},{"key":"json","doc_count":315},{"key":"arrays","doc_count":220},{"key":"asp.net","doc_count":191}]},"key":"javascript","doc_count":9448},{"3":{"doc_count_error_upper_bound":49,"sum_other_doc_count":16058,"buckets":[{"key":"java","doc_count":8757},{"key":"android","doc_count":1436},{"key":"spring","doc_count":506},{"key":"eclipse","doc_count":442},{"key":"swing","doc_count":357},{"key":"hibernate","doc_count":301},{"key":"maven","doc_count":237},{"key":"xml","doc_count":215},{"key":"arrays","doc_count":205},{"key":"spring-mvc","doc_count":188},{"key":"json","doc_count":171},{"key":"jsp","doc_count":169}]},"key":"java","doc_count":8757},{"3":{"doc_count_error_upper_bound":41,"sum_other_doc_count":10980,"buckets":[{"key":"php","doc_count":7580},{"key":"mysql","doc_count":1325},{"key":"javascript","doc_count":692},{"key":"html","doc_count":619},{"key":"jquery","doc_count":568},{"key":"wordpress","doc_count":528},{"key":"sql","doc_count":371},{"key":"arrays","doc_count":336},{"key":"ajax","doc_count":335},{"key":"laravel","doc_count":293},{"key":"codeigniter","doc_count":278},{"key":"json","doc_count":237}]},"key":"php","doc_count":7580},{"3":{"doc_count_error_upper_bound":39,"sum_other_doc_count":11923,"buckets":[{"key":"android","doc_count":7328},{"key":"java","doc_count":1436},{"key":"eclipse","doc_count":306},{"key":"android-fragments","doc_count":302},{"key":"android-layout","doc_count":260},{"key":"listview","doc_count":232},{"key":"android-activity","doc_count":209},{"key":"android-intent","doc_count":170},{"key":"android-listview","doc_count":168},{"key":"xml","doc_count":163},{"key":"cordova","doc_count":154},{"key":"android-studio","doc_count":143}]},"key":"android","doc_count":7328},{"3":{"doc_count_error_upper_bound":41,"sum_other_doc_count":11635,"buckets":[{"key":"c#","doc_count":6623},{"key":"asp.net","doc_count":871},{"key":".net","doc_count":741},{"key":"wpf","doc_count":523},{"key":"asp.net-mvc","doc_count":400},{"key":"winforms","doc_count":342},{"key":"linq","doc_count":275},{"key":"entity-framework","doc_count":240},{"key":"xaml","doc_count":217},{"key":"sql","doc_count":187},{"key":"javascript","doc_count":156},{"key":"windows-phone-8","doc_count":144}]},"key":"c#","doc_count":6623},{"3":{"doc_count_error_upper_bound":26,"sum_other_doc_count":6082,"buckets":[{"key":"jquery","doc_count":5682},{"key":"javascript","doc_count":3362},{"key":"html","doc_count":1383},{"key":"css","doc_count":858},{"key":"ajax","doc_count":650},{"key":"php","doc_count":568},{"key":"twitter-bootstrap","doc_count":203},{"key":"json","doc_count":200},{"key":"html5","doc_count":193},{"key":"jquery-ui","doc_count":153},{"key":"asp.net","doc_count":146},{"key":"forms","doc_count":131}]},"key":"jquery","doc_count":5682},{"3":{"doc_count_error_upper_bound":19,"sum_other_doc_count":4721,"buckets":[{"key":"html","doc_count":4586},{"key":"css","doc_count":2031},{"key":"javascript","doc_count":1961},{"key":"jquery","doc_count":1383},{"key":"php","doc_count":619},{"key":"css3","doc_count":248},{"key":"twitter-bootstrap","doc_count":219},{"key":"html5","doc_count":194},{"key":"forms","doc_count":155},{"key":"angularjs","doc_count":116},{"key":"ajax","doc_count":114},{"key":"mysql","doc_count":87}]},"key":"html","doc_count":4586},{"3":{"doc_count_error_upper_bound":25,"sum_other_doc_count":6987,"buckets":[{"key":"python","doc_count":4325},{"key":"django","doc_count":462},{"key":"python-2.7","doc_count":326},{"key":"numpy","doc_count":199},{"key":"pandas","doc_count":199},{"key":"python-3.x","doc_count":176},{"key":"list","doc_count":128},{"key":"matplotlib","doc_count":115},{"key":"dictionary","doc_count":96},{"key":"regex","doc_count":92},{"key":"arrays","doc_count":81},{"key":"tkinter","doc_count":76}]},"key":"python","doc_count":4325},{"3":{"doc_count_error_upper_bound":24,"sum_other_doc_count":6468,"buckets":[{"key":"ios","doc_count":4006},{"key":"objective-c","doc_count":1329},{"key":"xcode","doc_count":504},{"key":"iphone","doc_count":493},{"key":"swift","doc_count":432},{"key":"uitableview","doc_count":258},{"key":"ios8","doc_count":203},{"key":"ios7","doc_count":174},{"key":"core-data","doc_count":120},{"key":"android","doc_count":117},{"key":"xcode6","doc_count":97},{"key":"cordova","doc_count":92}]},"key":"ios","doc_count":4006},{"3":{"doc_count_error_upper_bound":17,"sum_other_doc_count":3235,"buckets":[{"key":"css","doc_count":3366},{"key":"html","doc_count":2031},{"key":"javascript","doc_count":918},{"key":"jquery","doc_count":858},{"key":"css3","doc_count":333},{"key":"twitter-bootstrap","doc_count":290},{"key":"html5","doc_count":195},{"key":"php","doc_count":146},{"key":"wordpress","doc_count":106},{"key":"twitter-bootstrap-3","doc_count":87},{"key":"responsive-design","doc_count":78},{"key":"image","doc_count":60}]},"key":"css","doc_count":3366},{"3":{"doc_count_error_upper_bound":20,"sum_other_doc_count":5415,"buckets":[{"key":"c++","doc_count":3129},{"key":"c","doc_count":217},{"key":"qt","doc_count":205},{"key":"c++11","doc_count":194},{"key":"arrays","doc_count":113},{"key":"opencv","doc_count":109},{"key":"pointers","doc_count":95},{"key":"linux","doc_count":91},{"key":"windows","doc_count":90},{"key":"vector","doc_count":89},{"key":"boost","doc_count":87},{"key":"templates","doc_count":84}]},"key":"c++","doc_count":3129},{"3":{"doc_count_error_upper_bound":15,"sum_other_doc_count":3502,"buckets":[{"key":"mysql","doc_count":3059},{"key":"php","doc_count":1325},{"key":"sql","doc_count":798},{"key":"database","doc_count":212},{"key":"java","doc_count":147},{"key":"pdo","doc_count":96},{"key":"html","doc_count":87},{"key":"javascript","doc_count":87},{"key":"mysqli","doc_count":82},{"key":"jquery","doc_count":73},{"key":"join","doc_count":70},{"key":"phpmyadmin","doc_count":70}]},"key":"mysql","doc_count":3059},{"3":{"doc_count_error_upper_bound":15,"sum_other_doc_count":3578,"buckets":[{"key":"sql","doc_count":3034},{"key":"mysql","doc_count":798},{"key":"sql-server","doc_count":721},{"key":"php","doc_count":371},{"key":"oracle","doc_count":265},{"key":"database","doc_count":204},{"key":"c#","doc_count":187},{"key":"tsql","doc_count":180},{"key":"sql-server-2008","doc_count":159},{"key":"postgresql","doc_count":131},{"key":"java","doc_count":106},{"key":"join","doc_count":80}]},"key":"sql","doc_count":3034}]}}};
        // visualisation factory
        var vsFactory = Private(require('./lib/vis_flower'));
        // create flower visualisation and initialise
        var vs = vsFactory.createVis("flower", $element[0]);
        // data converter; convert ES response to staging format
        var dch = Private(require('./lib/data_converter'));        
        // create empty staging data. format:
        // name - displayed over the node, sizeScale - node size scaling for display, maxSize - largest data size,
        // size - data size, color - node color
        // collapsed - collapsed node does not display its children and the size is the sum of the node and all node's children
        // total - total number of nodes, id - node id, log - use logarithmic scale to display node sizes
        var newJson = {"name":"","children":[],"size":0, "sizeScale": 1, "color":"hsl(0,90%,10%)","collapsed":false, "total":1, "maxSize":20.0, "id": 1, "log": false};        
        // can be used for initialising the controller, currently not in use
        $scope.initialised = false;        
        $scope.init = function()  {
            $scope.initialised = true;
        };

        /*
         * important function that listens to requests returned from ES
         */
        $scope.$watch('esResponse', function (resp) {
            // wipe off previous data and regenerate new data tree
            newJson = {"name":"","children":[],"size":0, "sizeScale": 1, "color":"hsl(0,90%,10%)","collapsed":false, "total":1, "maxSize":20.0, "id": 1, "log": false};
            if ( resp !== undefined && !$scope.vis.params.vparams.sample) {
                dch.convertAggsToJson(resp, newJson);   // real data
            }   else    { // else always use sample data
//          }   else if (resp === undefined || $scope.vis.params.vparams.sample )    {
                dch.convertAggsToJson(sampleData, newJson); // sample data
            }
            vs.updateDataAndParams(newJson, $scope.vis); // load visualisation with new data; separate from rending as at some stage only data will be updated
            vs.render();  // render
        }); // end of watch
                
    }); // end of controller
});
