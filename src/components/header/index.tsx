import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.svg";
import { FiUser, FiLogIn } from "react-icons/fi";

export function Header() {
  const signed = false;
  const loadingAuth = false;

  return (
    <div className="w-full flex items-center justify-center h-16 bg-white drop-shadow mb-4">
      <header className="flex w-full items-center justify-between max-w-7xl px-4 mx-auto">
        <Link to={"/"}>
          <img src={logoImg} alt="logo do site" />
        </Link>

        {!loadingAuth && signed && (
          <Link to={"/dashboard"}>
            <div className="border-2 rounded-full p-1 border-gray-900">
              <FiUser size={24} color="#000" />
            </div>
          </Link>
        )}

        {!loadingAuth && !signed && (
          <Link to={"/login"}>
            <FiLogIn size={24} color="#000" />
          </Link>
        )}
      </header>
    </div>
  );
}
