import express from 'express';
import Happy from '../schemas/schema.js'
const router = express.Router();


//** 방명록 작성 API*/
import HappySave from '../schemas/schema.js';

router.post('/save', async (req, res) => {
  // 클라이언트에게 전달받은 방명록 데이터(user, password, contents, date)를 변수에 저장합니다.
  const { user, password, contents, date } = req.body;

  // Happy모델을 사용해, MongoDB에서 'id' 값이 가장 높은 '방명록'을 찾습니다.
  const MaxSaveId = await Happy.findOne().sort('-Id').exec();

  // 'id' 값이 가장 높은 방명록에 1을 추가하거나 없다면, 1을 할당합니다.
  const Id = MaxSaveId ? MaxSaveId.Id + 1 : 1;

  // Happy모델을 이용해, 새로운 '방명록'을 생성합니다.
  const Happy = new Happy({ Id, user, password, contents, date, });

  // 생성한 '해야할 일'을 MongoDB에 저장합니다.
  await Happy.save();

  return res.status(201).json({ Happy });
});


/** 방명록 조회 API*/
// api 등록시 router에 등록해야하므로 router. => 메서드는 조회기능이므로 get을 사용
router.get('/rest', async(req, res) => {
    // 1. 해야할 일 목록 조회를 진행
    // 해야할일목록 데이터를 todos라는 변수에 할당하고, await 사용
    // 데이터베이스를 조회하는 동안 기다리지 않고 다음 코드를 실행 => await
    // Todo.find() => 목록 조회
    // .sort('필드명') => 필드명 앞에 - 붙이면 DESC(기본형 ACS) / 필드명 데이터를 기준으로 정렬
    const rest = await Happy.find({}).sort().exec();
    // 2. 해야할 일 목록 조회 결과를 클라이언트에게 반환.
    return res.status(200).json({rest});
});


export default router;