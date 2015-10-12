jest.dontMock('../userService');

describe('userService', function () {
    it('can add a user', function () {
        var userService = require('../userService'),
            properties = {
                name: 'Test User'
            },
            action = {
                type: 'ADD_USER',
                properties: properties
            },
            result = userService([], action),
            expectedResult = [Object.assign({}, properties, { id: 0 })];

        expect(result).toEqual(expectedResult);
    });

    it('assigns each user a unique id', function () {
        var userService = require('../userService'),
            properties = {
                name: 'Test User'
            },
            action = {
                type: 'ADD_USER',
                properties: properties
            },
            intermediateResult = userService([], action),
            result = userService(intermediateResult, action),
            expectedResult = [Object.assign({}, properties, { id: 0 }), Object.assign({}, properties, { id: 1 })];

        expect(result).toEqual(expectedResult);
    });

    it('can remove a user by id', function () {
        var userService = require('../userService'),
            properties = {
                name: 'Test User'
            },
            addAction = {
                type: 'ADD_USER',
                properties: properties
            },
            intermediateResult = userService([], addAction),
            removeAction = {
                type: 'REMOVE_USER',
                userId: intermediateResult[0].id
            },
            result = userService(intermediateResult, removeAction),
            expectedResult = [];

        expect(result).toEqual(expectedResult);
    });

    it('can modify a user', function () {
        var userService = require('../userService'),
            initialProperties = {
                name: 'Test User'
            },
            addAction = {
                type: 'ADD_USER',
                properties: initialProperties
            },
            intermediateResult = userService([], addAction),
            modifiedProperties = {
                id: intermediateResult[0].id,
                name: 'Modified User'
            },
            modifyAction = {
                type: 'MODIFY_USER',
                properties: modifiedProperties
            },
            result = userService(intermediateResult, modifyAction),
            expectedResult = [Object.assign({}, modifiedProperties)];

        expect(result).toEqual(expectedResult);
    });
});