import React from 'react'
import TableView from './TableView'
import FieldTableView from './FieldTableView'
import DieTableView from './DieTableView'
import SetupField from './SetupFieldView'
const Template = () => {
 
    return (
        <div>
            <div className='bottom-line' >
                <h4 style={{ margin: "0.5rem 0 0.5rem 0" }}>Setup Die</h4>
            </div>
            <h5 style={{ margin: "0.5rem 1.5rem 0 0 " }}>Product</h5>
            <div className="productTable">
                <TableView />
            <div className='setupField'>
                <SetupField/>
            </div>
            </div>
            <div>
            <h5 style={{margin: "18rem 1.5rem 0 0 " }}>Field</h5>
            <div className="fieldTable">
                <FieldTableView />
            </div>
            </div>
            <h5 style={{ margin: "1rem 1.5rem 0 0 " }}>Die</h5>
            <h5 style={{ margin: "-0.45rem 0rem 6rem 5rem " }}>Total Position Index</h5>
            <div className='buttons'>
            <button className='minusplus'>+</button>
            <input type='number' className='plusminus'></input>
           <button className='minusplus' >-</button>
           &nbsp;&nbsp;
            <button  className='button'value="Set" >Set</button>
            &nbsp;&nbsp;
            <button className='button'value="Save dies">Save Dies</button>
            &nbsp;&nbsp;
            <button className='button' value="cancel" >Cancel</button>
            </div>
            <div className="dieTable">
                <DieTableView />
            </div>
        </div>
    )
}

export default Template;