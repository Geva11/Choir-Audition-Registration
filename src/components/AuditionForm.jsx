import "./AuditionForm.css";
import React, { useState } from "react";

const AuditionForm = () => { // AuditionForm is the Function
    const [formData, setFormData] = useState ({ // formData is the Variable and setFormData is another Function
        name: "",
        age: "",
        email: "",
        gender: "",
        voicerange: ""
    });

const handleChange = (e) => {
    const{name, value} = e.target;
    setFormData({
        ...formData, // Copy the existing formData
        [name]: value,
    });
}

const handleSubmit = (e) => {
    e.preventDefault();

    if(!formData.voicerange) {
        alert("Please select possible voicerange before Submitting!");
    }

    console.log("Form Data Submitted: ", formData);

    setFormData({
        name: "",
        age: "",
        email: "",
        voicerange: ""
    });
};

return (
    <div className = "form-container">
        <div className="form-card">
            <h1> Audition Form for Choir </h1>
            <p> Fill out details below if you want to audition </p>
            <form onSubmit = {handleSubmit}>

                {/* Name Input Field */}
                <div className = "form-field">
                    <label htmlFor="name"> Name </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Age Input Field */}
                <div className="form-field">
                    <label htmlFor="age"> Age </label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        placeholder="Enter your age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Email Input Field */}
                <div className="form-field">
                    <label htmlFor="email"> Email </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Voicerange Input Field */}
                <div className="form=field">
                    <label htmlFor="voicerange"> Voice-range </label>
                    <select
                    id="voicerange"
                    name="voicerange"
                    value={formData.voicerange}
                    onChange={handleChange}
                    required
                    >
                        <option value = "">
                            Select your possible voicerange
                        </option>
                        <option value="Soprano">Soprano</option>
                        <option value="Alto">Alto</option>
                        <option value="Tenor">Tenor</option>
                        <option value="Bass">Bass</option>
                        <option value="Unsure">Unsure</option>
                    </select>
                </div>

                {/* Submit Button */}
                <button type="submit" className="Submit-btn">
                    Submit
                </button>
            </form>
        </div>
    </div>
);
};

export default AuditionForm;