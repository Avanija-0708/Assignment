import React from 'react'
import Webix from './Webix';

// const FieldTableView = () => {
//   return (

  
//   )
// }
function field(select) {
    return {
     
      view: "datatable", width: 800, height: 150,select: true, columns: [
        { id: "FieldName", fillspace: 15 },
        { id: "Type", fillspace: 9 },
        { id: "Number", fillspace: 10 },
        { id: "Pos X", fillspace: 10 },
        { id: "Pos Y", fillspace: 10 },
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
  
  const FieldTableView = ({ data, select }) => (
    <Webix ui={field(select)} />
      
  )
export default FieldTableView