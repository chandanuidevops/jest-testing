import checkPropTypes from 'check-prop-types';
import Headline from ".";

describe('Headline component',()=>{
    describe('check proptype',()=>{
        test('should not throw a warning',()=>{
            const expectedProps = {
                header:'Test header',
                desc:'test description',
                tempArr:[
                    {
                        fname: 'joe',
                        lname: 'Bloggs',
                        email: 'joe@gmail.com',
                        age: 24,
                        onlineStatus: true
                    }
                ]
            }
            const propsErr = checkPropTypes(Headline.propTypes,expectedProps,'props',Headline.name);
            expect(propsErr).toBeUndefined()
        })
    })
  
})