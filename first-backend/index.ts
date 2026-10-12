import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, Mr.');
});
app.get('/backend', (req: Request, res: Response) => {
    res.send('Welcome to Backend');
});

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});