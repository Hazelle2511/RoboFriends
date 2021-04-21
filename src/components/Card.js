import React from 'react';

//First and second version
// const Card = (props) => {
    const Card = ({name, email, id}) => {
    // Second version
    // const {name, email, id} = props;
    return(
        
        <div className='bg-light-green dib br3 pa3 ma2 grow bw3 shadow-5'>
            {/* <img alt="robots" src= "https://robohash.org/test?200x200" /> */}
            {/* First version */}
               {/* <img alt="robots" src= {`https://robohash.org/${props.id}?200x200`} /> */}
               
               {/* Second version */}
               <img alt="robots" src= {`https://robohash.org/${id}?200x200`} />
            <div>
                {/* First version
                <h1>{props.name}</h1>
                <p>{props.email}</p> */}

               {/* Second Version  */}
                  <h2>{name}</h2>
                <p>{email}</p>


            </div>
        </div>
    )
}

export default Card;