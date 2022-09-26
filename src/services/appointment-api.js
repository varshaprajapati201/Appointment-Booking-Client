import axios from "axios"; 

const URL="http://localhost:3000";

export const addAppointment= async (data)=>{
    try{
 return await axios.post(`${URL}/`,data);
    }catch (error){
        console.log("error while calling addAppointment Api",error);
    }
}
