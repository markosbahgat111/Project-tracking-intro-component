import React from 'react';
import draw from '../../assets/images/illustration-devices.svg';


const Illustration = () =>
{
    
    return (
        <div className=' absolute right-0 top-0 desktop:w-1/2 w-full max-h-fit h-full overflow-hidden z-0' >
            <div className=' absolute bg-[#eef3f6] desktop:w-full w-1/2 desktop:h-1/2 h-[50vh] z-0 right-0 top-0 desktop:rounded-bl-[100px] rounded-bl-[50px]'></div>
            <img src={draw} alt="alt" className=' absolute top-[25vh] right-[-15vw] desktop:right-[-100px] desktop:top-[250px] w-full scale-110'/>
        </div>
     );
}
 
export default Illustration;
