import React, { Component } from 'react';
import './Info.css';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';


// атрибуты:
// userPicURL    = строка - адрес картинки юзерпика
// userName      = строка - имя пользователя
// userBirthDate = строка - дата рождения

class Info extends Component {
    render() {
        return (
            <div className="c-info
                            c-info__c-info--positioned">
                <div className="c-info__userpic
                                c-info__userpic--positioned">
                    <img className="c-info__userpic-img" src={this.props.userInfo.userPicURL} alt="userpic"/>
                </div>
                <div className="c-info__short-info
                                c-info__short-info--positioned">
                    <div className="c-info__user-name">
                            {this.props.userInfo.userName}
                    </div>
                    <div className="c-info__birth-date">
                            <span className="c-info__birth-date-label
                                             c-info__decorated-label">
                                Дата рождения :
                            </span>
                            <span className="c-info__birth-date-value">
                              {this.props.userInfo.userBirthDate}
                            </span>
                    </div>
                    <div className="c-info__residence">
                            <span className="c-info__residence-label
                                             c-info__decorated-label">
                                Город :
                            </span>
                            <span className="c-info__residence-value">
                               {this.props.userInfo.userCity}
                            </span>
                    </div>
                    <div className="c-info__education">
                            <span className="c-info__education-label
                                             c-info__decorated-label">
                                Образование :
                            </span>
                            <span className="c-info__education-value">
                               {this.props.userInfo.userEducation}
                            </span>
                    </div>
                    <div className="c-info__website">
                            <span className="c-info__website-label
                                             c-info__decorated-label">
                                Веб-сайт :
                            </span>
                            <Link to='/' className="c-info__website-value">
                               {this.props.userInfo.userWebSite}
                            </Link>
                    </div>
                </div>
            </div>
        );
    }
}

Info.propTypes = {
     userPicURL:    PropTypes.string,
     userName:      PropTypes.string,
     userBirthDate: PropTypes.string,
     userCity:      PropTypes.string,
     userEducation: PropTypes.string,
     userWebSite:   PropTypes.string
};
export default Info;
