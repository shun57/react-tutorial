import React from 'react';
import ReactDOM from 'react-dom';
import Game from "./Game";
import { Global, css } from '@emotion/react'

ReactDOM.render(
    <React.StrictMode>
        <Global
            styles={css`
                body {
                    font: 14px "Century Gothic", Futura, sans-serif;
                    margin: 20px;
                }

                ol,
                ul {
                    padding-left: 30px;
                }
            `}
        />
        <Game />
    </React.StrictMode>,
    document.getElementById('root')
);
