/**
 * File: tasklist.js
 * Name: Curtis Frifeldt
 * Date: Feb 26, 2017
 */
Tasks = new Mongo.Collection('tasks');

if (Meteor.isClient) {
  Template.tasks.helpers({
    tasks: function() {
      return Tasks.find({}, {sort: {createdAt: -1}});
    }
  });
}

if (Meteor.isServer) {

}