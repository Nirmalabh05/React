import React from 'react';

function Navbar(){
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    const styles = {
        fontSize:30
    }

    if(hours < 12){
        timeOfDay = 'Morning';
        styles.color = 'red';
        styles.backgroundColor = 'grey';
        styles.padding = 15;
    }
    else if(hours > 12 && hours < 17){
        timeOfDay = 'Afternoon'
    }
    else{
        timeOfDay = 'Evening'
    }
    return(
        <div>
            <h1 style={styles}>Good {timeOfDay}!</h1>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </div>
    )
}

export default Navbar;