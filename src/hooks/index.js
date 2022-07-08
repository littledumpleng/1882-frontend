import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ADMIN_LOGIN_SESSION_STORAGE_KEY, ADMIN_LOGIN_SESSION_STORAGE_VALUE } from '../AppConstants';

export const useAdminLoggedIn = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem(ADMIN_LOGIN_SESSION_STORAGE_KEY) !== ADMIN_LOGIN_SESSION_STORAGE_VALUE) {
      navigate('/');
    }
  }, [navigate]);
}