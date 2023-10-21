import {QueryClient} from '@tanstack/react-query';

export const client = new QueryClient();

export const getFeaturedData=async()=>{
    const response =await fetch('https://featured-work-default-rtdb.firebaseio.com/featured-data.json');
    if(!response.ok){
        throw new Error('Fetching Failed');
    }
    const data = await response.json();
    const newArray=[];
    for (const key in data){
        if(data.hasOwnProperty(key)){
            newArray.push({...data[key],id:Math.random().toString()});
        }
    }
    return newArray.reverse();
}


export const getBlogs=async()=>{
    const response =await fetch('https://featured-work-default-rtdb.firebaseio.com/blogs.json');
    if(!response.ok){
        throw new Error('Fetching Failed');
    }
    const data = await response.json();
    console.log(data);
    const newArray=[];
    for (const key in data){
        if(data.hasOwnProperty(key)){
            newArray.push({...data[key],id:Math.random().toString()});
        }
    }
    return newArray.reverse();
}

export const postContactDetails=async({data})=>{
    const response =await fetch('https://featured-work-default-rtdb.firebaseio.com/contact-details.json',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify(data),
      });
    if(!response.ok){
        throw new Error('Fetching Failed');
    }
    const newData = await response.json();
    return newData;
}