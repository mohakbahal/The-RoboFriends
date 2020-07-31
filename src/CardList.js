// import React from 'react';
// import Card from './Card';
// import { robots } from './robots'; 

// const CardList=()=>{
//     const cardComponent = robots.map((e,index)=>{
//         return (
//         <Card 
//             key={index} 
//             id={robots[index].id} 
//             name={robots[index].name} 
//             email={robots[index].email}
//             />
//         );
        
//     })
//     return(
//         <div className="tc">
//             {cardComponent};
//         </div>
//     );
// }
// export default CardList;



import React from 'react';
import Card from './Card';
// import { robots } from './robots'; 

const CardList=({robots})=>{
    return(
        <div className="tc">
            {
                robots.map((e,index)=>{
                    return (
                    <Card 
                        key={index} 
                        id={robots[index].id} 
                        name={robots[index].name} 
                        email={robots[index].email}
                        />
                    );
                    
                })
            };
        </div>
    );
}
export default CardList;