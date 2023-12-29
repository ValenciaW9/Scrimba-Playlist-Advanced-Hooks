import React from "react";
import ReactDOM from "react-dom";
import App from "./Comonents/App";
import { PauseProvider } from "./context/pause"
const beforeContext = <img src="https://i.imgur.com/ihbDmf7.png" alt="before context" width="600" />
const afterContext = <img src="ttps://.imgur.com/lFesQEn.png" alt="after context" width="600" />

/*
- App
  - Counter
    - Controls
    - Likes
  - Comments
    - CommentList
      - Comment
    - CommentForm
*/

ReactDOM.render(
    <PausedProvider>
        <App />
        </PausedProvider>,
    document.getElementById("root")
);