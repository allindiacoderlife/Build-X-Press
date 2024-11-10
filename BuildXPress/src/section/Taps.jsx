import React, { Fragment } from "react";

const words = ["Building", "Connections", "Delivering", "Quility"];

const Tape = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400  -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 py-3 animate-move-left [animation-duration:30s]">
            {[...new Array(10)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {words.map((word) => (
                  <div key={word} className="inline-flex gap-4 items-center">
                    <span className="text-gray-950 uppercase font-extrabold text-sm">
                      {word}
                    </span>
                    <span>⭐</span>
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tape;
