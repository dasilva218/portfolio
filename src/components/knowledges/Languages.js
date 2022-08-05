import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const Languages = () => {
    //Etat
    const [state] = useState(
        {
            languages:[
                {id:1, value:'javascript',xp:3},
                {id:2, value:'Css',xp:3},
                {id:3, value:'Php',xp:3},
                {id:5, value:'sql',xp:3}
            ],
            frameworks:[
                {id:1, value:'ReactJS',xp:2},
                {id:2, value:'Bootstarp',xp:3},
                {id:3, value:'Codeigniter',xp:2},
                {id:4, value:'Sass',xp:3}
            ]
        }
    );

    //affichage de la vue
    return (
        <div className='languagesFrameworks'>
            <ProgressBar 
                languages={state.languages}
                className="languageDisplay"
                title='languages'
            />
            <ProgressBar
                languages={state.frameworks}
                className="frameworkDisplay"
                title='Frameworks & bibliothèques'
            />
        </div>
    );
};

export default Languages;