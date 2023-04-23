const TasksMap = {
    'Aditya Kumar Garg': 'https://google.com'
}


export default function handler(req, res) {
    if ( TasksMap[req.query.name] ) {
        res.redirect(TasksMap[req.query.name]);
    } else {
        res.status(200).end('You don\'t seem to have a task. Seems strange?')
    }

}
