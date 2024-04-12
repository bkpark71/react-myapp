//import PropTypes from 'prop-types';
import {useEffect} from 'react';

function Image(){
  function destroyFnc() {
    console.log("이미지가 소멸됨");
  }
  function createFnc() {
    console.log("이미지가 생성됨");
    return destroyFnc;
  }

  useEffect(createFnc, []);


    return (
       <img src="logo.png" alt="logo"></img>
    )
}

// Image.propTypes = {
//     text : PropTypes.string.isRequired
// }
export default Image;