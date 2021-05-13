import React, { useEffect, useState } from 'react';

import firebase from 'firebase/app';
import 'firebase/firestore';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyAJnCV0mzUuzS9tNDV_wenyVO9SD2C_NhA',
    authDomain: 'kondolenz-klaus.firebaseapp.com',
    projectId: 'kondolenz-klaus',
    storageBucket: 'kondolenz-klaus.appspot.com',
    messagingSenderId: '693109076423',
    appId: '1:693109076423:web:8db46978d61c6f642c69e2',
  });
}

const firestore = firebase.firestore();
const commentsRef = firestore.collection('comments');
const query = commentsRef.orderBy('createdAt').limit(10);

export default function Comments() {
  const [comments, setComments] = useState();
  if (!comments){
    query.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const data = querySnapshot.docs.map(doc => doc.data());
        setComments(data);

      });
      console.log('test')
    });
  }

  return (
    <section className='bg-black projects-section'>
      <div className='container'>
        <h2 className='mb-4 text-white text-center'>Kondolenzen</h2>
        <div className='row'>
          <div className='d-flex h-100 col-8 mx-auto flex-column justify-content-center'>
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
}
