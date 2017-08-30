assignment_node_hello_world
===========================


Just Node.js saying hello to the world and such.



<h3>Maddie Rajavasireddy</h3>

<h3>Description:</h3>

<h4>Building the Logger</h4>

Create a logger module. Logger will need the following features:

A log method that takes 2 parameters  
The first parameter should be the message to log  
The second parameter should be a string specifying the logging level (INFO, WARNING, ERROR)  
An info method that only takes a single parameter for the message and outputs it at the info level
A warning method that only takes a single parameter for the message and outputs it at the warning level
An error method that only takes a single parameter for the message and outputs it at the error level  

Based on the logging level, colorize your output using chalk according to the following chart  
INFO: blue  
WARNING: yellow  
ERROR: red  

<h4>Logging from a JSON File</h4>

Now that the logger is built and ready to use, require the JSON file in the data/ folder so that one can output the messages. Each message has a "level" key so be sure to output the message using the correct level in the logger!

Require the JSON file  
Require lodash to make iterating over the JSON object easier  
Use the lodash _.each function to iterate over the JSON  
Output the message for each entry at the given logging level  
Verify that the JSON is output correctly and each message is colorized according to its logging level
