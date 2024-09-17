import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function PenelitianInternalList() {
  const navigate = useNavigate();

  return (
    <>
      <div className="card">Tabel Data</div>
      <div className="card h-[300px]"></div>
      <button
        className="w-16 [aspect-ratio:1/1] rounded-full bg-[#77099D] hover:bg-[#630483] text-[#fff] fixed bottom-[3rem] right-[3rem]"
        onClick={() => navigate("/penelitianInternal/add")}
      >
        <FontAwesomeIcon icon={faPlus} size="lg" />
      </button>
    </>
  );
}
export default PenelitianInternalList;
