import { Link } from 'react-router-dom'


export function NavBar() {
    return (
        <div className="text-center bg-slate-800 h-10">
            <Link to="/" className="ml-2 text-2xl bg-red-800 p-2 hover:bg-gray-900">HOME</Link>
            <Link to="dc" className="ml-2 text-2xl bg-red-800 p-2 hover:bg-gray-900">DC HEROES</Link>
            <Link to="marvel" className="ml-2 text-2xl bg-red-800 p-2 hover:bg-gray-900">MARVEL HEROES</Link>
        </div>
    );
}
