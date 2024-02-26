import React from 'react';
import PropTypes from 'prop-types';

 function Data(props) {
  return (

    
    <div className="mainPropPropTypes" style={{display:"flex",justifyContent:"center"}}>

    <div className="containerPropPropTypes" >
      <h1>{props.title} </h1>
     <h3> {props.about} </h3>

    </div>
    </div>
    
    
  )
}
export default Data;

// making this propTypes as string if we provide other than string we might get an error in the console of the browser
Data.propTypes = { title: PropTypes.string.isRequired,  // we can use ProTypes.string.isRequired to make that a particular prop is required mandatorily
                   about :PropTypes.string}



// if user dont provide any props then by default these props are taken 

Data.defaultProps = {title: "Provide your game title here",
                      about : "provide ur organization about section here"}


