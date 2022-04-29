/* eslint-disable default-param-last */
const REMOVE = "REMOVE";
const SAVE = "SAVE";
const EDIT = "EDIT";

export const editorialSave = (saveData) => ({
  type: SAVE,
  saveData: {
    editorialId: saveData.editorialId,
    editorialDate: saveData.editorialDate,
    editorialName: saveData.editorialName,
    editorialScore: saveData.editorialScore,
  },
});

export const editorialRemove = (editorialId) => ({
  type: REMOVE,
  editorialId,
});

export const editorialEdit = (editorialId) => ({
  type: EDIT,
  editorialId,
});

const initialEditorial = {
  editorial: [
    {
      editorialId: 1,
      editorialDate: "2022.03.13",
      editorialName: "현우진의 킬링캠프 1회",
      editorialScore: 68,
    },
    {
      editorialId: 2,
      editorialDate: "2022.03.20",
      editorialName: "현우진의 킬링캠프 2회",
      editorialScore: 72,
    },
    {
      editorialId: 3,
      editorialDate: "2022.03.27",
      editorialName: "현우진의 킬링캠프 3회",
      editorialScore: 56,
    },
  ],
  lastId: 3,
};

function editorialReducer(state = initialEditorial, action) {
  switch (action.type) {
    case REMOVE:
      return {
        ...state,
        editorial: state.editorial.filter(
          (row) => row.editorialId !== action.editorialId
        ),
      };
    case SAVE:
      return {
        lastId: state.lastId + 1,
        editorial: state.editorial.concat({
          ...action.saveData,
          boardId: state.lastId + 1,
        }),
      };
    case EDIT:
      return {
        ...state,
        editorial: state.sceditorialore.map((data) =>
          data.editorialId === action.saveData.editorialId
            ? { ...action.saveData }
            : data
        ),
      };
    default:
      return state;
  }
}

export default editorialReducer;
