import React from 'react'

const SetupField = () => {
    return (
        <div style={{border: '5px solid rgba(0, 0.05, 0.1, 0.01)'}}>
            <form>
          <h4 style={{marginLeft:'5rem', marginTop:'-1rem'}}>Setup Field</h4>
                <div className='row'>
                    <label className='widthlabel'>Field Name<span className="required">*</span></label>
                    <input type="text" name="name" className='widthname' />
                </div>
                <div>
                    <label className='widthlabel'>Type<span className="required">*</span></label>
                    <input type="text" name="name" className='widthfields' />
                </div>
                <div>
                    <label className='widthlabel'>Number<span className="required">*</span></label>
                    <input type="number" name="number" className='widthnumber' />
                </div>
                <div>
                    <label className='widthlabel'>Pos X<span className="required">*</span></label>
                    <input type="text" name="posx" className='fields' />
                </div>
                <div>
                    <label className='widthlabel'>Pos Y<span className="required">*</span></label>
                    <input type="text" name="posy" className='fields' />
                </div>
                <div>
                    <label className='widthlabel'>Size X<span className="required">*</span></label>
                    <input type="text" name="sizex" className='widthSize' />
                </div>
                <div>
                    <label className='widthlabel'>Size Y<span className="required">*</span></label>
                    <input type="text" name="sizey" className='widthSize' />
                </div>
                 <div className='widthbutton'>
                 <button className='button'type="update" value="update">Update</button>
                &nbsp;&nbsp;
                <button  className='button'type="add" value="Add" >Add</button>
                &nbsp;&nbsp;
                <button  className='button' type="delete" value="Delete"> Delete</button>
                </div> 
            </form>
        </div> 
    )
}
export default SetupField