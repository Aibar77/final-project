import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          marginTop: 150,
        }}
      >
        Ошибка 404
      </h1>
      <button
        style={{
          maxWidth: "200px",
          outline: "none",
          border: "none",
          backgroundColor: "#ff9100",
          color: "#16181b",
          borderRadius: "50px",
          fontWeight: "700",
          padding: "12px 16px",
          cursor: "pointer",
        }}
        onClick={() => navigate(-1)}
      >
        Вернуться назад
      </button>
    </div>
  );
};
