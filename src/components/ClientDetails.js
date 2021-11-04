 export default function ClientDetails({name,address}) {
     
     return (
         <>
               
 {/*Client details */}
 <section className="mt-5">
 <h2 className="text-4xl uppercase">{name}</h2>
 <p>{address}</p>
</section>
{/*End of clients details */}

             
         </>
     )
 }
