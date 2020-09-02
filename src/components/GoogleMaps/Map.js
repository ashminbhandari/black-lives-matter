import React, { useEffect, useRef } from 'react'

export default function Map({ uniqueID, onMount, className, mapStyle }) {
    const props = { ref: useRef(), className }
    const onLoad = () => {
        const map = new window.google.maps.Map(props.ref.current, {
            center: { lat: 48, lng: 8 },
            zoom: 5,
            styles: mapStyle
        })
        onMount && onMount(map)
    }

    useEffect(() => {
        if (!window.google) {
            const script = document.createElement(`script`)
            script.type = `text/javascript`
            script.src =
                `https://maps.google.com/maps/api/js?key=` +
                process.env.REACT_APP_GOOGLE_MAPS_API_KEY
            const headScript = document.getElementsByTagName(`script`)[0]
            headScript.parentNode.insertBefore(script, headScript)
            script.addEventListener(`load`, onLoad)
            return () => script.removeEventListener(`load`, onLoad)
        } else onLoad()
    })

    return (
        <
            div
            id={uniqueID}
            {...props}
            style
                = {{height: `100vh`, }}
        />
    )
}
