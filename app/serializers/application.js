import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  //normalizePayload: function(payload) {
  //  debugger;
  //  var todos = payload.todos;
  //  console.log(todos);
  //  todos.forEach((todo)=>{
  //    delete todo.testcol;
  //  });
  //
  //  return payload;
  //},
  normalizeHash: {
    todos: function(hash) {
        delete hash.testcol;
        //debugger;
    }
  }
});
