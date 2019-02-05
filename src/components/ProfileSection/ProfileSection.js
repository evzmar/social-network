import React  from 'react';
import './ProfileSection.css';
import Post                  from '../Post/Post.js';
import UserInfoSection       from "../UserInfoSection/UserInfoSection";
import MessageCreationForm from "../MessageCreationForm/MessageCreationForm";
import {Redirect} from "react-router";



const ProfileSection = (props) =>{
    //---
    if (!props.isAuth){
        return <Redirect to="/Login"/>
    }
    //---
    return (
        <article className="c-profile-section">
            <div className="c-profile-section__head-image
                                c-profile-section__head-image--positioned"/>
            <div className="c-profile-section__info-block
                            c-profile-section__info-block--positioned">
                <UserInfoSection userInfo = {props.userInfo} />
            </div>
            <div className="c-profile-section__wall-block
                                c-profile-section__wall-block--positioned">
                <div className="wall-block__record-form
                                     wall-block__record-form--positioned">
                    <div className="wall-block__notes">
                        My notes
                    </div>
                    <MessageCreationForm  selectedFriendId                  = {props.selectedFriendId}
                                          creatingMessage                   = {props.creatingMessage}
                                          onCreatingMessageChanged          = {props.onCreatingMessageChanged}
                                          onCreatingMessageFinishCommitted  = {props.onCreatingMessageFinishCommitted}/>
                </div>
                <div className="wall-block__posts-block
                                    wall-block__posts-block--positioned">
                    {
                        props.messagesList.map( (el) => {return <Post  userInfo = {props.userInfo}
                                                                                 messageDetailes = {el}
                                                                                 key = {el.messageId}
                                                                                 onMesaageLikeIncrementRequest = {props.onMesaageLikeIncrementRequest}/>})
                    }

                </div>
            </div>
        </article>
    )
};


export default ProfileSection;