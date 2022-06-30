
export  interface LanguageState{
    language: "en" | "zh",
    languageList: {name:string,code:string}[]
}

const defaultState:LanguageState = {
    language: "en",
    languageList: [
        {name: "English", code: "en"},
        {name: "中文", code: "zh"}
    ]
}

export default (state = defaultState, action: { type: any; payload: any; }) => {
  console.log("languageReducer", action);
  
  switch (action.type) {
    case 'SET_LANGUAGE':
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
}