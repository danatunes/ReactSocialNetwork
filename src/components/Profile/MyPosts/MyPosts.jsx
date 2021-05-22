import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.content}>
             My posts
             <div>
             <textarea name="" id="" cols="30" rows="10"></textarea>
             <button>Add post</button>
           </div>
           <div className={s.posts} >
            <Post message = 'My new post' likes = '20'/>
            <Post message = 'This is a React baby' likes='15'/>
           </div>
        </div>
    );
}

export default MyPosts;