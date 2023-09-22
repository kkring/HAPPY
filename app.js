import express from 'express';
import connect from './schemas/index.js'
import happyRouter from './routes/index.js'

const app = express();
const PORT = 3000;

connect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./assets'));

const router = express.Router();

router.get('/', (req, res) => {
  return res.json({ message: '연결됨' });
});

app.use('/api', [router,happyRouter]);


app.listen(PORT, () => {
    console.log(PORT, '포트로 서버 열림');
  });