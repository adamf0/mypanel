import PenelitianInternalList from "./PenelitianInternalList";
import PenelitianInternalAdd from "./PenelitianInternalAdd";
import PenelitianInternalEdit from "./PenelitianInternalEdit";

function PenelitianInternal({ children }) {
  return (
    <>
      <h5 className="text-[#77099D] font-extrabold font-[inter]">
        Penelitian Internal
      </h5>
      {children}
    </>
  );
}

PenelitianInternal.List = PenelitianInternalList;
PenelitianInternal.Add = PenelitianInternalAdd;
PenelitianInternal.Edit = PenelitianInternalEdit;

export default PenelitianInternal;
