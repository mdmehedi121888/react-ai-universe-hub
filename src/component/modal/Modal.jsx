import React from 'react';

const Modal = (props) => {
    // console.log(props.modal.data.image_link[0]);
    // const {description} = props.modal.data;
    // const image = props?.modal?.data?.image_link[0];
    // console.log(description);
    const discription = props?.modal?.data?.description;
    const image = props?.modal?.data?.image_link;
    return (
        <div>
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal">
  <div  className="modal-box ">
   <div className='flex'>
   <div>
        <p className='text-xl'>{discription?discription:""}</p>
    </div>
    <div>
    <img src={image?props.modal.data.image_link[0]:""}></img>
    </div>
   </div>
    <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn">Close!</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default Modal;