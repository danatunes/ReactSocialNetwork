import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div >
          <div>
          <img src='https://www.ourescapeclause.com/wp-content/uploads/2019/10/Venice-103-1024x683.jpg'/>
          </div>
           <div>
             ava + desc
           </div>
         <MyPosts/>
        </div>
    );
}

export default Profile;