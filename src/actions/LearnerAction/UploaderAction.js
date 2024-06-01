export const  UPLOADER_USER_DATA_REQUEST = 'UPLOADER_USER_DATA';
// export  const UPLOADER_USER_DATA_SUCCESS = 'UPLOADER_USER_DATA_SUCCESS';

export const uploaderActionRequest = (uploader)=>({
    type: UPLOADER_USER_DATA_REQUEST,
    payload : uploader,
});

// export const uploaderAction =()=>({
//     type : UPLOADER_USER_DATA_SUCCESS,
    
// })