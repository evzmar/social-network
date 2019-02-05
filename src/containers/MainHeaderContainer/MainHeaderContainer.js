import React      from 'react';
import {connect}  from "react-redux";
import MainHeader from "../../components/MainHeader/MainHeader";
import {logOut, setServerSubmittedAuth} from "../../redux/modules/loginAxiosRedux";


class MainHeaderContainer extends React.Component {
    //---
    componentWillMount() {
        this.props.onWillMount();
    }

    //---
    render() {
        return <MainHeader {...this.props} />
    }
}

//---
const mapStateToProps = (state) => {
    return {
        isAuth:   state.auth.userAuthData.userId !== null,
        userId:   state.auth.userAuthData.userId,
        userName: state.auth.userAuthData.userLogin,
        // userPic:  state.auth.userInfo.userPic
    }
};

const mapDispatchToProps = (dispatch) => ({
    onWillMount: () => {
        dispatch(setServerSubmittedAuth());
    },
    onLogOut: () => {
        dispatch(logOut());
    }
});
//----
export default connect(
    mapStateToProps,
    mapDispatchToProps)(MainHeaderContainer);