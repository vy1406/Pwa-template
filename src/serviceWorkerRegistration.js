import { Workbox } from "workbox-window";

export default function registerServiceWorker() {
    if ( 'production' !== process.env.NODE_ENV ) {
        return;
    }
    if ( 'serviceWorker' in navigator ) {
        const wb = new Workbox('sw.js');
        wb.addEventListener('installed', e => {
            if ( e.isUpdate ) {
                if ( confirm('New app update is available, click ok to refresh')) {
                    window.location.reload()
                }
            }
        })
   
        wp.register()
    }
}