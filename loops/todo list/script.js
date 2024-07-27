let input = prompt("what you like to do")
const todos =['start game']
while (input !== 'quit'&& input !=='q' ) {
    if(input=='list'){
        console.log('**************');
        for(let i=0;i < todos.length; i++){
            console.log(`${i} : ${todos[i]}`);
        }
        console.log('**************');
    }
    else if(input=='new'){
        const newtodo = prompt("what is new todo")
        todos.push(newtodo)
        console.log(`${newtodo} added to the list`);
    }else if(input==='del'){
        const index=parseInt(prompt("what is index you want to delete"))
        if(!Number.isNaN(index)){
        // const index = parseInt(index);
        const deleted =todos.splice(index,1);
        console.log(`ok deleted ${deleted}`);
    }else{
        console.log('unknown index');
    }
}

    input = prompt("what you like to do")
}

console.log('quit the app');