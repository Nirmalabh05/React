import React from 'react';
import ContactCard from '../components/ContactCard';

function App(){
    return(
        <div className='contacts'>
            <ContactCard 
                contact = {{name:'Dog', imageUrl:'https://picsum.photos/id/237/300', email:'dog@gmail.com'}}
            />

            <ContactCard 
                contact = {{name:'Lady', imageUrl:'https://picsum.photos/id/1005/300', email:'lady@gmail.com'}}
            />

            <ContactCard 
                contact = {{name:'Hmac', imageUrl:'https://picsum.photos/id/1003/300', email:'hmac@gmail.com'}}
            />
        </div>
    )
}

export default App;