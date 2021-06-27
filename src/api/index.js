import axios from 'axios';

var token='0fd0a99557434ac6b501daae21aa5241';
const url = 'https://api.football-data.org/v2/competitions/2021/matches';

export const fetchData = async () =>{
    try{
        const {data:{matches}} = await axios.get(url,{
            headers:{
                'X-Auth-Token':token 
            }
        });
        return {matches};   
    }
    catch(error){
        
    }
}

