import React, { useState,useEffect }from 'react'
import MaterialTable from 'material-table'

function Editable({row,col}) {
    console.log(row)
  
    const [columns, setColumns] = useState(col);
  
    const [data, setData] = useState([]);
useEffect(() => {
  setData(row)
}, [row]);
    //   const [data, setData] = useState([
//     {
//       id: 1,
//       name:'faiza',
//       usrname: 'fazzyA',
//       email:'faz.pak@gmail.com',
//       phno:'3340242139'
//   },
//   {
//       id: 2,
//       name:'umair2',
//       usrname: 'umair90',
//       email:'umair@gmail.com',
//       phno:'3340242139'

//   }

// ]);
    console.log(data)  
    return (
      <MaterialTable
        title="Editable Preview"
        columns={columns}
        data={data}
        editable={{
          onRowAdd: newData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setData([...data, newData]);
                
                resolve();
              }, 1000)
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);
  
                resolve();
              }, 1000)
            }),
          onRowDelete: 
          oldData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setData([...dataDelete]);
                
                resolve()
              }, 1000)
            }),
        }}
      />
    )
  }
  export default Editable