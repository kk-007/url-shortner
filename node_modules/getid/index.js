//Globals
var _chars = 'abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ';

//getID main function
function getID(opt)
{
  //Initialize the exists array
  var _exists = [];

  //Initialize the ID length
  var _length = 22;

  //Initialize the prefix
  var _prefix = '';

  //Initialize the suffix
  var _suffix = '';

  //Check the user options
  if(typeof opt !== 'undefined')
  {
    //Check the existen IDs
    if(typeof opt.exists !== 'undefined'){ _exists = opt.exists; }

    //Check the ID length
    if(typeof opt.length !== 'undefined'){ _length = parseInt(opt.length); }

    //Check the prefix option
    if(typeof opt.prefix !== 'undefined'){ _prefix = opt.prefix; }

    //Check the suffix option
    if(typeof opt.suffix !== 'undefined'){ _suffix = opt.suffix ; }
  }

  //Generated id
  var id = '';

  //Build the new ID
  do
  {
    //Get the time
    id = getTime();

    //Get a random number of insertions
    var ins = getRand(4, 10);

    //Check the length
    if(_length > 0)
    {
      //Check if the actual ID exceeds the length
      if(id.length > _length)
      {
        //Calculate the number of insertions in function the length
        ins = (_length > 4)? 2 : 1;

        //Get a new random integer
        var p = getRand(0, id.length - _length - 1);

        //Slice the actual ID
        id = id.slice(p, p + _length - ins);
      }
      else if(id.length + ins > _length)
      {
        //Change the number of insertions
        ins = _length - id.length;
      }
      else if(id.length + ins < _length)
      {
        //Change the number of insertions
        ins = _length - id.length;
      }
    }

    //Add the insertions
    for(var i = 0; i < ins; i++)
    {
      //Get a random character
      var ch = _chars[getRand(0, _chars.length - 1)];

      //Get the new position for insert
      var po = getRand(0, id.length - 1);

      //Insert
      id = id.slice(0, po) + ch + id.slice(po);
    }

    //Add the prefix and the suffix
    id = _prefix + id + _suffix;
  }
  while(_exists.indexOf(id) > -1);

  //Return the new ID
  return id;
}

//Get the time
function getTime()
{
  //Get the date
	var dat = Date.now().toString();

  //Return
  return dat;
}

//Get random integer
function getRand(min, max)
{
  //Generate a random number
  var r = Math.random()*(max - min);

  //Converts to integer
  r = Math.floor(r) + min;

  //Return the new integer
  return r;
}

//Exports to node
module.exports = getID;
