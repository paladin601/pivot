import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const Tasks = new Mongo.Collection('tasks');

if (Meteor.isServer) {
    Meteor.publish('tasks', function diagramPublication() {
      return Tasks.find();
    });
  }
  
  Meteor.methods({
    'tasks.insert'(text) {
      check(text, String);
  
     /*esto es para verificar si el usuario esta logeado con los tokens de meteor como esta app es aparte 
     me dio flojera ponerle un login para activar el token jaja en el proyecto real si funciona 
     if (!this.userId) {
        throw new Meteor.Error('not-authorized');
      }
  */
      Tasks.insert({
        text
      });
    },
    'tasks.remove'(tasksId) {
      check(tasksId, String);
  
      Tasks.remove(tasksId);
    }
  });
  