import React from 'react';
import config from '../../config';
const comments = [
  {title: "Goodbye1", comment: "Dies ist der erste", author: "Benedikt"},
  {title: "Goodbye2", comment: "Dies ist der zweite", author: "Benedikt"},
  {title: "Goodbye3", comment: "Dies ist der dritte", author: "Benedikt"},
]
export default function Comments() {
  return (
    <section className="bg-black projects-section">
      <div className="container">
        <h2 className="mb-4 text-white text-center">Kondolenzen</h2>
        <div className="row">
          <div className="d-flex h-100 col-8 mx-auto flex-column justify-content-center">
            {comments.map(social => {
              const { title, comment, author} = social;
              return (
                <div className="project-text p-2">
                  <div className="text-center">
                    <h4 className="text-white">{title}</h4>
                    <p className="text-white-50">
                      {comment}
                    </p>
                    <hr className="d-none d-lg-block mb-0" />
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
