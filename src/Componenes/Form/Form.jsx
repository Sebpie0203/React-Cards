import React from "react";
import './Form.css'

const Form = ({ submitFn }) => {
	return (
		<div className="form__wrapper">
			<h2>Add new X account</h2>

			<form className="form__form" onSubmit={submitFn}>
                <div className="form__item">
                    <input 
                        name="name" 
                        placeholder="Name"
                        required
                        id="name"
                        type="text"
                        maxLength='30' />    
                     <label htmlFor="name"></label>   
                     <div className="forms__item__bar"></div>
                </div>


                <div className="form__item">
                    <input 
                        name="image" 
                        placeholder="image"
                        required
                        id="image"
                        type="text" 
                        />
                    <label htmlFor="image"></label>
                    <div className="forms__item__bar"></div>
                </div>
				<div className="form__item">
                    <input 
                        name="link" 
                        placeholder="Link"
                        required
                        id="link"
                        type="text" 
                        />    
                    <label htmlFor="link"></label>
                    <div className="forms__item__bar"></div>
                </div>

               

                <div className="form__item">
                    <textarea 
                        name="text" 
                        placeholder="Your discription"
                        required
                        id="text"
                        ></textarea>
                        <label htmlFor="text"></label>
                        <div className="forms__item__bar"></div>
                </div>

                <div className="form__btn">
                    <button 
                        type="submit"
                        id="submit"
                        >add your profile</button>
                </div>
				
				
				
				
			</form>
		</div>
	);
};

export default Form;
