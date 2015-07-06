import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        return this.store.find('todo');

      //return this.store.filter('todo',function(t){
      //  console.log("here");
      //  var arr = [31,32,27];
      //  //debugger;
      //  return arr.indexOf(parseInt(t.id)) > -1 ? true : false;
      //
      //});
    },
    actions: {
        createTodo: function(newTitle) {
            // Create the new Todo model
            var todo = this.store.createRecord('todo', {
                title: newTitle,
                isCompleted: false
            });

            // Clear the "New Todo" text field
          //  this.controllerFor('todos').set('newTitle', '');

            // Save the new model

           // todo.save();
        },
      acceptChanges: function(todo) {
        if (Ember.isEmpty(todo.get('title'))) {
          this.send('deleteTodo', todo);
        } else {

          todo.save();
        }
      },
      deleteTodo: function(todo) {
        todo.deleteRecord();
        todo.save();
      }

    }

});
