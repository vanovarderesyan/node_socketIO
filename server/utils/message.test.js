var expect = require('expect');
var {generateMessage} = require('./message')
describe('generateMessage',()=>{
    it('should generate correcte message object',()=>{
       var from = 'Vano';
       var text = 'some message';
       var message = generateMessage(from,text);

       expect(message.createAt).toBeA('number');
       expect(message).toInclude({from,text});
    })
});