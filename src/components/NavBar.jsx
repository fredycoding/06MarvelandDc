import { Link } from 'react-router-dom'


export function NavBar() {
    return (
        <div className="text-center bg-slate-900 h-10 mt-0">
            <Link to="/" className="ml-4 text-2xl p-3 hover:bg-black hover:border-red-700 hover:border-y-4">HOME</Link>
            <Link to="dc" className="ml-4 text-2xl  p-3 hover:bg-black hover:border-red-700 hover:border-y-4">DC HEROES</Link>
            <Link to="marvel" className="ml-4 text-2xl  p-3 hover:bg-black hover:border-red-700 hover:border-y-4">MARVEL HEROES</Link>
        </div>
    );
}
