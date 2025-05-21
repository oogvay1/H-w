import './Modal.css'

function Modal({ form, ne, add }) {
console.log(form.lastname)
    return (
        <section className="section">
            <div className="container">
                <div className="Modal">
                    <label>
                        <h1>Name</h1>
                        <input name="name" type="text" value={ne.name} placeholder="Name" onChange={form} />
                    </label>
                    <label>
                        <h1>Lastname</h1>
                        <input name="lastname" type="text" value={ne.lastname} placeholder="Lastname" onChange={form} />
                    </label>
                    <label>
                        <h1>Age</h1>
                        <input name="age" type="text" value={ne.age} placeholder="Age" onChange={form} />
                    </label>
                    <label>
                        <div className="gender">
                            <h1>Gender</h1>
                        </div>

                        <div className="gender-flex">
                            <div className="male">
                                <h1>Male</h1>
                                <input className='radio' type="radio" value="male" name="gender" checked={form.gender == "male"} onChange={form} />
                            </div>
                            <div className="female">
                                <h1>Female</h1>
                                <input className='radio' type="radio" value="female" name="gender" checked={form.gender == "female"} onChange={form} />
                            </div>
                        </div>
                    </label>
                    <button onClick={() => {add();}} className='btn'>Add</button>
                </div>
            </div>
        </section>
    );
}

export default Modal;