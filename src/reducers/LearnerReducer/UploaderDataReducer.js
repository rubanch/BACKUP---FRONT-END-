


// const intialstateUploader = {
//     credintialUpload : [],
//     loading:false,
//     error: null,
// }

// const UploaderDataReducer = (state= intialstateUploader, action) =>{

// switch (action.type)
// {
//     case UPLOADER_USER_DATA:{
//         return{
//             ...state,
//             credentialUpload : action.payload
//         }
//     }
// }




// }



import { UPLOADER_USER_DATA_REQUEST } from "../../actions/LearnerAction/UploaderAction"

const initialStateUploader = {
    credentialUpload: [],
    loading: false,
    error: null,
}

const UploaderDataReducer = (state = initialStateUploader, action) => {
    
    // console.log("finally fetching in reducer", action.payload);

    switch (action.type) {
        case UPLOADER_USER_DATA_REQUEST: {
            return {
                ...state,
                credentialUpload: action.payload
            }
        }
        default:
            return state;
    }
}
export default UploaderDataReducer;
