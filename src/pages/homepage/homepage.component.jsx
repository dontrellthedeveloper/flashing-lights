import React from 'react';
import './homepage.styles.scss'
import Directory1 from "../../components/directory1/directory1.component";
import Directory2 from "../../components/directory2/directory2.component";
import Directory3 from "../../components/directory3/directory3.component";
import Directory4 from "../../components/directory4/directory4.component";
import Directory5 from "../../components/directory5/directory5.component";

const HomePage = () => (
    <div className="homepage">
       <Directory1/>
       <Directory2/>
       <Directory3/>
       <Directory4/>
       <Directory5/>
    </div>
);

export default HomePage;