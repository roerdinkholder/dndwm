jest.dontMock('../userService');

describe('userService', function () {
    it('can add a user', function () {
        var userService = require('../userService'),
            properties = {
                name: 'Test User'
            };

        expect(userService([], {
            type: 'ADD_USER',
            properties: properties
        })).toEqual([
            Object.assign({}, properties, { id: 0 })
        ]);
    });
});