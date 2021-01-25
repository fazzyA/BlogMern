import React, { useState }from 'react'
import MaterialTable from 'material-table'

function Editable({users}) {
    console.log(users)
  
    const [columns, setColumns] = useState([
      { title: 'Name', field: 'name' },
      { title: 'UserName', field: 'usrname', initialEditValue: '' },
      { title: 'Email', field: 'email' },
      { title: 'Phone#', field: 'phno'},
    ]);
  
    const [data, setData] = useState(users);
    //   const [data, setData] = useState([
    //     { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
    //     { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
    //   ]);
    console.log(users)  
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
          onRowDelete: oldData =>
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