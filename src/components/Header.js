 export default function Header() {const handlePrint=()=>{
    window.print()
  }
     return (
         <>
                {/*Header */}
       <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
       <div>
         <h2 className="font-bold uppercase tracking-wide text-4xl mb-3  color ">Invoice</h2>
       </div>
       <div>
         <ul className="flex items-center justify-between flex-wrap ">
           <li className="mx-2"><button onClick={handlePrint} className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">print</button></li>
           <li className="mx-2"><button className="bg-green-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-green-500 hover:bg-transparent hover:text-green-500 transition-all duration-300">Download</button></li>
           <li className="mx-2"><button className="bg-red-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-red-500 hover:bg-transparent hover:text-red-500 transition-all duration-300">send</button></li>
         </ul>
       </div>
      </header>
{/*end of header */}
         </>
     )
 }
 
 