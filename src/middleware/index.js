export default store => next => action => {
    if(action.type === 'ADD_TASK') {
        action.payload.task.id = makeID();
        action.payload.task.isOpen = true;
        const creationDate = new Date();
        action.payload.task.creationDate = creationDate.getFullYear() + '-' + ('0' + (creationDate.getMonth() + 1)).slice(-2) + '-' + ('0' + creationDate.getDate()).slice(-2);
    }

    if(action.type === 'EDIT_TASK') {
      const creationDate = new Date();
      action.payload.task.creationDate = creationDate.getFullYear() + '-' + ('0' + (creationDate.getMonth() + 1)).slice(-2) + '-' + ('0' + creationDate.getDate()).slice(-2);
  }

    next(action);
}

function makeID() {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (let i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
  
    return text;
  }
