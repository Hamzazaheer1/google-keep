import { createContext, useContext, useState } from "react";

const Ctx = createContext();
export function CtxProvider({ children }) {
  const [apiDone, setApiDone] = useState(false);
  const [noteData, setNoteData] = useState({});

  const updateApiDoneStatus = (value) => {
    setApiDone(value);
  };
  const updateNoteData = (v1, v2, v3) => {
    setNoteData({
      title: v1,
      note: v2,
      id: v3,
    });
  };
  return (
    <Ctx.Provider
      value={{
        updateApiDoneStatus,
        apiDone,
        updateNoteData,
        noteData,
      }}
    >
      {children}
    </Ctx.Provider>
  );
}
export function useCtx() {
  return useContext(Ctx);
}
