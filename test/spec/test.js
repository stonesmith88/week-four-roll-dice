/* global describe, it */

(function () {
    'use strict';

    describe('Give it some context', function () {
        describe('maybe a bit more context here', function () {
            it('should be the expected value', function () {
              var answer = 2;
              expect(2).to.equal(answer);
              expect(answer).to.be.a("number");
            });

            it('should be a number', function () {
              var answer = 2;
              expect(2).to.equal(answer);
              expect(answer).to.be.a("number");
            });

        });
    });
})();

(function () {
    'use strict';

    describe('square function', function () {
    	it('should multiply its argument by itself', function(){
    		var answer = square(2);
    		expect(answer).to.equal(4);
    	});

    	it('should throw errors for non Number types', function(){
    		
    		var erroneousSquare = function(){
    			square('2');
    		}
    		
    		expect(erroneousSquare).to.throw(Error);
    	});

    	it('should throw an error when no args are provided', function(){
    		expect(square).to.throw(Error);
    	});
    });
})();
































