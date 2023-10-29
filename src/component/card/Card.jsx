import React, { useEffect, useState } from 'react';
import SingleCard from '../singleCard/SingleCard';
import Modal from '../modal/Modal';
import Button from '../button/Button';
 

const Card = (props) => {
    const seeMore = props.seeMore;
    const [data,setData] = useState([]);
    const [uniqueId,setUniqueId] = useState(null);
    const [modal,setModal] = useState(null);

    useEffect(()=> {
        fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
        .then(res => res.json())
        .then(data => setModal(data));
    },[uniqueId])

    useEffect(()=>{
        fetch(`https://openapi.programming-hero.com/api/ai/tools`)
        .then(res => res.json())
        .then( data => setData(data.data?.tools));
    },[])

        const handleSortBtn = () =>{
            const sortedArray = data.sort((a,b)=>{
                return new Date(a.published_in) - new Date(b.published_in);
            });
            setData([...data,sortedArray]);
        }

    return (
       <div>
        <span onClick={handleSortBtn}>
        <Button>Sort By Date</Button>
        </span>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:mx-5'>
            {
                data.slice(0,seeMore?12:6).map(data  => <SingleCard data={data} key={data.id} setUniqueId={setUniqueId}></SingleCard>)
            }
        </div>
        <Modal modal={modal}></Modal>
       </div>
    );
};

export default Card;