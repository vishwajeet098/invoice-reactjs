export default function Footer({name,email,phone,bankName,bankAccount}) {
    return (
        <>
            {/*Footer */}
<footer className="footer border-t-2 border-gray-300 pt-5">
<ul className=" flex flex-wrap items-center justify-center">
  <li><span className="font-bold" >name:</span>{name}</li>
  <li><span className="font-bold" >mail:</span>{email}</li>
  <li><span className="font-bold" >phone:</span>{phone}</li>
  <li><span className="font-bold" >bank :</span>{bankName}</li>
  <li><span className="font-bold" >Account number:</span>{bankAccount}</li>
  
</ul>
</footer>
{/*end of footer */}
        </>
    )
}



