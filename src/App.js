import React from 'react';
import Header from './components/Header';
import Greeting from './components/Greeting';
import Column from './components/Column';
import NotifPanel from './components/NotifPanel';
import Newslater from './components/Newslater'

function App() {
  return (
    <div>
      <NotifPanel />
      <Newslater />
      <Header />
      <div className="banner">
        <Greeting name="Dwi Nugroho" />
      </div>
      <div className="banner2">
        <h1>
          How Can I Help You?
        </h1>
        <p className="paragraph">
          Our work then targeted, best practice outcomes social innovation synergi. Venture philanthropy, revolutionary inclusive policymaker relief. User-centered program areas scale
        </p>
      </div>
      <div className="fitures">
        <div className="row">
          <Column
            title="Consult"
            logo="https://img.icons8.com/carbon-copy/100/000000/chat.png"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          />
          <Column
            title="Design"
            logo="https://img.icons8.com/wired/64/000000/paint-brush.png"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          />
          <Column
            title="Develop"
            logo="https://img.icons8.com/ios/50/000000/connectdevelop.png"
            text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"
          />
        </div>
        <div className="row">
          <Column
            title="Marketing"
            logo="https://img.icons8.com/pastel-glyph/64/000000/speaker.png"
            text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,"
          />
          <Column
            title="Manage"
            logo="https://img.icons8.com/dotty/80/000000/database.png"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          />
          <Column
            title="Evolve"
            logo="https://img.icons8.com/ios/50/000000/cisco-anyconnect.png"
            text="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."
          />
        </div>
      </div>
      <div className="footer">
        Dwi Nugroho. All rights reversed
      </div>
    </div>
  );
}

export default App;
