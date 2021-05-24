import s from "./ProfileInfo.module.css";


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://www.ourescapeclause.com/wp-content/uploads/2019/10/Venice-103-1024x683.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + desc
            </div>
        </div>
    );
}

export default ProfileInfo;