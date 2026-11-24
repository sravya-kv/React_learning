import "./display_form.css";

function display_form() {
  return (
    <div>
      <h1>Display</h1>
      <div className='main'>
        <form className="container">
        <label htmlFor="Display" className='label'>Display</label>
        <input type="text" className='text'  />
        {/* // <input type ="text" className='text'/> */}
    <div className="bottombBox">
        <input type="text" className="text"/>
        <input type="text" className="text" />
    </div>
    </form>
    </div>
    </div>
  )
}

export default display_form

