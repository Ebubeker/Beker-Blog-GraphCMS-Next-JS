import React, {useState, useEffect} from 'react';
import moment from 'moment';
import parse from 'html-react-parser';
import { getComments } from '../services';

const Comments = ({slug}) => {
    
    const [comment, setComment] = useState([]);

    useEffect(() => {
        getComments(slug)
            .then((result) => setComment(result));
    }, [])
    
    return (
        <>
            {comment.length > 0 && (
                <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
                    <h3 className="text-xl mb-8 font-semibold border-b pb-4">
                        {comment.length}
                        {"  "}
                        Comments
                    </h3>
                    {comment.map((com) => (
                        <div key={com.createdAt} className="border-b border-gray-100 mb-4 pb-4 ">
                            <p className="mb-4">
                                <span className="font-semibold ">{com.name}</span>
                                {' '}
                                on 
                                {' '}
                                {moment(com.createdAt).format('MMM DD, YYYY')}
                            </p>
                            <p className="whitespace-pre-line text-gray-600 w-full">
                                {parse(com.comment)}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}

export default Comments
