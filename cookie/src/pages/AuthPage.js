import React from "react";
import KukiIntroPage from "./KukiIntroPage";
import { useAuth } from "../context/auth";
import { useNavigate, useParams } from "react-router-dom";

function AuthPage() {
  const { login } = useAuth();

  const params = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    login(params.boxId);
    navigate("/kukibox/" + params.boxId + "/intro", { replace: true });
  }, [params.boxId, login]);

  return <KukiIntroPage />;
}

export default AuthPage;
