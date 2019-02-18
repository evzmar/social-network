import {
    userStatusUpdatingProcessResults,
    userStatusUpdatingProcessStatuses
} from "../../dal/axios-instance";
import {getUserId} from "./authRedux";
import axios from "../../dal/axios-instance";

export const types = {
    SET_USER_STATUS: 'NETWORK/USER_STATUS_BLOCK/SET_USER_STATUS',
    // CLEAR_USER_STATUS:                               'NETWORK/USER_STATUS_BLOCK/CLEAR_USER_STATUS',
    SET_CREATING_USER_STATUS: 'NETWORK/USER_STATUS_BLOCK/SET_CREATING_USER_STATUS',
    SET_USER_STATUS_UPDATING_PROCESS_STATUS: 'NETWORK/USER_STATUS_BLOCK/SET_USER_STATUS_UPDATING_PROCESS_STATUS',
    SET_USER_STATUS_UPDATING_PROCESS_ERROR: 'NETWORK/USER_STATUS_BLOCK/SET_USER_STATUS_UPDATING_PROCESS_ERROR',
    SET_USER_STATUS_UPDATING_PROCESS_ERROR_MESSAGE: 'NETWORK/USER_STATUS_BLOCK/SET_USER_STATUS_UPDATING_PROCESS_ERROR_MESSAGE',
    COPY_USER_STATUS_TO_CREATING_USER_STATUS: 'NETWORK/USER_STATUS_BLOCK/COPY_USER_STATUS_TO_CREATING_USER_STATUS'
};


export const actions = {
    setUserStatus: (userStatus) => ({type: types.SET_USER_STATUS, userStatus}),
    setCreatingUserStatus: (creatingUserStatus) => ({type: types.SET_CREATING_USER_STATUS, creatingUserStatus}),
    setUserStatusUpdatingProcessStatus: (processStatus) => ({
        type: types.SET_USER_STATUS_UPDATING_PROCESS_STATUS,
        processStatus
    }),
    setUserStatusUpdatingProcessError: (processError) => ({
        type: types.SET_USER_STATUS_UPDATING_PROCESS_ERROR,
        processError
    }),
    setUserStatusUpdatingProcessErrorMessage: (processErrorMessage) => ({
        type: types.SET_USER_STATUS_UPDATING_PROCESS_ERROR_MESSAGE,
        processErrorMessage
    }),
    copyUserStatusToCreatingUserStatus: () => ({type: types.COPY_USER_STATUS_TO_CREATING_USER_STATUS})
};

//----
export const initialState = {
    userStatus: 'мой статус',
    creatingUserStatus: null,

    userStatusUpdatingStatus: userStatusUpdatingProcessStatuses.READY,

    userStatusUpdatingProcessError: userStatusUpdatingProcessResults.SUCCESS,
    userStatusUpdatingErrorMessage: ''
};
//-------
export const reducer = (state = initialState, action) => {
    //----
    switch (action.type) {
        case types.SET_USER_STATUS:
            return {
                ...state,
                userStatus: action.userStatus
            };

        // case (action.CLEAR_USER_STATUS):
        //     return {
        //       ...state,
        //         userStatus: ''
        //     };

        case types.SET_CREATING_USER_STATUS:
            return {
                ...state,
                creatingUserStatus: action.creatingUserStatus
            };

        case types.SET_USER_STATUS_UPDATING_PROCESS_STATUS:
            return {
                ...state,
                userStatusUpdatingStatus: action.processStatus
            };
        case types.SET_USER_STATUS_UPDATING_PROCESS_ERROR:
            return {
                ...state,
                userStatusUpdatingProcessError: action.processError
            };

        case types.SET_USER_STATUS_UPDATING_PROCESS_ERROR_MESSAGE:
            return {
                ...state,
                userStatusUpdatingErrorMessage: action.processErrorMessage
            };

        case types.COPY_USER_STATUS_TO_CREATING_USER_STATUS:
            return {
                ...state,
                creatingUserStatus: state.userStatus
            };

        default:
            return state;

    }
};

//----Selectors-------//
export const getCreatingUserStatus = (globalState) => globalState.userStatusBlock.creatingUserStatus;

//-----ThanksCreators----//

// getUserStatus  getUserStatus
export const getUserStatus = () => (dispatch, getState) => {
    const globalState = getState();
    const userId = getUserId(globalState);

    axios.get('profile/status/' + userId)
        .then(result => {
            dispatch(actions.setUserStatus(result.data))
        })
};

//---
// updateUserStatus  updateUserStatus
export const updateUserStatus = () => (dispatch, getState) => {
    const globalState = getState();
    const status = getCreatingUserStatus(globalState);

    dispatch(actions.setUserStatusUpdatingProcessStatus(userStatusUpdatingProcessStatuses.IN_PROGRESS));

    axios.put('profile/status', {status})
        .then(result => {
            if (result.data.resultCode === 0) {

                const userId = getUserId(globalState);

                axios.get('profile/status/' + userId)
                    .then(result => {

                        dispatch(actions.setUserStatusUpdatingProcessStatus(userStatusUpdatingProcessStatuses.READY));
                        if (result.data.resultCode === 0) {
                            dispatch(actions.setUserStatus(result.data));
                        } else {
                            dispatch(actions.setUserStatusUpdatingProcessError(userStatusUpdatingProcessResults.COMMON_ERROR));
                            dispatch(actions.setUserStatusUpdatingProcessErrorMessage("ERROR!!!"))
                        }
                    })
                    .then(() => {
                        dispatch(actions.setCreatingUserStatus(null));
                    });
            }
        })
};

