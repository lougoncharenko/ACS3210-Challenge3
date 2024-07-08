'use strict';

const { expect } = require('chai');
const checkPasswordStrength = require('./index');

describe('#checkPasswordStrength', function() {
    it('should return 0 for very weak passwords', function() {
        const result = checkPasswordStrength('abc');
        expect(result).to.equal(0);
    });

    it('should return 1 for passwords with only length criteria met', function() {
        const result = checkPasswordStrength('abcdefgh');
        expect(result).to.equal(1);
    });

    it('should return 2 for passwords with length and number criteria met', function() {
        const result = checkPasswordStrength('abcd1234');
        expect(result).to.equal(2);
    });

    it('should return 3 for passwords with length, numbers, and special characters criteria met', function() {
        const result = checkPasswordStrength('abcd1234!');
        expect(result).to.equal(3);
    });

    it('should return 4 for very strong passwords', function() {
        const result = checkPasswordStrength('Abcd1234!');
        expect(result).to.equal(4);
    });

    it('should return 0 for passwords shorter than 8 characters', function() {
        const result = checkPasswordStrength('aB1!');
        expect(result).to.equal(0);
    });

    it('should return 1 for passwords with exactly 8 characters but no other criteria', function() {
        const result = checkPasswordStrength('abcdefgh');
        expect(result).to.equal(1);
    });

    it('should return 2 for passwords with letters and numbers only', function() {
        const result = checkPasswordStrength('abcd5678');
        expect(result).to.equal(2);
    });

    it('should return 3 for passwords with letters, numbers, and special characters', function() {
        const result = checkPasswordStrength('abcd5678@');
        expect(result).to.equal(3);
    });

    it('should return 4 for strong passwords with uppercase, lowercase, numbers, and special characters', function() {
        const result = checkPasswordStrength('A1b2C3d!');
        expect(result).to.equal(4);
    });
});
