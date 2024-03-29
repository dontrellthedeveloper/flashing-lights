import React from 'react';
import Directory1 from "../../components/directory1/directory1.component";
import Directory2 from "../../components/directory2/directory2.component";
import Directory3 from "../../components/directory3/directory3.component";
import Directory4 from "../../components/directory4/directory4.component";
import Directory5 from "../../components/directory5/directory5.component";
import Directory6 from "../../components/directory6/directory6.component";
import Directory7 from "../../components/directory7/directory7.component";
import Directory8 from "../../components/directory8/directory8.component";

import { HomePageContainer} from "./homepage.styles";

const HomePage = () => (
    <HomePageContainer>
       <Directory1/>
       <Directory2/>
       <Directory3/>
       <Directory6/>
       <Directory7/>
       <Directory8/>
       <Directory4/>
       <Directory5/>
    </HomePageContainer>
);

export default HomePage;