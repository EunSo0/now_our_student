/* eslint-disable default-param-last */
const REMOVE = "REMOVE";
const SAVE = "SAVE";
const EDIT = "EDIT";

export const nationSave = (saveData) => ({
  type: SAVE,
  saveData: {
    nationId: saveData.nationid,
    nationName: saveData.nationName,
    nationScore: saveData.nationScore,
  },
});

export const nationRemove = (nationId) => ({
  type: REMOVE,
  nationId,
});

export const nationEdit = (nationId) => ({
  type: EDIT,
  nationId,
});

const initialNation = {
  nation: [
    {
      nationId: 1,
      nationName: "2022년 3월",
      nationScore: 88,
    },
    {
      nationId: 2,
      nationName: "2022년 4월",
      nationScore: 80,
    },
    {
      nationId: 3,
      nationName: "2022년 6월",
      nationScore: 92,
    },
    {
      nationId: 4,
      nationName: "2022년 7월",
      nationScore: 90,
    },
    {
      nationId: 5,
      nationName: "2022년 9월",
      nationScore: 76,
    },
    {
      nationId: 6,
      nationName: "2022년 10월",
      nationScore: 96,
    },
  ],
  lastId: 6,
};

export default function nationReducer(state = initialNation, action) {
  switch (action.type) {
    case REMOVE:
      return {
        ...state,
        nation: state.nation.filter((row) => row.nationId !== action.nationId),
      };
    case SAVE:
      return {
        lastId: state.lastId + 1,
        nation: state.nation.concat({
          ...action.saveData,
          boardId: state.lastId + 1,
        }),
      };
    case EDIT:
      return {
        ...state,
        nation: state.nation.map((data) =>
          data.nationId === action.saveData.nationId
            ? { ...action.saveData }
            : data
        ),
      };
    default:
      return state;
  }
}
