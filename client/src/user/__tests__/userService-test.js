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
            result = userService(undefined, action),
            expectedResult = Object.assign({}, {
                nextUserId: 1,
                list: [
                    Object.assign({}, properties, { id: 0 })
                ]
            });

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
            intermediateResult = userService(undefined, action),
            result = userService(intermediateResult, action),
            expectedResult = Object.assign({}, {
                nextUserId: 2,
                list: [
                    Object.assign({}, properties, { id: 0 }),
                    Object.assign({}, properties, { id: 1 })
                ]
            });

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
            intermediateResult = userService(undefined, addAction),
            removeAction = {
                type: 'REMOVE_USER',
                userId: intermediateResult.list[0].id
            },
            result = userService(intermediateResult, removeAction),
            expectedResult = Object.assign({}, {
                nextUserId: 1,
                list: []
            });

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
            intermediateResult = userService(undefined, addAction),
            modifiedProperties = {
                id: intermediateResult.list[0].id,
                name: 'Modified User'
            },
            modifyAction = {
                type: 'MODIFY_USER',
                properties: modifiedProperties
            },
            result = userService(intermediateResult, modifyAction),
            expectedResult = Object.assign({}, {
                nextUserId: 1,
                list: [
                    Object.assign({}, modifiedProperties)
                ]
            });

        expect(result).toEqual(expectedResult);
    });
});