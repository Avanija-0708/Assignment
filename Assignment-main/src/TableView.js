// example of custom component with Webix UI inside
// this one is a static view, not linked to the React data store

import React from 'react';
import Webix from './Webix';


function product(select) {
  return {
   
    view: "datatable", width: 800, height: 200,select: true, columns: [
      { id: "ID", fillspace: 1 },
      { id: "Product", fillspace: 10 },

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

const TableView = ({ data, select }) => (
  <Webix ui={product(select)} data={[{ ID: 711, Product: "200mm Bare Si" },
  { ID: 285, Product: "200mm Glass_TCO deposit" },
  { ID: 10, Product: "401AZ" },
  { ID: 6, Product: "800AZ TEOS" }]} />
    
)

export default TableView;
