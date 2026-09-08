
function Header({title, subtitle = "Quản lý công việc của bạn một cách hiệu quả."}) {
    return (
        <header className="app-header">
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </header>
    );
}


export default Header