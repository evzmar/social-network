import {getLogginedUserId} from "./authRedux";
import axios, {userStatusUpdatingProcessStatuses} from "../../dal/axios-instance";
import {
    userProfileUpdatingProcessProfile, userProfileUpdatingProcessResults,
} from "../../dal/axios-instance";


export const types = {
    SET_USER_PROFILE: 'NETWORK/PROFILE_PAGE/SET_USER_PROFILE',
    SET_CREATING_ABOUT_ME: 'NETWORK/PROFILE_PAGE/SET_CREATING_ABOUT_ME',
    // SET_CREATING_SKYPE: 'NETWORK/PROFILE_PAGE/SET_CREATING_SKYPE',
    // SET_CREATING_VK: 'NETWORK/PROFILE_PAGE/SET_CREATING_VK',
    // SET_CREATING_FACEBOOK: 'NETWORK/PROFILE_PAGE/SET_CREATING_FACEBOOK',
    // SET_CREATING_ICQ: 'NETWORK/PROFILE_PAGE/SET_CREATING_ICQ',
    // SET_CREATING_EMAIL: 'NETWORK/PROFILE_PAGE/SET_CREATING_EMAIL',
    // SET_CREATING_GOOGLE_PLUS: 'NETWORK/PROFILE_PAGE/SET_CREATING_GOOGLE_PLUS',
    // SET_CREATING_TWITTER: 'NETWORK/PROFILE_PAGE/SET_CREATING_TWITTER',
    // SET_CREATING_INSTAGRAM: 'NETWORK/PROFILE_PAGE/SET_CREATING_INSTAGRAM',
    // SET_CREATING_WATS_APP: 'NETWORK/PROFILE_PAGE/SET_CREATING_WATS_APP',
    SET_LOOKING_FOR_A_JOB_FLAG: 'NETWORK/PROFILE_PAGE/SET_LOOKING_FOR_A_JOB_FLAG',
    SET_CREATING_LOOKING_FOR_A_JOB_DESCRIPTION: 'NETWORK/PROFILE_PAGE/SET_CREATING_LOOKING_FOR_A_JOB_DESCRIPTION',
    SET_CREATING_FULLL_NAME: 'NETWORK/PROFILE_PAGE/SET_CREATING_FULL_NAME',

    SET_CREATING_CONTACT: 'NETWORK/PROFILE_PAGE/SET_CREATING_CONTACT',

    SET_USER_PROFILE_UPDATING_PROCESS_STATUS: 'NETWORK/PROFILE_PAGE/SET_USER_PROFILE_UPDATING_PROCESS_STATUS',
    SET_USER_PROFILE_UPDATING_PROCESS_ERROR: 'NETWORK/PROFILE_PAGE/SET_USER_PROFILE_UPDATING_PROCESS_ERROR',
    SET_USER_PROFILE_UPDATING_PROCESS_ERROR_MESSAGE: 'NETWORK/PROFILE_PAGE/SET_USER_PROFILE_UPDATING_PROCESS_ERROR_MESSAGE',

    COPY_ABOUT_ME_TO_CREATING_ABOUT_ME: 'NETWORK/PROFILE_PAGE/COPY_ABOUT_ME_TO_CREATING_ABOUT_ME',
    // COPY_SKYPE_TO_CREATING_SKYPE: 'NETWORK/PROFILE_PAGE/COPY_SKYPE_TO_CREATING_SKYPE',
    // COPY_VK_TO_CREATING_VK: 'NETWORK/PROFILE_PAGE/COPY_VK_TO_CREATING_VK',
    // COPY_FACEBOOK_TO_CREATING_FACEBOOK: 'NETWORK/PROFILE_PAGE/COPY_FACEBOOK_TO_CREATING_FACEBOOK',
    // COPY_ICQ_TO_CREATING_ICQ: 'NETWORK/PROFILE_PAGE/COPY_ICQ_TO_CREATING_ICQ',
    // COPY_EMAIL_TO_CREATING_EMAIL: 'NETWORK/PROFILE_PAGE/COPY_EMAIL_TO_CREATING_EMAIL',
    // COPY_GOOGLE_PLUS_TO_CREATING_GOOGLE_PLUS: 'NETWORK/PROFILE_PAGE/COPY_GOOGLE_PLUS_TO_CREATING_GOOGLE_PLUS',
    // COPY_TWITTER_TO_CREATING_TWITTER: 'NETWORK/PROFILE_PAGE/COPY_TWITTER_TO_CREATING_TWITTER',
    // COPY_INSTAGRAM_TO_CREATING_INSTAGRAM: 'NETWORK/PROFILE_PAGE/COPY_INSTAGRAM_TO_CREATING_INSTAGRAM',
    // COPY_WATS_APP_TO_CREATING_WATS_APP: 'NETWORK/PROFILE_PAGE/COPY_WATS_APP_TO_CREATING_WATS_APP',
    COPY_LOOKING_FOR_A_JOB_DESCRIPTION_TO_CREATING_LOOKING_FOR_A_JOB_DESCRIPTION: 'NETWORK/PROFILE_PAGE/COPY_LOOKING_FOR_A_JOB_DESCRIPTION_TO_CREATING_LOOKING_FOR_A_JOB_DESCRIPTION',
    COPY_FULLL_NAME_TO_CREATING_FULLL_NAME: 'NETWORK/PROFILE_PAGE/COPY_FULLL_NAME_TO_CREATING_FULLL_NAME',

    COPY_CONTACT_TO_CREATING_CONTACT: 'NETWORK/PROFILE_PAGE/COPY_CONTACT_TO_CREATING_CONTACT',


    SET_USERPIC_URL: 'NETWORK/PROFILE_PAGE/SET_USERPIC_URL',
    SET_USER_NAME: 'NETWORK/PROFILE_PAGE/SET_USER_NAME',
    SET_USER_BIRTH_DATE: 'NETWORK/PROFILE_PAGE/SET_USER_BIRTH_DATE',
    SET_USER_CITY: 'NETWORK/PROFILE_PAGE/SET_USER_CITY',
    SET_USER_EDUCATION: 'NETWORK/PROFILE_PAGE/SET_USER_EDUCATION',
    SET_USER_WEBSITE: 'NETWORK/PROFILE_PAGE/SET_USER_WEBSITE',
    ADD_POST: 'NETWORK/PROFILE_PAGE/ADD_POST',
    SET_CREATING_POST: 'NETORK/PROFILE_PAGE/SET_CREATING_POST',
    INCREMENT_POST_LIKE_COUNT: 'NETWORK/PROFILE_PAGE/INCREMENT_POST_LIKE_COUNT',
    ADD_CREATING_MESSAGE_AS_POST: 'NETWORK/PROFILE_PAGE/ADD_CREATING_MESSAGE_AS_POST'
};


export const actions = {
    setUserProfile: (data) => ({type: types.SET_USER_PROFILE, data}),
    setCreatingAboutMe: (text) => ({type: types.SET_CREATING_ABOUT_ME, text}),
    // setCreatingSkype: (skype) => ({type: types.SET_CREATING_SKYPE, skype}),
    // setCreatingVk: (vk) => ({type: types.SET_CREATING_VK, vk}),
    // setCreatingFacebook: (facebook) => ({type: types.SET_CREATING_FACEBOOK, facebook}),
    // setCreatingIcq: (icq) => ({type: types.SET_CREATING_ICQ, icq}),
    // setCreatingEmail: (email) => ({type: types.SET_CREATING_EMAIL, email}),
    // setCreatingGooglePlus: (googlePlus) => ({type: types.SET_CREATING_GOOGLE_PLUS, googlePlus}),
    // setCreatingTwitter: (twitter) => ({type: types.SET_CREATING_TWITTER, twitter}),
    // setCratingInstagram: (instagram) => ({type: types.SET_CREATING_INSTAGRAM, instagram}),
    // setCreatingWhatsApp: (whatsApp) => ({type: types.SET_CREATING_WATS_APP, whatsApp}),

    setCreatingContact: (key) => ({type: types.SET_CREATING_CONTACT, key}),
    setCreatingLookingForAJobFlag: (flag) => ({type: types.SET_LOOKING_FOR_A_JOB_FLAG, flag}),
    setCreatingLookingForAJobDescription: (text) => ({type: types.SET_CREATING_LOOKING_FOR_A_JOB_DESCRIPTION, text}),
    setCreatingFullName: (fullName) => ({type: types.SET_CREATING_FULLL_NAME, fullName}),

    setUserProfileUpdatingProcessStatus: (processUserProfile) => ({type: types.SET_USER_PROFILE_UPDATING_PROCESS_STATUS, processUserProfile}),
    setUserProfileUpdatingProcessError: (processError) => ({type: types.SET_USER_PROFILE_UPDATING_PROCESS_ERROR, processError}),
    setUserProfileUpdatingProcessErrorMessage: (processErrorMessage) => ({type: types.SET_USER_PROFILE_UPDATING_PROCESS_ERROR_MESSAGE, processErrorMessage}),

    copyContactToCreatingContact: (key) => ({type: types.COPY_ABOUT_ME_TO_CREATING_ABOUT_ME, key}),
    copyAboutMeToCreatingAboutMe: () => ({type: types.COPY_ABOUT_ME_TO_CREATING_ABOUT_ME}),
    // copySkypeToCreatingSkype: () => ({type: types.COPY_SKYPE_TO_CREATING_SKYPE}),
    // copyVkToCreatingVk: () => ({type: types.COPY_VK_TO_CREATING_VK}),
    // copyFacebookToCreatingFacebook: () => ({type: types.COPY_FACEBOOK_TO_CREATING_FACEBOOK}),
    // copyIcqToCreatingIcq: () => ({type: types.COPY_ICQ_TO_CREATING_ICQ}),
    // copyEmailToCreatingEmail: () => ({type: types.COPY_EMAIL_TO_CREATING_EMAIL}),
    // copyGooglePlusToCreatingGooglePlus: () => ({type: types.COPY_GOOGLE_PLUS_TO_CREATING_GOOGLE_PLUS}),
    // copyTwitterToCreatingTwitter: () => ({type: types.COPY_TWITTER_TO_CREATING_TWITTER}),
    // copyInstagramToCreatingInstagram: () => ({type: types.COPY_INSTAGRAM_TO_CREATING_INSTAGRAM}),
    // copyWhatsAppToCreatingWhatsApp: () => ({type: types.COPY_WATS_APP_TO_CREATING_WATS_APP}),
    copyLookingForAJobDescriptionCreatingLookingForAJobDescription: () => ({type: types.COPY_LOOKING_FOR_A_JOB_DESCRIPTION_TO_CREATING_LOOKING_FOR_A_JOB_DESCRIPTION}),
    copyFullNameToCreatingFullName: () => ({type: types.COPY_FULLL_NAME_TO_CREATING_FULLL_NAME}),


    setUserpicURL: (userPicURL) => ({type: types.SET_USERPIC_URL, userPicURL}),
    setUserName: (userName) => ({type: types.SET_USER_NAME, userName}),
    setUserBirthDate: (userBirthDate) => ({type: types.SET_USER_BIRTH_DATE, userBirthDate}),
    setUserCity: (userCity) => ({type: types.SET_USER_CITY, userCity}),
    setUserEducation: (userEducation) => ({type: types.SET_USER_EDUCATION, userEducation}),
    setUserWebSite: (userWebSite) => ({type: types.SET_USER_WEBSITE, userWebSite}),
    addPost: (message, messageId) => ({type: types.ADD_POST, message, messageId}),
    setCreatingPost: (message) => ({type: types.SET_CREATING_POST, message}),
    incrementPostLikeCount: (messageId) => ({type: types.INCREMENT_POST_LIKE_COUNT, messageId}),
    addCreatingMessageAsPost: (messageId) => ({type: types.ADD_CREATING_MESSAGE_AS_POST, messageId})
};

//----
export const initialState = {
    userInfo: {
        userBirthDate: '',
        userCity: '',
        userEducation: '',
        userWebSite: ''
    },
    userProfile: {
        aboutMe: 'Marina',
        contacts: {
            skype: 'skype',
            vk: 'vk',
            facebook: 'facebook',
            icq: 'icq',
            email: 'email',
            googlePlus: 'googlePlus',
            twitter: 'twitter',
            instagram: 'instagram',
            whatsApp: 'whatsApp'
        },
        lookingForAJob: true,
        lookingForAJobDescription: '',
        photos: {
            large: null,
            small: null
        },
        fullName: '',
        userId: ''
    },
    creatingUserProfile_aboutMe: null,
    creatingUserProfile_skype: null,
    creatingUserProfile_vk: null,
    creatingUserProfile_facebook: null,
    creatingUserProfile_icq: null,
    creatingUserProfile_email: null,
    creatingUserProfile_googlePlus: null,
    creatingUserProfile_twitter: null,
    creatingUserProfile_instagram: null,
    creatingUserProfile_whatsApp: null,
    creation_lookingForAJob: null,
    creating_lookingForAJobDescription: null,
    creating_fullName: null,

    userProfileUpdatingProfile: userProfileUpdatingProcessProfile.READY,
    userProfileUpdatingProcessError: userProfileUpdatingProcessResults.SUCCESS,
    userProfileUpdatingErrorMessage: '',
    wall: {
        messagesList: [],
        creatingMessage: ''
    }
};
//-------
export const reducer = (state = initialState, action) => {
    //----
    const newState = {
        ...state,
        userInfo: {...state.userInfo},
        wall: {
            ...state.wall,
            messagesList: state.wall.messagesList.map(obj => ({...obj})),
            creatingMessage: {...state.wall.creatingMessage}
        },
        userProfile: {...state.userProfile}
    };

    //----
    //----
    switch (action.type) {
        case types.SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.data
            };

        case types.SET_CREATING_ABOUT_ME:
            return {
                ...state,
                creatingUserProfile_aboutMe: action.text
            };

        // case types.SET_CREATING_SKYPE:
        //     return {
        //         ...state,
        //         creatingUserProfile_skype: action.skype
        //     };
        //
        // case types.SET_CREATING_VK:
        //     return {
        //       ...state,
        //         creatingUserProfile_vk: action.vk
        //     };
        //
        //
        // case types.SET_CREATING_FACEBOOK:
        //     return {
        //         ...state,
        //         creatingUserProfile_facebook: action.facebook
        //     };
        //
        // case types.SET_CREATING_ICQ:
        //     return {
        //         ...state,
        //         creatingUserProfile_icq: action.icq
        //     };
        //
        // case types.SET_CREATING_EMAIL:
        //     return {
        //         ...state,
        //         creatingUserProfile_email: action.email
        //     };
        //
        // case types.SET_CREATING_GOOGLE_PLUS:
        //     return {
        //         ...state,
        //         creatingUserProfile_googlePlus: action.googlePlus
        //     };
        //
        // case types.SET_CREATING_TWITTER:
        //     return {
        //         ...state,
        //         creatingUserProfile_twitter: action.twitter
        //     };
        //
        // case types.SET_CREATING_INSTAGRAM:
        //     return {
        //         ...state,
        //         creatingUserProfile_instagram: action.instagram
        //     };
        //
        // case types.SET_CREATING_WATS_APP:
        //     return {
        //         ...state,
        //         creatingUserProfile_whatsApp: action.whatsApp
        //     };

        case types.SET_LOOKING_FOR_A_JOB_FLAG:
            return {
                ...state,
                creatingFlag: action.flag
            };

        case types.SET_CREATING_LOOKING_FOR_A_JOB_DESCRIPTION:
            return {
                ...state,
                creating_lookingForAJobDescription: action.text
            };

        case types.SET_CREATING_FULLL_NAME:
            return {
                ...state,
                creating_fullName: action.fullName
            };
        //-------

        case types.SET_USER_PROFILE_UPDATING_PROCESS_STATUS:
            return {
                ...state,
                userProfileUpdatingProcessUserProfile: action.processUserProfile
            };

        case types.SET_USER_PROFILE_UPDATING_PROCESS_ERROR:
            return {
                ...state,
                userProfileUpdatingProcessError: action.processError
            };

        case types.SET_USER_PROFILE_UPDATING_PROCESS_ERROR_MESSAGE:
            return {
                ...state,
                userProfileUpdatingProcessErrorMessage: action.processErrorMessage
            };
        //-------

        case types.SET_CREATING_CONTACT:
                return {
                    ...state,
                    ["creatingUserProfile_" + action.key]: state.userProfile.contacts[action.key]
                };
        //-------
        case types.COPY_CONTACT_TO_CREATING_CONTACT:
                return {
                    ...state,
                    ["creatingUserProfile_" + action.key]: state.userProfile.contacts[action.key]
                };
        //-------

        case types.COPY_ABOUT_ME_TO_CREATING_ABOUT_ME:
            return {
                ...state,
                creatingUserProfile_aboutMe: state.userProfile.aboutMe
            };

        // case types.COPY_SKYPE_TO_CREATING_SKYPE:
        //     return {
        //         ...state,
        //         creatingUserProfile_skype: state.userProfile.contacts.skype
        //     };
        //
        // case types.COPY_VK_TO_CREATING_VK:
        //     return {
        //         ...state,
        //         creatingUserProfile_vk: state.userProfile.contacts.vk
        //     };
        //
        // case types.COPY_FACEBOOK_TO_CREATING_FACEBOOK:
        //     return {
        //         ...state,
        //         creatingUserProfile_facebook: state.userProfile.contacts.facebook
        //     };
        //
        // case types.COPY_ICQ_TO_CREATING_ICQ:
        //     return {
        //         ...state,
        //         creatingUserProfile_icq: state.userProfile.contacts.icq
        //     };
        //
        // case types.COPY_EMAIL_TO_CREATING_EMAIL:
        //     return {
        //         ...state,
        //         creatingUserProfile_email: state.userProfile.contacts.email
        //     };
        //
        // case types.COPY_GOOGLE_PLUS_TO_CREATING_GOOGLE_PLUS:
        //     return {
        //         ...state,
        //         creatingUserProfile_googlePlus: state.userProfile.contacts.googlePlus
        //     };
        //
        // case types.COPY_TWITTER_TO_CREATING_TWITTER:
        //     return {
        //         ...state,
        //         creatingUserProfile_twitter: state.userProfile.contacts.twitter
        //     };
        //
        // case types.COPY_INSTAGRAM_TO_CREATING_INSTAGRAM:
        //     return {
        //         ...state,
        //         creatingUserProfile_instagram: state.userProfile.contacts.instagram
        //     };
        //
        // case types.COPY_WATS_APP_TO_CREATING_WATS_APP:
        //     return {
        //         ...state,
        //         creatingUserProfile_whatsApp: state.userProfile.contacts.whatsApp
        //     };

        case types.COPY_LOOKING_FOR_A_JOB_DESCRIPTION_TO_CREATING_LOOKING_FOR_A_JOB_DESCRIPTION:
            return {
                ...state,
                creating_lookingForAJobDescription: state.userProfile.lookingForAJobDescription
            };

        case types.COPY_FULLL_NAME_TO_CREATING_FULLL_NAME:
            return {
                ...state,
                creating_fullName: state.userProfile.fullName
            };

        //-------
        case types.SET_USERPIC_URL:
            newState.userInfo.userPicURL = action.userPicURL;
            return newState;

        case types.SET_USER_NAME:
            newState.userInfo.userName = action.userName;
            return newState;

        case types.SET_USER_BIRTH_DATE:
            newState.userInfo.userBirthDate = action.userBirthDate;
            return newState;

        case types.SET_USER_CITY:
            newState.userInfo.userCity = action.userCity;
            return newState;

        case types.SET_USER_EDUCATION:
            newState.userInfo.userEducation = action.userEducation;
            return newState;

        case types.SET_USER_WEBSITE:
            newState.userInfo.userWebSite = action.userWebSite;
            return newState;

        case types.ADD_POST:
            newState.wall.messagesList = [...newState.wall.messagesList,
                {
                    text: action.message,
                    likeCount: 0,
                    messageId: action.messageId
                }];
            return newState;

        case types.SET_CREATING_POST:

            newState.wall.creatingMessage = action.message;
            return newState;

        case types.INCREMENT_POST_LIKE_COUNT:
            let filteredMessages = newState.wall.messagesList.filter((el) => {
                return action.messageId === el.messageId;
            });
            filteredMessages[0].likeCount = +1;

            return newState;

        case types.ADD_CREATING_MESSAGE_AS_POST:

            newState.wall.messagesList = [...newState.wall.messagesList,
                {
                    text: state.wall.creatingMessage,
                    likeCount: 0,
                    messageId: action.messageId
                }];
            return newState;

        default:
            return state;

    }
};

//----
//----Selectors-------//
export const getCreatingUserProfile = (globalState) => {
    const creatingUserProfile = {
        aboutMe: globalState.profilePage.creatingUserProfile_aboutMe !== null ?
                globalState.profilePage.creatingUserProfile_aboutMe :
                globalState.profilePage.userProfile.aboutMe,
        contacts: {
            skype: globalState.profilePage.creatingUserProfile_skype !== null ?
                globalState.profilePage.creatingUserProfile_skype :
                globalState.profilePage.userProfile.contacts.skype,

            vk: globalState.profilePage.creatingUserProfile_vk !== null ?
                globalState.profilePage.creatingUserProfile_vk :
                globalState.profilePage.userProfile.contacts.vk,

            facebook: globalState.profilePage.creatingUserProfile_facebook !== null ?
                      globalState.profilePage.creatingUserProfile_facebook :
                      globalState.profilePage.userProfile.contacts.facebook,

            icq: globalState.profilePage.creatingUserProfile_icq !== null ?
                 globalState.profilePage.creatingUserProfile_icq :
                 globalState.profilePage.userProfile.contacts.icq,

            email: globalState.profilePage.creatingUserProfile_email !== null ?
                   globalState.profilePage.creatingUserProfile_email :
                   globalState.profilePage.userProfile.contacts.email,

            googlePlus: globalState.profilePage.creatingUserProfile_googlePlus !== null ?
                        globalState.profilePage.creatingUserProfile_googlePlus :
                        globalState.profilePage.userProfile.contacts.googlePlus,

            twitter: globalState.profilePage.creatingUserProfile_twitter !== null ?
                     globalState.profilePage.creatingUserProfile_twitter :
                     globalState.profilePage.userProfile.contacts.twitter,

            instagram:  globalState.profilePage.creatingUserProfile_instagram !== null ?
                        globalState.profilePage.creatingUserProfile_instagram :
                        globalState.profilePage.userProfile.contacts.instagram,

            whatsApp:   globalState.profilePage.creatingUserProfile_whatsApp !== null ?
                        globalState.profilePage.creatingUserProfile_whatsApp :
                        globalState.profilePage.userProfile.contacts.whatsApp
        },
        lookingForAJob: globalState.profilePage.creation_lookingForAJob !== null ?
                        globalState.profilePage.creation_lookingForAJob :
                        globalState.profilePage.userProfile.lookingForAJob,

        lookingForAJobDescription:  globalState.profilePage.creating_lookingForAJobDescription !== null ?
                                    globalState.profilePage.creating_lookingForAJobDescription :
                                    globalState.profilePage.userProfile.lookingForAJobDescription,

        fullName:   globalState.profilePage.creating_fullName !== null ?
                    globalState.profilePage.creating_fullName :
                    globalState.profilePage.userProfile.fullName
    };
    return creatingUserProfile;
};
//-----ThanksCreators----//
export const setReceivedServerUserProfile = (userId) => (dispatch, getState) => {
    const globalState = getState();
    userId = userId ? userId : getLogginedUserId(globalState);
    axios.get('profile/' + userId)
        .then(result => {
            dispatch(actions.setUserProfile(result.data))
        })
};

export const updateUserProfileFromCreatingUserProfile = (userId) => (dispatch, getState) => {
    const globalState = getState();
    const userProfile = getCreatingUserProfile(globalState);

    dispatch(actions.setUserProfileUpdatingProcessStatus(userProfileUpdatingProcessProfile.IN_PROGRESS));
    axios.put('profile', userProfile)
        .then(result => {
            if (result.data.resultCode === 0) {
                // const userId = getLogginedUserId(globalState);
                const userId = userId ? userId : getLogginedUserId(globalState);
                axios.get('profile/' + userId)
                    .then(result => {
                        dispatch(actions.setUserProfileUpdatingProcessStatus(userProfileUpdatingProcessProfile.READY));
                        dispatch(actions.setUserProfile(result.data))
                    })
                    .then(() => {
                        dispatch(actions.setCreatingAboutMe(null));
                        dispatch(actions.setCreatingContact(null));
                        // dispatch(actions.setCreatingVk(null));
                        // dispatch(actions.setCreatingFacebook(null));
                        // dispatch(actions.setCreatingIcq(null));
                        // dispatch(actions.setCreatingEmail(null));
                        // dispatch(actions.setCreatingGooglePlus(null));
                        // dispatch(actions.setCreatingTwitter(null));
                        // dispatch(actions.setCratingInstagram(null));
                        // dispatch(actions.setCreatingWhatsApp(null));
                        dispatch(actions.setCreatingLookingForAJobFlag(null));
                        dispatch(actions.setCreatingLookingForAJobDescription(null));
                        dispatch(actions.setCreatingFullName(null));
                    })
            } else {
                dispatch(actions.setUserProfileUpdatingProcessError(userProfileUpdatingProcessResults.COMMON_ERROR));
                dispatch(actions.setUserProfileUpdatingProcessErrorMessage('ERROR!'))
            }
        })
};

// selectors
export const isUserProfileOwner = (fullState) => {
    let isOwner = fullState.auth.userAuthData.userId === fullState.profilePage.userProfile.userId;
    return isOwner;
};

