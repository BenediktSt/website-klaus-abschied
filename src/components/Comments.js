import React, { useState, useRef } from 'react';

import firebase from 'gatsby-plugin-firebase';
import 'firebase/firestore';

const firestore = firebase.firestore();
const pageSize = 10;
const commentsRef = firestore.collection('comments');
const query = commentsRef
  .where('display', '==', true)
  .orderBy('createdAt', 'desc')
  .limit(pageSize);

export default function Comments() {
  const [comments, setComments] = useState();
  const [lastDoc, setLastDoc] = useState();
  const [firstDoc, setFirstDoc] = useState();
  const [loading, setLoading] = useState(false);

  const paginationRef = useRef();

  async function queryComments(query) {
    setLoading(true);
    const querySnapshot = await query.get();
    const docs = querySnapshot.docs;
    if (docs.length > 0) {
      setFirstDoc(docs[0]);
      setLastDoc(docs[querySnapshot.docs.length - 1]);
      const data = docs.map(doc => doc.data());
      setComments(data);
    }
    setLoading(false);
  }

  React.useEffect(() => {
    if (!comments) {
      queryComments(query);
    }
  });

  async function nextPage() {
    const nextQuery = commentsRef
      .where('display', '==', true)
      .orderBy('createdAt', 'desc')
      .startAfter(lastDoc)
      .limit(pageSize);
    await queryComments(nextQuery);
    paginationRef.current.scrollIntoView({ block: 'end', behavior: 'smooth' });
  }

  async function previousPage() {
    const prevQuery = commentsRef
      .where('display', '==', true)
      .orderBy('createdAt', 'desc')
      .endBefore(firstDoc)
      .limitToLast(pageSize);
    await queryComments(prevQuery);
    paginationRef.current.scrollIntoView({ block: 'end', behavior: 'smooth' });
  }

  return (
    <section id='comments' className='bg-black projects-section'>
      <div className='container'>
        <h2 className='mb-4 text-white text-center'>Kondolenzen</h2>
        <div className='row'>
          <div className='d-flex h-100 col-8 mx-auto flex-column justify-content-center'>
            {!comments && <NoComments />}
            {comments && comments.map(entry => {
              const { subject, message, name, url } = entry;
              return (
                <div className='project-text p-2' key={subject + name}>
                  <div className='text-center'>
                    <h3 className='text-white'>{subject}</h3>
                    <small className='form-text text-white'>
                      Von {name}
                    </small>
                    <p className='text-white-50' style={{ whiteSpace: 'pre-line' }}>
                      {message}
                    </p>
                    {url && (
                      <p>
                        <a href={url}>{url}</a>
                      </p>)}
                    <hr className='d-none d-lg-block mb-0' />
                  </div>
                </div>
              );
            })}
            {comments && <Pagination />}
            <Loading />
          </div>
        </div>
      </div>
    </section>
  );

  function NoComments() {
    return (
      <p className='text-white-50 text-center'>
        Noch keine Kondolenzen vorhanden.
      </p>
    );
  }

  function Loading() {
    return (
      <div className='mt-1 text-center text-white-50'>
        <span className={loading ? 'loading' : 'invisible'}>Laden ...</span>
      </div>
    );
  }

  function Pagination() {
    return (
      <div className='text-center mt-2 btn-group-sm' ref={paginationRef}>
        <button onClick={previousPage} className='btn btn-primary mr-1' type='button'
                aria-label='Vorherige Kondolenzen laden'>
          <i className='fas fa-chevron-left' aria-hidden='true'></i>
        </button>
        <button onClick={nextPage} className='btn btn-primary ml-1' type='button'
                aria-label='Weitere Kondolenzen laden'>
          <i className='fas fa-chevron-right' aria-hidden='true'></i>
        </button>
      </div>
    );
  }
}
