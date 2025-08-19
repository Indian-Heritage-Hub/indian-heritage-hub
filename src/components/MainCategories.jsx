import { Link } from "react-router-dom";
import Search from './Search';

const MainCategories = () => {
    return (
      <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg item-center justify-center gap-8">
        {/* Links */}
        <div className="flex-1 flex item-center justify-between flex-wrap">
          <Link
            to="/posts"
            className="bg-blue-800 text-white rounded-full px-3 py-2"
          >
            All Posts
          </Link>
          <Link
            to="/posts?cat=Festivals & Rituals"
            className="hover:bg-blue-80 rounded-full px-5 py-2"
          >
            Festivals & Rituals
          </Link>
          <Link
            to="/posts?cat=Regional Customs"
            className="hover:bg-blue-80 rounded-full px-5 py-2"
          >
            Regional Customs
          </Link>
          <Link
            to="/posts?cat=Folk Art & Music"
            className="hover:bg-blue-80 rounded-full px-5 py-2"
          >
            Folk Art & Music
          </Link>
          <Link
            to="/posts?cat=Traditional Clothing"
            className="hover:bg-blue-80 rounded-full px-5 py-2"
          >
            Traditional Clothing
          </Link>
        </div>
        <span className="text-lg font-medium">|</span>
        {/* Search */}
        <div className="bg-gray-100 p-2 rounded-full flex item-center gap-2">
            <Search />
        </div>
      </div>
    );
}

export default MainCategories;