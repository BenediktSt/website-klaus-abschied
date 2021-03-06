import React, { useState } from 'react';
import firebase from 'gatsby-plugin-firebase';
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

export default function SubmitComment() {
  const [nameValue, setName] = useState('');
  const [subjectValue, setSubject] = useState('');
  const [messageValue, setMessage] = useState('');
  const [showSubmitionNote, setSubmitionNote] = useState(false)
  const [showErrorNote, setErrorNote] = useState(false)

  const commentsRef = firestore.collection('comments');

  const sendComment = async (e) => {
    e.preventDefault();

    try {
      await commentsRef.add({
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        name: nameValue,
        subject: subjectValue,
        message: messageValue,
        display: false
      });
      setName('');
      setSubject('');
      setMessage('');
      setSubmitionNote(true);
    } catch (e) {
      setErrorNote(true);
    }

  };
  return (
    <section id='sendComment' className='signup-section'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 col-lg-8 mx-auto'>
            <h2 className='text-white text-center'>Kondolenzeintrag verfassen</h2>

            <form className='form-inline' onSubmit={sendComment}>
              <div className='form-row-custom'>
                <label
                  htmlFor='inputName'
                  className='text-white'>
                  Name*:
                </label>
                <input
                  required
                  value={nameValue}
                  onChange={(e) => setName(e.target.value)}
                  type='text'
                  className='form-control'
                  id='inputName'
                  placeholder='Einen Namen angeben'
                />
              </div>
              <div className='form-row-custom'>
                <label
                  htmlFor='inputSubject'
                  className='text-white'>
                  ??berschrift*:
                </label>
                <input
                  required
                  value={subjectValue}
                  onChange={(e) => setSubject(e.target.value)}
                  type='text'
                  className='form-control'
                  id='inputSubject'
                  placeholder='Eine ??berschrift angeben'
                />
              </div>
              <div className='form-row-custom'>
                <label
                  htmlFor='textAreaMessage'
                  className='text-white'>
                  Nachricht*:
                </label>
                <textarea
                  required
                  value={messageValue}
                  onChange={(e) => setMessage(e.target.value)}
                  className='form-control'
                  id='textAreaMessage'
                  placeholder='Eine Nachricht angeben'
                  rows='5'>
                </textarea>
              </div>
              <div className='submit-row text-right'>
                <button type='submit' className='btn btn-primary'>
                  Kondolenz absenden
                </button>
                <small id='submitInfo' className='form-text text-white'>
                  Wir werden Ihren Kondolenzeintrag sichten, bevor er auf der Seite erscheint.
                </small>
                {showSubmitionNote && <SubmitionNote />}
                {showErrorNote && <ErrorNote />}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );

  function SubmitionNote() {
    const onClick = () => setSubmitionNote(false)
    return (
      <div className='alert alert-primary text-center' role='alert'>
        Kondolenzeintrag erfolgreich gesendet.
        <button onClick={onClick} type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    )
  }

  function ErrorNote() {
    const onClick = () => setErrorNote(false)
    return (
      <div className='alert alert-danger text-center' role='alert'>
        Leider ist ein Fehler aufgetreten. <br/>
        Bitte versuchen Sie sp??ter erneut.
        <button onClick={onClick} type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    )
  }
}

