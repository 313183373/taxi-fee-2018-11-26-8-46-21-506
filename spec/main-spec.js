const main = require('../main/main');
const assert = require('assert').strict;

describe('taxi fee', function () {
    it('should return 4 when miles is 5 and no waiting time', function () {
        assert.deepEqual(main(5), 4);
    });

    it('should return 5 when miles is 5 and wating time is 4', function () {
        assert.deepEqual(main(5, 4), 5);
    });
});
