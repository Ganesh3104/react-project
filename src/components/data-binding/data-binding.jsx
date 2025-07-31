

export function DataBinding(){

    var uname = "John";
    var bgstyle = "bg-dark";
    return(
        <div className="container-fluid">
            <h2 className={`text-warning ${bgstyle}`}>Data Binding</h2>
            <p>Hello ! {uname}</p>
            <input type="text" value={uname} />
        </div>
    )
}