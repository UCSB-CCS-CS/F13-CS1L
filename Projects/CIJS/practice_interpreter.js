// practice Interpreter in JS

// ----- lexer -----
// input string
//   'sum = (4 + 3)'
// return tokens
//  [
//    {type: 'identifier', value: 'sum'},
//    {type: 'operator', value: '='},
//    {type: 'operator', value: '('},
//    {type: 'digit', value: '4'},
//    {type: 'operator', value: '+'},
//    {type: 'digit', value: '3'},
//    {type: 'operator', value: ')'},
//  ]

var Lexer = function (input) {


  this.lex = function(input) {
    tokens = [];
    var i = 0, c = input[i];

    advance = function() {
      return c = input[++i];
    };

    while (i < input.length) {
      if (isOperator(c)) {
        addToken('operator', c);
      }
      else if (isDigit(c)) {
        digit = c;
        while ( isDigit(advance()) )
          digit += c;
        if (c == '.')
          do digit += c; while ( isDigit(advance()) );
        addToken('digit', digit);
      }
      else if (isIdentifier(c)) {
        var identifier = c;
        while ( isIdentifier(advance()) )
          identifier += c;
        addToken('identifier', identifier);
      }
      else if (isWhitespace(c)) {
        // advance();
        // continue;
      }
      else {
        addToken('test', c);
      }
      advance();
    }
    return tokens;
  };


  addToken = function(type, value) {
    tokens.push({type: type, value: value});
  };

  isOperator = function(c) {
    return (/[+\-*\/\^%=(),]/).test(c);
  };

  isDigit = function(c) {
    return (/[-0-9]/).test(c);
  };

  isWhitespace = function(c) {
    return (/\s/).test(c);
  };

  // look for strings
  isIdentifier = function(c) {
    return !isOperator(c) && !isDigit(c) && !isWhitespace(c);
  };

  this.test = function () {
    console.log(this.c);
    // advance();
    i++;
    console.log(this.c);
  };

};





//  ---------------- TESTS -----------------
//  run with node
var _u = require('underscore/');
var test_num = 0;

function assert(a, b) {
  test_num++;
  if ( _u.isEqual(a, b) ) {
    console.log('pass!');
  } else {
    console.log('\n -----------------------------');
    console.log('test '+ test_num +' failed! \n');
    console.log('expected: \n' + JSON.stringify(b) + "\n");
    console.log('got: \n' + JSON.stringify(a));
  }
}

// write tests below:
lexer = new Lexer();

tokens1 = lexer.lex('sum = (4 + 3)');
response1 = [
   {type: 'identifier', value: 'sum'},
   {type: 'operator', value: '='},
   {type: 'operator', value: '('},
   {type: 'digit', value: '4'},
   {type: 'operator', value: '+'},
   {type: 'digit', value: '3'},
   {type: 'operator', value: ')'},
 ];

assert(tokens1, response1);

tokens2 = lexer.lex('pi = 3.1415');
response2 = [
  {type: 'identifier', value: 'pi'},
  {type: 'operator', value: '='},
  {type: 'digit', value: '3.1415'}
];

assert(tokens2, response2);

tokens3 = lexer.lex('123');
response3 = [{type: 'digit', value: '123'}];

assert(tokens3, response3);
