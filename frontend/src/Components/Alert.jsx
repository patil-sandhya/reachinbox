import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { deleteThread, getEmailList } from "../Redux/Action";

const Alert = ({ isOpen, onClose }) => {
  const curThreadId = useSelector((store) => store.curThreadId);
  const dummyThreadList = useSelector((store)=> store.dummyThreadList)
   
  const dispatch = useDispatch();
  const token = useSelector((store) => store.token);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  if (!isOpen) return null;
  const handleDelete = ()=>{
    // let filterData = dummyThreadList.filter((item)=>{
    //   return (item.threadId != curThreadId)
    // })
    dispatch(deleteThread(curThreadId, config));
    dispatch(getEmailList(config))
    onClose()
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60">
      <div className="bg-gradient-to-b from-[#141517] to-[#232528] p-8 flex flex-col items-center justify-center  rounded-lg w-1/3">
        <h2 className="text-lg text-white font-bold mb-4">Are you sure ?</h2>
        <br />
        <p className="text-[#E8E8E8] mb-4">
          Your selected email will be deleted.
        </p>
        <br />
        <div className="flex justify-center">
          <button
            className="bg-black text-white px-4 py-2 rounded mr-4"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-gradient-to-b from-[#FA5252] to-[#A91919] text-white px-4 py-2 rounded "
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
