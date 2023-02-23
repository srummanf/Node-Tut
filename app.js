console.log('Helllo world');

var methods ={} // you can make array of functions like this in JS
var output = 0; // A variable for returning a value

methods.updateServer = function()
{
    console.log('updateServer Helo to Hi');
}

methods.area = function(a,b){
    output=a*b;
    return output;
}

//To send the data to the other file
exports.dataaa = methods; //This data is a list
exports.output= output;