import express from 'express';
import Happy from '../schemas/schema.js'
const router = express.Router();


//** 방명록 작성 API*/

router.post('/happy', async (req, res) => {
  // 클라이언트에게 전달받은 방명록 데이터(user, password, contents, date)를 변수에 저장합니다.
  const { user, password, contents } = req.body;

//   // Happy모델을 사용해, MongoDB에서 'id' 값이 가장 높은 '방명록'을 찾습니다.
//   const MaxSaveId = await Happy.findOne().sort('-Id').exec();
//     console.log("Max",MaxSaveId)
//   // 'id' 값이 가장 높은 방명록에 1을 추가하거나 없다면, 1을 할당합니다.
//   const Id = MaxSaveId ? MaxSaveId.id + 1 : 1;

  // Happy모델을 이용해, 새로운 '방명록'을 생성합니다.
  const verryhappy = new Happy({ user, password, contents });
  console.log(verryhappy);

  // 생성한 '해야할 일'을 MongoDB에 저장합니다.
  await verryhappy.save();

  return res.status(201).json({ Happy });
});


/** 해야할 일 조회 API*/
// api 등록시 router에 등록해야하므로 router. => 메서드는 조회기능이므로 get을 사용
router.get('/happy', async(req, res) => {
    // 1. 해야할 일 목록 조회를 진행
    // 해야할일목록 데이터를 todos라는 변수에 할당하고, await 사용
    // 데이터베이스를 조회하는 동안 기다리지 않고 다음 코드를 실행 => await
    // Todo.find() => 목록 조회
    // .sort('필드명') => 필드명 앞에 - 붙이면 DESC(기본형 ACS) / 필드명 데이터를 기준으로 정렬
    const rest = await Happy.find({}).sort().exec();
    // 2. 해야할 일 목록 조회 결과를 클라이언트에게 반환.
     res.status(200).json({rest});
});

router.delete('/happy/:id', async(req, res,next) => {
    try {
        const {id} = req.params;
        console.log("id",id) 
    
        const rest = await Happy.findById(id).exec();
        console.log("rest",rest) 
        // if(!rest) {
        //     return res.status(404).json({errorMessage: "존재하지않는 방명록입니다."});
        // }
        await Happy.deleteOne({_id:id});
        return res.status(200).json({});
    } catch (error) {
        next(error)
    }


})

export default router;