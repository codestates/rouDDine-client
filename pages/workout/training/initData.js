const initialData = [
  {
    id: 3,
    name: '웨이트훈련',
    userid: '2',
    finished_time: 0,
    share: true,
    tasks: [
      { id: '1', name: '벤치프레스', set_time: 40, rest_time: 40 },
      { id: '2', name: '덤벨플라이', set_time: 35, rest_time: 40 },
      { id: '3', name: '푸쉬업', set_time: 20, rest_time: 40 },
      { id: '4', name: '레그프레스', set_time: 20, rest_time: 40 },
      { id: '5', name: '스쿼트', set_time: 10, rest_time: 40 },
      { id: '6', name: '데드리프트', set_time: 1, rest_time: 40 },
      { id: '7', name: '사이드레터럴레이즈', set_time: 2, rest_time: 40 },
      { id: '8', name: '풀업', set_time: 15, rest_time: 40 },
      { id: '9', name: '싯업', set_time: 5, rest_time: 40 },
    ],
    columns: {
      'column-1': {
        id: 'column-1',
        title: '저장 된 운동',
        taskIds: ['1', '3', '5', '9'],
      },
      'column-2': {
        id: 'column-2',
        title: '오늘 할 운동',
        taskIds: ['2', '4', '6', '7', '8'],
      },
    },
    columnOrder: ['column-1', 'column-2'],
  },
  {
    id: 4,
    name: '유산소훈련',
    userid: '2',
    finished_time: 0,
    share: true,
    tasks: [
      { id: '1', name: '런닝머신 달리기', set_time: 40, rest_time: 40 },
      { id: '2', name: '야외 달리기', set_time: 35, rest_time: 40 },
      { id: '3', name: '사이클', set_time: 20, rest_time: 40 },
      { id: '4', name: '실내 사이클', set_time: 20, rest_time: 40 },
      { id: '5', name: '버피테스트', set_time: 10, rest_time: 40 },
      { id: '6', name: '팔벌려 뛰기', set_time: 1, rest_time: 40 },
      { id: '7', name: '제자리 뛰기', set_time: 2, rest_time: 40 },
      { id: '8', name: '줄넘기', set_time: 15, rest_time: 40 },
      { id: '9', name: '걷기', set_time: 5, rest_time: 40 },
    ],
    columns: {
      'column-1': {
        id: 'column-1',
        title: '저장 된 운동',
        taskIds: ['1', '3', '5', '9'],
      },
      'column-2': {
        id: 'column-2',
        title: '오늘 할 운동',
        taskIds: ['2', '4', '6', '7', '8'],
      },
    },
    columnOrder: ['column-1', 'column-2'],
  },
  {
    id: 5,
    name: '쉬어가기',
    userid: '2',
    finished_time: 0,
    share: true,
    tasks: [
      { id: '1', name: '휴식', set_time: 40, rest_time: 40 },
      { id: '2', name: '물', set_time: 35, rest_time: 40 },
      { id: '3', name: '스트레칭', set_time: 20, rest_time: 40 },
      { id: '4', name: '음악 감상', set_time: 20, rest_time: 40 },
      { id: '5', name: '보충제', set_time: 10, rest_time: 40 },
      { id: '6', name: '부스터', set_time: 1, rest_time: 40 },
      { id: '7', name: 'BCAA', set_time: 2, rest_time: 40 },
      { id: '8', name: '단백질 섭취(식사)', set_time: 15, rest_time: 40 },
      { id: '9', name: '커피', set_time: 5, rest_time: 40 },
    ],
    columns: {
      'column-1': {
        id: 'column-1',
        title: '저장 된 운동',
        taskIds: ['1', '3', '5', '9'],
      },
      'column-2': {
        id: 'column-2',
        title: '오늘 할 운동',
        taskIds: ['2', '4', '6', '7', '8'],
      },
    },
    columnOrder: ['column-1', 'column-2'],
  },
];

export default initialData;



[
  {
    id: 3,
    name: '새 루틴',
    userid: '2',
    finished_time: 0,
    share: true,
    tasks: [
    { id: '2', name: '덤벨플라이', set_number: 3, set_time: 35, rest_time: 40 },
    { id: '3', name: '푸쉬업', set_number: 3, set_time: 20, rest_time: 40 },
  ]}
]



  tasks: [
    { id: '1', name: '벤치프레스', set_time: 40, rest_time: 40 },
    { id: '2', name: '덤벨플라이', set_time: 35, rest_time: 40 },
    { id: '3', name: '푸쉬업', set_time: 20, rest_time: 40 },
    { id: '4', name: '레그프레스', set_time: 20, rest_time: 40 },
    { id: '5', name: '스쿼트', set_time: 10, rest_time: 40 },
    { id: '6', name: '데드리프트', set_time: 1, rest_time: 40 },
    { id: '7', name: '사이드레터럴레이즈', set_time: 2, rest_time: 40 },
    { id: '8', name: '풀업', set_time: 15, rest_time: 40 },
    { id: '9', name: '싯업', set_time: 5, rest_time: 40 },
  ]