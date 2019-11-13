import React from 'react';
import ModelContent from './ModelContent';




function ModelS() {
    return (
        <div>
            <style jsx>{`
    .Video {
      z-index: -100;
      width:100%;
      height:90%;
      position:absolute;
      top:0;
      left:0;
    }
  `}</style>
            <div className="Video">
                <ModelContent
                    video="https://www.tesla.com/sites/tesla/files/curatedmedia/range.mp4"
                    info="Every Tesla is designed to be the safest, quickest car in its class—with industry-leading safety, range and performance." />
            </div>
        </div>
    );
}

export default ModelS;