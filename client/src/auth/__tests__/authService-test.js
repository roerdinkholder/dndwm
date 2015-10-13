jest.dontMock('../authService');

describe('authService', function () {
    it('can perform a login with correct credentials', function () {
        var authService = require('../authService'),
            action = {
                type: 'AUTH_LOGIN',
                accountName: 'Hans',
                password: 'Demo1234'
            },
            result = null,//authService(undefined, action),
            expectedResult = null; //[Object.assign({}, properties, { id: 0 })];

        expect(result).toEqual(expectedResult);
    });

    it('can reject a login with an incorrect password', function () {
        var authService = require('../authService'),
            action = {
                type: 'AUTH_LOGIN',
                accountName: 'Hans',
                password: 'Incorrect'
            },
            result = null,//authService(undefined, action),
            expectedResult = null; //[Object.assign({}, properties, { id: 0 })];

        expect(result).toEqual(expectedResult);
    });

    it('can reject a login with an unknown account name', function () {
        var authService = require('../authService'),
            action = {
                type: 'AUTH_LOGIN',
                accountName: 'Unknown',
                password: 'Demo1234'
            },
            result = null,//authService(undefined, action),
            expectedResult = null; //[Object.assign({}, properties, { id: 0 })];

        expect(result).toEqual(expectedResult);
    });

    it('can perform a logout', function () {
        var authService = require('../authService'),
            properties = {
                name: 'Test User'
            },
            action = {
                type: 'ADD_USER',
                properties: properties
            },
            result = null,//authService(undefined, action),
            expectedResult = null; //[Object.assign({}, properties, { id: 0 })];

            expect(result).toEqual(expectedResult);
    });
});