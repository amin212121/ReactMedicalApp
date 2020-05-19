import React from 'react';
import style from './DoctorsListPage.module.css';
import load from '../Assets/load.svg'
import {NavLink} from "react-router-dom";


let DoctorsListPage = (props) => {
    let pagesCount = Math.ceil(props.TotalDoctorCount / props.API.PageSize);


    let pagessmall = [];
    for (let i = props.API.CurrentPage - 10; i < props.API.CurrentPage + 10; i++) {
        if (i > 0 && i <= pagesCount) {
            pagessmall.push(i)
        }
    }


    return (
        <div>
            <div className={style.pagnitation}><span onClick={() => {
                props.OnPageChandeg(1)
            }}> {`<<<`} </span>
                {
                    pagessmall.map((p) => {
                        return <span onClick={() => {
                            props.OnPageChandeg(p)
                        }}
                                     className={props.API.CurrentPage == p ? style.active : null}> {p} </span>
                    })
                }
                <span onClick={() => {
                    props.OnPageChandeg(pagesCount);
                }}> >>> </span>
            </div>
            <div className={style.loadimg}>{props.isFetch && <img src={load}/>}</div>
            {props.DB.map((data) => {
                return (<div key={data.id} className={style.container}>
                    <div className={style.firstblock}>
                        <NavLink to={'/profile/' + data.id}>
                            <img alt='avatar'
                                 src={data.photos.small == null ? 'https://instaturbo.ru/images/blog/5bbe5b813ffd5.jpg' : data.photos.small}/>
                        </NavLink>
                        <button onClick={() => {
                            if (data.followed == false) {
                                props.FollowThunkCreator(data.id)
                            } else {
                                props.UnFollowThunkCreator(data.id)
                            }
                        }
                        }> {data.followed ? "Unfollow" : "Follow"}</button>
                    </div>
                    <div>
                        <div className={style.secondblock}> {data.name}</div>
                        <div> {data.status}</div>
                        <div> {data.country}</div>

                    </div>
                </div>)
            })}
        </div>
    )

}

export default DoctorsListPage;
