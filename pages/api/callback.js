const TasksMap = {
    'Aditya Kumar Garg': 'https://youtube.com/shorts/i7AWFvfx1ho?feature=share',
    'AV Jefferson': 'https://open.spotify.com/track/5aszL9hl6SBzFNsOvw8u8w?si=FzArQigNQQm5OdalVb6wOg',
    'Ayush Tripathi': 'https://youtu.be/zhwwmdh2oyc',
    'Surya Prakash Mishra': 'https://youtu.be/FzG4uDgje3M',
    'Swaraj Jain': 'https://youtu.be/sONw3dihCRs',
    'Anshuman Tejaswi': 'https://youtube.com/shorts/afwSiJuiUzU?feature=share',
    'CVSS Santosh': 'https://youtu.be/JALa8dhG6dA',
    'Akansha Gupta': 'https://open.spotify.com/track/2bMTXRkkvNMVQJjBzXykIm?si=OuhCMQFeSHiOCLbFuk5DUA&dd=1'
}


export default function handler(req, res) {
    if ( TasksMap[req.query.name] ) {
        res.redirect(TasksMap[req.query.name]);
    } else {
        res.status(200).end('You don\'t seem to have a task. Seems strange?')
    }

}
