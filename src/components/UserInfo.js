import React, { Component } from 'react'
import risky from '../../content/images/profile.jpg'

export default class UserInfo extends Component {
  render() {
    return (
      <aside className="note">
        <div className="container note-container">
          <div className="flex-author">
              
              <div className="flex-avatar">
           <center>
              <img className="avatar" src={risky} alt="Risky Muhamad" />
          </center>
            <div>
              <center>
              <p>
                  Terima kasih telah berkunjung dan membaca di situs saya, semoga dapat memberikan manfaat.
              </p>
              <p>
                  ~Risky Muhamad~
              </p>
            </center>
            </div>
            </div>
          </div>
        </div>
      </aside>
    )
  }
}
