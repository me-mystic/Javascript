import React, { Components, PropTypes} from 'react';

export default function Contact({img, name, ph, mail}) {
    // const person = {
    //     Age:42,
    //     Name : "vjh",
    //     Ph : '487934325'
    // };
    // const {Name, Age, Ph} = person;
    // console.log(Name);
    // console.log(Age);
    // console.log(Ph);
    return (
        <card>
            <div className="contact-card">
                <img src={img} />
                <h3>{name}</h3>
                <div className="info-group">
                    <img src="./images/phone-icon.png" />
                    <p>{ph}</p>
                </div>
                <div className="info-group">
                    <img src="./images/mail-icon.png" />
                    <p>{mail}</p>
                </div>
            </div>
        </card>
    );
}