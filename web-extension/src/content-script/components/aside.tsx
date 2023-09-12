import React, { useEffect, useState } from 'react';
import { fetchWebpage } from '../../api/webpage';

function Aside() {
    const [loaded, setLoaded] = useState(false)
    
    function onClick() {
        (async () => {
            try {
                const res = await fetchWebpage(document.body.outerHTML)
                console.log(res)
            } catch (err) {
                console.log(err)
            }
            setLoaded(true)
        })()
    }

    return (
        <aside>
            <button onClick={() => onClick()}>Click me !</button>
            { loaded && 'weeee' }
        </aside>
    )
}

export default Aside;