/* eslint-disable default-param-last */
const REMOVE = "REMOVE";
const SAVE = "SAVE";
const EDIT = "EDIT";

export const stuSave = (saveData) => ({
  type: SAVE,
  saveData: {
    stuId: saveData.id,
    stuName: saveData.stuName,
    stuSchool: saveData.stuSchool,
    stuStartYear: saveData.stuStartYear,
    stuStartGrade: saveData.stuStartGrade,
    stuSelectedSub: saveData.stuSelectedSub,
  },
});

export const stuRemove = (stuId) => ({
  type: REMOVE,
  stuId,
});

export const stuEdit = (stuId) => ({
  type: EDIT,
  stuId,
});

const initialInfo = {
  information: [
    {
      stuId: 1,
      stuName: "이은수",
      stuSchool: "경복여자고등학교",
      stuStartYear: 2021,
      stuStartGrade: "1학년",
      stuSelectedSub: "수학",
    },
    {
      stuId: 2,
      stuName: "김서현",
      stuSchool: "덕원여자고등학교",
      stuStartYear: 2021,
      stuStartGrade: "1학년",
      stuSelectedSub: "수학",
    },
  ],
  lastId: 3,
};

export default function stuReducer(state = initialInfo, action) {
  switch (action.type) {
    case REMOVE:
      return {
        ...state,
        information: state.information.filter(
          (row) => row.stuId !== action.stuId
        ),
      };
    case SAVE:
      return {
        lastId: state.lastId + 1,
        information: state.information.concat({
          ...action.saveData,
          boardId: state.lastId + 1,
        }),
      };
    case EDIT:
      return {
        ...state,
        information: state.information.map((data) =>
          data.stuId === action.saveData.stuId ? { ...action.saveData } : data
        ),
      };
    default:
      return state;
  }
}
