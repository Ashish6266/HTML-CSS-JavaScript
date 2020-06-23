"use strict";

$(document).ready(function(){
    var tasks = [];

    var displayTaskList = function() {
        tasks.sort();

        $("#task_list").val( tasks.join("\n") );
        $("#task").focus();
    };

    $("#add_task").click(function() {
        var textbox = $("#task");
        var task = textbox.val();
        if (task === "") {
            alert("Please enter a task.");
            $("#task").focus();
        } else {
            // add new task to tasks array
            tasks.push( task );

            // clear task text box and re-display tasks
            textbox.val( "" );
            displayTaskList();
        }
    });

    $("#delete_task").click(function() {
        var person = prompt("Enter the index number of task you want to delete");
        var length = tasks.length - 1;
        var length = parseInt(length)
        var person = parseInt(person)
        if (person <= length && person >= 0){
          tasks.splice(person, 1);
          displayTaskList();
        }
        else if (person > length || person < 0){
        alert("Please enter a positive number equal to or less than the array length");
        }
        else {
          alert("Please enter a valid number with no characters");
        }
    });

    $("#clear_tasks").click(function() {
        tasks = [];
        $("#task_list").val( "" );
        $("#task").focus();
    });

    // set focus on initial load
    $("#task").focus();
});
