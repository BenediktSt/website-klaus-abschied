import React, { useState } from 'react';

export default function SubmitComment() {
  const [nameValue, setName] = useState('');
  const [subjectValue, setSubject] = useState('');
  const [messageValue, setMessage] = useState('');

  const sendComment = async (e) => {
    e.preventDefault();
    console.log(nameValue);
    console.log(subjectValue);
    console.log(messageValue);
    setName('');
    setSubject('');
    setMessage('');
  };
  return (
    <section id='signup' className='signup-section'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 col-lg-8 mx-auto'>
            <h2 className='text-white text-center'>Kondolenzeintrag verfassen</h2>

            <form className='form-inline' onSubmit={sendComment}>
              <div className='form-row-custom'>
                <label
                  for='inputName'
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
                  for='inputSubject'
                  className='text-white'>
                  Überschrift*:
                </label>
                <input
                  required
                  value={subjectValue}
                  onChange={(e) => setSubject(e.target.value)}
                  type='text'
                  className='form-control'
                  id='inputSubject'
                  placeholder='Eine Überschrift angeben'
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
                  rows='3'>
                </textarea>
              </div>
              <div className='submit-row text-right'>
                <button type='submit' className='btn btn-primary'>
                  Kondolenz absenden
                </button>
                <small id='emailHelp' className='form-text text-white'>
                  Wir werden Ihren Kondolenzeintrag sichten, bevor er auf der Seite erscheint.
                </small>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
