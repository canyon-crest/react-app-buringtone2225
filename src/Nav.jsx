import './Nav.css'


function Nav({ setPage }){
    return (
        <div>
            <ul>
                <li onClick={() => setPage("home")}>Home</li>
                <li onClick={() => setPage("facts")}>Facts</li>
                <li onClick={() => setPage("shop")}>Shop</li>
            </ul>
        </div>
    )
}

export default Nav