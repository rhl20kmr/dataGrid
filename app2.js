var app=angular.module("myApp",["jqwidgets"]);
app.controller('myCtrl',function($scope,$http)
{
		var selectedrowindexes = [];
	
	    // Grid data.
            $scope.people = [{
                id: 1,
                name: "Pedro",
                age: 13
            }, {
                id: 2,
                name: "Clara",
                age: 22
            }, {
                id: 3,
                name: "John",
                age: 33
            }, {
                id: 4,
                name: "Pier",
                age: 27
            }];
			
			$("#filter").jqxInput({
				width: 150,
				height: 25,
				placeHolder: 'Filter',
			});

			$scope.jqxButtonSettings = {
                width: 100
            };

			
			function initGrid(){
				console.log('initGrid');
			}
			
			function initTabb2(){
				console.log('initTabb2');
			}
			
			var initWidgets = function (tab) {
                switch (tab) {
                    case 0:
                        initGrid();
                        break;
                    case 1:
                        initTabb2();
                        break;
                }
            }
            $scope.tabsSettings = { width: 1000, height: 620, initTabContent: initWidgets };
			
			function addFilter(filtervalue) {
                var columns = $("#usersGrid").jqxGrid('columns');
                var filtergroup, filter;

                $("#usersGrid").jqxGrid('clearfilters');

                if (filtervalue == null || filtervalue == '') {
                    return;
                }

                for (var i = 0; i < columns.records.length; i++) {
                    if (!columns.records[i].hidden && columns.records[i].filterable) {
                        filtergroup = new $.jqx.filter();
                        filtergroup.operator = 'or';
                        filter = filtergroup.createfilter('stringfilter', filtervalue, 'contains');
                        filtergroup.addfilter(1, filter);
                        $("#usersGrid").jqxGrid('addfilter', columns.records[i].datafield, filtergroup);
                    }
                }

                $("#usersGrid").jqxGrid('applyfilters');
            }
			
			$("#filter").on('keydown', function (event) {
                var oldVal = "";
                var me = this;

                if ($("#filter").val().length >= 1) {
                    if (me.timer) {
                        clearTimeout(me.timer);
                    }
                    if (oldVal != $("#filter").val()) {
                        me.timer = setTimeout(function () {
                            addFilter($("#filter").val());
                        }, 1000);
                        oldVal = $("#filter").val();
                    }
                }
                else {
                    $("#usersGrid").jqxGrid('clearfilters');
                }
            });
			
			//console.log($scope.people);
            $scope.settings =
            {
                altrows: true,
				width: '100%',
				pageable: true,
				pagesizeoptions: ['5', '10', '20', '50', '100'],
				pagesize: 20,
				autoheight: true,
				columnsresize: true,					
				autorowheight: true,           
				columnsheight: 30,
				showsortmenuitems: false,
				enableBrowserSelection: true,
				filterable: true,
				sortable: true,
				editable: false,
				localization: {thousandsSeparator: ""},
				selectionmode: 'checkbox',
                source: $scope.people,
                columns: [
                    { text: 'Id', dataField: 'id', width: '32%', sortable: true},
                    { text: 'Name', dataField: 'name', width: '33%', sortable: true},
                    { text: 'Age', dataField: 'age', width: '32%', sortable: true}
                ]
            }
			
			/* $scope.settings = {
				source: $scope.people
			}; */
			
			$("#remove-button").jqxButton({disabled: true});
			$('#usersGrid').on('rowselect', function (event) {
            // event arguments.
				var args = event.args;
				// row's bound index.
				var rowBoundIndex = args.rowindex;
				// row's data. The row's data object or null(when all rows are being selected or unselected with a single action). If you have a datafield called "firstName", to access the row's firstName, use var firstName = rowData.firstName;
				var rowData = args.row;

				//console.log("rowData: " + JSON.stringify(rowData));

				selectedrowindexes = $('#usersGrid').jqxGrid('selectedrowindexes');
				//console.log("select - selectedrowindexes: " + JSON.stringify(selectedrowindexes));

				
				$("#remove-button").jqxButton({disabled: false});

				if (selectedrowindexes.length === 0) {
					$("#remove-button").jqxButton({disabled: true});
					
				}
			});
			
			$('#usersGrid').on('rowunselect', function (event) {
            // event arguments.
				var args = event.args;
				// row's bound index.
				var rowBoundIndex = args.rowindex;
				// row's data. The row's data object or null(when all rows are being selected or unselected with a single action). If you have a datafield called "firstName", to access the row's firstName, use var firstName = rowData.firstName;
				var rowData = args.row;
				//console.log("rowData: " + JSON.stringify(rowData));

				selectedrowindexes = $('#usersGrid').jqxGrid('selectedrowindexes');
				//console.log("unselect - selectedrowindexes: " + JSON.stringify(selectedrowindexes));

				if (selectedrowindexes.length === 0) {
					$("#remove-button").jqxButton({disabled: true});
				}
			});
			
			$scope.inputSettings = {
                width: '98%',
                height: 25
            };
			
			//Window settings
            $scope.jqxProvisioningWindowSettings = {
                height: 300,
                width: 500,
                autoOpen: false,
                isModal: true,
                modalOpacity: 0.2,
                resizable: false,
                draggable: false,
                closeButtonAction: 'hide'                
            };

            $scope.cancelUser = function () {
                $("#userProvisioningWindow").jqxWindow('close');
				$('#users-form').jqxValidator('hide');
            };
			
		$scope.addUser = function () {

			$scope.userId = "";
			$scope.firstname = "";
			$scope.lastname = "";
			$("#userProvisioningWindow").jqxWindow('open');
		};
		
		//delete selected users
		
		$scope.deleteUser = function (){
			//console.log('selectedrowindexes..',selectedrowindexes);
			for(var i=0; i< selectedrowindexes.length; i++){
				//console.log("selectedrowindexes...",selectedrowindexes[i]);
				var removeIndex = $scope.people.map(function(item) { return item.id; }).indexOf(selectedrowindexes[i]+1);
				$scope.people.splice(removeIndex, 1);
			}
			
			$('#usersGrid').jqxGrid('refresh');
		} 
		
		$("#users-form").jqxValidator({
			onSuccess: function () {
				//console.log("Success.");
				$scope.saveUserInfo($scope.formValues);
			},
			onError: function () {
				$('#user-save-button').jqxButton({disabled: false});
				//console.log("Failed.");
			}
		});
		
		 $scope.saveUserInfo =function(item){
			//console.log("item...",item);
			$scope.people.push(item);
			$("#userProvisioningWindow").jqxWindow('close');
		}
		
		$scope.saveUser = function () {
               
			$scope.formValues = {
				id: $scope.userId,
				name: $scope.username,
				age: $scope.userage,
			};

			//console.log("$scope.formValues...",$scope.formValues);
			$('#users-form').jqxValidator('validate');
			
		};
		
		//validation for all input
		$scope.validatorSettings = {
			hintType: 'label',
			animationDuration: 0,
			scroll: false,
			rules: [
				{
					input: '#userId',
					message: 'Please enter user id.',
					action: "null",
					rule: function (input, commit) {

						var result = $scope.checkLastname($('#userId').val());

						//console.log("Result: " + typeof result);

						if (result) {
							return true;
						} else {
							$("#userProvisioningWindow").jqxWindow('height', 300);
							return false
						}
					}
				},

				{
					input: '#username',
					message: 'Please enter user name.',
					action: "null",
					rule: function (input, commit) {

						var result = $scope.checkLastname($('#username').val());

						//console.log("Result: " + typeof result);

						if (result) {
							return true;
						} else {
							$("#userProvisioningWindow").jqxWindow('height', 310);
							return false
						}
					}
				},
				{
					input: '#userage',
					message: 'Please enter user age.',
					action: "null",
					rule: function (input, commit) {

						var result = $scope.checkLastname($('#userage').val());

						//console.log("Result: " + typeof result);

						if (result) {
							return true;
						} else {
							$("#userProvisioningWindow").jqxWindow('height', 320);
							return false
						}
					}
				}
				
			]
		};
		
		$scope.checkLastname = function (data) {
            //console.log("data: " + data);

            if (data === undefined || data === "") {
                return false;
            } else {
                var isASCII = /^[a-zA-Z-]+$/.test(data);

                if (!isASCII) {
                    return false;
                }
                return true;
            }
        };
  	
});
