import React from 'react'
import Webix from './Webix';


function die(select) {
    return {
     
      view: "datatable", width: 1130, height: 130,select: true, columns: [
        { id: "Position Index", fillspace: 15 },
        { id: "Plate Index", fillspace: 9 },
        { id: "Wafer Position", fillspace: 10 },
        { id: "Cell", fillspace: 10 },
        { id: "X", fillspace: 10 },
        { id: "Y", fillspace: 10 },
        { id: "LLCX", fillspace: 10 },
        { id: "LLCY", fillspace: 10 },
        { id: "Size X", fillspace: 10 },
        { id: "Size Y", fillspace: 10 },
  
      ],
      scrollY: true,
      scrollX: false,
      on: {
        onAfterSelect: function (id) {
          select(id);
        }
      }
  
    };
  }
  
  const DieTableView = ({ data, select }) => (
    <Webix ui={die(select)} />
      
  )
export default DieTableView