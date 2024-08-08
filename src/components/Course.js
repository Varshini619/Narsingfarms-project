import pic1 from './1.jpg'
import pic2 from './2.jpg'
import pic3 from './3.jpg'
import pic4 from './4.jpg'
import pic5 from './5.jpg'

import './Course.css'
let Course=()=>{
    let data=[{"title":"Vegitables","ship":"Available order now","logo":pic1,},{"title":"Leaf Vegetables","ship":"Availble order now","logo":pic2},{"title":"Honey","ship":"Availble order now","logo":pic3},{"title":"Pulses","ship":"Availble order now","logo":pic4},{"title":"Seansonal Fruits","ship":"Availble order now","logo":pic5}]
    return(
        <div className='course'>
            
            <marquee behavior="scroll" direction="left" >
            Pure, fresh, and fast—Narsing Farms is your trusted partner in healthy living.

     </marquee>

            {
                data.map((item)=>{
                    return(
                        <div className='card'>
                            <div className='img'>
                            <img src={item.logo}/>
                            <h1>{item.title}</h1>
                            <button>{item.ship}</button>

                            </div>

                        </div>
                    )
                })
            }

        </div>
    )
}
export default Course