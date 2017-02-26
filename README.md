# meteor-50-compile-error
Assignment: Meteor 50 minutes

Current state of Master branch:
Just prior to importing accounts-ui and accounts-password.

Current state Compiler Error branch:
Same as master with SKYBLUE background color.

Problem description:
The next step in <a href="https://www.youtube.com/watch?v=vSFH1T3SnBY&t=1695s">Meteor in 50 minutes</a>  is to import accounts-ui and accounts-password by typing "meteor add accounts-ui accounts-password" into the command prompt.  Doing this step creates a compiler error when trying to run the meteor app.  Tasklist.js is unchanged before/after this step and is the source of the compiler error.

Some guesses:  In tasklist.html in the current state, intellij is highlighting "name" in line 8, < template name="tasks" > and states a warning message.  The warning message says "Attribute name is not allowed here".  The app runs fine when ignoring the warning message, but if this warning doesn't show up on other systems then maybe my Intellij setup is flawed.
