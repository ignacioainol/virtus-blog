import { Reactions } from "./Reactions"

export const PostItem = ({ author, message }) => {

    return (
        <>
            <div className='container mt-3'>
                <div className="row justify-content-md-center">

                    <div className="col-md-7 publishBox">
                        <div className="row p-3">
                            <div className="col-md-12">
                                <img className='avatar' src="/images/avatar.png" alt="avatar" />
                                <div className='wrapperUserInfo'>
                                    <strong className='ms-2 nameUser'>{author}</strong>
                                    <p className='someText'>12:15 &#8801; Texto</p>
                                </div>
                            </div>

                            <div className="col-md-12 mt-3">
                                <span className='someText'>{message}</span>
                            </div>
                            <hr className='mt-2' />
                            <Reactions />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
