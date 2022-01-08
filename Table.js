import React from 'react'

export default function Table(props) {
   return (
      <table className={props.className ? props.className : 'table table-bordered table-striped display w-100'} id={props.id} >
         {props.thead &&
            <thead>
               <tr>
                  {props.thead.map((item, index) => (
                     <th key={index}>{item}</th>
                  ))}
               </tr>
            </thead>
         }

         <tbody>
            {props.tbody}

         </tbody>
         <tfoot>
            {props.tfoot ? props.tfoot : <tr>
               {props.thead.map((item, index) => (
                  <th key={index}>{item}</th>
               ))}
            </tr>}
         </tfoot>
      </table>
   )
}

