// components/Header.js
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Header = () => {
        const location = useLocation();

        let title;
        let linkTo;
        switch (location.pathname) {
            case '/':
                title = 'スレッド作成';
                linkTo = '/thread/new';
                break;
            case '/thread/new':
                title = 'スレッド一覧';
                linkTo = '/';
                break;
            default:
                title = '';
                linkTo = '/';
        }

    return (
        <header className="mx-2 p-5 bg-cyan-500 text-white font-semibold tracking-wide rounded-b-3xl shadow-md">
            <h1 className="text-3xl flex items-center justify-between">
                掲示板
                <Link
                    to={linkTo}
                    className="flex justify-center align-middle py-2 px-3 text-center text-black font-bold bg-white rounded-3xl transition ease-in-out duration-100 hover:scale-105"
                >
                    
                    <span className="flex justify-center text-sm">{title}</span>
                </Link>
            </h1>
        </header>
    );
};

export default Header;