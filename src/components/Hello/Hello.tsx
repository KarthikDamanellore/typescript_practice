// // src/components/Hello.tsx
// import React, { FC, useState } from 'react';

// interface HelloProps {
//   name: string;
// }

// const Hello: FC<HelloProps> = ({ name }) => {
//   const [greeting, setGreeting] = useState<string>('Hello');

//   return (
//     <div>
//       <h1>{greeting}, {name}</h1>
//       <button onClick={() => setGreeting('Hola')}>Switch Greeting</button>
//     </div>
//   );
// };

// export default Hello;

import React, { FC, useState } from "react";

interface HelloProps {
    name : string;
}

const Hello : FC <HelloProps> =({name})=>{
    const[isName, setName]=useState<string>('hello')
    return(
        <div>
            <h1>{isName} , {name}</h1>
            <button onClick={()=>setName('hello1')}>name changed</button>
        </div>
    )
}

export default Hello;
