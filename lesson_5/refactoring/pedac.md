## init methods 
- setDate() -> sets the date in the heading at the top of the page 
- cacheTmeplate() -> removes the script element and then adds its html as 
a property 'template' of the object
- bindEvents() -> adds evnet listeners for the add button on the main form
- event listener for delete button on the inventory items that are added
- event listener for blur (when an input button gets in focus) for the inventory 
input buttons that update the elements 
- inventory object also has two properties lastId that is set to 0 and 
collection that is set to an empty collection 


## add method (gets called with the event listener for the add button)
- increments the lastId property 
- adds a object for the item with empty string for the name, stock number, quanitty
set to 1 and id set to the value of lastId
- pushes the item to this.collection 
- returns the item 

## delete method (gets called with the event listener for the delete button) 
- calls findParent function which finds the closest <tr> element of the event target and removes it 
- 