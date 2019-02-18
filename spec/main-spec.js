const main = require('../main/main');
const assert = require('assert').strict;

describe('taxi fee', function () {
    it('should return 6 when miles is 2 and no waiting time', function () {
        assert.deepEqual(main(2), 6);
    });

    it('should return 6 when miles is 2 and waiting time is 4', function () {
        assert.deepEqual(main(2, 4), 7);
    });

    it('should return 8 when miles is 5 and no waiting time', function () {
        assert.deepEqual(main(5), 8);
    });

    it('should return 5 when miles is 5 and waiting time is 4', function () {
        assert.deepEqual(main(5, 4), 9);
    });

    it('should return 5 when miles is 5 and waiting time is 3', function () {
        assert.deepEqual(main(5, 5), 10);
    });

    it('should return 13 when miles is 10 and no waiting time', function () {
        assert.deepEqual(main(10), 13);
    });

    it('should return 13 when miles is 10 and waiting time is 10', function () {
        assert.deepEqual(main(10, 10), 16);
    });
});
