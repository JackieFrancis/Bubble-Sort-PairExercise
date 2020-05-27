describe('Swap spy', function() {
    beforeAll(function () {
        // window.swap = function() {}
        spyOn(window, 'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
    });
      it('calls swap function is input array length is greater than one', function () {
        bubbleSort()
        expect(window.swap.calls.count()).toBeGreaterThan(0);
    });
})

describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
    it('handles array with one element', function() {
        expect( bubbleSort([6]) ).toEqual( [6] )
    });
    it('handles array with multiple element', function() {
        expect( bubbleSort([8, 1, 3]) ).toEqual( [1, 3, 8] ),
        expect( bubbleSort([100, 8, 10, 11, 2, 54, 20, 62, 80]) ).toEqual( [2, 8, 10, 11, 20, 54, 62, 80, 100] )
    });
  });

  describe('swap', function() {
    it('swap function is defined', function() {
        expect(swap).toBeDefined()
    })
  });

//   beforeAll(function() {
//     spyOn(swap).and.callThrough();
// })