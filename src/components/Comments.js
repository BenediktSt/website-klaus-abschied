import React, { useState } from 'react';

import firebase from 'gatsby-plugin-firebase';
import 'firebase/firestore';

const firestore = firebase.firestore();
const commentsRef = firestore.collection('comments');
const query = commentsRef
  .where('display', '==', true)
  .orderBy('createdAt', 'desc')
  .limit(10);

export default function Comments() {
  const [comments, setComments] = useState();
  React.useEffect(() => {
    if (!comments) {
      query.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = querySnapshot.docs.map(doc => doc.data());
          setComments(data);
        });
      });
    }
  }, []);

  return (
    <section id="comments" className='bg-black projects-section'>
      <div className='container'>
        <h2 className='mb-4 text-white text-center'>Kondolenzen</h2>
        <div className='row'>
          <div className='d-flex h-100 col-8 mx-auto flex-column justify-content-center'>
            {!comments && <NoComments/>}
            {comments && comments.map(entry => {
              const { subject, message, name } = entry;
              return (
                <div className='project-text p-2'>
                  <div className='text-center'>
                    <h4 className='text-white'>{subject}</h4>
                    <small className='form-text text-white'>
                      Von {name}
                    </small>
                    <p className='text-white-50' style={{whiteSpace: 'pre-line'}}>
                      {message}
                    </p>
                    <hr className='d-none d-lg-block mb-0' />
                  </div>
                </div>
              );
            })}
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
    )
  }
}
