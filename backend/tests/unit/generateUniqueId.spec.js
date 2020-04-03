const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generated Unique ID', () => {
    it('should generate an unique ID', () => {
        const id = generateUniqueId();
       
        expect(id).toHaveLength(8);

        // expect(1+1).toBe(5);
    });
});

