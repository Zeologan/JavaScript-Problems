import PromptSync from "prompt-sync";
const prompt = PromptSync();

function toDoList() {
  let arr = [];
  let status = false;

  while (!status) {
    let todo = parseInt(
      prompt(`To Do App : 
      1 > Add New Task
      2 > View the List
      3 > Remove the Task
      4 > Exit
      => `)
    );
    switch (todo) {
      case 1: // Use strings for case comparison
        let task = prompt(`Add Your Task => `);
        arr.push(task);
        break;
      case 2:
        view(); 
        break;
      case 3:
        view();
        let index = parseInt(prompt(`Enter List Number Which you want to Remove => `));
        arr.splice(index - 1, 1);
        break;
      case 4:
        status = true;
        break;
      default:
        console.log("Invalid option, please try again.");
    }

    // view 
    function view(){
        arr.forEach((item,index) => console.log(`${index+1}. ${item}`));// Corrected the forEach syntax
    }
  }
}

toDoList();


