var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {

        var from = 'andreas';
        var text = 'Some message';

        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, text });
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location message object', () => {

        var from = 'andreas';
        var lat = 9;
        var long = 47;

        var message = generateLocationMessage(from, lat, long);

        expect(message.createdAt).toBeA('number');
        expect(message.from).toBe(from);
        expect(message.url).toBe(`https://www.google.com/maps?q=${lat},${long}`,)
    });
});