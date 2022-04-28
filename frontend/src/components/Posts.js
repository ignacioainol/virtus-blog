
import { PostItem } from "./PostItem";

export const Posts = ({ posts }) => {

    return (
        <>
            {posts.map((post, i) => (
                <PostItem {...post} key={i} />
            ))}
        </>
    )
}
