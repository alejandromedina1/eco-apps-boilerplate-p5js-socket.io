import express from 'express';
import { Server } from 'socket.io';
const PORT = 8080;

const expressApp = express()
const httpServer = expressApp.listen(PORT, () => {
    console.table(
        {
            'Controller:': 'http://localhost:8080/controller',
            'Display:': 'http://localhost:8080/display',
        })
})

expressApp.use('/display', express.static('public-display'))
expressApp.use('/controller', express.static('public-controller'))
expressApp.use(express.json())


const io = new Server(httpServer, {path: '/real-time'});

io.on('connection', (socket) => {
    console.log('Connected', socket.id)
})