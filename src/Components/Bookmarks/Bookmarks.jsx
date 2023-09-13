import PropTyeps from 'prop-types'
import Bookmark from './Bookmark';

 const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className='md:w-1/3 bg-gray-300 ml-5'>
            <div>
                <h3>Reading time: {readingTime}</h3>
            </div>
            <h2 className="text-3xl ">Bookmarked blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
 };
 Bookmarks.protoTypes ={
    bookmarks: PropTyeps.array,
    readingTime: PropTyeps.number
 }
 export default Bookmarks;