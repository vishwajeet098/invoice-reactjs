 export default function Dates( {invoiceNumber,invoiceDate, dueDate}) {
     return (
         <>
             {/*Dates */}
 <article className="my-5 flex items-end justify-end">
 <ul>
   <li className="p-1"><span className="font-bold">Invoice number:</span>{invoiceNumber}</li>
   <li className=" p-1 bg-grey-100"><span className="font-bold">Invoice date:</span>{invoiceDate}</li>
   <li className="p-1"><span className="font-bold">Due date:</span>{dueDate}</li>
 </ul>
</article>
{/*End of dates */}

         </>
     )
 }
 
 