import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog , handleAddToBookmark, handleMarkAsRead}) => {
    const {title, cover, author, authorImg, posteDate , readingTime,hashtags} = blog;
    return (
        <div className='mb-10'>
            <img src={cover} alt={`Cover picture of ${author}` } className='mb-4' />
            <div className='flex justify-between'>
                <div className='flex gap-3 mb-3'>
                    <img className='w-12 rounded-full' src={authorImg} alt={`Picture of ${author}`} />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posteDate}</p>
                    </div>
                </div>
                <div >
                    <span className='mr-2'>{readingTime} min read</span>
                    <button className='text-blue-500' onClick={() =>handleAddToBookmark(blog)}><FaBookmark /> </button>
                </div>
            </div>
            <h2 className='text-2xl '>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a  href=""> #{hash}</a></span>)
                }
            </p>
            <button onClick={()=> handleMarkAsRead(readingTime)} className='txt-bold underline text-blue-600'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default Blog;