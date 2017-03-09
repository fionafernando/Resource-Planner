angular.module("KendoDemo", ["kendo.directives"])
           .controller("MyCtrl", function ($scope) {
               var array = [
                      {
                          id: 1,
                          EMP_No: "#1",
                          NAME: "Fiona Fernando",
                          RESOURCE_REGION: "Colombo",
                          PROJECT_ROLE: "Developer",
                          ONSITE: "Yes",
                          PROJECT: "PLM",
                          CONFIRMATION_LEVEL: "UP",
                          RESOURCING_TEAM: "ASHF-0093",
                          SKILL: "6",
                          DESIGNATION: "SE2",
                          percentComplete: 0.5,
                          start: new Date("2017/1/17 9:00"),
                          end: new Date("2017/3/17 9:00"),
                          orderId: 2,
                          title: "Task1"
                      },
                       {
                           id: 2,
                           EMP_No: "#2",
                           NAME: "Sandun Perera",
                           RESOURCE_REGION: "Colombo",
                           PROJECT_ROLE: "Developer",
                           ONSITE: "Yes",
                           PROJECT: "PLM",
                           CONFIRMATION_LEVEL: "UP",
                           RESOURCING_TEAM: "ASHF-0093",
                           SKILL: "6",
                           DESIGNATION: "SE2",
                           percentComplete: 0.5,
                           start: new Date("2017/2/17 9:00"),
                           end: new Date("2017/2/27 9:00"),
                           orderId: 3,
                           title: "Task2"
                       },
                        {
                            id: 3,
                            EMP_No: "#3",
                            NAME: "Allison Jordan ",
                            RESOURCE_REGION: "UK",
                            PROJECT_ROLE: "Developer",
                            ONSITE: "Yes",
                            PROJECT: "GPT",
                            CONFIRMATION_LEVEL: "N/A",
                            RESOURCING_TEAM: "ASHF-93292",
                            SKILL: "3",
                            DESIGNATION: "Team Lead",
                            percentComplete: 0.5,
                            start: new Date("2017/3/17 9:00"),
                            end: new Date("2017/4/17 9:00"),
                            orderId: 4,
                            title: "Task1"
                        },
                       {
                           id: 4,
                           EMP_No: "#4",
                           NAME: "Kylie Jenner ",
                           RESOURCE_REGION: "UK",
                           PROJECT_ROLE: "Developer",
                           ONSITE: "Yes",
                           PROJECT: "GPT",
                           CONFIRMATION_LEVEL: "N/A",
                           RESOURCING_TEAM: "ASHF-93292",
                           SKILL: "3",
                           DESIGNATION: "Team Lead",
                           percentComplete: 0.5,
                           start: new Date("2017/2/17 9:00"),
                           end: new Date("2017/3/17 9:00"),
                           orderId: 5,
                           title: "Task1"
                       },
                       {
                           id: 5,
                           EMP_No: "#5",
                           NAME: "Karlie Kloss ",
                           RESOURCE_REGION: "UK",
                           PROJECT_ROLE: "Developer",
                           ONSITE: "Yes",
                           PROJECT: "GPT",
                           CONFIRMATION_LEVEL: "N/A",
                           RESOURCING_TEAM: "ASHF-93292",
                           SKILL: "3",
                           DESIGNATION: "Team Lead",
                           percentComplete: 0.5,
                           start: new Date("2017/4/17 9:00"),
                           end: new Date("2017/5/17 9:00"),
                           orderId: 6,
                           title: "Task1"
                       },
                       {
                           id: 6,
                           EMP_No: "#6",
                           NAME: "Anuradha ",
                           RESOURCE_REGION: "UK",
                           PROJECT_ROLE: "Developer",
                           ONSITE: "Yes",
                           PROJECT: "GPT",
                           CONFIRMATION_LEVEL: "N/A",
                           RESOURCING_TEAM: "ASHF-93292",
                           SKILL: "3",
                           DESIGNATION: "Team Lead",
                           percentComplete: 0.5,
                           start: new Date("2017/1/17 9:00"),
                           end: new Date("2017/3/17 9:00"),
                           orderId: 7,
                           title: "Task1"
                       }
               ],
                   dependencies = [
                       //{ "id": 1, "predecessorId": 1, "successorId": 2, "type": 1 },
                       //{ "id": 1, "predecessorId": 2, "successorId": 4, "type": 1 },
                       //{ "id": 1, "predecessorId": 3, "successorId": 5, "type": 1 },
                       //{ "id": 1, "predecessorId": 4, "successorId": 6, "type": 1 }
                   ];

               function onAdd(e) {
                   var max = 0;
                   max = _.max(array, function (stooge) { return stooge.ID; });
                   e.task.ID = max.ID + 1;
                   e.task.ParentID = null;
                   e.task.EMP_No = max.ID + 1;
                   e.task.NAME = "N/A";
                   e.task.RESOURCE_REGION = "SRI LANKA";
                   e.task.PROJECT_ROLE = "";
                   e.task.ONSITE = "Yes";
                   e.task.PROJECT = "PLM";
                   e.task.CONFIRMATION_LEVEL = "N/A";
                   e.task.RESOURCING_TEAM = "ASHF-93292";
                   e.task.SKILL = "";
                   e.task.DESIGNATION = "";
                   e.task.Summary = true;
                   e.task.PercentComplete = 0;
                   e.task.Start = new Date();
                   e.task.End = new Date();
                   e.task.Expanded = true;
                   e.task.OrderID = max.ID + 1;
                   array.push(e.task);
                   console.log("Task added");
               }
               
               $("#gantt").kendoGantt({
                   dataSource: array,
                   dependencies: dependencies,
                   views: [
                       "week",
                       { type: "kendo.ui.GanttCustomView", title: "Quaterly", selected: true }
                   ],
                   columns: [
                                { field: "EMP_No", editable: true, title: "Emp No", width: 50, type: "number" },
                                {
                                    field: "NAME",
                                    title: "Name",
                                    editable: true,
                                    width: 140,
                                    sortable: true,
                                    type: "string"
                                },
                                {
                                    field: "RESOURCE_REGION",
                                    title: "Resource Region",
                                    editable: true,
                                    width: 130,
                                    sortable: true,
                                    type: "string"
                                },
                                {
                                    field: "PROJECT_ROLE",
                                    title: "Project Role",
                                    editable: true,
                                    width: 90,
                                    sortable: true,
                                    type: "string"
                                },
                                {
                                    field: "ONSITE",
                                    title: "OnSite",
                                    editable: true,
                                    width: 60,
                                    sortable: true,
                                    type: "string"
                                },
                                {
                                    field: "PROJECT",
                                    title: "Project",
                                    editable: true,
                                    width: 100,
                                    sortable: true,
                                    type: "string"
                                },
                                {
                                    field: "CONFIRMATION_LEVEL",
                                    title: "Confirmation Level",
                                    editable: true,
                                    sortable: true,
                                    width: 100
                                },
                                {
                                    field: "RESOURCING_TEAM",
                                    title: "Resourcing Team",
                                    editable: true,
                                    sortable: true,
                                    width: 100
                                },
                                {
                                    field: "SKILL",
                                    title: "Skill",
                                    editable: true,
                                    width: 60,
                                    sortable: true,
                                    type: "string"
                                },
                                {
                                    field: "DESIGNATION",
                                    title: "Designation",
                                    editable: true,
                                    sortable: true,
                                    width: 100
                                }
                   ],
                   height: 800,
                   showWorkHours: true,
                   showWorkDays: true,
                   resizable: true,
                   navigatable: true,
                   add: onAdd,
                   pageable: true
               }
               );
           });


$(document).bind("kendo:skinChange", function () {
    var gantt = $("div [kendo-gantt]").data("kendoGantt");

    if (gantt) {
        gantt.refresh();
    }
});
