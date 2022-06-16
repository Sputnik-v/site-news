import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import './feedback.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';



const Feedback = () => {

    const [data, setData] = useState('');
    const [onTab, setOnTab] = useState('false');

    const formik = useFormik({
        initialValues: {
            name: '',
            email: ''
        },
        onSubmit: values => {
           console.log(JSON.stringify(values, null, 2));
           setOnTab(true);
           setData(values);
        }
    })

    if (data) {
        const userData = JSON.stringify(data);
        return (
            <div className="main__cont">
                <Header/>
                <div className="container">
                    <h3 className='main__post'>{`Ваши данные отправлены к нам на сервер`}</h3>
                    <h4 className='main__post-data'>{userData}</h4>
                </div>
                <Link to="/" className="about__link-home">/home</Link>
                <Footer/>
            </div>
        )
    }

    return (
        <div className="main__cont">
            <Header/>
            
            <div className="form">
                <div className="container">
                    <form action="#" className="form__data" onSubmit={formik.handleSubmit}>
                        <h2 className="form__title">To receive news, write your details</h2>
                        <label className="form__label" htmlFor="name">Your name</label>
                        <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            value={formik.values.name}
                            onChange={formik.handleChange}
                        />
                        <label className="form__label" htmlFor="email">Your email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                        <button 
                            type="submit" 
                            id="submit">Send
                        </button>
                        
                    </form>
                    <Link to="/" className="about__link-home">/home</Link>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Feedback;