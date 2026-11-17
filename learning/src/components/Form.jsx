import "./Form.css"

function Form(){

return (
    <div>
        <h1>
            Form
        </h1>
        <div>
            <form action=""  className="formContainer">
 
                    <label htmlFor="firstName"> First Name </label>
                    <input type="text" name="firstName"/> 

                    <label htmlFor="lastName"> Last Name </label>
                    <input type="text" name="lastName"/> 


                    <label htmlFor="email"> Email </label> 
                    <input type="text" name="email"/> 

                    <button>Submit</button>
                                  
            </form>
            
            
        </div>
    </div>

)


}

export default Form