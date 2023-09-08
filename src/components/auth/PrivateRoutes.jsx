import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import HeaderPokeball from "../layout/HeaderPokeball";

const PrivateRoutes = () => {
  const { name } = useSelector((store) => store.trainer);

  if (name)
    return (
      <HeaderPokeball>
        <Outlet />
      </HeaderPokeball>
    );

  return <Navigate to="/" />;
};
export default PrivateRoutes;
