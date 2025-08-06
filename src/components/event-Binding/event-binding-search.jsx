import { useEffect, useState } from "react";


export function EventBindingSearch(){

    function NavClick(){
        alert('Navbar Clicked - Navigate to Home');
    }

    function SearchClick(e){
        e.stopPropagation();
        alert('Search Clicked - Shows search results');
    }

    function submitClick(e){
        e.preventDefault();
        alert("Form Submitted")
    }

    return(
         <div className="container-fluid">
            <nav onClick={NavClick} className="p-2 border border-2 border-dark m-4">
               <h2>Amazon</h2>
               <button onClick={SearchClick} className="btn bi bi-search btn-warning"></button>
            </nav>
            <section>
                <form onSubmit={submitClick}>
                    <h3>User Name</h3>
                    <input type="text" name="User"  />
                    <button type="submit">Login</button>
                </form>
            </section>

         </div>
    )
}